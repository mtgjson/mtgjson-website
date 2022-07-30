---
title: All Prices
head:
  - - meta
    - property: og:title
      content: All Prices
  - - meta
    - name: description
      content: The All Prices abstract Data Model describes a list of card prices based on a MTGJSON Card UUID.
  - - meta
    - property: og:description
      content: The All Prices abstract Data Model describes a list of card prices based on a MTGJSON Card UUID.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, all prices
---

# All Prices

The All Prices Abstract Model describes a list of card prices based on a Card UUID.

**Parent file:** [AllPrices](/downloads/all-files/#allprices)  

**Parent property:** `data`

## Price Providers

MTGJSON currently has affiliated with the following price providers to keep a **limited** history of price data. The following are examples of game formats and price providers:

- `paper`
  - `cardkingdom` ( [Card Kingdom](https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson) )
  - `cardmarket` ( [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) )
  - `cardsphere` ( [Cardsphere](https://www.cardsphere.com/) )
  - `tcgplayer` ( [TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson) )
- `mtgo`
  - `cardhoarder` ( [Cardhoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card) )

## Model Overview

```json
{
  // Card UUID
  "<Card UUID>": {
    // Game format
    "<Format>": {
      // Price provider
      "<Provider>": {
        // Provider buylist values
        "buylist": {
          // Foil prices
          "foil": {
            // Date as key and price as value
            "<YYYY-MM-DD>": <float>
          },
          // Normal prices
          "normal": {
            // Date as key and price as value
            "<YYYY-MM-DD>": <float>
          }
        },
        // Currency of the provider
        "currency": <string>,
        // Provider retail values
        "retail": {
          // Foil prices
          "foil": {
            // Date as key and price as value
            "<YYYY-MM-DD>": <float>
          },
          // Normal prices
          "normal": {
            // Date as key and price as value
            "<YYYY-MM-DD>": <float>
          }
        }
      },
      ... // More providers
    },
    ... // More formats
  },
  ... // More card UUIDs
}
```

## Example Model

```json
{
  "0120a941-9cfb-50b5-b5e4-4e0c7bd32410": {
    "mtgo": {
      "cardhoarder": {
        "currency": "USD",
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
      "cardkingdom": {
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
        "currency": "USD",
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
        "currency": "EUR",
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
      "cardsphere": {
        "currency": "USD",
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
        "currency": "USD",
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

Need more data? Join the [Discord](https://mtgjson.com/discord) and let us know or open an issue on [GitHub](https://github.com/mtgjson/mtgjson/issues). We'll be happy to discuss your needs.
