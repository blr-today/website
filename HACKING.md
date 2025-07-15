# HACKING

## Architecture

This is a Jekyll-based static site generator that builds event calendars for Bangalore. The system has two main components:

1. **Jekyll Static Site Generator** - Builds the website with event data from SQLite
2. **JavaScript Calendar Renderer** - Client-side calendar display using FullCalendar

## Key Components

### Data Pipeline
- Events are fetched from external SQLite database (`events.db`)
- SQLite data is queried via `jekyll-sqlite` plugin using complex JSON queries
- Events are filtered by tags and exclude lists defined in `_config.yml`

### Jekyll Architecture
- **Plugins** (`_plugins/`):
  - `icalendar.rb` - Converts JSON events to iCalendar format with color mapping
  - `blr_today.rb` - Custom Liquid filters for URI parsing and HTML manipulation
  - `multi_layout.rb` - Generates multiple layout variants for same content
  - `parse_json.rb` - JSON parsing filter
  - `solidify-config.rb` - Converts default_proc attributes to iterable dictionaries

### Frontend
- **TypeScript/JavaScript** (`js/calendar-render.js`):
  - Uses FullCalendar with iCalendar, list, and adaptive plugins
  - Renders events as lists with keyword tags
  - Filters invisible keywords and page-specific tags
  - Supports responsive design for mobile screens

- **Build Pipeline** (`rollup.config.js`):
  - Bundles TypeScript to ES6 modules
  - Maintains in-tree fork of `@fullcalendar/icalendar`
  - Minifies with Terser plugin

### Event Data Structure
Events follow schema.org/Event format with:
- Event types mapped to specific colors in `COLOR_MAP`
- Location parsing from schema.org/Place objects
- Keyword-based tagging system
- Geographic coordinates support

## Requirements

1. Ruby + Bundler (Jekyll ecosystem)
2. Node.js + NPM (JavaScript build tools)

## Setup

```bash
git clone https://github.com/blr-today/website.git blr-today-website
cd blr-today-website
bundle install
npm install
npm run fetch-calendar
npm run build
bundle exec jekyll serve -w
```

Open <http://localhost:4000>. Internet connection required for external CSS.

## Development Workflow

### Modifying Event Queries
1. Edit SQLite queries in `_config.yml` defaults section
2. Update tag filtering logic in `excludeTags` and `tags` arrays

### JavaScript Changes
1. Modify `js/calendar-render.js` for calendar behavior
2. Run `npm run build` to regenerate bundles
3. Update `InvisibleKeywords` set for keyword filtering

### Plugin Development
All custom Jekyll plugins are in `_plugins/` and follow standard Jekyll plugin patterns.

## Key NPM Scripts

- `npm run build` - Build JavaScript bundles via Rollup
- `npm run fetch-calendar` - Download latest event database
- `npm run stat` - Generate domain statistics from events.db
- `npm run license` - Generate license information

## Data Schema

Events are stored as JSON in SQLite with schema.org/Event structure. Key fields:
- `@type` - Event type (maps to colors)
- `name` - Event title
- `startDate/endDate` - ISO 8601 timestamps
- `location` - schema.org/Place object
- `keywords` - Array of uppercase tag strings
- `url` - Event source URL