---
{
  "title": "TCGplayer SKUs",
  "meta":
    [
      {
        "name": "description",
        "content": "TCGplayer SKUs data model documentation."
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

The TCGplayer SKUs data model describes [TCGplayer](https://tcgplayer.com) SKU information based on card UUIDs.

**Parent file:** [TCGplayer SKUs](../../api/v5/TcgplayerSkus.json)  
**Parent property:** `data`

#### File Structure Overview

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

#### Example Model

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
