---
{
  "title": "Prices",
  "meta":
    [
      {
        "name": "description",
        "content": "Prices data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, prices"
      }
    ],
  "feed": { "enable": "true" },
}
---

# Prices

The Prices data model describes a list of card prices based on date.

> Parent file: `AllPrices`  
> Parent property: `data`

::: warning
This data model is unique compared to all other data models because all of its keys are variable/optional and the model is not flat.
:::

### Price Providers

MTGJSON currently has affiliated with the following markets to keep a history of price data:

- Paper: <a href="https://www.tcgplayer.com" target="_blank" rel="noopener noreferrer">TCGPlayer</a>, <a href="https://www.cardmarket.com" target="_blank" rel="noopener noreferrer">Cardmarket</a>, and <a href="https://www.cardkingdom.com" target="_blank" rel="noopener noreferrer">CardKingdom</a>
- MTGO: <a href="https://www.cardhoarder.com" target="_blank" rel="noopener noreferrer">Cardhoarder</a>

### File Structure Overview

```json
"<Card UUID>": {
  // Price format
  "paper": {
    // Price provider
    "<Price Provider ID>": {
      // Provider sale values
      "sell": {
        // Sell values of a foil
        "foil": {
          // Date and price
          "<YYYY-MM-DD>": float
        },
        // Sell values of a non-foil
        "normal": {
          // Date and price
          "<YYYY-MM-DD>": float
        }
      }
    },
    ...
  },
  "mtgo": { ... }
},
...
```

### Example Data Model

```json
{
  "0120a941-9cfb-50b5-b5e4-4e0c7bd32410": {
    "mtgo": {
      "cardhoarder": {
        "sell": {
          "foil": {
            ..., // more rows
            "2020-04-21": 0.02
          },
          "normal": {
            ..., // more rows
            "2020-04-21": 0.02
          }
        }
      },
    },
    "paper": {
      "cardmarket": {
        "sell": {
          "foil": {
            ..., // more rows
            "2020-04-21": 0.12
          },
          "normal": {
            ..., // more rows
            "2020-04-21": 0.02
          }
        }
      },
      "tcgplayer": {
        "sell": {
          "foil": {
            ..., // more rows
            "2020-04-21": 0.12
          },
          "normal": {
            ..., // more rows
            "2020-04-21": 0.02
          }
        }
      }
    }
  }
}
```
