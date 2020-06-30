---
{
  "title": "All Prices",
  "meta":
    [
      {
        "name": "description",
        "content": "All Prices data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, all prices, prices"
      }
    ],
  "feed": { "enable": "true" },
}
---

# All Prices

The All Prices data model describes a list of card prices based on date.

> Parent file: `AllPrices`  
> Parent property: `data`

### Price Providers

MTGJSON currently has affiliated with the following markets to keep a history of price data and the following examples are formatted for the data model:

- paper: <a href="https://www.tcgplayer.com" target="_blank" rel="noopener noreferrer">tcgplayer</a>, <a href="https://www.cardmarket.com" target="_blank" rel="noopener noreferrer">cardmarket</a>, and <a href="https://www.cardkingdom.com" target="_blank" rel="noopener noreferrer">cardkingdom</a>
- mtgo: <a href="https://www.cardhoarder.com" target="_blank" rel="noopener noreferrer">cardhoarder</a>

### File Structure Overview

```json
{
  "<Card UUID>": {
    // Game format
    "<Card Format>": {
      // Price provider
      "<Price Provider ID>": {
        // Provider buy values
        "buylist": {
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
        },
        // Provider sale values
        "retail": {
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
    }
  },
  ...
}
```

### Example Data Model

```json
{
  "0120a941-9cfb-50b5-b5e4-4e0c7bd32410": {
    "mtgo": {
      "cardhoarder": {
        "retail": {
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
      "cardkingdom" : {
        "buylist": {
          "foil": {
            ..., // more rows
            "2020-04-21": 0.6
          },
          "normal": {
            ..., // more rows
            "2020-04-21": 0.01
          }
        },
        "retail": {
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
      "cardmarket": {
        "retail": {
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
        "retail": {
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

Need more data? Join the <a href="https://mtgjson.com/discord" rel="noopener noreferrer" target="_blank">Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" rel="noopener noreferrer" target="_blank">GitHub</a>. We'll be happy to discuss your needs.
