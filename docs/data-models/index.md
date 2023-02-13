---
title: Data Models
head:
  - - meta
    - property: og:title
      content: Data Models
  - - meta
    - name: description
      content: Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.
  - - meta
    - property: og:description
      content: Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, data models
---

# Data Models

Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.

For example, any **Data Model** would look similar to this:

```json
{
  "<Property 1>": any,
  "<Property 2>": any,
  "<Property 3>": any,
  ... // More properties
}
```

Most data output by MTGJSON are Data Models but some models have more complex structures which are outlined in [Abstract Models](/abstract-models/).
