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

> Parent file: <span class="code-wrap">[AllPrices](../../api/v5/AllPrices.json)</span>  
> Parent property: `data`

## Price Providers

MTGJSON currently has affiliated with the following markets to keep a history of price data and the following examples are formatted for the data model:

- paper: <a href="https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson" target="_blank" rel="noopener noreferrer">tcgplayer</a>, <a href="https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson" target="_blank" rel="noopener noreferrer">cardmarket</a>, and <a href="https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson" target="_blank" rel="noopener noreferrer">cardkingdom</a>
- mtgo: <a href="https://www.cardhoarder.com/?affiliate_id=mtgjson&utm_source=mtgjson&utm_campaign=affiliate&utm_medium=card" target="_blank" rel="noopener noreferrer">cardhoarder</a>

## File Structure Overview

```json
{
  "<Card UUID>": {
    "<Card Format>": { // Game format
      "<Price Provider ID>": { // Price provider
        "buylist": { // Provider buylist values
          "foil": { // Foil prices
            "<YYYY-MM-DD>": <Float> // Date and price as value
          },
          "normal": { // Normal prices
            "<YYYY-MM-DD>": <Float> // Date and price as value
          }
        },
        "currency": <String>, // Currency of the provider
        "retail": { // Provider retail values
          "foil": { // Foil prices
            "<YYYY-MM-DD>": <Float> // Date and price as value
          },
          "normal": { // Normal prices
            "<YYYY-MM-DD>": <Float> // Date and price as value
          }
        }
      },
      ... // More providers
    }
  },
  ... // More formats
}
```

### Example Model

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
      "tcgplayer": {
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

Need more data? Join the <a href="https://mtgjson.com/discord" rel="noopener noreferrer" target="_blank">Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" rel="noopener noreferrer" target="_blank">GitHub</a>. We'll be happy to discuss your needs.
