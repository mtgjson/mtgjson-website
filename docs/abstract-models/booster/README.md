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
"default": {
  // ?
  "boosters": [
    // ?
    {
      // ?
      "sheets": {
        // ?
        "basic": <Int>,
        "common": <Int>,
        "rare": <Int>,
        "uncommon": <Int>
      },
      // ?
      "weight": <Int>
    }
    ...
  ],
  // ?
  "sheets": {
    // ?
    "basic": {
      // ?
      "balanceColors": <Boolean>,
      // ?
      "cards": {
        "<Unique Card UUID>": {
          // Card is foil
          "foil": <Boolean>,
          // ?
          "weight": <Int>
        },
        ...
      },
      // ?
      "totalWeight": <Int>
    },
    "common": {},
    "rare": {},
    "uncommon": {}
  }
}
```
