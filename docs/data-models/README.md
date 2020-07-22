---
{
  "title": "Data Models",
  "meta": [
    {
      "name": "description",
      "content": "Data Models documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, data models",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Data Models

Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.

For example, any <strong>Data Model</strong> would look similar to this:

```json
"<Some Property Key>": {
  "<A Nested Property Key>": "<String, Boolean, Array, Enum Array, Model Reference>",
  "<Some Other Nested Property Key>": "<String, Boolean, Array, Enum Array, Model Reference>",
  ...
}
```
Most data output by MTGJSON are Data Models but some models have more complex structures with too many variable or optional keys to ensure reliable documentation. Because of this, we document those types of models as [Abstract Models](/abstract-models/).
