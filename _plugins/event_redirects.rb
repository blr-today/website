require 'sqlite3'

# Merged or renumbered events keep working links, since Google indexed the old ones
Jekyll::Hooks.register :site, :post_write do |site|
  db_path = File.join(site.source, 'events.db')
  next unless File.exist?(db_path)

  db = SQLite3::Database.new(db_path, readonly: true)
  begin
    rows = db.execute('SELECT alias, id FROM event_aliases ORDER BY alias')
  rescue SQLite3::SQLException
    rows = []
  ensure
    db.close
  end
  next if rows.empty?

  lines = rows.map { |old, id| "/event/#{old}/ /event/#{id}/ 301" }
  File.open(File.join(site.dest, '_redirects'), 'a') do |f|
    f.puts "\n# Old event ids from ingest's event_aliases table"
    f.puts lines
  end
  Jekyll.logger.info 'Redirects:', "#{lines.size} old event ids"
end
