---
title: Enum Values
head:
  - - meta
    - property: og:title
      content: Enum Values
  - - meta
    - name: description
      content: The Enum Values Abstract Model describes the properties that are direct possible values of other properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.
  - - meta
    - property: og:description
      content: The Enum Values Abstract Model describes the properties that are direct possible values of other properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, enum values
---

# Enum Values

The Enum Values Abstract Model describes the properties that are direct possible values of other properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.

- **Parent file:** [EnumValues](/downloads/all-files/#enumvalues)
- **Parent model:** `data`

## Model Overview

```JSON
{
  // Enum model name
  "<Enum Model>": {
    // Enumerable property name
    "<Property Key>": string[],
    ... // More properties
  },
  ... // More models
}
```

## Example Model

```JSON
{
  "card": {
    "borderColor": [
      "black",
      "borderless",
      "gold",
      "silver",
      "white"
    ],
    "colorIdentity": [
      "B",
      "G",
      "R",
      "U",
      "W"
    ],
    ... // More properties
  },
  ... // More models
}
```
