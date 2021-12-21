---
{
  "title": "Abstract Models",
  "meta": [
    {
      "name": "description",
      "content": "Abstract Models documentation.",
    },
    {
      "property": "og:description",
      "content": "Abstract Models documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, Abstract Models",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Abstract Models

Abstract Models in MTGJSON describe any JSON object or nested JSON object that provides a non-flat response. As such, they will only have two or more levels of nested keys. It is worth noting that most, but not all, Abstract Models are related directly to the models of specific files, like `AllPrices` or `EnumValues`.

For example, any <strong>Abstract Model</strong> would look similar to this:

```json
"<Some Property Key>": {
  "<A Nested Property Key": {
    "<A Second Nested Key>": "<Value>"
  },
  "<Some Other Nested Property Key>": {
    "<A Second Nested Key>": {
      "<A Third Nested Key>": "<Value>"
    }
  },
  "<A Third Property Key": "<Value>"
  ...
}
```

Most data output by MTGJSON are not Abstract Models but are less complex models. Because of this, we document those types of models as [Data Models](/data-models/).
