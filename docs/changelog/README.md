---
{
  "schema": "Changelog",
  "meta": [
    {
      "name": "description",
      "content": "MTGJSON Changelog.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, changelog",
    }
  ]
}
---

# Changelog

## 4.3.1 <small>(2019-03-04)</small>
### Website
- Minor layout modifications to the splash page for improved user experience
- Latest version number now shown in the upper left hand corner

### Individual Sets
#### Added
- `scryfallOracleId` can be used as a UUID for unique cards and tokens
	- See [documentation](/structures/card/#scryfallOracleId) for more information
- `scryfallIllustrationId` can be used as a UUID for unique artwork
	- See [documentation](/structures/card/#scryfallIllustrationId) for more information

#### Changed
- `baseSetSize` defaults to `totalSetSize` if not manually adjusted
	- Found an error in the value? Provide a correction [on GitHub](https://github.com/mtgjson/mtgjson/blob/master/mtgjson4/resources/base_set_sizes.json)

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

## 4.2 <small>(2018-12-18)</small>
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
- Cards with variants not in *Un*-sets now use `variations` instead of different names (an array of UUIDs containing the other printings of the same card in the set) — for exampl, the card “Cursed Scroll” from World Championship Decks 1999 with the UUID `51694451-d762-4c22-b9a1-61ce4716826b` has these variations:
```json
"variations": [
    "226007db-4cd2-43ec-9f2c-4e68fff7d960",
    "42f64a71-5c4c-45b3-9963-880768b2343b",
    "0b23cdc8-d413-4fb1-8470-474221b10fe2"
]
```

#### Changed
- Cards with variants in *Un*-sets now no longer include names with `(a)` in `name` — for example:
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

## 4.1 <small>(2018-11-11)</small>

### Individual Cards
#### Changed
- Better Gatherer parsing of `originalText` and `originalType`
- Better parsing of `names` field
- Meld cards will have `names` field as [ *CardA, Meld, CardB* ]
- Cards with multiple variants can now be distinguishable (such as several cards from *Unstable*)
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
- Split/Meld cards were a bit wonky. This is the first of two fixes to be done
	- Will be fully addressed in `4.1`
- Address UUID collisions

### Other
#### Changed
- Updated sets download page with _all_ sets we build
- Reordered sets download page to have newest at top
- `version.json` now exists to inform of latest release:
	- This is manual for right now, will be automated soon
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


## 4.0 <small>(2018-10-13)</small>

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
