require 'json'

module Jekyll
  module ParseJsonFilter
    def parse_json(input)
      begin
        JSON.parse input
      rescue
        nil
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ParseJsonFilter)