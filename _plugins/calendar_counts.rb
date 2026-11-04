# Big calendars add how many events they list and drop to their description
module Jekyll
  class CalendarCounts < Generator
    priority :low

    def generate(site)
      site.pages.each do |page|
        next unless page.data['showDropped']

        listed = Array(page.data['events']).size
        dropped = Array(page.data['dropped_rows']).first&.fetch('total', 0).to_i
        base = page.data['base_description'] ||= page.data['description'].to_s
        page.data['listed'] = listed
        page.data['dropped'] = dropped
        page.data['description'] = "#{base} #{listed} events listed, #{dropped} more left out by our filters."
      end
    end
  end
end
