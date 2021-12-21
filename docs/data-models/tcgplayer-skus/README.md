---
{
  "title": "TCGplayer SKUs",
  "schema": "tcgplayerSkus",
  "meta":
    [
      {
        "name": "description",
        "content": "TCGplayer SKUs Data Model documentation."
      },
      {
        "property": "og:description",
        "content": "TCGplayer SKUs Data Model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, tcgplayer, tcgplayer skus"
      }
    ],
  "feed": { "enable": "true" },
}
---

# TCGplayer SKUs

The TCGplayer SKUs Data Model describes [TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson) SKU information based on MTJSON Card UUIDs.

**Parent file:** [TcgplayerSkus](/downloads/all-files/#tcgplayerskus)  
**Parent property:** `data`  

::: tip
The TCGplayer SKUs Data Model is accessed through a single index array where its parent property is the UUID of the card, like such:
```
"data": {
  "00010d56-fe38-5e35-8aed-518019aa36a5": [
    <TCGplayer SKUs Model>
  ],
  ...
}
```
:::

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### condition
> The condition of the card.
>
> - **Type:** `string`
> - <ExampleField type='condition'/>
> - **Introduced:** `v5.1.0`

> ### finishes
> The finishes of the card.
>
> - **Type:** `arrray[string]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="new">new</i>

> ### language
> The language of the card.
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v5.1.0`

> ### printing
> The printing style of the card.
>
> - **Type:** `string`
> - <ExampleField type='printing'/>
> - **Introduced:** `v5.1.0`

> ### productId
> The product identifier of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

> ### skuId
> The SKU identifier of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`
