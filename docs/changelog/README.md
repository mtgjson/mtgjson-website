---
{
  'meta': [
    {
      'name': 'description',
      'content': 'MTGJSON Changelog.'
    },
    {
      'name': 'keywords',
      'content': 'mtg, magic: the gathering, mtgjson, json, changelog',
    },
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Changelog
The following is the Application and Website Changelog. Some parts may be updated for clarity or corrections at any point.

## 5.0.0
Release Date: 2020-07-03
### Announcements
<img src="/images/assets/logo-mtgjson-thumbnail.png" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="New MTGJSON Logo"/>The documentation of the website overall was changed in a drastic way with such a large major version bump. If you find we can improve the documentation please let us know!</br></br></br>

### Card
#### Changed
- Changed `mcmId`, `mcmMetaId`, `mtgoFoilId`, `mtgoId`, `multiverseId`, `scryfallId`, `scryallIllustrationId`, `scryfallOracleId`, and `tcgplayerProductId` properties to be nested in to a new `identifiers` property.
- Changed `isArena`, `isMtgo`, and `isPaper` to be nested inside a new `availability` property. Values return a string of the available property. See the available examples for all the values.
- Changed `isBuyABox`, `isBundle`, `isPlaneswalkerStamped`, and `isDateStamped` to be nested in to a new `promoTypes` property.
- Changed `name` to show full split card names (name1//name2).
- Changed `name` to be as true as possible (see Very Cryptic Command).
- Changed `uuid` for split cards.
- Changed `names` to `otherFaceIds`.
- Changed `hasNoDeckLimit` to `hasAlternativeDeckLimit`.
#### Added
- Added `hasAlternativeDeckLimit` for cards that allow a limit other than 4.
- Added `promoTypes` for an enums for promo cards which replaces other promo properties.
- Added `hasContentWarning` for cards that are marked by Wizards of the Coast for having sensitive content? Cards with this property may have missing or degraded properties and values.
- Added `variations` to show all cards with the same name.
- Added `keywords` for all keywords available on a card.

### Set
#### Removed
- Removed `boosterV3`.
- Added `booster`. See the [Booster](/abstract-models/booster/) data model.

### Files
#### Changed
- All file downloads are now available via the `/api/v5/*` web-based url.
- The `AllCards` file is now renamed `AtomicCards` to better clarify that these files only contain atomic card data.
- The `[Format]Printings` files are now renamed to just their format name: `Modern`, `Legacy`, etc.
- The `version` file is now renamed `Meta`.
- All files now used a top-level `data` and `meta` key. Any data models inside of `data` should lose the nested `meta` object.

### Website
#### Changed
- Data "Structures" are now named "Models".
- Models now reference their parent keys and parent files more accurately.
- Models now have the "optional" attribute marked on more properties for clarity.
- Some text and spacing adjustments for the "Changelog" and "FAQ" page.
- The `Legalities` model now more clearly shows which properties would be omitted.
#### Added
- More models are clearly defined now that the files deliver all the same top-level keys.
- Atomic Cards are now documented outright as a Data Model for clarity.
- Property value examples were added for properties with enum values.
- You can now toggle optional properties on/off within documentation. If all properties are optional than the UI is disabled.
- You can now try to edit/PR a specific documentation from the page footer.
#### Removed
- `/file/*` (Documentation): Files are longer documented individually, instead their contents are pure data models.
- The "About Us" page no longer uses a table of contents.
