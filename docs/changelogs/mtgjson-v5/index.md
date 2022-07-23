---
{
  'title': 'MTGJSON Changelog',
  'meta':
    [
      { 'name': 'description', 'content': 'MTGJSON v5 Changelog.' },
      { 'property': 'og:description', 'content': 'MTGJSON v5 Changelog.' },
      { 'name': 'keywords', 'content': 'mtg, magic: the gathering, mtgjson, json, changelog' },
    ],
}
---

# MTGJSON Changelog

The following is the MTGJSON Changelog. Some parts may be updated for clarity or corrections at any point.

## 5.2.0

Release Date: 2021-12-20

### Announcements

**Welcome to v5.2.0!** With this update we've added a lot of new Card Data Model properties with a focus on Card identification. Some of these new properties are signatures, stamps, and finishes. Also, some properties were deprecated with various slates of removal.

We want to remind everyone that while this Changelog can show updates to new Sets that have dropped and our added support for them, MTGJSON will continue to build frequently enough to have this new data without major or minor updates to the application or Changelog. You can always see the current build date using the [Meta](https://mtgjson.com/api/v5/Meta.json) JSON file and observing the date property or the date appended to the version number.

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).

### Documentation

#### Changed

- Changed File models within the documentation and some Abstract Models were merged in to the Data Model category for more clarity and ease of use. This is no way changes how and where the data files are downloaded or how their models are formed

### Card Models

#### Fixed

- Fixed dual-faced cards having the wrong mana value on its face
- Fixed `hasAlternativeDeckLimit` for `Seven Dwarves` card
- Fixed `isAlternative` for cards in the `CMR` and `JMP` sets
- Fixed an issue where `Grist, the Hunger Tide` was not a valid commander
- Fixed an issue where duplicate UUID's were being set on "AAFR" tokens
- Fixed an issue where `releaseDate` was not getting set on "flip" cards
- Fixed an issue where flavor names were not set correctly for certain foreign cards
- Fixed an issue caused by a source having its printed text not providing line breaks

#### Added

- Added `manaValue` property
- Added the non-Atomic `isFunny` property
- Added the non-Atomic `finishes` property
- Added the non-Atomic `cardParts` property
- Added the non-Atomic `securityStamp` property
- Added the non-Atomic `faceManaValue` property
- Added the non-Atomic `faceFlavorName` property
- Added the non-Atomic `otherFaceIds` property to Card (Token)
- Added the non-Atomic `signature` property
- Added support for "Dungeon" cards in Card (Atomic) Data Model
- Added support for "Alchemy" cards by including `isRebalanced`, `rebalancedPrintings`, and `originalPrintings` properties

#### Deprecated

- Deprecated `convertedManaCost` in favor of `manaValue`. Will be removed in `v6.0.0`
- Deprecated `faceConvertedManaCost` in favor of `faceManaValue`. Will be removed in `v6.0.0`
- Deprecated `hasFoil` in favor of `finishes`. Will be removed in `v5.3.0`
- Deprecated `hasNonFoil` in favor of `finishes`. Will be removed in `v5.3.0`

### Set Model

#### Fixed

- Fixed an issue where the French name of "Eldritch Moon" was incorrect

#### Added

- Added `sealedProduct` property (This is still a WIP, but the foundation is now available)

### Foreign Data Model

#### Fixed

- Fixed an issue where data was not getting set at all

### Identifiers Model

#### Added

- Added `tcgplayerEtchedProductId` property
- Added `cardKingdomEtechedId` property

#### Changed

- Changed `scryfallOracleId` property to be optional

### PurchaseUrls Model

#### Added

- Added `tcgplayerEtched` property
- Added `cardKingdomEtched` property

### Legalities Model

#### Added

- Added `gladiator` property
- Added `historicbrawl` property
- Added `oldschool` property
- Added `paupercommander` property
- Added `premodern` property

### Enum Values File

#### Added

- Added `finishes` property to `card`

### Keywords File

#### Fixed

- Fixed `abilityWords` showing wrong values

### TCGPlayer SKUs File

#### Added

- Added `finishes` property

### Individual Sets

#### Added

- Added Time Spiral Remastered (`TSR`)
- Added Commander 2021 (`C21`)
- Added Oversized Commander 2021 (`OC21`)
- Added Strixhaven (`STX`)
- Added Strixhaven Mystical Archives (`STA`)
- Added Strixhaven Promos (`PSTX`)
- Added Strixhaven Minigames (`MSTX`)
- Added Strixhaven Art Series (`ASTX`)
- Added Historic Anthology 5 (`HA5`)
- Added Modern Horizons 2 (`MH2`)
- Added Modern Horizons 2 Promos (`PMH2`)
- Added Modern Horizons 2 Minigames (`MMH2`)
- Added Modern Horizons 2 Art Series (`AMH2`)
- Added Modern Horizons 1 Timeshifted Cards (`H1R`)
- Added Wizards Play Network 2021 (`PW21`)
- Added Love Your LGS 2021 (`PLG21`)
- Added Adventures in the Forgotten Realms (`AFR`)
- Added Adventures in the Forgotten Realms Promos (`PAFR`)
- Added Forgotten Realms Commander (`AFC`)
- Added Forgotten Realms Commander Displays (`OAFC`)
- Added Adventures in the Forgotten Realms Art Series (`AAFR`)
- Added Adventures in the Forgotten Realms Minigames (`MAFR`)
- Added 2020 Heroes of the Realm (`HTR20`)
- Added Jumpstart: Historic Horizons (`J21`)
- Added Innistrad Midnight Hunt (`MID`)
- Added Innistrad Midnight Hunt Promos (`PMID`)
- Added Innistrad Midnight Hunt Token Sub (`SMID`)
- Added Midnight Hunt Commander (`MIC`)
- Added Midnight Hunt Commander Displays (`OMIC`)
- Added Pioneer Challenger Decks 2021 (`Q06`)
- Added Innistrad Crimson Vow (`VOW`)
- Added Innistrad Crimson Vow Promos (`PVOW`)
- Added Crimson Vow Commander (`VOC`)
- Added Crimson Vow Commander Displays (`OVOC`)
- Added Alchemy: Innistrad (`Y22`)
- Added Innistrad: Double Feature (`DBL`)
- Added Commander Collection Black (`CC2`)
- Added Wizards Play Network 2022 (`PW22`)
- Added Kamigawa Neon Dynasty (`NEO`) Spoilers
- Added Unfinity (`UNF`) Spoilers

### Misc

- MTGJSON now supports Python 3.6 - 3.10
- Better handle Gatherer downtime halting builds

## 5.1.0

Release Date: 2021-01-18

### Announcements

Welcome to the next release of MTGJSON - With this release we are no longer supporting Version 4, so if you have not already, please update all your sources to the Version 5 endpoints to ensure your applications function correctly going forward.

**Note: With this release, MTGJSONv4 has been fully deprecated. On February 28th, 2021 all v4 endpoints will be removed.**

<img style="max-height: 100px; float: left; margin: 0 15px 10px 0;" alt="MTGGraphQL logo" src="/images/assets/thumbnail-logo-mtggraphql.jpg" />We're rolling out MTGGraphQL! For more information see the [MTGGraphQL](https://mtgjson.com/mtggraphql) documentation. Access during our beta rollout is limited to <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> supporters. A GraphQL GUI can be accessed via <a href="https://graphql.mtgjson.com/" target="_blank" rel="noreferrer noopener">MTGGraphQL Playground<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>

### Files

#### Added

- Added `TcgplayerSkus.*` file for download which contains TCGplayer SKU information organized by card UUID
- Added more data to the `SetList` file
- Added `asciiName` property to `Atomic*` files
- Added `Identifiers` model to the `Atomic*` files
- Added `currency` to `AllPrices` file (Thanks, tpblaster!)
- Added `type` property to `DeckList` file

#### Updated

- Updated the order of keys so that the `meta` key appears at the top.

### Card Model

#### Added

- Added `originalReleaseDate` property
- Added `layout` to be `"token"` if a set is only tokens

#### Fixed

- Fixed cards with `art_series` type
- Fixed `isAlternative` for cards within a single set (Thanks, kodabb!)

### Card (Atomic) Model

#### Added

- Added `keywords`

### Set Model

#### Added

- Added `mcmIdExtras` property (Thanks, mjainta!)

### Deck Model

#### Added

- Added `commander` property

### Legalities Model

#### Added

- Added missing `Historic` property

#### Updated

- Updated broken link to [Keyrune](https://keyrune.andrewgioia.com/)

### Sets

#### Added

- Added Arena Beginner Set (`ANB`)
- Added Amonkhet Remastered (`AKR`)
- Added Zendikar Rising (`ZNR`)
- Added The List (`PLIST`)
- Added Kaladesh Remastered (`KLR`)
- Added Commander Legends (`CMR`)
- Added Commander Collection: Green (`CC1`)
- Added Kaldheim, spoilers (`KHM`)
- Added Time Spiral Remastered, spoilers (`TSR`)

#### Fixed

- Salvat 2005 is correctly marked as foreign (Thanks, silasary!)

### Misc

#### Added

- Added new error page
- Fixed an issue where models without optional properties were able to be filtered

#### Updated

- MTGJSON has dropped TravisCI support in favor of GitHub Actions (Thanks, ebbit1q!)

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

We are proud to announce the 5th major release of MTGJSON! The team has made big improvements including a new “API” endpoint to serve files. We have also given our documentation an overhaul - including upgrading our server to run on Nginx.

We are also pleased to announce the addition of `Booster` information on the `Set` Data Model. For more information, see the documentation for [Booster](https://mtgjson.com/abstract-models/booster) Data Model.

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).

The MTGJSON team we would like to thank the community for its continued support and we look forward to serving you well.

### Card

#### Changed

- Changed "Meld" card `name` and `side` to be more clear. Example: `"Gisela, the Broken Blade // Brisela, Voice of Nightmares"` (side a), `"Bruna, the Fading Light // Brisela, Voice of Nightmares"` (side a), and `"Brisela, Voice of Nightmares"` (side b)
- Changed `mcmId`, `mcmMetaId`, `mtgoFoilId`, `mtgoId`, `multiverseId`, `scryfallId`, `scryallIllustrationId`, `scryfallOracleId`, and `tcgplayerProductId` properties to be nested in to a new `identifiers` property. `mtgstocksId` was removed for redundancy
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
- Added and back-ported `hasContentWarning` for cards that are marked by [Wizards of the Coast](https://company.wizards.com) for having sensitive content
- Added `variations` to show all cards with the same name
- Added `keywords` for all keywords available on a card
- Added `mtgjsonV4Id` to identifiers to help transition developer's code
- Added `faceName` to identify only the card face card's name

#### Removed

- Removed `prices` in favor of a dedicated `AllPrices` file

### Sets

#### Added

- Added `booster`. See the [Booster](https://mtgjson.com/abstract-models/booster/) Data Model
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
- All files now used a top-level `data` and `meta` key. Any Data Models inside of `data` should lose the nested `meta` object

#### Added

- Added SHA-256 file validation for every file, downloadable at the file location and file name with an appended `.sha256` format
- Added `AllPrices` file to collect card prices based on Card UUID with a **limited** history of prices available. Contains paper prices from [tcgplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson), [cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson), and [cardkingdom](https://www.cardkingdom.com/?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson); mtgo prices from [cardhoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card)

### Misc

#### Added

- Added `Phyrexian` language where language data is available

### Documentation

#### Updated

- The documentation application server was switched over to Nginx

#### Changed

- Data "Structures" are now named "Models"
- Models now reference their parent keys and parent files more accurately
- Models now have the "optional" tag marked on properties for clarity
- Some text and spacing adjustments for the "Changelog" and "FAQ" page

#### Added

- More models are clearly defined now that the files deliver all the same top-level keys
- Atomic Cards are now documented outright as a Data Model for clarity
- Property value examples were added for properties with enumuerated values from `EnumValues.json`
- You can now toggle optional properties on/off within documentation. If all properties are optional than the UI is disabled
- You can now try to edit/PR a specific documentation from the page footer

#### Removed

- `/file/*` (Documentation): Files are longer documented individually, instead their contents are pure Data Models
- The "About Us" page no longer uses a table of contents
- `setCode` was mistakenly added and is now removed from the `Card` Data Model
