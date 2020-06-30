---
{
  "title": "Booster",
  "meta":
    [
      {
        "name": "description",
        "content": "Booster data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, booster"
      },
    ],
  "feed": { "enable": "true" },
}
---

# Booster

The Booster data model describes a object-based breakdown of how a [Set](/data-models/set/)'s booster pack may be constructed.

> Parent model: <span class="code-wrap">[Set](/data-models/set/)</span>  
> Parent property: `booster`

### File Structure Overview

```json
{
  "default": { // A list of possible configuration in a traditional booster pack.
    "boosters": [ // Booster pack configurations.
      {
        "contents": { // Card contents of a booster pack.
          "foil": <Int>, // Foil card count.
          "<Sheet Name>": <Int>, // Amount of this cards from this sheet name in configuration.
          ... // More sheet names.
        },
        "weight": <Int> // Odds of getting this configuration against other configurations.
      }
      ... // More configurations.
    ],
    "boostersTotalWeight": <Int>, // Sum of all booster configurations weights
    "sheets": { // All possible sheets of cards to use within booster packs.
      "<Sheet Name>": { // A sheet of cards for use in a booster.
        "balanceColors": <Boolean>, // Colors of the sheet need to be balanced.
        "cards": { // Cards used on a sheet.
          "<Unique Card UUID>": <Int> // Unique MTGJSON card UUID with a weight as its value.
          ... // More cards.
        },
        "foil": <Boolean>, // Is the sheet foiled?
        "totalWeight": <Int> // Sum of all card weights.
      },
    }
  },
  "premium": { ... }
}
```
