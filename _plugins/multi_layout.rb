# Based on https://github.com/saclark/jekyll-multipost
# under MIT License
# License: https://github.com/saclark/jekyll-multipost/blob/master/LICENSE.txt
require 'cgi'

module Jekyll
  class PageLayoutsGenerator
    def generate(site)
      initial_count = site.pages.size
      pages = site.pages.map! do |page|
        if page.data["layouts"].is_a?(Array)
          [page] + create_layout_views(page)
        else
          page
        end
      end
      pages.flatten!
      Jekyll.logger.info("Built #{site.pages.size - initial_count} pages") if site.pages.size > initial_count
    end

    private

    def create_layout_views(page)
      page.data["layouts"].map do |config|
        dir = File.dirname(page.relative_path)
        Page.new(page.site, page.site.source, dir, page.name).tap do |new_page|
          new_page.data = page.data.clone
          # Default configuration is not copied, but dynamically
          # applied. We need to copy this somehow as well.
          # new_page.data.default_proc = proc do |_, key|
          #   site.frontmatter_defaults.find(relative_path, type, key)
          # end
          new_page.data["layout"] = config["layout"]
          new_page.data["permalink"] = config["permalink"]
        end
      end
    end
  end

  class MultiPostGenerator < Generator
    safe true
    def generate(site)
      PageLayoutsGenerator.new.generate(site)
    end
  end
end
