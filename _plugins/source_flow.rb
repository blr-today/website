require 'json'
require 'cgi'
require 'set'

# Fills pages/debug-sources.html: a Sankey of listings per source, and tag data for its heatmap
module Jekyll
  class SourceFlow < Generator
    priority :low

    BUCKETS = %w[Curated Others Unwanted].freeze
    KINDS = (BUCKETS + ['Duplicate']).freeze
    SOURCE_TYPES = %w[organizer venue aggregator curator bookstore museum].freeze
    MIN_LISTINGS = 3
    MIN_BAND = 3
    MIN_TAG = 3
    BULK = 640
    WIDTH = 1000
    NODE = 14
    GAP = 14
    LABEL = 210

    def generate(site)
      page = site.pages.find { |p| p.relative_path == 'pages/debug-sources.html' }
      events = site.collections['event']
      return unless page && events

      cal = ->(name) { site.pages.find { |p| p.relative_path == "cal/#{name}.md" }&.data || {} }
      tags = ->(data, key) { JSON.parse(data[key] || '[]') }
      curated, unwanted = cal.call('curated'), cal.call('unwanted')
      rows = events.docs.map { |d| [d.data['source'], JSON.parse(d.data['event_json'])] }
      sources = rows.map { |url, _| host(url) }.to_set

      flows = Hash.new { |h, k| h[k] = Hash.new(0) }
      buckets = rows.map do |url, event|
        keywords = Array(event['keywords'])
        bucket = if (keywords & tags.call(unwanted, 'tags')).any? then 'Unwanted'
                 elsif (keywords & tags.call(curated, 'tags')).any? &&
                       (keywords & tags.call(curated, 'excludeTags')).empty? then 'Curated'
                 else 'Others'
                 end
        flows[host(url)][bucket] += 1
        # Dedup keeps one row and lists each dropped copy's URL in sameAs
        Array(event['sameAs']).each do |copy|
          flows[host(copy)]['Duplicate'] += 1 if copy != url && sources.include?(host(copy))
        end
        bucket
      end

      page.data['source_count'] = flows.size
      page.data['bucket_totals'] = KINDS.to_h { |k| [k, flows.values.sum { |f| f[k] }] }
      page.data['sankey'] = svg(fold_small(flows))
      page.data['tag_kinds'] = tag_kinds(site, rows, buckets)
    end

    private

    def host(url)
      url.to_s[%r{\A\w+://(?:www\.)?([^/?#]+)}, 1].to_s
    end

    # Each event as [source, location, bucket, other tags], as indices into lists sorted by count
    def tag_kinds(site, rows, buckets)
      cals = site.pages.select { |p| p.relative_path.start_with?('cal/') }
      tagged = ->(types) { cals.select { |p| types.include?(p.data['type']) }.flat_map { |p| JSON.parse(p.data['tags'] || '[]') } }
      titled = ->(re) { (site.data['tags'] || []).select { |t| t['title'].to_s =~ re }.map { |t| t['id'] } }
      hoods = tagged.call(%w[neighbourhood])
      covered = (hoods + titled.call(/\[(Area|Venue|Organizer|Curated|Aggregator)\]/) + tagged.call(SOURCE_TYPES) - titled.call(/\[Activity\]/)).to_set
      events = rows.zip(buckets).map do |(url, event), bucket|
        keywords = Array(event['keywords']).map(&:to_s).uniq
        other = keywords.select { |k| k == k.upcase && k.size >= 3 && !k.include?('/') && !covered.include?(k) }
        [host(url), (keywords & hoods).first, bucket, other]
      end
      kinds = %w[Source Location Calendar Tag]
      lists = kinds.each_index.map { |i| events.flat_map { |e| Array(e[i]) }.tally.sort_by { |t, n| [-n, t] } }
      lists[3] = lists[3].select { |_, n| n >= MIN_TAG }
      index = lists.map { |l| l.each_with_index.to_h { |(t, _), j| [t, j] } }
      {
        'kinds' => kinds.zip(lists).to_h,
        'events' => events.map { |s, l, b, t| [index[0][s], l ? index[1][l] : -1, index[2][b], t.filter_map { |x| index[3][x] }] }
      }
    end

    def fold_small(flows)
      big, small = flows.sort_by { |_, f| -f.values.sum }.partition { |_, f| f.values.sum >= MIN_LISTINGS }
      return big + small if small.size < 2
      rest = Hash.new(0)
      small.each { |_, f| f.each { |b, n| rest[b] += n } }
      big + [["#{small.size} smaller sources", rest]]
    end

    def stack(heights)
      y = 0
      heights.map { |h| [y, h].tap { y += h + GAP } }
    end

    def band(x0, a, x1, z, t)
      mid = (x0 + x1) / 2
      a, z, a2, z2 = [a, z, a + t, z + t].map { |v| v.round(1) }
      "M#{x0},#{a}C#{mid},#{a} #{mid},#{z} #{x1},#{z}V#{z2}C#{mid},#{z2} #{mid},#{a2} #{x0},#{a2}Z"
    end

    def svg(sources)
      totals = KINDS.map { |k| sources.sum { |_, f| f[k] } }
      scale = BULK.to_f / totals.sum
      # Every band gets a visible minimum, and nodes grow to fit their bands
      thick = sources.map { |_, f| KINDS.map { |k| f[k].zero? ? 0 : [f[k] * scale, MIN_BAND].max } }
      parts = KINDS.each_index.map { |k| thick.sum { |t| t[k] } }
      cols = [stack(thick.map(&:sum)), stack([parts.first(3).sum, parts[3]]), stack(parts.first(3))]
      height = cols.map { |c| c.last.sum }.max
      left, middle, right = cols.map { |c| c.map { |y, h| [y + (height - c.last.sum) / 2, h] } }
      xs = [LABEL, (WIDTH - NODE) / 2, WIDTH - LABEL - NODE]
      at_original = BUCKETS.each_index.map { |j| middle[0][0] + parts.first(j).sum }
      at_bucket = right.map(&:first)
      at_duplicate = middle[1][0]

      bands = sources.each_with_index.flat_map do |(name, f), i|
        out = left[i][0]
        KINDS.each_with_index.filter_map do |kind, k|
          next if f[kind].zero?
          t = thick[i][k]
          if kind == 'Duplicate'
            d = band(xs[0] + NODE, out, xs[1], at_duplicate, t)
            at_duplicate += t
          else
            d = band(xs[0] + NODE, out, xs[1], at_original[k], t) + band(xs[1] + NODE, at_original[k], xs[2], at_bucket[k], t)
            at_original[k] += t
            at_bucket[k] += t
          end
          out += t
          %(<path class="flow b#{k}" d="#{d}"><title>#{esc(name)} → #{kind}: #{f[kind]}</title></path>)
        end
      end
      nodes = sources.each_with_index.map do |(name, f), i|
        y, h = left[i]
        node(xs[0], y, h, 'src') + label(xs[0] - 6, y + h / 2, 'end', "#{name} #{f.values.sum}")
      end
      nodes += [['Original', totals.first(3).sum, 'src'], ['Duplicate', totals[3], 'b3']].each_with_index.map do |(name, n, css), j|
        y, h = middle[j]
        node(xs[1], y, h, css) + label(xs[1] + NODE + 6, y + h / 2, 'start', "#{name} #{n}", 'halo')
      end
      nodes += BUCKETS.each_with_index.map do |b, j|
        y, h = right[j]
        node(xs[2], y, h, "b#{j}") + label(xs[2] + NODE + 6, y + h / 2, 'start', "#{b} #{totals[j]}")
      end
      %(<svg class="sankey" viewBox="0 -4 #{WIDTH} #{(height + 8).round}" role="img" ) +
        %(aria-label="#{totals.sum} listings from #{sources.size} sources, by bucket">) +
        bands.join + nodes.join + '</svg>'
    end

    def node(x, y, h, css)
      return '' if h.zero?
      %(<rect class="#{css}" x="#{x}" y="#{y.round(1)}" width="#{NODE}" height="#{[h, 1].max.round(1)}"/>)
    end

    def label(x, y, anchor, text, css = nil)
      %(<text x="#{x}" y="#{y.round(1)}" text-anchor="#{anchor}"#{css && %( class="#{css}")}>#{esc(text)}</text>)
    end

    def esc(text)
      CGI.escapeHTML(text.to_s)
    end
  end
end
