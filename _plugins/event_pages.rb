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
      by_tag = calendar_for_tags(calendars)
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
          cal = by_tag[tag]
          { 'name' => tag, 'url' => cal.url, 'title' => cal.data['title'] } if cal
        end
        doc.data['noindex'] = unlisted
        doc.data['sitemap'] = !unlisted
        site.pages << json_page(site, doc.data['name'], doc.data['source'], event)
      end
    end

    private

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
      [event['name'].to_s.strip, details].reject(&:empty?).join(' · ') + ' | blr.today'
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
