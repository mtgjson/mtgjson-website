---
title: Abstract Models
head:
  - - meta
    - property: og:title
      content: Abstract Models
  - - meta
    - name: description
      content: Abstract Models in MTGJSON describe any JSON object or nested JSON object that provides a non-flat response. As such, they will have two or more levels of nested keys. It is worth noting that most, but not all, Abstract Models are related directly to the models of specific files, like AllPrices or EnumValues.
  - - meta
    - property: og:description
      content: Abstract Models in MTGJSON describe any JSON object or nested JSON object that provides a non-flat response. As such, they will have two or more levels of nested keys. It is worth noting that most, but not all, Abstract Models are related directly to the models of specific files, like AllPrices or EnumValues.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, Abstract Models
---

# Abstract Models

Abstract Models in MTGJSON describe any JSON object or nested JSON object that provides a non-flat response. As such, they will have two or more levels of nested keys. It is worth noting that some Abstract Models are related directly to their type of file, such as **AllPrices** or **CardTypes**.

## Model Overview

Any <strong>Abstract Model</strong> would look similar to this:

```TypeScript
{
  [key, string]: {
    [key, string]: any;
  };
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

Most data output by MTGJSON are not Abstract Models but are less complex models. Because of this, we document those types of models as [Data Models](/data-models/).
