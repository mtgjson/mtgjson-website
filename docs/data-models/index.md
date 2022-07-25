---
{
  'title': 'Data Models',
  'meta':
    [
      { 'property': 'og:title', 'content': 'Data Models' },
      {
        'name': 'description',
        'content': 'Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.',
      },
      {
        'property': 'og:description',
        'content': 'Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.',
      },
      { 'name': 'keywords', 'content': 'mtg, magic: the gathering, mtgjson, json, Data Models' },
    ],
}
---

# Data Models

Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.

For example, any <strong>Data Model</strong> would look similar to this:

```json
"<Parent Property>": {
  "<Some Property>": <array, boolean, float, number, object, string>,
  ...
}
```

Most data output by MTGJSON are Data Models but some models have more complex structures which are outlined in [Abstract Models](/abstract-models/).
