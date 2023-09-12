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

The Sealed Product (Deck) Data Model describes the deck product configuration in the [Sealed Product Contents](/data-models/sealed-product/sealed-product-contents/) Data Model.

- **Parent model:** [Sealed Product Contents](/data-models/sealed-product/sealed-product-contents/)
- **Parent property:** `deck`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/SealedProductDeck.ts{TypeScript}

:::

## Model Properties

> ### name
>
> The name of the product.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### set
>
> The set code for the product.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`
