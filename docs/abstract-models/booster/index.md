---
{
  "title": "Booster",
  "meta":
    [
      {
        "name": "description",
        "content": "The Booster abstract Data Model describes how a Set's booster pack may be constructed."
      },
      {
        "property": "og:description",
        "content": "The Booster abstract Data Model describes how a Set's booster pack may be constructed."
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

The Booster abstract Data Model describes how a [Set](/data-models/set/)'s booster pack may be constructed.

**Parent model:** [Set](/data-models/set/)  
**Parent property:** `booster`

## Model Overview

```json
{
  // Possible configurations in a traditional booster pack
  default: {
    // Booster pack configurations
    boosters: [
      {
        // Card contents of a booster pack
        contents: {
          // Amount of this cards from this sheet name in configuration
          <Sheet Name>: <number>,
          ... // More sheet names
        },
        // Odds of getting this configuration against other configurations
        weight: <number>
      },
      ... // More configurations
    ],
    // Sum of all booster configurations weights
    boostersTotalWeight: <number>,
    // All possible sheets of cards to use within booster packs
    sheets: {
      // A sheet of cards for use in a booster
      <Sheet Name>: {
        // Colors of the sheet need to be balanced
        balanceColors: <boolean>,
        // Cards used on a sheet
        cards: {
          // Unique MTGJSON card UUID with a weight as its value
          <Unique Card UUID>: <number>,
          ... // More cards
        },
        // Is the sheet foiled?
        foil: <boolean>,
        // Sum of all card weights
        totalWeight: <number>
      },
      ... // More sheet names
    }
  },
  // An extended object for the future that may be used for alternative booster packs
  premium: {
    // Name of the premium booster pack
    name: <string>,
    ... // All other keys are the same as 'default'
  }
}
```

## Example Model

```json
{
  default: {
    boosters: [
      {
        contents: {
          basic: 1,
          common: 10,
          uncommon: 3,
          rareMythic: 1
        },
        weight: 3
      },
      {
        contents: {
          basic: 1,
          common: 9,
          uncommon: 3,
          rareMythic: 1,
          foil: 1
        },
        weight: 1
      }
    ],
    boostersTotalWeight: 4,
    sheets: {
      basic: {
        cards: {
          1e12b68d-d81d-5169-8f3a-4700816406e8: 1,
          3cdf6dca-88b2-561e-8998-6eb71118e9c7: 1,
          5e7cff36-a8bf-5e46-9cea-57c1762969f9: 1,
          8a040f0a-a84a-5e02-bebe-41bb9ac95e0e: 1,
          c9c94efd-5caf-5de9-9bed-a812aa2dd301: 1
        },
        foil: false,
        totalWeight: 5
      },
      ... // More sheet names
    }
  }
}
```
