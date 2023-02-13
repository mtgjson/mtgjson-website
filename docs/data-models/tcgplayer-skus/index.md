---
title: Tcgplayer Skus
enum: tcgplayerSkus
head:
  - - meta
    - property: og:title
      content: Tcgplayer Skus
  - - meta
    - name: description
      content: The Tcgplayer Skus Data Model describes the properties of TCGplayer SKU values based on a card UUID.
  - - meta
    - property: og:description
      content: The Tcgplayer Skus Data Model describes the properties of TCGplayer SKU values based on a card UUID.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, tcgplayer skus
---

# Tcgplayer Skus

The Tcgplayer Skus Data Model describes the properties of [TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson) SKU values based on a card UUID.

- **Parent file:** [TcgplayerSkus](/downloads/all-files/#tcgplayerskus)
- **Parent property:** `data`

<blockquote>
  <p class="small-header">Note</p>
  <p>The Tcgplayer Skus Data Model is accessed through a single index array where its parent property is the UUID of the card. Here is an example of the model:</p>

  ```json
  "data": {
    "00010d56-fe38-5e35-8aed-518019aa36a5": TcgplayerSkus[],
    ... // More Card UUIDs
  }
  ```

  <br />
  <p>and accessing the data would look like this:</p>
  <br />

  ```js
  data["00010d56-fe38-5e35-8aed-518019aa36a5"][0];
  ```

</blockquote>

## Model Type

<ModelType type="TcgplayerSkus" />

## Model Index

<PropertyToggler/>

[[toc]]

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
