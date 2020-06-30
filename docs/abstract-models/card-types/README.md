---
{
  "title": "Card Types",
  "meta":
    [
      {
        "name": "description",
        "content": "Card Types data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, card types"
      },
    ],
  "feed": { "enable": "true" },
}
---

# Card Types

The Card Types data model describes a list of properties and values for card types found on black and white bordered cards.

> Parent file: `CardTypes`  
> Parent property: `data`

### File Structure Overview

```json
{
  "<Card Type Name>": { // Unique card type.
    "subTypes": [ // Subtypes of a card type.
      <Property Value>, // Card types.
      ...
    ],
    "superTypes": [ // Supertypes of a card type.
      <Property Value>, // Card types.
      ...
    ]
  },
  ...
}
```

### Example Data Model

```json
{
  "artifact": {
    "subTypes": [
      "Clue",
      ...
    ],
    "superTypes": [
      "Basic",
      ...
    ]
  },
  "conspiracy": {
    "subTypes": [],
    "superTypes": [
      "Basic",
      ...
    ]
  },
  ...
}
```
