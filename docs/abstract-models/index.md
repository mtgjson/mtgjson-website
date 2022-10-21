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
      content: mtg, magic the gathering, mtgjson, json, abstract models
---

# Abstract Models

Abstract Models in MTGJSON describe any JSON object or nested JSON object that provides a non-flat response. As such, they will have two or more levels of nested keys. It is worth noting that most, but not all, Abstract Models are related directly to the models of specific files, like `AllPrices` or `EnumValues`.

For example, any <strong>Abstract Model</strong> would look similar to this:

```json
{
  "<Property 1>": {
    "<Nested Property 1>": any
  },
  "<Property 2>": {
    "<Nested Property 1>": any
  },
  ... // More properties
}
```

Most data output by MTGJSON are not Abstract Models but are less complex models. Because of this, we document those types of models as [Data Models](/data-models/).
