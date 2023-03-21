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

```TypeScript
{
  [key: string]: Record<string, string[]>
}
```

## Example Model

Here is an example model with a reduced payload:

```JSON
{
  "card": {
    "colorIdentity": [
      "B",
      "G",
      "R",
      "U",
      "W"
    ]
  }
}
```
