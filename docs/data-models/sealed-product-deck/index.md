---
title: Sealed Product (Deck)
head:
  - - meta
    - property: og:title
      content: Sealed Product (Deck)
  - - meta
    - name: description
      content: The Sealed Product (Deck) Data Model describes the deck product properties for the purchaseable product of a Set Data Model.
  - - meta
    - property: og:description
      content: The Sealed Product (Deck) Data Model describes the deck product properties for the purchaseable product of a Set Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, sealed product deck
---

# Sealed Product (Deck)

The Sealed Product (Deck) Data Model describes the deck product properties for the purchaseable product of a [Set](/data-models/set/) Data Model.

- **Parent model:** [Sealed Product](/data-models/sealed-product/)
- **Parent property:** `deck`

## TypeScript Model

::: details Show/Hide Model

<<< @/public/types/SealedProductDeck.ts{TypeScript}

:::

## Model Properties

> ### name
>
> The name of the product.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### set
>
> The set code for the product.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`
