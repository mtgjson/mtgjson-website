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

Below you will find all the changes made on each MTGJSON build release. Versions marked as rebuilds are fully backwards compatible with the release and contain updates for fields that require more frequent updating (e.g. prices and EDH Rank), as well as data improvements.

## 4.6.0 <small>(2019-10-28)</small>
### Announcements
<img src="/images/assets/logo-mtgjson-thumbnail.png" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="New MTGJSON Logo"/>Since the release of MTJSON v4.5.0, we've been working hard on bringing more and more data for our users. Today, we are pleased to announce several awesome changes coming to the project.

First, this release is the first of many releases to be compiled on AWS infrastructure. Thanks to the kind folks who have and continue to pledge on our [Patreon page](https://patreon.com/mtgjson), we are able to offer **daily builds of MTGJSON**! For the time being, we only plan on building price data daily, but we plan on expanding that further to full data releases as well.

Speaking of pricing, we now have MTGO pricing available thanks to our friends at [CardHoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card)! This expands our lineup to supporting both paper and digital, with foil and non-foil variants. With the increase of price data available, we have made the decision to separate price data from card data. Price data can now be found within `Prices.json` (and compressed versions), indexable via [MTGJSON UUIDs](https://mtgjson.com/structures/card/#uuid). We hope these daily price updates will help keep your projects on top of the world.

Next, in order to alleviate a large percentage of confusion with our project, we have renamed `AllSets` to `AllPrintings`, with better descriptions and upgraded site layouts. Redirects will be in place to ensure current projects do not suffer due to this change.

Finally, we have several new compiled download-ables available. You can find more information on that down below. We now support JSON, SQL, SQLite, and CSV downloads of many components. With this change, we have renamed our `/json/<filename>` endpoint to `/files/<filename>`. More information found below.

As we've said before, and will continue to reiterate: The future looks bright for MTGJSON and we would like to thank the community for its continued support and we look forward to serving you well.


### Cards
#### Added
- Digital Pricing, courtesy of CardHoarder!
	- `prices[mtgo]` and `prices[mtgoFoil]`
- `frameEffects`, which is an enhancement of `frameEffect`.
- Support for pioneer in `legalities`.
#### Changed
- `prices` map will only contain one entry for each field, maximum
	- Full price data can be found in the new `Prices` file :)

#### Deprecated
- `frameEffect` slated for removal in 4.7.0, superseded by `frameEffects`.

### Sets
#### Changed
- Added Throne of Eldraine draft booster information.

### Tokens
### Added
- `supertypes`, `subtypes`, and `types`.
- Brackets around planeswalker text (if necessary).

### Fixed
- `uuid` re-added for Tokens... sorry.
- That one weird `duelDeck = c` entry is fixed.

### Other
### Added
- New format download files have arrived!
	- New Lineup: `StandardPrintings`, `PioneerPrintings`, `ModernPrintings`, `LegacyPrintings`, `VintagePrintings`.
- New unique card download files, too!
	- New Lineup: `StandardCards`, `PioneerCards`, `ModernCards`, `LegacyCards`, `VintageCards`, and `PauperCards`.
- Better documentation for new contributors.
- AWS Support integrated! Automated builds will occur daily for prices, with full builds happening weekly on Sundays!
- MTGJSON Pricing data split up into its own file: `Prices`.
- CSV support has arrived! Downloads based on `AllPrintings` types will be available in CSV format.
- SQL support has arrived! `AllPrintings.sql` can easily be imported into an SQL database.

### Changed
- Downloading files has moved from `/json/<filename>` to `/files/<filename>`, to accomodate our change in file offerings. The `/json/` access point is deprecated, but can still be used. We will continue supporting this endpoint for the foreseeable future.
- Versioning will now include `MAJ.MIN.PATCH+YYYYMMDD` to indicate the build date (instead of `rebuild.X`)

### Fixed
- `Keywords` fixed to handle yet another Wizards change

## 4.5.1 <small>(2019-09-23)</small>

### Cards
#### Added
- `leadershipSkills` which identifies what format a card is a legal commander in.
- `hasNoDeckLimit` to indicate a card has a unique deck restriction.
    - `Seven Dwarves` was revealed the day after this feature went live... We'll be working on a change, so this field will come right away with a deprecation notice, with removal slated for `4.6.0`.
- Support for `adventure` type cards.

### Sets
#### Added
- Throne of Eldraine (`ELD`)
    - GathererIDs will be added in a future weekly build
- Throne of Eldraine Promos (`PELD`)
- Throne of Eldraine Collectors Product (`CELD`)

### Other
#### Changed
- The outputs of MTGJSON are now minified.
    - `--pretty-outputs` can be passed to the build to have pretty outputs.

#### Fixed
- `Keywords.json` had some issues due to Wizards change of file formats (again...).
- Bad internal caching of translations.

## 4.5.0 <small>(2019-08-11)</small>

### Announcements
<img src="/images/assets/logo-mtgjson-thumbnail.png" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="New MTGJSON Logo"/>We are pleased to introduce MTGJSON v4.5.0, a substantial update to the MTGJSON project. This release debuts our brand new website, and we can't be happier with the results! With improved documentation and dark mode support, the website will accommodate a wide range of ideas and projects, no matter a expertise. The site also comes with an upgrade to our brand image; with an amazing new logo! The future looks bright for MTGJSON and we would like to thank the community for its continued support and we look forward to serving you well.

### Cards
#### Added
- `edhrecRank` Rank of card on [EDHRec.com](https://www.edhrec.com)
- `mtgArenaId` self explanatory
- `mtgoFoilId` self explanatory
- `mtgoId` self explanatory

#### Changed
- `text` for Planeswalkers now has brackets around costs
    -  Ex: `"-2:"` is now `"[-2]:"`

#### Removed
- `tcgplayerPurchaseUrl` has been removed (deprecated in 4.4.0)

#### Fixed
- `artist` fixed for split cards
- `printings` now has all entries

### Sets
#### Added
- Commander: 2019 (`C19`)
- `isPartialPreview` to denote a set is in spoiler mode and may not be complete
- `boosterV3` values for newer sets

### Tokens
#### Removed
- `duelDeck` as it's too hard to determine the correct value right now

### Other
- A brand new site and logo!
- Better caching of MTGJSON resources
- Build command improvements
- Update TCGPlayer API to 1.32.0
- Added `baseSetSize` and `totalSetSize` to `SetList.json` entries

## 4.4.2 <small>(2019-06-26)</small>

### Announcements

<img src="/images/mit-license.jpg" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="MIT License"/>With the 4.4.2 release of MTGJSON, we have officially changed licenses for our project. From this point onward, all code and content are available under the MIT license. We felt that GPLv3 was a bit too restrictive for what we aim to achieve: free, open data for all who have an interest in Magic: the Gathering and development. We look forward to serving our users and cannot wait to see what you can create!<br/><br/>

Do you have a project that uses MTGJSON? Please reach out to us and we will get your project added to our homepage! Want to move up on the list? Consider supporting MTGJSON via [Patreon](https://patreon.com/mtgjson).

### Cards
#### Added
- Foil paper prices have arrived! `prices[paperFoil]`
- `isFullArt` for cards that are full art (duh)
- `isTextless` cards that normally have a text box, but don't here
- `isStorySpotlight` cards that have a story spotlight
- `isReprint` given to all cards that see their 2nd or more printing
- `isReprint` given to all cards which are a reprint (cards that are not newly printed)
- `isPromo` given to cards that are promotional print
- `isPaper` is the card available in paper
- `isMtgo` is the card available on MTGO
- `isArena` is the card available on MTG Arena
- `variations` for Tamiyo's Journal printings added

#### Changed
- TCGPlayer API updated to 1.27.0

### Decks
#### Changed
- Naming conventions changed to `DeckName_SETCODE`

#### Fixed
- Duplicate cards in decks addressed with better handling

### Sets
#### Added
- Magic Core 2020 (`M20`)
     - GathererIDs will be added in a future weekly build

#### Fixed
- `HHO` has `variations` field for cards now instead of the (B), (C), ...
- `boosterV3` details added for several sets
- `10E` foil cards `printedText` fields better parsed

### Tokens
#### Fixed
- `layout` handled better now with emblems

### Other
#### Fixed
- Better handling of empty keys file when building

## 4.4.1 <small>(2019-06-04)</small>

### Cards
#### Fixed
- `isAlternative` for WAR planeswalkers
- Planes now have correct super/sub types
- Minor corrections to fields among cards

### Sets
#### Added
- Modern Horizons (`MH1`)
- Signature Spellbook: Gideon (`SS2`)
- `isForeignOnly` key for sets that are not natively printed in English

#### Fixed
- Handle `GS1` not getting `duelDeck` sides
- `PRNA` not showing correctly in `AllSets` addressed

### Decks
#### Added
- Incorporate `count` and `isFoil` for pre-cons


### Other
#### Fixed
- `--skip-keys` will now skip MTGStocks
- Rules went to UTF-8 format, updated parser

#### Removed
- `AllCards` no longer has `prices` as they are not atomic


## 4.4.0 <small>(2019-04-28)</small>

### Announcements

<a href="https://patreon.com/mtgjson" target="_blank"><img src="/images/icon-patreon.svg" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="MTGJSON"/></a> MTGJSON has long been a free and open-sourced project made for the community, by the community. As time has gone on, our financial situation have unfortunately changed and we are looking for your help. While MTGJSON will continue to be a free service forever, the development team has put together a few small perks for those who would like to help support continued and active development of the project, whether it be via code contributions or financial support. If you have benefited from the MTGJSON project in the past and can spare a few dollars a month, we have launched a [Patreon](https://patreon.com/mtgjson) to help cover the costs of development and upkeep. You can see [our current supporters](https://mtgjson.com/#patreon-supporters) on the homepage. We look forward to actively serving the community well and thank you for your support!<br/><br/>

<a href="https://www.mtgstocks.com/news?utm_campaign=mtgjson&utm_medium=mtgjson&utm_source=mtgjson" target="_blank"><img src="/images/avatar-mtgstocks.jpg" style="max-height: 100px; float: left; margin: 0px 15px 15px 0px;" alt="MTGStocks"/></a> MTGJSON strives to provide our users with the most accurate and complete data possible. As such, we are always looking for new sources to enrich our content. One of the most requested additions to our data was card price history, as there are a large number of analyses that can be run with such data.

As of today, I am pleased to announce that MTGJSON and [MTGStocks](https://www.mtgstocks.com/news?utm_campaign=mtgjson&utm_medium=mtgjson&utm_source=mtgjson) have formed a partnership to bring historic paper pricing data to our users. With the 4.4.0 release, you can access pricing data for any individual card in weekly intervals for the past three months (12 entries). We hope to continue bringing you, our users, the most complete data possible to create the best content.

MTGJSON will be updating on a weekly basis, usually Sundays, with updated card prices. You can confirm the changes via the new meta tag, `pricesDate`, which will update whenever new prices go live.

If you have data you believe would be relevant to MTGJSON and the development community, please feel free to reach out via [zach@mtgjson.com](mailto:zach@mtgjson.com)

### Cards
#### Added
- `aftermath` added as `layout` option
- `mcmId`, `mcmMetaId`, and `mcmName` from Magic Card Market
- `purchasesUrls` with support for `tcgplayer`, `cardmarket`, and `mtgstocks`
- `mtgstocksId` for card identification
- `prices` for historic card prices

#### Deprecation
- `tcgplayerPurchaseUrl` as it was replaced by `purchaseUrls`
  - Removal set for 4.5.0 release.

#### Fixed
- Miscellaneous bug fixes with fields such as `artist` and `faceCMC`

#### Removed
- `uuidV421` is no longer included (deprecated in 4.3.0)

### Sets
#### Added
- `mcmId` and `mcmName` from Magic Card Market
- WAR and SS2 added

#### Fixed
- `baseSetSize` re-addressed to be more accurate

### Tokens

#### Fixed
- Emblems now show in the tokens list

### Decks
#### Added
- `releaseDate` to show when the deck was put for sale

### Website
#### Added
- atom feeds are now available via [/atom.xml](/atom.xml)

### Other
#### Added
- `--skip-cache` to disable built-in caches when compiling
- `MTGJSONCard` class added to improve OOP of code base
- `meta` tag added to `SetList.json` entries
- Compression built-in to MTGJSON for output files (`-z` flag)
- `pricesDate` added to `meta` tag to alert when updates happen

#### Fixed
- `AllCards.json` fields re-collated to be accurate for what is atomic.
  - `scryfallOracleId` added here for better support with UUIDs

#### Removed
- `--skip-prune` from compiling as it served no real purpose
- `AbilityWords`, `KeywordActions`, and `KeywordAbilities` from `Keywords.json` (deprecated in 4.3.0)

#### Replaced
`--skip-tcgplayer` replaced with `--skip-keys` for compiling. If passed, all keys will be ignored.

## 4.3.2 <small>(2019-03-31)</small>

### Website

- Fix some inconsistencies where example documentation was showing extra things
- Site now can show JSON in-line using Landcycle

### Cards

#### Added

- Re-added variations printings (mainly in `ARN`)

#### Changed

- Updated watermarks for cards that had `set` as the watermark.
  - Example: `Blood Moon` in `A25` will now have a watermark of `set (DRK)` rather than `set`

### Tokens

#### Changed

- Re-uniquify `uuid`. (Breaking change for _tokens only_, last one <3)

### Sets

#### Added

- `translations` of set names in all official languages
- `keyruneCode` in support of [keyrune.css](https://andrewgioia.github.io/Keyrune/)
- Re-added Magic Card Market data points from v3: `mcmName` and `mcmId`

#### Fixed

- `baseSetSize` corrections

### Decks

#### Added

- Now you know when decks are published: `releaseDate`

### Other

- Added caching for development and spoiler purposes

## 4.3.1 <small>(2019-03-04)</small>

### Website

- Minor layout modifications to the splash page for improved user experience
- Latest version number now shown in the upper left hand corner

### Individual Sets

#### Added

- `scryfallOracleId` can be used as a UUID for unique cards and tokens - See [documentation](/structures/card) for more information
- `scryfallIllustrationId` can be used as a UUID for unique artwork - See [documentation](/structures/card) for more information

#### Changed

- `baseSetSize` defaults to `totalSetSize` if not manually adjusted - Found an error in the value? Provide a correction [on GitHub](https://github.com/mtgjson/mtgjson/blob/master/mtgjson4/resources/base_set_sizes.json)

#### Fixed

- Several Planeswalkers were using an incorrect dash
- Base set size for `PRNA` and `GK2` has been corrected

## 4.3.0 <small>(2019-02-22)</small>

### Website

- We have a new website!
  - Please let us know what you think via email or Discord, always looking to improve :)
- We also have a new logo!

### Compiled Outputs

#### Added

- `CompiledList` which contains a list of all compiled outputs
- `Keywords` now has `abilityWords`, `keywordActions`, and `keywordAbilities`
  - `AbilityWords`, `KeywordActions`, and `KeywordAbilities` are deprecated and will be removed in 4.4.0
- `CardTypes` is now a compiled output, which gives all possible super/subtypes of each card type
- `AllDeckFiles` has been added and contains archives of all decks (read below)

#### Changed

- `AllSetsNoUn` is now `Vintage`. System rewrite rules have been added to keep compatibility
- `SetList` now has field `type` to indicate the type of set it stands for
- `SetList` now has field `parentCode` to indicate if the set is a child of a parent
- `Keywords` now has a meta tag

#### Removed

- `AllCardsNoUn` has been removed due to lack of use and purpose. Try `AllCards` for your card needs
- `AllCards` has lost `duelDeck`, `frameEffect`, `isStarter`, `isTimeshifted`, and `scryfallId` as these fields are not atomic

### Pre-constructed Decks

#### Added

- Precons have arrived! Simply check out [/json/decks](/json/decks) for the options

### Individual Sets

#### Added

- `parentCode` which is given to sets that are a child of another set
  - Mainly related to promo sets

### Individual Cards

#### Added

- `uuidV421` is a holdover field to help developers assimilate to the new `uuid` field. This will be removed in 4.4.0

#### Changed

- `starter` is now `isStarter`, as alerted to in prior releases
- `uuid` is _finally_ finalized. You can use `uuidV421` to get the 4.2.1 UUID to help assimilate to the new UUID
  - This is the final version. No more change should come to UUID. We apologize for so many changes over time

#### Fixed

- `foreignData` is now more accurate
- Some fields on tokens were mistakenly left blank. This has been addressed

## 4.2.2 <small>(2019-01-30)</small>

### Individual Sets

#### Added

- Ravnica Guild Kit (`GK2`)

#### Changed

- 2018 Gift Pack set code changed from `PGP18` or `PGP1` to `G18`
- 2017 Gift Pack set code changed from `PGP17` to `G17`

### Individual Cards

#### Changed

- Updated rules and oracle text wording corrections
- Updated missing foreign data for newer cards

### Other

#### Added

- Old School (`oldschool`) is now a supported format

## 4.2.1 <small>(2019-01-12)</small>

### Individual Sets

#### Changed

- `code` is now capitalized
- **NOTE: UUIDs have changed due to `code` being capitalized. This is _hopefully_ the last time we will break UUIDs <3**
- `mtgoCode` is now capitalized
- Fixed Unstable booster content

#### Added

- `codeV3` for the few sets who have different Gatherer codes

### Individual Cards

#### Changed

- `rarity` no longer contains things like "timeshifted rare" as that can be inferred (this reverts a 4.1.1 change)
- Fixed several cards having incorrect data

#### Added

- `life` for Vanguard cards
- `hand` for Vanguard cards
- `tcgplayerProductId` used to identify the card on TCGPlayer’s website
- `tcgplayerPurchaseUrl` which contains URLs to purchase cards ( referrals are nice :) )

### Other

#### Added

- MTGJSON has a new logo (please do give feedback!)
- `AllSetFiles.zip`, which contains all individual set files in a folder instead of `AllSets.json` (which is one file with all of the data)

## 4.2.0 <small>(2018-12-18)</small>

### Individual Sets

#### Changed

- `baseSetSize` numbers have been adjusted because of new `isAlternative` field

### Individual Cards

#### Added

- `isAlternative` used for cards that are a secret foil (in select sets)
- `duelDeck` used to denote which deck of a duel deck product (`a` or `b`)
- `frameEffect` used for cards with added frame styling

#### Changed

- UUIDs have been changed: the old field has become `scryfallId` whereas the new field is now `uuid` (these have reverted back to before 4.1.3, they are no longer modified, and are once again exactly 36 characters); keep in mind a UUID for each face on the same physical card is not unique
- `uuid` is now manually generated as a UUID v5 based on card attributes (name, set code, colors, Scryfall UUIDv4, printed text) and token attributes (name, colors, power, toughness, setcode, Scryfall UUIDv4); a UUID for each face is unique
- `variations` field uses the MTGJSON generated `uuid` field (not the `scryfallId` field, like it did before)
- Some entries updated in the `names` array of cards
- Fixed meld card ordering with Chittering Host and company
- Fixed duplicate tokens appearing in `tokens` array with missing attributes

### Other

#### Added

- MTGJSON commands have been updated and simplified (see README for more details)

#### Changed

- `Keywords.json` abilities are now in lowercase

#### Removed

- Removed `SetCodes.json` (same information can be found in `SetLists.json`)

## 4.1.3 <small>(2018-12-07)</small>

### Individual Sets

#### Added

- Compiled outputs now avaiable for different formats, including `AllCardsNoUn.json`, `AllSetsNoUn.json`, `Standard.json`, and `Modern.json`
- New formats available for set downloads: `.gz`, `.bz2`, `.xz`

### Individual Cards

#### Added

- TCGPlayer API information

#### Changed

- Fixed more tokens that were appearing in `names` and `cards` arrays
- Meld cards now assign the values “a”, “b”, and “c” to the `side` field, where “a” and “b” are for the two front sides and “c” is the meld back sides
- UUIDs for split cards, meld cards, and split tokens are 37 characters in length (with the first 36 characters being the same between them)

## 4.1.2 <small>(2018-11-30)</small>

### Individual Cards

#### Added

- Cards with variants not in _Un_-sets now use `variations` instead of different names (an array of UUIDs containing the other printings of the same card in the set) — for exampl, the card “Cursed Scroll” from World Championship Decks 1999 with the UUID `51694451-d762-4c22-b9a1-61ce4716826b` has these variations:

```json
"variations": [
  "226007db-4cd2-43ec-9f2c-4e68fff7d960",
  "42f64a71-5c4c-45b3-9963-880768b2343b",
  "0b23cdc8-d413-4fb1-8470-474221b10fe2"
]
```

#### Changed

- Cards with variants in _Un_-sets now no longer include names with `(a)` in `name` — for example:
  - `Very Cryptic Command`
  - `Very Cryptic Command (b)`
  - `Very Cryptic Command (c)`
  - `Very Cryptic Command (d)`
  - `Very Cryptic Command (e)`
  - `Very Cryptic Command (f)`

## 4.1.1 <small>(2018-11-26)</small>

### Individual Cards

#### Added

- Added timeshifted rarity
- `faceConvertedManaCost` is the converted mana cost for the face (typically referenced while cast)

#### Changed

- Reverted converted mana cost; `convertedManaCost` is now the total of the card (typically referenced while not on stack)
- `timeshifted` is now `isTimeshifted`
- Cards with multiple printings in a single set now have `a`, `b` after name
- Better parsing of `colors` on cards
- Better parsing of flavor text

### Individual Sets

#### Added

- Added Ultimate Masters (UMA)
- Added Ultimate Masters Box Toppers (PUMA)

#### Changed

- Windows OS workaround for `CON` now ignored in All Sets file

## 4.1.0 <small>(2018-11-11)</small>

### Individual Cards

#### Changed

- Better Gatherer parsing of `originalText` and `originalType`
- Better parsing of `names` field
- Meld cards will have `names` field as [ *CardA, Meld, CardB* ]
- Cards with multiple variants can now be distinguishable (such as several cards from _Unstable_)
- Split cards now have a converted mana cost for each face as opposed to the entire card

### Individual Sets

#### Added

- `baseSetSize` and `totalSetSize`
- `boosterV3` field (as used from Version 3) (`booster` is reserved for future use)
- `side` field is now used for each face of split cards

### Other

#### Added

- `Keywords.json` file, has keywords found in cards
- `SetList.json` file, has a list of sets and set information

#### Changed

- Better system checks
- Better handling of set files for Windows OS

## 4.0.2 <small>(2018-10-17)</small>

### Individual Sets

#### Added

- `colorIndicator` (For cards that don’t have a mana cost, for example)

#### Changed

- Split/Meld cards were a bit wonky. This is the first of two fixes to be done - Will be fully addressed in `4.1`
- Address UUID collisions

### Other

#### Changed

- Updated sets download page with _all_ sets we build
- Reordered sets download page to have newest at top
- `version.json` now exists to inform of latest release: - This is manual for right now, will be automated soon

```json
{
  "version": "v4.0.2"
}
```

## 4.0.1 <small>(2018-10-15)</small>

### Individual Sets

#### Changed

- `reserved` is now `isReserved` (Consistency)
- `foilOnly` is now `isFoilOnly` (Consistency)
- `onlineOnly` is now `isOnlineOnly` (Consistency)

### Other

#### Added

- `version.json` that will be added to the json/ output folder

```json
{
  "4.0.0": {
    "date": "2018-10-13",
    "filesModified": ["SETA", "SETB", "SETC"]
  }
}
```

## 4.0.0 <small>(2018-10-13)</small>

### Individual Cards

#### Added

- `frameVersion` (Determine the frame type)
- `hasFoil` (Card available in foil)
- `hasNonFoil` (Card available in non-foil)
- `isOnlineOnly` (Card only available online)
- `isOversized` (Card is HUGEEE)
- `foreignData` (All foreign printings from the set and data relating)

#### Removed

- `source` (Hard to validate)
- `mciNumber` (No longer in service)
- `life` (Will re-add whenever Vanguard support is re-implemented)
- `hand` (Will re-add whenever Vanguard support is re-implemented)
- `imageName` (No longer a thing)
- `variations` (Each printing will have it's own entry)

#### Changed

- `cmc` is now `convertedManaCost`
- `convertedManaCost` is a float over an int
- `multiverseid` is now `multiverseId` (with capital I)
- `flavor` is now `flavorText`
- `border` is now `borderColor`
- `id` is now `uuid`
- `legalities` formatting has changed
- `loyalty` is now a string over an int
- `rarity` uses "mythic" instead of "mythic rare" now
- `layout` uses "transform" instead of "double-faced" now

### Individual Sets

#### Added

- `meta` (Better understanding of when data was created)
- `mtgoCode` (Determine MTGO set name)
- `tokens` (Tokens have made it in!)
- `foilOnly` (If a set is available only in foil, like sliver premium deck)

#### Removed

- `gathererCode` (No longer necessary)
- `magicCardsInfoCode` (No longer in service)
- `border` (Moved to individual cards)
- `booster` (Will be re-added in v4.1)
