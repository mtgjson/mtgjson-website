---
title: MTGJSON v5 Changelog
outline: false
head:
  - - meta
    - property: og:title
      content: MTGJSON v5 Changelog
  - - meta
    - name: description
      content: The changelog for the MTGJSON v5 application.
  - - meta
    - property: og:description
      content: The changelog for the MTGJSON v5 application.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, mtgjson v5 changelog, changelog
---

# MTGJSON v5 Changelog

The following is the MTGJSON v5 Changelog. Some parts may be updated for clarity or corrections at any point.

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the <a href="https://github.com/mtgjson/mtgjson" target="_blank">MTGJSON Repository</a> or the <a href="https://github.com/mtgjson/mtgjson-website" target="_blank">Documentation Repository</a>. If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> (recurring donations).

## 5.3.0

Release Date: 2026-02-08

### Announcements

**Welcome to v5.3.0!** This is a major release featuring a complete rewrite of the MTGJSON data pipeline. The new architecture uses [Polars](https://pola.rs/) for high-performance data processing, resulting in faster builds, improved memory efficiency, and better data consistency. We've also modernized the development tooling with [UV](https://github.com/astral-sh/uv) for package management and [Ruff](https://github.com/astral-sh/ruff) for linting/formatting.

This release includes many new card properties, expanded pricing support with Manapool.com and etched pricing across all providers, improved sealed product data, and numerous bug fixes. Python support has been updated to 3.12-3.14, dropping 3.9-3.10.

### Card Model

#### Added

- Added `tokens` property to [Card (Deck)](/data-models/card/card-deck/#tokens), [Card (Set)](/data-models/card/card-set/#tokens), and [Card (Token)](/data-models/card/card-token/#tokens) which links to the UUIDs of tokens the card creates within the set
- Added `producedMana` property to [Card (Atomic)](/data-models/card/card-atomic/#producedmana), [Card (Deck)](/data-models/card/card-deck/#producedmana), and [Card (Set)](/data-models/card/card-set/#producedmana) indicating what colors of mana a card can produce
- Added `printedName` optional property to [Card (Deck)](/data-models/card/card-deck/#printedname) and [Card (Set)](/data-models/card/card-set/#printedname) for the actual printed name on a card face
- Added `printedType` optional property to [Card (Deck)](/data-models/card/card-deck/#printedtype) and [Card (Set)](/data-models/card/card-set/#printedtype) for the actual printed type line
- Added `printedText` optional property to [Card (Deck)](/data-models/card/card-deck/#printedtext) and [Card (Set)](/data-models/card/card-set/#printedtext) for the actual printed rules text
- Added `isGameChanger` optional property to [Card (Deck)](/data-models/card/card-deck/#isgamechanger) and [Card (Set)](/data-models/card/card-set/#isgamechanger) for Game Changer cards
- Added `tokenProducts` optional property to [Card (Token)](/data-models/card/card-token/#tokenproducts) linking tokens to sealed products that include them

#### Fixed

- Fixed `otherFaceIds` for meld cards having missing or incorrect values
- Fixed `attractionLights` not appearing in AtomicCards
- Fixed `isForeignOnly` property not being set correctly on foreign-only cards
- Fixed `flavorName` and `faceFlavorNames` missing on some cards
- Fixed multipart card side ordering in AtomicCards
- Fixed AtomicCards deduplication selecting wrong printings
- Fixed TDM reversible adventure dragon names

#### Changed

- Changed card sorting to use collector number instead of UUID for consistency
- Changed `relatedCards` property to be optional
- Changed `purchaseUrls` property to be optional
- Removed `convertedManaCost` and `manaValue` from Dungeon cards (they have no mana cost)

### Identifiers Model

#### Added

- Added `cardBackId` optional property to [Identifiers](/data-models/identifiers/#cardbackid) for Scryfall card back identifier
- Added `deckboxId` optional property to [Identifiers](/data-models/identifiers/#deckboxid) for Deckbox identifier
- Added `cardsphereFoilId` optional property to [Identifiers](/data-models/identifiers/#cardspherefoilid) for CardSphere foil variant identifier

### Foreign Data Model

#### Added

- Added `uuid` property to [Foreign Data](/data-models/foreign-data/#uuid) for unique identification
- Added `identifiers` property to [Foreign Data](/data-models/foreign-data/#identifiers) containing full identifier data

#### Fixed

- Fixed UUID mismatch in SQLite output for cardForeignData

#### Deprecated

- Deprecated `multiverseId` property in favor of `identifiers.multiverseId`. Will be removed in `v6.0.0`

### Deck Model

#### Added

- Added `tokens` property to [Deck](/data-models/deck/#tokens) containing token cards used by the deck
- Added `sourceSetCodes` property to [Deck](/data-models/deck/#sourcesetcodes) listing sets the deck's cards come from
- Added support for etched cards in GitHub-sourced decks

#### Changed

- Changed deck file names to use TitleCase formatting

### Set Model

#### Fixed

- Fixed `languages` property not populating correctly
- Fixed `totalSetSize` to be based on true set size rather than face counts

#### Changed

- Changed `token.setCode` to point to the actual set code rather than a token-specific code

### Set List Model

#### Added

- Re-added `sealedProduct` property to [Set List](/data-models/set-list/#sealedproduct)
- Re-added `languages` property to [Set List](/data-models/set-list/#languages)
- Re-added `decks` property to [Set List](/data-models/set-list/#decks)

### Legalities Model

#### Added

- Added support for vehicles and spacecraft cards as valid commanders
- Added support for Battle card type in legality calculations

### Sealed Product Model

#### Added

- Added `finishes` property to Sealed Product Card entries indicating foil availability
- Added sealed product IDs to TCGPlayer SKUs file

#### Changed

- Added `PLAY` and `DRAFT` to sealed product subtypes
- Removed unused `VIP` and `DELUXE` subtypes

### Prices

#### Added

- Added [Manapool.com](https://manapool.com/) as a paper pricing provider in AllPrices and AllPricesToday
- Added etched pricing support for CardKingdom, CardMarket, TCGPlayer, and CardHoarder

#### Changed

- Migrated CardKingdom IDs from MTGBan to the official CardKingdom API
- Migrated to new CardMarket API
- Changed CardMarket pricing from 1-Day Average to Trend pricing

### TCGPlayer SKUs Model

#### Changed

- Changed SKU type fields from string to integer for consistency

### Files

#### Changed

- Implemented streaming compression for improved build performance
- Enhanced MySQL type mapping with compatibility overrides
- Fixed duplicate rows in SQL normalized tables
- Fixed SQLite arrays being written as array structs

### Misc

- Complete rewrite of data pipeline using Polars for improved performance
- MTGJSON now uses [UV](https://github.com/astral-sh/uv) for package management
- MTGJSON now uses [Ruff](https://github.com/astral-sh/ruff) for linting and formatting
- MTGJSON dropped support for Python 3.9 and 3.10
- MTGJSON added support for Python 3.12, 3.13, and 3.14
- Changed wiki links to use MTG.Wiki instead of Fandom
- Daily builds now run instead of weekly

## 5.2.2

Release Date: 2023-09-10

### Announcements

**Welcome to v5.2.2!** With this update, we've put a large focus on Sealed Product, both from building it out and documentation. We have also added a few more new properties, new Data Models, new files (including **AllPricesToday**!) and fixed some bugs. As always, although this changelog does not reflect all the new sets and decks added, MTGJSON will continue to build frequently enough to capture all new products on a daily basis. We've also revamped our documentation a bit for more clarity. Abstract Data Models are now gone and all housed in the Data Models section with their own property definitions.

### Card Model

#### Added

- Added missing `duelDeck` property to [Card (Set)](/data-models/card/card-set/#dueldeck)
- Added missing `isTextless` property to [Card (Token)](/data-models/card/card-token/#istextless)
- Added missing `originalText` property to [Card (Token)](/data-models/card/card-token/#originaltext)
- Added missing `originalType` property to [Card (Token)](/data-models/card/card-token/#originaltype)
- Added `mcm*` properties to the `identifiers` property for [Card (Token)](/data-models/card/card-token/). (Our documentation linked these as a possibility however they were not populating until now)
- Added `artistIds` property to [Card (Deck)](/data-models/card/card-deck/#artistids), [Card (Set)](/data-models/card/card-set/#artistids), and [Card (Token)](/data-models/card/card-token/#artistids)
- Added `sourceProducts` property to [Card (Deck)](/data-models/card/card-deck/#sourceproducts), [Card (Set)](/data-models/card/card-set/#sourceproducts), and [Card (Token)](/data-models/card/card-token/#sourceproducts)
- Added `starterdeck` to `promoTypes` property for [Card (Deck)](/data-models/card/card-deck/), [Card (Set)](/data-models/card/card-set/), and [Card (Token)](/data-models/card/card-token/)
- Added [Card (Set Deck)](/data-models/card/card-set-deck/) Data Model to describe cards within a [Deck (Set)](/data-models/deck-set/)

#### Changed

- Changed `rulings` on Card Data Models to be optional

### Deck Model

#### Added

- Added [Deck (Set)](/data-models/deck-set/) Data Model to describe a Deck within a [Set](/data-models/set/)

### Set Model

#### Added

- Added `decks` property

#### Changed

- Changed `languages` property to be sorted

### Legalities Model

#### Added

- Added missing `oathbreaker` property
- Added missing `paupercommander` property

### Booster Model

#### Added

- Added `fixed` property
- Added `allowDuplicates` property
- Added [Booster Config](/data-models/booster/booster-config/) Data Model to describe configurations of a booster property
- Added [Booster Pack](/data-models/booster/booster-pack/) Data Model to describe configurations of booster packs
- Added [Booster Sheet](/data-models/booster/booster-sheet/) Data Model to describe configurations of cards printed on a sheet for booster packs

#### Changed

- Changed top-level key of `draft` to `default`

### Sealed Product Model

[Sealed Product](/data-models/sealed-product/) is now more documented. More Data Models have been created to describe the `contents` property of a top-level Sealed Product Data Model

#### Added

- Added `cardCount` property
- Added missing `contents` property
- Added [Sealed Product Contents](/data-models/sealed-product/sealed-product-contents/), [Sealed Product (Card)](/data-models/sealed-product/sealed-product-card/), [Sealed Product (Deck)](/data-models/sealed-product/sealed-product-deck/), [Sealed Product (Other)](/data-models/sealed-product/sealed-product-other/), [Sealed Product (Pack)](/data-models/sealed-product/sealed-product-pack/), [Sealed Product (Sealed)](/data-models/sealed-product/sealed-product-sealed/) Data Models to describe the different configurations of sealed products found in the [Sealed Product](/data-models/sealed-product/) Data Model

### AllPrintingsParquetFiles

A series of new files formatted for [Parquet](https://www.databricks.com/glossary/what-is-parquet).

### AllPricesToday

A new file containing card prices for all cards only for the current day.

### Misc

- Exported more Data Models as TypeScript types
- Handle error exceptions from Gatherer
- Handle error exceptions from Scryfall
- Handle crashes if fields are not found
- Allow building of empty sets

## 5.2.1

Release Date: 2023-02-12

### Announcements

**Welcome to v5.2.1!** The MTGJSON team, our contributors, and the community have been working hard with this latest update with focuses on providing more properties, deprecating old properties, and bug fixes. Although this changelog does not reflect all the new sets and decks added, MTGJSON will continue to build frequently enough to capture all new products on a daily basis.

### Card Model

#### Added

- Added `attractionLights` optional property to [Card (Atomic)](/data-models/card/card-atomic/#attractionlights), [Card (Deck)](/data-models/card/card-deck/#attractionlights), and [Card (Set)](/data-models/card/card-set/#attractionlights)
- Added `boosterTypes` optional property to [Card (Deck)](/data-models/card/card-deck/#boostertypes) and [Card (Set)](/data-models/card/card-set/#boostertypes)
- Added `edhrecSaltiness` optional property to [Card (Atomic)](/data-models/card/card-atomic/#edhrecsaltiness), [Card (Deck)](/data-models/card/card-deck/#edhrecsaltiness), and [Card (Set)](/data-models/card/card-set/#edhrecsaltiness)
- Added `firstPrinting` optional property to [Card (Atomic)](/data-models/card/card-atomic/#firstprinting)
- Added `foreignData` optional property to [Card (Atomic)](/data-models/card/card-atomic/#foreigndata)
- Added `isFunny` optional property to [Card (Atomic)](/data-models/card/card-atomic/#isfunny)
- Added `language` property to [Card (Deck)](/data-models/card/card-deck/#language), [Card (Set)](/data-models/card/card-set/#language), and [Card (Token)](/data-models/card/card-token/#language)
- Added `relatedCards` property to all Card Data Models
- Added `subsets` optional property to all Card Data Models

#### Fixed

- Fixed some cards showing side `"b"` for both faces of the card
- Fixed `"meld"` cards in The Brothers' War (`BRO`) set

#### Changed

- Changed `isAlternative` property to be set only on card variants within the same set
- Changed `legalities` property to use the most permissive legalities of the card

#### Deprecated

- Deprecated `isStarter` optional property on [Card (Deck)](/data-models/card/card-deck/#isstarter), and [Card (Set)](/data-models/card/card-set/#isstarter) as it provides no useful data. Will be removed in `v5.3.0`
- Deprecated `reverseRelated` optional property on [Card (Token)](/data-models/card/card-token/#reverserelated) in favor of the `relatedCards` property, described by the [Related Cards](/data-models/related-cards/) Data Model. Will be removed in `v5.3.0`

### Related Cards Model (New)

This new Data Model encapsulates data related to cards that are connected to other cards including the `"spellbook"` mechanic, `"meld"` cards, and token creation.

#### Added

- Added `reverseRelated` optional property to [Related Cards](/data-models/related-cards/#reverserelated)
- Added `spellbook` optional property to [Related Cards](/data-models/related-cards/#spellbook)

### Legalities Model

#### Added

- Added `explorer` optional property to [Legalities](/data-models/legalities/#explorer)

#### Removed

- Removed `frontier` optional property

### Identifiers Model

#### Added

- Added `mtgjsonFoilVersionId` optional property to [Identifiers](/data-models/identifiers/#mtgjsonfoilversionid)
- Added `mtgjsonNonFoilVersionId` optional property to [Identifiers](/data-models/identifiers/#mtgjsonnonfoilversionid)

#### Fixed

- Fixed `scryfallOracleId` property not appearing on some cards

### Set Model

#### Added

- Added `languages` property to [Set](/data-models/set/#languages)
- Added `tokenSetCode` optional property to [Set](/data-models/set/#tokensetcode)

#### Fixed

- Fixed `translations` not having values

### Sealed Product Model

#### Added

- Added `category` optional property to [Sealed Product](/data-models/sealed-product/#category)
- Added `subtype` optional property to [Sealed Product](/data-models/sealed-product/#subtype)
- Added `productSize` optional property to [Sealed Product](/data-models/sealed-product/#productsize)

### Enum Values Model

#### Added

- Added `language` property to `card` property
- Added `boosterTypes` property to `card` property
- Added `condition`, `finishes`, `language`, and `printing` properties to a new `tcgplayerSkus` property

### Misc

- MTGJSON dropped support for Python 3.6
- MTGJSON added support for Python 3.11
- MTGJSON no longer requires a configuration file
- MTGJSON now queries Gatherer for Multiverse ID as a fallback
- Documentation now uses [VitePress](https://vitepress.vuejs.org/) under the hood

## 5.2.0

Release Date: 2021-12-20

### Announcements

**Welcome to v5.2.0!** With this update we've added a lot of new Card Data Model properties with a focus on Card identification. Some of these new properties are signatures, stamps, and finishes. Also, some properties were deprecated with various slates of removal.

We want to remind everyone that while this Changelog can show updates to new Sets that have dropped and our added support for them. MTGJSON will continue to build frequently enough to have this new data without major or minor updates to the application or Changelog. You can always see the current build date using the [Meta](https://mtgjson.com/api/v5/Meta.json) JSON file and observing the date property or the date appended to the version number.

### Card Model

#### Added

- Added `manaValue` property [Card (Atomic)](/data-models/card/card-atomic/#manavalue), [Card (Deck)](/data-models/card/card-deck/#manavalue), and [Card (Set)](/data-models/card/card-set/#manavalue)
- Added `isFunny` optional property to [Card (Deck)](/data-models/card/card-deck/#isfunny), [Card (Set)](/data-models/card/card-set/#isfunny), and [Card (Token)](/data-models/card/card-token/#isfunny)
- Added `finishes` property to [Card (Deck)](/data-models/card/card-deck/#finishes), [Card (Set)](/data-models/card/card-set/#finishes), and [Card (Token)](/data-models/card/card-token/#finishes)
- Added `cardParts` optional property to [Card (Deck)](/data-models/card/card-deck/#cardparts), [Card (Set)](/data-models/card/card-set/#cardparts), and [Card (Token)](/data-models/card/card-token/#cardparts)
- Added `securityStamp` optional property to [Card (Deck)](/data-models/card/card-deck/#securitystamp), [Card (Set)](/data-models/card/card-set/#securitystamp), and [Card (Token)](/data-models/card/card-token/#securitystamp)
- Added `faceManaValue` optional property to [Card (Atomic)](/data-models/card/card-atomic/#facemanavalue), [Card (Deck)](/data-models/card/card-deck/#facemanavalue), and [Card (Set)](/data-models/card/card-set/#facemanavalue)
- Added `faceFlavorName` optional property to [Card (Deck)](/data-models/card/card-deck/#faceflavorname), [Card (Set)](/data-models/card/card-set/#faceflavorname), and [Card (Token)](/data-models/card/card-token/#faceflavorname)
- Added `signature` optional property to [Card (Deck)](/data-models/card/card-deck/#signature), [Card (Set)](/data-models/card/card-set/#signature), and [Card (Token)](/data-models/card/card-token/#signature)
- Added `isRebalanced` optional property to [Card (Deck)](/data-models/card/card-deck/#isrebalanced) and [Card (Set)](/data-models/card/card-set/#isrebalanced)
- Added `rebalancedPrintings` optional property to [Card (Deck)](/data-models/card/card-deck/#rebalancedprintings) and [Card (Set)](/data-models/card/card-set/#rebalancedprintings)
- Added `originalPrintings` optional propertiy to [Card (Deck)](/data-models/card/card-deck/#originalprintings) and [Card (Set)](/data-models/card/card-set/#originalprintings)
- Added `otherFaceIds` property to [Card (Token)](/data-models/card/card-token/#otherfaceids)
- Added support for `"Dungeon"` cards in Card (Atomic)

#### Fixed

- Fixed dual-faced cards having the wrong mana value on its face
- Fixed `hasAlternativeDeckLimit` property for `Seven Dwarves` being incorrect
- Fixed `isAlternative` property for cards in the `CMR` and `JMP` sets
- Fixed `Grist, the Hunger Tide` not being a valid commander
- Fixed `releaseDate` property not getting set on `"flip"` cards
- Fixed an issue where duplicates of the `uuid` property were being set on Adventures in the Forgotten Realms Art Series (`AAFR`) tokens
- Fixed an issue where flavor names were not set correctly for certain foreign cards
- Fixed an issue caused by a source having its printed text not providing line breaks

#### Deprecated

- Deprecated `convertedManaCost` property in favor of `manaValue` property. Will be removed in `v6.0.0`
- Deprecated `faceConvertedManaCost` optional property in favor of `faceManaValue` optional property. Will be removed in `v6.0.0`
- Deprecated `hasFoil` and `hasNonFoil` properties in favor of `finishes` property. Will be removed in `v5.3.0`

### Set Model

#### Added

- Added `sealedProduct` optional property to [Set](/data-models/set/#sealedproduct) (This is still a WIP, but the foundation is now available)

#### Fixed

- Fixed an issue where the French name of `"Eldritch Moon"` was incorrect

### Foreign Data Model

#### Fixed

- Fixed an issue where data was not getting set

### Identifiers Model

#### Added

- Added `tcgplayerEtchedProductId` optional property to [Identifiers](/data-models/identifiers/#tcgplayeretchedproductid)
- Added `cardKingdomEtechedId` optional property to [Identifiers](/data-models/identifiers/#cardkingdometchedid)

#### Changed

- Changed `scryfallOracleId` property to be optional

### Purchase Urls Model

#### Added

- Added `tcgplayerEtched` optional property to [Purchase Urls](/data-models/purchase-urls/#tcgplayeretched)
- Added `cardKingdomEtched` optional property to [Purchase Urls](/data-models/purchase-urls/#cardkingdometched)

### Legalities Model

#### Added

- Added `gladiator` property to [Legalities](/data-models/legalities/#gladiator)
- Added `historicbrawl` property to [Legalities](/data-models/legalities/#historicbrawl)
- Added `oldschool` property to [Legalities](/data-models/legalities/#oldschool)
- Added `premodern` property to [Legalities](/data-models/legalities/#premodern)

### Enum Values Model

#### Added

- Added `finishes` property to `card` model

### Keywords Model

#### Fixed

- Fixed `abilityWords` property showing wrong values

### Tcgplayer Skus Model

#### Added

- Added `finishes` property to [Tcgplayer Skus](/data-models/tcgplayer-skus/#finishes)

### Misc

- MTGJSON now supports Python 3.6 - 3.10
- Better handle Gatherer downtime halting builds
- Merged some File Models and Abstract Data Models within the documentation to the Data Model category for more clarity and ease of use. This in no way changes how and where the data files are downloaded or how their models are formed.

## 5.1.0

Release Date: 2021-01-18

### Announcements

**Welcome to v5.1.0!** With this release we are no longer supporting Version 4, so if you have not already, please update all your sources to the Version 5 endpoints to ensure your applications function correctly going forward.

**Note: With this release, MTGJSONv4 has been fully deprecated. On February 28th, 2021 all v4 endpoints will be removed.**

### Card Model

#### Added

- Added `originalReleaseDate` optional property to [Card (Deck)](/data-models/card/card-deck/#originalreleasedate) and [Card (Set)](/data-models/card/card-set/#originalreleasedate)
- Added `keywords` property to [Card (Atomic)](/data-models/card/card-atomic/#keywords)
- Added `asciiName` property to [Card (Atomic)](/data-models/card/card-atomic/#asciiname)
- Added `identifiers` property to [Card (Atomic)](/data-models/card/card-atomic/#identifiers)

#### Changed

- Changed `layout` property to be set to `"token"` if the set is only tokens

#### Fixed

- Fixed cards with `art_series` type
- Fixed `isAlternative` property for cards within a single set (Thanks, kodabb!)

### Set Model

#### Added

- Added `mcmIdExtras` optional property to [Set](/data-models/set/#mcmidextras) (Thanks, mjainta!)

### Set List Model

- Added `sealedProduct` optional property to [Set List](/data-models/set-list/#sealedproduct)
- Added `mcmIdExtras` optional property to [Set List](/data-models/set-list/#mcmidextras)

### Deck Model

#### Added

- Added `commander` optional property to [Deck](/data-models/deck/#commander)

### Deck List Model

#### Added

- Added `type` property to [Deck List](/data-models/deck-list/#type)

### Legalities Model

#### Added

- Added `historic` optional property to [Legalities](/data-models/legalities/#historic)

#### Fixed

- Fixed broken link to [Keyrune](https://keyrune.andrewgioia.com/)

### Set Model

#### Fixed

- Fixed Salvat 2005 (`PSAL`) to be now correctly marked as foreign (Thanks, silasary!)

### Files

#### Added

- Added `TcgplayerSkus.*` file which contains TCGplayer SKU information organized by a card's `uuid` property
- Added `currency` property to `AllPrices` file (Thanks, tpblaster!)

#### Updated

- Updated the order of keys so that the `meta` key appears at the top

### Misc

- MTGJSON has dropped TravisCI support in favor of GitHub Actions (Thanks, ebbit1q!)
- Fixed a documentation issue where Data Models without optional properties were able to be filtered

## 5.0.1

Release Date: 2020-08-24

### Announcements

**Welcome to v5.0.1!** We've made some minor changes to Data Models with a big push to release a new file: _AllIdentifiers_!

### Card Model

#### Added

- Added `setCode` property to [Card (Deck)](/data-models/card/card-deck/#setcode), [Card (Set)](/data-models/card/card-set/#setcode), and [Card (Token)](/data-models/card/card-token/#setcode)

### Foreign Data Model

#### Added

- Added `faceName` optional property to [Foreign Data](/data-models/foreign-data/#facename)

### Set Model

#### Fixed

- Fixed some `translation` property inaccuracies
- Fixed some `keyruneCode` property inaccuracies

### Files

#### Added

- Added `AllIdentifiers.*` file for download which contains all cards organized by a card's `uuid` property

## 5.0.0

Release Date: 2020-07-03

### Announcements

**Welcome to v5.0.0!** We are proud to announce the 5th major release of MTGJSON. The team has made big improvements including a new “API” endpoint to serve files. We have also given our documentation an overhaul - including upgrading our server to run on Nginx.

We are also pleased to announce the addition of `booster` optional property defined with the help of the [Booster Config](/data-models/booster/booster-config/) Data Model on the [Set](/data-models/set/) Data Model.

The MTGJSON team we would like to thank the community for its continued support and we look forward to serving you well.

### Card Model

#### Added

- Added `hasAlternativeDeckLimit` optional property to [Card (Atomic)](/data-models/card/card-atomic/#hasalternativedecklimit), [Card (Deck)](/data-models/card/card-deck/#hasalternativedecklimit), and [Card (Set)](/data-models/card/card-set/#hasalternativedecklimit)
- Added `promoTypes` optional property to [Card (Deck)](/data-models/card/card-deck/#promotypes), [Card (Set)](/data-models/card/card-set/#promotypes), and [Card (Token)](/data-models/card/card-token/#promotypes)
- Added and back-ported `hasContentWarning` property to [Card (Deck)](/data-models/card/card-deck/#hascontentwarning) and [Card (Set)](/data-models/card/card-set/#hascontentwarning) (Cards that are marked by [Wizards of the Coast](https://company.wizards.com) for having sensitive content)
- Added `variations` optional property to [Card (Deck)](/data-models/card/card-deck/#variations) and [Card (Set)](/data-models/card/card-set/#variations)
- Added `keywords` property to [Card (Atomic)](/data-models/card/card-atomic/#keywords), [Card (Deck)](/data-models/card/card-deck/#keywords), [Card (Set)](/data-models/card/card-set/#keywords), and [Card (Token)](/data-models/card/card-token/#keywords)
- Added `faceName` optional property to [Card (Atomic)](/data-models/card/card-atomic/#facename), [Card (Deck)](/data-models/card/card-deck/#facename), [Card (Set)](/data-models/card/card-set/#facename), and [Card (Token)](/data-models/card/card-token/#facename)

#### Changed

- Changed `"Meld"` cards `name` and `side` properties to be more clear. Example: `"Gisela, the Broken Blade // Brisela, Voice of Nightmares"` (side a), `"Bruna, the Fading Light // Brisela, Voice of Nightmares"` (side a), and `"Brisela, Voice of Nightmares"` (side b)
- Changed `mcmId`, `mcmMetaId`, `mtgoFoilId`, `mtgoId`, `multiverseId`, `scryfallId`, `scryallIllustrationId`, `scryfallOracleId`, and `tcgplayerProductId` properties to be nested in to a new `identifiers` property. `mtgstocksId` was removed for redundancy
- Changed `isArena`, `isMtgo`, and `isPaper` properties to be nested inside a new `availability` property. Values return a string of the available property. See the available examples for all the values
- Changed `isBuyABox`, `isBundle`, `isPlaneswalkerStamped`, and `isDateStamped` properties to be nested in to a new `promoTypes` property
- Changed `name` property to show full split card names (name1 // name2)
- Changed `name` property to be verbatim as printed on the card (see Unglued variants for example)
- Changed `names` property to `otherFaceIds` property
- Changed `uuid` property for all tokens and split cards
- Changed `hasNoDeckLimit` property to `hasAlternativeDeckLimit` property

#### Removed

- Removed `prices` property in favor of a dedicated `AllPrices` file

### Set Model

#### Added

- Added `booster` optional property to [Set](/data-models/set/#booster)

#### Removed

- Removed `boosterV3` property

### Identifiers Model

#### Added

- Added `mtgjsonV4Id` optional property to [Identifiers](/data-models/identifiers/#mtgjsonv4id) to help transition developer code

### Files

#### Changed

- Changed all file downloads to be available via the `/api/v5/*` web-based url
- Changed `AllCards` file to renamed `AtomicCards` to better clarify that these files only contain atomic card data
- Changed `[Format]Printings` files to be renamed to just their format name: `Modern`, `Legacy`, etc
- Changed the `version` file to renamed `Meta`
- Changed all files to use a top-level `data` and `meta` key. Any Data Models inside of `data` will lose the nested `meta` object

#### Added

- Added SHA-256 file validation for every file, downloadable at the file location and file name with an appended `.sha256` format
- Added `AllPrices` file to collect card prices based on a card's `uuid` property with a **limited** history of prices available. Contains paper prices from [tcgplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson), [cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson), and [cardkingdom](https://www.cardkingdom.com/?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson); mtgo prices from [cardhoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card)

### Misc

- Added `Phyrexian` language where language data is available
- The documentation application server was switched over to Nginx
- Documentation data "Structures" are now named "Data Models"
- Data Models now reference their parent keys and parent files more accurately
- Data Models now have the "optional" tag marked on properties for clarity
- More Data Models are more clearly defined now that the files deliver all the same top-level keys
- Atomic Cards are now documented outright as a [Card (Atomic)](/data-models/card/card-atomic/) Data Model for clarity
- Property value examples were added for properties with enumuerated values from `EnumValues.json`
- You can now toggle optional properties on/off within documentation. If all properties are optional, then the UI is disabled
- You can now open a link to create a PR for a specific documentation page from the footer
