---
title: Booster
head:
  - - meta
    - property: og:title
      content: Booster
  - - meta
    - name: description
      content: The Booster Data Model describes the properties of how a Set's booster data may be configured.
  - - meta
    - property: og:description
      content: The Booster Data Model describes the properties of how a Set's booster data may be configured.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster
---

# Booster

The Booster Data Model describes the properties of how a [Set](/data-models/set/)'s booster data may be configured.

- **Parent model:** [Set](/data-models/set/)
- **Parent property:** `booster`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/Booster.ts{TypeScript}

:::

## Model Properties

> ### boosters
>
> The booster packs configurations. See the [Booster Pack](/data-models/booster-pack/) Data Model.
>
> - **Type:** `BoosterPack[]`
> - **Introduced:** `v5.2.2`

> ### boostersTotalWeight
>
> The weight of total booster pack configurations.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.2`

> ### sheets
>
> The sheets of cards in a printing where the key is the name of the sheet and value is the configuration. See the [Booster Sheet](/data-models/booster-sheet/) Data Model.
>
> - **Type:** `Record<string, BoosterSheet>`
> - **Introduced:** `v5.2.2`

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
