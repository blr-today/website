require 'json'

# jekyll-sqlite builds the event collection; this adds each event's JSON for the modal
module Jekyll
  class EventPages < Generator
    priority :low

    def generate(site)
      events = site.collections['event']
      return unless events
      hidden = JSON.parse(site.config['excludeTags'] || '[]')
      events.docs.each do |doc|
        event = JSON.parse(doc.data['event_json'])
        unlisted = (Array(event['keywords']) & hidden).any?
        doc.data['event'] = event
        place = event['location'].is_a?(Array) ? event['location'].first : event['location']
        where = place && get_location_as_text(place)
        doc.data['where'] = where unless where.to_s.empty?
        doc.data['host'] = event['url'].to_s[%r{\A\w+://(?:www\.)?([^/?#]+)}, 1]
        doc.data['noindex'] = unlisted
        doc.data['sitemap'] = !unlisted
        site.pages << json_page(site, doc.data['name'], doc.data['source'], event)
      end
    end

    private

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
