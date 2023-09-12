---
title: Sealed Product Contents
enum: sealedProduct
head:
  - - meta
    - property: og:title
      content: Sealed Product Contents
  - - meta
    - name: description
      content: The Sealed Product Contents Data Model describes the properties for the purchaseable product of a Set Data Model.
  - - meta
    - property: og:description
      content: The Sealed Product Contents Data Model describes the properties for the purchaseable product of a Set Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, sealed product config
---

# Sealed Product Contents

The Sealed Product Contents Data Model describes the properties for the purchaseable product of a [Set](/data-models/set/) Data Model.

- **Parent model:** [Sealed Product](/data-models/sealed-product/)
- **Parent property:** `contents`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/SealedProductContents.ts{TypeScript}

:::

## Model Properties

> ### card <DocBadge type="warning" text="optional" />
>
> The card configuration for a sealed card product. See the [Sealed Product (Card)](/data-models/sealed-product/sealed-product-card/) Data Model.
>
> - **Type:** `SealedProductCard[]`
> - **Introduced:** `v5.2.2`

> ### deck <DocBadge type="warning" text="optional" />
>
> The deck configuration for a sealed deck product. See the [Sealed Product (Deck)](/data-models/sealed-product/sealed-product-deck/) Data Model.
>
> - **Type:** `SealedProductDeck[]`
> - **Introduced:** `v5.2.2`

> ### other <DocBadge type="warning" text="optional" />
>
> The product configuration for an obscure sealed product, such as a Spindown counter. See the [Sealed Product (Other)](/data-models/sealed-product/sealed-product-other/) Data Model.
>
> - **Type:** `SealedProductOther[]`
> - **Introduced:** `v5.2.2`

> ### pack <DocBadge type="warning" text="optional" />
>
> The pack configuration for a sealed booster pack product. See the [Sealed Product (Pack)](/data-models/sealed-product/sealed-product-pack/) Data Model.
>
> - **Type:** `SealedProductPack[]`
> - **Introduced:** `v5.2.2`

> ### sealed <DocBadge type="warning" text="optional" />
>
> The sealed configuration for a sealed product, such as a booster box. See the [Sealed Product (Sealed)](/data-models/sealed-product/sealed-product-sealed/) Data Model.
>
> - **Type:** `SealedProductSealed[]`
> - **Introduced:** `v5.2.2`

> ### variable <DocBadge type="warning" text="optional" />
>
> The variable configurations for sealed products when the contents are not always pre-determined. This data type can be referenced on this Data Model
>
> - **Type:** `Record<"configs", SealedProductContents[]>[]`
> - **Introduced:** `v5.2.2`
