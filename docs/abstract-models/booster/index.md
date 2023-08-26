---
title: Booster
head:
  - - meta
    - property: og:title
      content: Booster
  - - meta
    - name: description
      content: The Booster Abstract Model describes the properties of how a Set's booster pack may be constructed.
  - - meta
    - property: og:description
      content: The Booster Abstract Model describes the properties of how a Set's booster pack may be constructed.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster
---

# Booster

The Booster Abstract Model describes the properties of how a [Set](/data-models/set/)'s booster pack may be constructed.

- **Parent file:** [Set](/data-models/set/)
- **Parent model:** `booster`

## Model Overview

```TypeScript
{
  // Possible configurations in a traditional booster pack
  default: {
    // Booster pack configurations
    boosters: [
      {
        // Card contents of a booster pack
        contents: Record<string, number>, // Record key is rarity and value is weight of the card
        // Odds of getting this configuration against other configurations
        weight: number
      },
      ... // More configurations
    ],
    // Sum of all booster configurations weights
    boostersTotalWeight: number,
    // All possible sheets of cards to use within booster packs
    sheets: {
      // A sheet of cards for use in a booster, using the sheet name as the key
      [key: string]: {
        // If the pack has mulitples of the same card
        allowDuplicates: boolean,
        // Colors of the sheet need to be balanced
        balanceColors: boolean,
        // Cards used on a sheet
        cards: Record<string, number>, // Record key is the uuid of a card and weight is the value
        // If the sheet is foiled
        foil: boolean,
        // Contents are guaranteed
        fixed: boolean,
        // Sum of all card weights
        totalWeight: number
      },
      ... // More sheet names
    }
  },
  // An extended object for the future that may be used for alternative booster packs
  premium: {
    // Name of the premium booster pack
    name: string,
    ... // All other keys are the same as 'default'
  }
}
```

## Example Model

Here is an example model with a reduced payload:

```JSON
{
  "default": {
    "boosters": [
      {
        "contents": {
          "basic": 1,
          "common": 10,
          "rareMythic": 1,
          "uncommon": 3
        },
        "weight": 2
      },
      {
        "contents": {
          "basic": 1,
          "common": 9,
          "foil": 1,
          "rareMythic": 1,
          "uncommon": 3
        },
        "weight": 1
      }
    ],
    "boostersTotalWeight": 3,
    "sheets": {
      "basic": {
        "cards": {
          "08ca354f-d163-5aa7-80cb-6b8dab4893e8": 2
        },
        "foil": false,
        "totalWeight": 30
      },
      "common": {
        "balanceColors": true,
        "cards": {
          "00542ebe-9ff3-5ba1-9015-1028e95b7f8e": 1
        },
        "foil": false,
        "totalWeight": 101
      },
      "foil": {
        "cards": {
          "00542ebe-9ff3-5ba1-9015-1028e95b7f8e": 6720
        },
        "foil": true,
        "totalWeight": 1355200
      },
      "rareMythic": {
        "cards": {
          "00adcf10-69b4-56f5-b393-c17511ba207c": 1
        },
        "foil": false,
        "totalWeight": 140
      },
      "uncommon": {
        "cards": {
          "0906fd55-3248-5fe3-ac3c-717ae4bece94": 1
        },
        "foil": false,
        "totalWeight": 80
      }
    }
  }
}
```
