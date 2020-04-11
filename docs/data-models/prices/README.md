---
{
  "title": "Prices",
  "schema": "prices",
  "meta": [
    {
      "name": "description",
      "content": "Prices data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, prices",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Prices

The Prices data model describes a list of card prices based on date.

> Parent file: `AllPrices`  
> Parent property: `data`

::: warning
This model is unique compared to all other data models because most of its keys are variable and the model is not flat. The following documentation takes that in to account by documenting a direct example of a card.
:::

### File Structure Overview

```json
{
  "meta": object,
  "data": {
    "<>Card UUID<>": {
      "<>YYYY-MM-DD<>": { // today's date should always exist
        "mtgo": { // optional
          "<>Source<>": { // optional
            "purchasePrice": { // optional
              "normal": float, // optional
              "foil": float // optional
            }
          },
          ...
        },
        "paper": { // optional
          ...
        }
      },
      ...
    },
    ...
  }
}
```

### Example Data Model

```json
{
  "00ecdefd-0445-576e-a9a5-f5b21aa177e9": {
    "2020-03-31": {
      "mtgo": {
        "Cardhoarder": {
          "purchasePrice": {
            "normal": 0.03,
            "foil": 0.02
          }
        },
      },
      "paper": {
        "CardKingdom": {
          "purchasePrice": {
            "normal": 0.06,
            "foil": 0.22
          }
        },
        "TCGPlayer": {
          "purchasePrice": {
            "normal": 0.06,
            "foil": 0.22
          }
        }
      }
    }
  }
}
```
