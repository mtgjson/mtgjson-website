---
title: Sealed Product (Variable)
head:
  - - meta
    - property: og:title
      content: Sealed Product (Variable)
  - - meta
    - name: description
      content: The Sealed Product (Variable) Data Model describes the variable product properties for the purchaseable product of a Set Data Model.
  - - meta
    - property: og:description
      content: The Sealed Product (Variable) Data Model describes the variable product properties for the purchaseable product of a Set Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, sealed product variable product
---

# Sealed Product (Variable)

The Sealed Product (Variable) Abstract Data Model describes the variable product properties for the purchaseable product for a [Sealed Product](/data-models/sealed-product/) Data Model.

- **Parent model:** [Sealed Product](/data-models/sealed-product/)
- **Parent property:** `variable`

::: info About Sealed Product (Variable)

This Abstract Data Model is used when a Sealed Product may have differnt configurations of the products within a Sealed Product, such as variations of Decks or Cards. To access this data, the `variable` key may have multiple configurations accessible by index. Each configuration has a single `configs` key which contains an array of objects where the Sealed Product products can be accessed exactly like other Sealed Products. See below for the Abstract Data Model structure.

:::

## Model Overview

```TypeScript
variable: [
  {
    configs: [
      {
        card: SealedProductCard[],
        deck: SealedProductDeck[],
        other: SealedProductOther[],
        pack: SealedProductPack[],
        sealed: SealedProductSealed[],
      }
    ]
  }
]
```

## Example Model

Here is an example model with a reduced payload:

```JSON
"variable": [
  {
    "configs": [
      {
        "sealed": [
          {
            "count": 1,
            "name": "Zendikar Rising Lands Wrath Commander Deck",
            "set": "znc",
            "uuid": "322e3275-9cbe-571c-b84e-fbbca69c5d01"
          },
          {
            "count": 1,
            "name": "Kaldheim Elven Empire Commander Deck",
            "set": "khc",
            "uuid": "d6b99cfe-08d1-597f-8164-7ab1c08f7881"
          }
        ]
      }
    ]
  }
]
```
