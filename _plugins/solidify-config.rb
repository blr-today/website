Jekyll::Hooks.register :site, :post_read do |site|
  # We iterate through every page and convert the excludeTags attribute
  # in page.data from a default_proc loaded one to one that is present
  # in the dictionary
  # This makes the attributes iterable, which is important for the jekyll-sqlite
  # plugin being able to use them inside queries.
  site.pages.each do |page|
    page.data["tags"] = page.data["tags"]
    page.data["excludeTags"] = page.data["excludeTags"]
    page.data["subscribe"] = page.data["subscribe"]
  end
end