---
{
  'title': 'v5 Changelog',
  'meta': [
    {
      'name': 'description',
      'content': 'MTGJSON v5 Changelog.'
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

# Changelog (v5)
The following is the Application and Website Changelog. Some parts may be updated for clarity or corrections at any point.

## 5.0.2
Release Date: 2020-12-08

### Files
#### Added
- Added `TcgplayerSkus.*` file for download which contains TCGplayer SKU information organized by card UUID
- Added more data to the `SetList` file
- Added `asciiName` property to `Atomic*` files
- Added `Identifiers` model to the `Atomic*` files
- Added `EUR` currency to `AllPrices` file
- Added `type` property to `DeckList` file

#### Removed
- Removed `setCode` from `AllIdentifiers`

### Card Model
#### Added
- Added `originalReleaseDate` property
- Added `layout` to be `"token"` if a set is only tokens

#### Updated
- Updated `isAlternative` to be `true` for identical cards
### Set Model
#### Added
- Added `mcmIdExtras` property

### Deck Model
#### Added
- Added `commander` property

### Legalities Model
#### Added
- Added missing `Historic` property

#### Updated
- Updated broken link to [Keyrune](https://keyrune.andrewgioia.com/)

### Misc
#### Added
- Added new error page

## 5.0.1
Release Date: 2020-08-24

### Files
#### Added
- Added `AllIdentifiers.*` file for download which contains all cards organized by UUID

### Card
#### Added
- Added `setCode` to the non-atomic and token card model
- Added `faceName` to Foreign Data model

### Set
#### Fixed
- Fixed some `translation` inaccuracies
- Fixed some `keyruneCode` inaccuracies


## 5.0.0
Release Date: 2020-07-03
### Announcements
<img src="/images/assets/logo-mtgjson-thumbnail.png" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="New MTGJSON Logo"/>We are proud to announce the 5th major release of MTGJSON! The team has made big improvements including a new “API” endpoint to serve files. We have also given our documentation an overhaul - including upgrading our server to run on Nginx.

We are also pleased to announce the addition of `Booster` information on the `Set` data model. For more information, see the documentation for [Booster](/abstract-models/booster) data model.

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).

The MTGJSON team we would like to thank the community for its continued support and we look forward to serving you well.</br></br></br>

### Card
#### Changed
- Changed "Meld" card `name` and `side` to be more clear. Example: `"Gisela, the Broken Blade // Brisela, Voice of Nightmares"` (side a), `"Bruna, the Fading Light // Brisela, Voice of Nightmares"` (side a), and `"Brisela, Voice of Nightmares"` (side b)
- Changed `mcmId`, `mcmMetaId`, `mtgoFoilId`, `mtgoId`, `multiverseId`, `scryfallId`, `scryallIllustrationId`, `scryfallOracleId`, and `tcgplayerProductId` properties to be nested in to a new `identifiers` property
- Changed `isArena`, `isMtgo`, and `isPaper` to be nested inside a new `availability` property. Values return a string of the available property. See the available examples for all the values
- Changed `isBuyABox`, `isBundle`, `isPlaneswalkerStamped`, and `isDateStamped` to be nested in to a new `promoTypes` property
- Changed `name` to show full split card names (name1 // name2)
- Changed `name` to be verbatim as printed on the card (see Unglued variants for example)
- Changed `names` to `otherFaceIds`
- Changed `uuid` for all tokens and split cards
- Changed `hasNoDeckLimit` to `hasAlternativeDeckLimit`
#### Added
- Added `hasAlternativeDeckLimit` for cards that allow a limit other than 4
- Added `promoTypes` for an enums for promo cards which replaces other promo properties
- Added and back-ported `hasContentWarning` for cards that are marked by Wizards of the Coast for having sensitive content
- Added `variations` to show all cards with the same name
- Added `keywords` for all keywords available on a card
- Added `mtgjsonV4Id` to identifiers to help transition developer's code
- Added `faceName` to identify only the card face card's name

### Sets
#### Added
- Added `booster`. See the [Booster](/abstract-models/booster/) data model
- Added `isPartialPreview`
- Added Love Your LGS (`PLGS`)
- Added Historic Anthology 3 (`HA3`)
- Added Secret Lair: Ultimate Edition (`SLU`)
- Added Signature Spellbook: Chandra `SS3`)
- Added Core Set 2021 (`M21`)
- Added Jumpstart (`JMP`)
- Added Double Masters (`2XM`)
#### Removed
- Removed `boosterV3`

### Files
#### Changed
- All file downloads are now available via the `/api/v5/*` web-based url
- The `AllCards` file is now renamed `AtomicCards` to better clarify that these files only contain atomic card data
- The `[Format]Printings` files are now renamed to just their format name: `Modern`, `Legacy`, etc
- The `version` file is now renamed `Meta`
- All files now used a top-level `data` and `meta` key. Any data models inside of `data` should lose the nested `meta` object
#### Added
- SHA-256 file validation for every file, downloadable at the file location and file name with an appended `.sha256` format
- `AllPrices.json` now contains prices from [cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) and [cardkingdom](https://www.cardkingdom.com/?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson)

### Misc
#### Added
- Added `Phyrexian` language where language data is available

### Website
#### Updated
- The documentation application server was switched over to Nginx
#### Changed
- Data "Structures" are now named "Models"
- Models now reference their parent keys and parent files more accurately
- Models now have the "optional" attribute marked on more properties for clarity
- Some text and spacing adjustments for the "Changelog" and "FAQ" page
- The `Legalities` model now more clearly shows which properties would be omitted
#### Added
- More models are clearly defined now that the files deliver all the same top-level keys
- Atomic Cards are now documented outright as a Data Model for clarity
- Property value examples were added for properties with enum values
- You can now toggle optional properties on/off within documentation. If all properties are optional than the UI is disabled
- You can now try to edit/PR a specific documentation from the page footer
#### Removed
- `/file/*` (Documentation): Files are longer documented individually, instead their contents are pure data models
- The "About Us" page no longer uses a table of contents
- `setCode` was mistakenly added and is now removed to the `Card` data model
