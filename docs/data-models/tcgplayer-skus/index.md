---
title: Tcgplayer Skus
enum: tcgplayerSkus
head:
  - - meta
    - property: og:title
      content: Tcgplayer Skus
  - - meta
    - name: description
      content: The Tcgplayer Skus Data Model describes the properties of the TCGplayer SKUs for a product.
  - - meta
    - property: og:description
      content: The Tcgplayer Skus Data Model describes the properties of the TCGplayer SKUs for a product.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, tcgplayer skus
---

# Tcgplayer Skus

The Tcgplayer Skus Data Model describes the properties of the [TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson) SKUs for a product.

- **Parent file:** [TcgplayerSkus](/downloads/all-files/#tcgplayerskus)
- **Parent property:** `data`

::: info Accessing the data

When using an `TcgplayerSkus.json` file, the Tcgplayer Skus Data Model is accessed through a single index array where its parent property is the card's `uuid` property. Here is a reduced payload of the model as an example:

```TypeScript
{
  data: Record<string, TcgplayerSkus[]>;
}
```

and accessing the data would look like this:

```TypeScript
const tcgplayerSkus: TcgplayerSkus = data["00010d56-fe38-5e35-8aed-518019aa36a5"][0];
```

:::

## TypeScript Model

::: details Show/Hide Model

<<< @/public/types/TcgplayerSkus.ts{TypeScript}

:::

## Model Properties

> ### condition
>
> The condition of the card.
>
> - **Type:** `string`
> - <ExampleField type='condition'/>
> - **Introduced:** `v5.1.0`

> ### finishes
>
> The finishes of the card.
>
> - **Type:** `string[]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`

> ### language
>
> The language of the card.
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v5.1.0`

> ### printing
>
> The printing style of the card.
>
> - **Type:** `string`
> - <ExampleField type='printing'/>
> - **Introduced:** `v5.1.0`

> ### productId
>
> The product identifier of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

> ### skuId
>
> The SKU identifier of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`
