---
{
  "title": "Booster",
  "meta":
    [
      {
        "name": "description",
        "content": "Booster abstract model documentation."
      },
      {
        "property": "og:description",
        "content": "Booster abstract model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, booster"
      },
    ],
  "feed": { "enable": "true" },
}
---

# Booster

The Booster data model describes a object-based breakdown of how a [Set](/file-models/set/)'s booster pack may be constructed.

**Parent model:** [Set](/file-models/set/)  
**Parent property:** `booster`

## File Structure Overview

```json
{
  "default": { // Possible configurations in a traditional booster pack
    "boosters": [ // Booster pack configurations
      {
        "contents": { // Card contents of a booster pack
          "<Sheet Name>": <Int>, // Amount of this cards from this sheet name in configuration
          ... // More sheet names
        },
        "weight": <Int> // Odds of getting this configuration against other configurations
      }
      ... // More configurations
    ],
    "boostersTotalWeight": <Int>, // Sum of all booster configurations weights
    "sheets": { // All possible sheets of cards to use within booster packs
      "<Sheet Name>": { // A sheet of cards for use in a booster
        "balanceColors": <Boolean>, // Colors of the sheet need to be balanced
        "cards": { // Cards used on a sheet
          "<Unique Card UUID>": <Int> // Unique MTGJSON card UUID with a weight as its value
          ... // More cards
        },
        "foil": <Boolean>, // Is the sheet foiled?
        "totalWeight": <Int> // Sum of all card weights
      },
      ... // More sheet names
    }
  },
  "premium": { // An extended object for the future that may be used for alternative booster packs
    "name": <String> // Name of the premium booster pack
    ..., // All other keys are the same as 'default'
  }
}
```

## Example Model

```json
{
  "default": {
    "boosters": [
      {
        "weight": 3,
        "contents": {
          "basic": 1,
          "common": 10,
          "uncommon": 3,
          "rareMythic": 1
        }
      },
      {
        "weight": 1,
        "contents": {
          "basic": 1,
          "common": 9,
          "uncommon": 3,
          "rareMythic": 1,
          "foil": 1
        }
      }
    ],
    "boostersTotalWeight": 4,
    "sheets": {
      "basic": {
        "cards": {
          "1e12b68d-d81d-5169-8f3a-4700816406e8": 1,
          "3cdf6dca-88b2-561e-8998-6eb71118e9c7": 1,
          "5e7cff36-a8bf-5e46-9cea-57c1762969f9": 1,
          "8a040f0a-a84a-5e02-bebe-41bb9ac95e0e": 1,
          "c9c94efd-5caf-5de9-9bed-a812aa2dd301": 1
        },
        "foil": false,
        "totalWeight": 5
      },
      ... // More sheet names
    }
  }
}
```
