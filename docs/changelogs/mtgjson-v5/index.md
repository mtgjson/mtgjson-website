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

## 5.2.1

Release Date: 2023-02-12

### Announcements

**Welcome to v5.2.1!** The MTGJSON team, our contributors, and the community have been working hard with this latest update with focuses on providing more properties, deprecating old properties, and bug fixes. Although this changelog does not reflect all the new sets and decks added, MTGJSON will continue to build frequently enough to capture all new products on a daily basis.

As always, if you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the <a href="https://github.com/mtgjson/mtgjson" target="_blank">MTGJSON Repository</a> or the <a href="https://github.com/mtgjson/mtgjson-website" target="_blank">Documentation Repository</a>. If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> (recurring donations).

### Card Model

#### Added

- Added `attractionLights` optional property to [Card (Atomic)](/data-models/card-atomic/#attractionlights), [Card (Deck)](/data-models/card-deck/#attractionlights), and [Card (Set)](/data-models/card-set/#attractionlights)
- Added `boosterTypes` optional property to [Card (Deck)](/data-models/card-deck/#boostertypes) and [Card (Set)](/data-models/card-set/#boostertypes)
- Added `edhrecSaltiness` optional property to [Card (Atomic)](/data-models/card-atomic/#edhrecsaltiness), [Card (Deck)](/data-models/card-deck/#edhrecsaltiness), and [Card (Set)](/data-models/card-set/#edhrecsaltiness)
- Added `firstPrinting` optional property to [Card (Atomic)](/data-models/card-atomic/#firstprinting)
- Added `foreignData` optional property to [Card (Atomic)](/data-models/card-atomic/#foreigndata)
- Added `isFunny` optional property to [Card (Atomic)](/data-models/card-atomic/#isfunny)
- Added `language` property to [Card (Deck)](/data-models/card-deck/#language), [Card (Set)](/data-models/card-set/#language), and [Card (Token)](/data-models/card-token/#language)
- Added `relatedCards` property to all Card Data Models
- Added `subsets` optional property to all Card Data Models

#### Fixed

- Fixed some cards showing side `"b"` for both faces of the card
- Fixed `"meld"` cards in The Brothers' War (`BRO`) set

#### Changed

- Changed `isAlternative` property to be set only on card variants within the same set
- Changed `legalities` property to use the most permissive legalities of the card

#### Deprecated

- Deprecated `isStarter` optional property on [Card (Deck)](/data-models/card-deck/#isstarter), and [Card (Set)](/data-models/card-set/#isstarter) as it provides no useful data. Will be removed in `v5.3.0`
- Deprecated `reverseRelated` optional property on [Card (Token)](/data-models/card-token/#reverserelated) in favor of the `relatedCards` property, described by the [Related Cards](/data-models/related-cards/) Data Model. Will be removed in `v5.3.0`

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

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the <a href="https://github.com/mtgjson/mtgjson" target="_blank">MTGJSON Repository</a> or the <a href="https://github.com/mtgjson/mtgjson-website" target="_blank">Documentation Repository</a>. If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> (recurring donations).

### Card Model

#### Added

- Added `manaValue` property [Card (Atomic)](/data-models/card-atomic/#manavalue), [Card (Deck)](/data-models/card-deck/#manavalue), and [Card (Set)](/data-models/card-set/#manavalue)
- Added `isFunny` optional property to [Card (Deck)](/data-models/card-deck/#isfunny), [Card (Set)](/data-models/card-set/#isfunny), and [Card (Token)](/data-models/card-token/#isfunny)
- Added `finishes` property to [Card (Deck)](/data-models/card-deck/#finishes), [Card (Set)](/data-models/card-set/#finishes), and [Card (Token)](/data-models/card-token/#finishes)
- Added `cardParts` optional property to [Card (Deck)](/data-models/card-deck/#cardparts), [Card (Set)](/data-models/card-set/#cardparts), and [Card (Token)](/data-models/card-token/#cardparts)
- Added `securityStamp` optional property to [Card (Deck)](/data-models/card-deck/#securitystamp), [Card (Set)](/data-models/card-set/#securitystamp), and [Card (Token)](/data-models/card-token/#securitystamp)
- Added `faceManaValue` optional property to [Card (Atomic)](/data-models/card-atomic/#facemanavalue), [Card (Deck)](/data-models/card-deck/#facemanavalue), and [Card (Set)](/data-models/card-set/#facemanavalue)
- Added `faceFlavorName` optional property to [Card (Deck)](/data-models/card-deck/#faceflavorname), [Card (Set)](/data-models/card-set/#faceflavorname), and [Card (Token)](/data-models/card-token/#faceflavorname)
- Added `signature` optional property to [Card (Deck)](/data-models/card-deck/#signature), [Card (Set)](/data-models/card-set/#signature), and [Card (Token)](/data-models/card-token/#signature)
- Added `isRebalanced` optional property to [Card (Deck)](/data-models/card-deck/#isrebalanced) and [Card (Set)](/data-models/card-set/#isrebalanced)
- Added `rebalancedPrintings` optional property to [Card (Deck)](/data-models/card-deck/#rebalancedprintings) and [Card (Set)](/data-models/card-set/#rebalancedprintings)
- Added `originalPrintings` optional propertiy to [Card (Deck)](/data-models/card-deck/#originalprintings) and [Card (Set)](/data-models/card-set/#originalprintings)
- Added `otherFaceIds` property to [Card (Token)](/data-models/card-token/#otherfaceids)
- Added support for `"Dungeon"` cards in Card (Atomic)

#### Fixed

- Fixed dual-faced cards having the wrong mana value on its face
- Fixed `hasAlternativeDeckLimit` property for `Seven Dwarves` being incorrect
- Fixed `isAlternative` property for cards in the `CMR` and `JMP` sets
- Fixed `Grist, the Hunger Tide` not being a valid commander
- Fixed `releaseDate` property not getting set on `"flip"` cards
- Fixed an issue where duplicate UUID's were being set on Adventures in the Forgotten Realms Art Series (`AAFR`) tokens
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
- Merged some File Models and Abstract Models within the documentation to the Data Model category for more clarity and ease of use. This in no way changes how and where the data files are downloaded or how their models are formed.

## 5.1.0

Release Date: 2021-01-18

### Announcements

**Welcome to v5.1.0!** With this release we are no longer supporting Version 4, so if you have not already, please update all your sources to the Version 5 endpoints to ensure your applications function correctly going forward.

**Note: With this release, MTGJSONv4 has been fully deprecated. On February 28th, 2021 all v4 endpoints will be removed.**

We're rolling out MTGGraphQL! For more information see the [MTGGraphQL](/mtggraphql/) documentation. Access during our beta rollout is limited to <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> supporters. A GraphQL GUI can be accessed via <a href="https://graphql.mtgjson.com/" target="_blank" rel="noreferrer noopener">MTGGraphQL Playground</a>

### Card Model

#### Added

- Added `originalReleaseDate` optional property to [Card (Deck)](/data-models/card-deck/#originalreleasedate) and [Card (Set)](/data-models/card-set/#originalreleasedate)
- Added `keywords` property to [Card (Atomic)](/data-models/card-atomic/#keywords)
- Added `asciiName` property to [Card (Atomic)](/data-models/card-atomic/#asciiname)
- Added `identifiers` property to [Card (Atomic)](/data-models/card-atomic/#identifiers)

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

- Added `TcgplayerSkus.*` file which contains TCGplayer SKU information organized by card UUID
- Added `currency` property to `AllPrices` file (Thanks, tpblaster!)

#### Updated

- Updated the order of keys so that the `meta` key appears at the top

### Misc

- MTGJSON has dropped TravisCI support in favor of GitHub Actions (Thanks, ebbit1q!)
- Fixed a documentation issue where Data Models without optional properties were able to be filtered

## 5.0.1

Release Date: 2020-08-24

### Announcements

**Welcome to v5.0.1!** We've made some minor changes to Data Models with a big push to release a new file: *AllIdentifiers*!

### Card Model

#### Added

- Added `setCode` property to [Card (Deck)](/data-models/card-deck/#setcode), [Card (Set)](/data-models/card-set/#setcode), and [Card (Token)](/data-models/card-token/#setcode)

### Foreign Data Model

#### Added

- Added `faceName` optional property to [Foreign Data](/data-models/foreign-data/#facename)

### Set Model

#### Fixed

- Fixed some `translation` property inaccuracies
- Fixed some `keyruneCode` property inaccuracies

### Files

#### Added

- Added `AllIdentifiers.*` file for download which contains all cards organized by UUID

## 5.0.0

Release Date: 2020-07-03

### Announcements

**Welcome to v5.0.0!** We are proud to announce the 5th major release of MTGJSON. The team has made big improvements including a new “API” endpoint to serve files. We have also given our documentation an overhaul - including upgrading our server to run on Nginx.

We are also pleased to announce the addition of `booster` optional property defined as the [Booster](/abstract-models/booster/) Abstract Model on the [Set](/data-models/set/) Data Model.

If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the <a href="https://github.com/mtgjson/mtgjson" target="_blank">MTGJSON Repository</a> or the <a href="https://github.com/mtgjson/mtgjson-website" target="_blank">Documentation Repository</a>. If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> (recurring donations).

The MTGJSON team we would like to thank the community for its continued support and we look forward to serving you well.

### Card Model

#### Added

- Added `hasAlternativeDeckLimit` optional property to [Card (Atomic)](/data-models/card-atomic/#hasalternativedecklimit), [Card (Deck)](/data-models/card-deck/#hasalternativedecklimit), and [Card (Set)](/data-models/card-set/#hasalternativedecklimit)
- Added `promoTypes` optional property to [Card (Deck)](/data-models/card-deck/#promotypes), [Card (Set)](/data-models/card-set/#promotypes), and [Card (Token)](/data-models/card-token/#promotypes)
- Added and back-ported `hasContentWarning` property to [Card (Deck)](/data-models/card-deck/#hascontentwarning) and [Card (Set)](/data-models/card-set/#hascontentwarning) (Cards that are marked by [Wizards of the Coast](https://company.wizards.com) for having sensitive content)
- Added `variations` optional property to [Card (Deck)](/data-models/card-deck/#variations) and [Card (Set)](/data-models/card-set/#variations)
- Added `keywords` property to [Card (Atomic)](/data-models/card-atomic/#keywords), [Card (Deck)](/data-models/card-deck/#keywords), [Card (Set)](/data-models/card-set/#keywords), and [Card (Token)](/data-models/card-token/#keywords)
- Added `faceName` optional property to [Card (Atomic)](/data-models/card-atomic/#facename), [Card (Deck)](/data-models/card-deck/#facename), [Card (Set)](/data-models/card-set/#facename), and [Card (Token)](/data-models/card-token/#facename)

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
- Added `AllPrices` file to collect card prices based on Card UUID with a **limited** history of prices available. Contains paper prices from [tcgplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson), [cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson), and [cardkingdom](https://www.cardkingdom.com/?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson); mtgo prices from [cardhoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card)

### Misc

- Added `Phyrexian` language where language data is available
- The documentation application server was switched over to Nginx
- Documentation data "Structures" are now named "Data Models"
- Data Models now reference their parent keys and parent files more accurately
- Data Models now have the "optional" tag marked on properties for clarity
- More Data Models are more clearly defined now that the files deliver all the same top-level keys
- Atomic Cards are now documented outright as a [Card (Atomic)](/data-models/card-atomic/) Data Model for clarity
- Property value examples were added for properties with enumuerated values from `EnumValues.json`
- You can now toggle optional properties on/off within documentation. If all properties are optional, then the UI is disabled
- You can now open a link to create a PR for a specific documentation page from the footer
