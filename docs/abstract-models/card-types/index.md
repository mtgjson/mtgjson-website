---
title: Card Types
head:
  - - meta
    - property: og:title
      content: Card Types
  - - meta
    - name: description
      content: The Card Types Abstract Model describes other possible sub-types and super-types of a card type.
  - - meta
    - property: og:description
      content: The Card Types Abstract Model describes other possible sub-types and super-types of a card type.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card types
---

# Card Types

The Card Types Abstract Model describes other possible sub-types and super-types of a card type.

**Parent file:** [CardTypes](/downloads/all-files/#cardtypes)  

**Parent property:** `data`

## Model Overview

```json
{
  "<Card Type>": {
    "subTypes": <string[]>,
    "superTypes": <string[]>
  }
}
```

## Example Model

```json
{
  "artifact": {
    "subTypes": [
      "Blood",
      "Clue",
      "Contraption",
      "Equipment",
      "Food",
      "Fortification",
      "Gold",
      "Treasure",
      "Vehicle"
    ],
    "superTypes": [
      "Basic",
      "Legendary",
      "Ongoing",
      "Snow",
      "World"
    ]
  },
  ... // More types
}
```
