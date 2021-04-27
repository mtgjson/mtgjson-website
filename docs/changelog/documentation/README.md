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
The following is the MTGJSON Documentation/Website Changelog that provides updates to the website that are in part or separated from the MTGJSON Application. Some parts may be updated for clarity or corrections at any point.

## 2.2.3
Release Date: 2021-04-27

### Misc

#### Updated
- Updated `Card` to be `Card (Set)` for clearer documentation purposes
- Documentation linking between data/file models is now more clear

## 2.2.2
Release Date: 2021-04-09

### Misc

#### Updated
- Updated PayPal icon
- Updated misc grammar in documentation

## 2.2.1
Release Date: 2021-04-07

### Misc

#### Added
- Added more parent models to data model's pages for easy access to the parent model
- Added more Sentry reporting for error logging

#### Updated
- Updated some supporters logos to png format with more transparency
- File models were moved to their category in the sidebar

## 2.2.0
Release Date: 2021-02-10

### Announcements
Welcome to the documentation changelog, which has been split from the MTGJSON Application changelog.

### Misc
#### Added
- Added Scryfall, MTGO and MTG Arena links and Format to various data models
- Added loading spinner for data loading
- Added contributors on the homepage
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
