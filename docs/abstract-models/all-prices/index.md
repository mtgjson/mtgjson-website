---
title: All Prices
head:
  - - meta
    - property: og:title
      content: All Prices
  - - meta
    - name: description
      content: The All Prices Abstract Model describes the properties of card prices based on a card's uuid property.
  - - meta
    - property: og:description
      content: The All Prices Abstract Model describes the properties of card prices based on a card's uuid property.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, all prices
---

# All Prices

The All Prices Abstract Model describes the properties of card prices based on a card's uuid property.

- **Parent file:** [AllPrices](/downloads/all-files/#allprices), [AllPricesToday](/downloads/all-files/#allpricestoday)
- **Parent property:** `data`

## Price Providers

MTGJSON currently has affiliated with the following price providers to keep a **limited** history of price data. The following are examples of game formats and price providers:

- `paper`
  - `cardkingdom` ([Card Kingdom](https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson))
  - `cardmarket` ([Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson))
  - `cardsphere` ([Cardsphere](https://www.cardsphere.com/))
  - `tcgplayer` ([TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson))
- `mtgo`
  - `cardhoarder` ([Cardhoarder](https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card))

## Model Overview

```TypeScript
{
  // Card uuid property
  [key: string]: {
    // Game format
    [key: string]: {
      // Price provider
      [key: string]: {
        // Provider buylist values
        "buylist": {
          // Foil prices
          "foil": {
            // ISO 8601 date format as the key and price as value
            [key: string]: number
          },
          // Normal prices
          "normal": {
            // ISO 8601 date format as the key and price as value
            [key: string]: number
          }
        },
        // Currency of the provider
        "currency": string,
        // Provider retail values
        "retail": {
          // Foil prices
          "foil": {
            // ISO 8601 date format as the key and price as value
            [key: string]: number
          },
          // Normal prices
          "normal": {
            // ISO 8601 date format as the key and price as value
            [key: string]: number
          }
        }
      },
      ... // More price providers
    },
    ... // More game formats
  },
  ... // More card uuids
}
```

## Example Model

Here is an example model with a reduced payload:

```JSON
{
  "0120a941-9cfb-50b5-b5e4-4e0c7bd32410": {
    "mtgo": {
      "cardhoarder": {
        "currency": "USD",
        "retail": {
          "foil": {
            "2020-04-21": 0.02
          },
          "normal": {
            "2020-04-21": 0.02
          }
        }
      },
    },
    "paper": {
      "cardkingdom": {
        "buylist": {
          "foil": {
            "2020-04-21": 0.6
          },
          "normal": {
            "2020-04-21": 0.01
          }
        },
        "currency": "USD",
        "retail": {
          "foil": {
            "2020-04-21": 0.12
          },
          "normal": {
            "2020-04-21": 0.02
          }
        }
      },
      "cardmarket": {
        "buylist": {
          "foil": {
            "2020-04-21": 0.6
          },
          "normal": {
            "2020-04-21": 0.01
          }
        },
        "currency": "EUR",
        "retail": {
          "foil": {
            "2020-04-21": 0.12
          },
          "normal": {
            "2020-04-21": 0.02
          }
        }
      },
      "cardsphere": {
        "currency": "USD",
        "retail": {
          "foil": {
            "2020-04-21": 0.12
          },
          "normal": {
            "2020-04-21": 0.02
          }
        }
      },
      "tcgplayer": {
        "buylist": {
          "foil": {
            "2020-04-21": 0.6
          },
          "normal": {
            "2020-04-21": 0.01
          }
        },
        "currency": "USD",
        "retail": {
          "foil": {
            "2020-04-21": 0.12
          },
          "normal": {
            "2020-04-21": 0.02
          }
        }
      }
    }
  }
}
```

Need more data? Join the [Discord](https://mtgjson.com/discord) and let us know or open an issue on [GitHub](https://github.com/mtgjson/mtgjson/issues). We'll be happy to discuss your needs.
