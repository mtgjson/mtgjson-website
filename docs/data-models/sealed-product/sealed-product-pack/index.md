---
title: Sealed Product (Pack)
head:
  - - meta
    - property: og:title
      content: Sealed Product (Pack)
  - - meta
    - name: description
      content: The Sealed Product (Pack) Data Model describes the pack product properties for the purchaseable product of a Set Data Model.
  - - meta
    - property: og:description
      content: The Sealed Product (Pack) Data Model describes the pack product properties for the purchaseable product of a Set Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, sealed product pack
---

# Sealed Product (Pack)

The Sealed Product (Pack) Data Model describes the sealed pack configuration in the [Sealed Product Contents](/data-models/sealed-product/sealed-product-contents/) Data Model.

- **Parent model:** [Sealed Product Contents](/data-models/sealed-product/sealed-product-contents/)
- **Parent property:** `pack`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/SealedProductPack.ts{TypeScript}

:::

## Model Properties

> ### code
>
> The name for the configuration of the Booster for the pack. Used for identifying a [Booster Config](/data-models/booster/booster-config/) Data Model.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### set
>
> The set code for the product.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`
