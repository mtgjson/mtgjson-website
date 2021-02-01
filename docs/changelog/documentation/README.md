---
{
  'title': 'MTGJSON Documentation Changelog',
  'meta': [
    {
      'name': 'description',
      'content': 'MTGJSON Documentation Changelog.'
    },
    {
      'name': 'keywords',
      'content': 'mtg, magic: the gathering, mtgjson, json, changelog, docs, docs changelog',
    },
  ],
  "feed": {
    "enable": "true"
  }
}
---

# MTGJSON Documentation Changelog
The following is the MTGJSON Documentation/Website Changelog. Some parts may be updated for clarity or corrections at any point.

## 2.2.0
Release Date: 2021-02-03

### Announcements
Welcome to the documentation changelog, which has been split from the MTGJSON Application changelog.

### Misc
#### Added
- Added Scryfall, MTGO and MTG Arena links to various data models
- Added format links to the Leadership Skills data model
- Added loading spinner for data loading
#### Fixed
- Fixed grammatical errors
- Fixed(?) an issue where localStorage was failing on browsers with it disabled
- Fixed 404 when navigating to the changelog from the header
#### Updated
- Table of contents are now split in to two lists for easier use
- Added bullets to navigation for better visual hierarchy
- Changed Algolia search to basic search as Algolia provided little upside and more obfuscation to manage
- Various styling adjustments
- Got rid of schemas in favor of pure Markdown and now properties are searchable!
- Build packages
