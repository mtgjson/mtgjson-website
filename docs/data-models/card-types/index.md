---
title: Card Types
head:
  - - meta
    - property: og:title
      content: Card Types
  - - meta
    - name: description
      content: The Card Types Abstract Data Model describes the properties of any possible subtypes and supertypes of a card.
  - - meta
    - property: og:description
      content: The Card Types Abstract Data Model describes the properties of any possible subtypes and supertypes of a card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card types
---

# Card Types

The Card Types Abstract Data Model describes the properties of any possible subtypes and supertypes of a card.

- **Parent file:** [CardTypes](/downloads/all-files/#cardtypes)
- **Parent property:** `data`

## Model Overview

```TypeScript
{
  // Card type
  [key: string]: {
    // Any subtypes available to a card type
    subTypes: string[],
    // Any supertypes available to a card type
    superTypes: string[]
  }
}
```

## Example Model

Here is an example model with a reduced payload:

```JSON
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
  }
}
```
