---
title: Enum Values
head:
  - - meta
    - property: og:title
      content: Enum Values
  - - meta
    - name: description
      content: The Enum Values abstract model describes a list of key value pairs that are direct possible values of key properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.
  - - meta
    - property: og:description
      content: The Enum Values abstract model describes a list of key value pairs that are direct possible values of key properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, enum values
---

# Enum Values

The Enum Values abstract model describes a list of key value pairs that are direct possible values of key properties in specific Data Models. Generally, this data is used for documentation, but is also available to the public.

**Parent file:** [EnumValues](/downloads/all-files/#enumvalues)  

**Parent property:** `data`

## Model Overview

```json
{
  // Enum model name
  "<Enum Model>": {
    // Enumerable property name
    "<Property Key>": <string[]>,
    ... // More properties
  },
  ... // More models
}
```

## Example Model

```json
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
