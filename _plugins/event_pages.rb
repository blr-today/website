require 'json'
require 'time'

# jekyll-sqlite builds the event collection; this adds each event's JSON for the modal
module Jekyll
  class EventPages < Generator
    priority :low

    def generate(site)
      events = site.collections['event']
      return unless events
      # The unwanted calendar collects the rest, so its tags count even if excludeTags misses one
      unwanted = site.pages.find { |p| p.relative_path == 'cal/unwanted.md' }
      hidden = JSON.parse(site.config['excludeTags'] || '[]') | JSON.parse(unwanted&.data&.dig('tags') || '[]')
      calendars = site.pages.select { |p| p.data['layout'] == 'events' && p != unwanted }
      # Calendars change with every build, which the sitemap's lastmod should say
      calendars.each { |cal| cal.data['last_modified_at'] ||= site.time }
      by_tag = calendar_for_tags(calendars)
      links = by_tag.transform_values { |cal| { 'url' => cal.url, 'title' => cal.data['title'] } }
      activities = Array(site.data['tags']).select { |t| t['kind'] == 'activity' }.map { |t| t['id'] }
      activities.each { |tag| links[tag] ||= inherited(links, tag) }
      # Every drawer links tags by this, so calendars and event pages agree
      site.data['tag_calendars'] = links.compact
      hoods = calendars.select { |p| p.data['type'] == 'neighbourhood' }
      events.docs.each do |doc|
        event = JSON.parse(doc.data['event_json'])
        unlisted = (Array(event['keywords']) & hidden).any?
        doc.data['event'] = event
        place = event['location'].is_a?(Array) ? event['location'].first : event['location']
        where = place && get_location_as_text(place)
        doc.data['where'] = where unless where.to_s.empty?
        doc.data['host'] = event['url'].to_s[%r{\A\w+://(?:www\.)?([^/?#]+)}, 1]
        keywords = Array(event['keywords']).map(&:to_s)
        doc.data['title'] = page_title(event, place)
        hood = hoods.find { |h| (JSON.parse(h.data['tags'] || '[]') & keywords).any? }
        doc.data['hood'] = { 'name' => hood.data['title'], 'url' => hood.url } if hood
        doc.data['tag_links'] = (keywords - hidden).filter_map do |tag|
          link = links[tag] || inherited(links, tag)
          { 'name' => tag }.merge(link) if link
        end
        doc.data['noindex'] = unlisted
        doc.data['image'] = thumbnail(site, event)
        doc.data['description'] = event['description'].to_s.gsub(/<[^>]*>/, ' ').gsub(/\s+/, ' ').strip[0, 160]
        doc.data['sitemap'] = !unlisted
        site.pages << json_page(site, doc.data['name'], doc.data['source'], event)
      end
      similar_events(events.docs, activities, hoods, hidden)
    end

    private

    SOURCES = %w[HIGHAPE SKILLBOXES INSIDER ALLEVENTS DISTRICT BOOKMYSHOW URBANAUT OFFLYN CURATED].freeze

    # Upcoming listed events sharing the most tags, a specific activity counting more than an area
    def similar_events(docs, activities, hoods, hidden)
      today = Date.today.to_s
      areas = hoods.flat_map { |h| JSON.parse(h.data['tags'] || '[]') }
      weight = lambda do |tag|
        next 0 if hidden.include?(tag) || SOURCES.include?(tag) || !tag.match?(/\A[A-Z][A-Z0-9\/-]+\z/)
        next 0 if tag.match?(/\A(FREE|BUDGET|VALUE|PRICEY|LASTCALL)\z/)
        next(tag.include?('/') ? 3 : 2) if activities.include?(tag)
        areas.include?(tag) ? 1 : 2
      end
      by_tag = Hash.new { |h, k| h[k] = [] }
      docs.each do |doc|
        event = doc.data['event']
        next if doc.data['noindex'] || (event['endDate'] || event['startDate']).to_s[0, 10] < today
        Array(event['keywords']).map(&:to_s).uniq.each { |tag| by_tag[tag] << doc }
      end
      docs.each do |doc|
        scores = Hash.new(0)
        Array(doc.data['event']['keywords']).map(&:to_s).uniq.each do |tag|
          w = weight.call(tag)
          by_tag[tag].each { |other| scores[other] += w } if w > 0
        end
        # Another date of the same series comes first; a shared venue and area alone is not similar
        name = doc.data['event']['name'].to_s.strip.downcase
        scores.each_key { |other| scores[other] += 4 if other.data['event']['name'].to_s.strip.downcase == name }
        scores.delete_if { |other, score| other == doc || score < 4 }
        doc.data['similar'] = scores.sort_by { |other, score| [-score, other.data['event']['startDate'].to_s] }
          .first(5).map { |other, _| summary(other) }
      end
    end

    # Social cards take the first image, resized by the image CDN when its host is listed
    def thumbnail(site, event)
      first = Array(event['image']).first
      url = first.is_a?(Hash) ? first['url'] || first['contentUrl'] : first
      return nil unless url.is_a?(String) && url.start_with?('https://')
      prefixes = Array(site.data['image_cdn']).map { |p| Regexp.new('\\A' + Regexp.escape(p).gsub('\\*', '[^/]*')) }
      return url unless prefixes.any? { |re| url.match?(re) }
      "#{site.config['url']}/img/600/#{url.delete_prefix('https://')}"
    end

    def summary(doc)
      event = doc.data['event']
      start = Time.parse(event['startDate'].to_s) rescue nil
      place = event['location'].is_a?(Array) ? event['location'].first : event['location']
      venue = place.is_a?(Hash) ? place['name'].to_s.split(/[:|]/).first.to_s.strip : ''
      { 'url' => doc.url, 'name' => event['name'].to_s.strip, 'when' => start&.strftime('%a %-d %b'), 'where' => venue }
    end

    # LIVE-MUSIC/JAZZ has no calendar of its own, so it links to LIVE-MUSIC's
    def inherited(links, tag)
      tag = tag.rpartition('/').first while tag.include?('/') && !links[tag.rpartition('/').first]
      links[tag.rpartition('/').first] if tag.include?('/')
    end

    # Each tag links to the narrowest calendar that lists it
    def calendar_for_tags(calendars)
      calendars.each_with_object({}) do |cal, map|
        tags = JSON.parse(cal.data['tags'] || '[]')
        tags.each { |t| map[t] = cal if !map[t] || tags.size < JSON.parse(map[t].data['tags']).size }
      end
    end

    # Search results show the name, day and venue, so people can tell repeats apart
    def page_title(event, place)
      start = Time.parse(event['startDate'].to_s) rescue nil
      venue = place.is_a?(Hash) ? place['name'].to_s.split(/[:|]/).first.to_s.strip : ''
      venue = '' if venue.match?(/\A(bengaluru|bangalore)\z/i)
      details = [start&.strftime('%a %-d %b'), venue].reject { |x| x.nil? || x.empty? }.join(', ')
      [event['name'].to_s.strip, details].reject(&:empty?).join(' · ')
    end

    def json_page(site, id, source, event)
      PageWithoutAFile.new(site, site.source, 'event', "#{id}.json").tap do |page|
        page.content = JSON.generate({ id: id, source: source, event: event })
        page.data['layout'] = nil
        page.data['sitemap'] = false
        page.data['render_with_liquid'] = false
      end
    end
  end
end
