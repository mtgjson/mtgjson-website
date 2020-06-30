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

::: warning Developer Note
This data model is unique compared to all other data models because all of its keys are variable/optional and the model is not flat.
:::

### File Structure Overview

```json
{
  // Unique card type
  "<Card Type Name>": {
    "subTypes": [
      // Property Values
      <Property Value>,
      ...
    ],
    "superTypes": [
      // Property Values
      <Property Value>,
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
