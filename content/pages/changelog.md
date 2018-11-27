Title: Changelog
Date: 2018-10-13 00:00
Modified: 2018-11-26 00:00
Category: MTGJSON
Tags: mtgjson, mtgjson4
Slug: changelog
Authors: MTGJSON Developers
Summary: Changelog
Page-order: 3

# Changelog

## 4.1.1 <small>(2018-11-26)</small>

### Individual Cards
#### Added
- Added timeshifted rarity
- `faceConvertedManaCost` is the converted mana cost for the face (typically referenced while cast)

#### Fixed
- Reverted converted mana cost; `convertedManaCost` is now the total of the card (typically referenced while not on stack)
- `timeshifted` is now `isTimeshifted`
- Cards with multiple printings in a single set now have `a`, `b` after name
- Better parsing of `colors` on cards
- Better parsing of flavor text

### Individual Sets
#### Added
- Added Ultimate Masters (UMA)
- Added Ultimate Masters Box Toppers (PUMA)

#### Fixed
- Windows OS workaround for `CON` now ignored in All Sets file

## 4.1 <small>(2018-11-11)</small>

### Individual Cards
#### Fixed
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

#### Fixed
- Better system checks
- Better handling of set files for Windows OS

## 4.0.2 <small>(2018-10-17)</small>

### Individual Sets
#### Added
- `colorIndicator` (For cards that don’t have a mana cost, for example)

#### Fixed
- Split/Meld cards were a bit wonky. This is the first of two fixes to be done.
	- Will be fully addressed in `4.1`
- Address UUID collisions

### Other
#### Fixed
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
