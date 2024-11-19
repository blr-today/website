# HACKING

## Requirements

To work on the codebase, you need a supported version of the following:

1. Bundler + Ruby
2. NPM + Node.js

## Setup

```bash
git clone https://github.com/blr-today/website.git blr-today-website
cd blr-today-website
# Install Jekyll and dependencies
bundle install
# Install node.js dependencies
npm install
# Fetches the latest blr.today dataset
npm run fetch-calendar
# Build the JS bundle
npm run build
# Build the Jekyll site and run the dev server
bundle exec jekyll serve -w
```

Open <http://localhost:4000> in your browser. Since the CSS is hot-linked, you will need working internet for the site to work.