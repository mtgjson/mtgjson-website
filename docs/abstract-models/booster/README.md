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
  // A list of possible configuration in a traditional booster pack.
  "default": {
    // Booster pack configurations.
    "boosters": [
      // Which types of cards to add to a booster pack.
      {
        // Card contents of a booster pack.
        "contents": {
          "<SetCode>Basic": <Int>, // Amount of basic cards in configuration.
          "<SetCode>Common": <Int>, // Amount of common cards in configuration.
          "<SetCode>Rare": <Int>, // Amount of rare cards in configuration.
          "<SetCode>Uncommon": <Int> // Amount of uncommon cards in configuration.
        },
        // Odds of getting this configuration against other configurations.
        "weight": <Int>
      }
      ... // More configurations.
    ],
    // All possible sheets of cards to use within booster packs.
    "sheets": {
      // A sheet of card types to use in a sheet.
      "<SetCode>Basic": {
        "balanceColors": <Boolean>,
        // Object of cards used in a sheet.
        "cards": {
          // Unique MTGJSON card.
          "<Unique Card UUID>": {
            // Card is a foil.
            "foil": <Boolean>,
            // Odds of getting this card all other cards on this sheet.
            "weight": <Int>
          },
          ... // More cards.
        },
        // Sum of all weights within cards.
        "totalWeight": <Int>
      },
      "<SetCode>Common": { ... },
      "<SetCode>Rare": { ... },
      "<SetCode>Uncommon": { ... }
    }
  },
  "premium": { ... }
}
```
