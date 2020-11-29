---
{
  "title": "TCGPlayer SKUs",
  "meta":
    [
      {
        "name": "description",
        "content": "TCGPlayer SKUs data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, tcgplayer, tcgplayer skus"
      }
    ],
  "feed": { "enable": "true" },
}
---

# TCGPlayer SKUs

The TCGPlayer SKUs data model describes [TCGPlayer](https://tcgplayer.com) SKU information based on card UUIDs.

> Parent file: <span class="code-wrap">[TCGPlayer SKUs](../../api/v5/TcgplayerSkus.json)</span>  
> Parent property: `data`

## File Structure Overview

```json
{
  "<Card UUID>": [
    {
      "condition": "<String>",
      "language": "<String>",
      "printing": "<String>",
      "productId": <Int>,
      "skuId": <Int>
    },
    ... // More SKU Objects
  ],
  ... // More Card UUIDs
}
```

### Example Model

```json
{
  "00010d56-fe38-5e35-8aed-518019aa36a5": [
    {
      "condition": "NEAR MINT",
      "language": "ENGLISH",
      "printing": "FOIL",
      "productId": 111268,
      "skuId": 3045711
    }, {
      "condition": "LIGHTLY PLAYED",
      "language": "ENGLISH",
      "printing": "FOIL",
      "productId": 111268,
      "skuId": 3045712
    }, {
      "condition": "MODERATELY PLAYED",
      "language": "ENGLISH",
      "printing": "FOIL",
      "productId": 111268,
      "skuId": 3045713
    }, {
      "condition": "HEAVILY PLAYED",
      "language": "ENGLISH",
      "printing": "FOIL",
      "productId": 111268,
      "skuId": 3045714
    }, {
      "condition": "DAMAGED",
      "language": "ENGLISH",
      "printing": "FOIL",
      "productId": 111268,
      "skuId": 3045715
    }
  ]
}
```
