---
{
  "title": "Enum Values",
  "meta":
    [
      {
        "name": "description",
        "content": "Enum Values data model documentation."
      },
      {
        "name": "keywords",
        "content": "mtg, magic: the gathering, mtgjson, json, enum values, values"
      },
    ],
  "feed": { "enable": "true" },
}
---

# Enum Values

The Enum Values data model describes a list of key value pairs that are direct possible values of key properties in specific data models. Generally, this file is used for documenting data on this website but is also available to the public.

> Parent file: `EnumValues`  
> Parent property: `data`

::: warning Developer Note
This data model is unique compared to all other data models because all of its keys are variable/optional and the model is not flat.
:::

### File Structure Overview

```json
// Unique data model name
"<Data Model>": {
  // Named Property
  "<Property Key>": [
    // Property Values
    <Property Value>,
    ...
  ],
  ...
},
...
```

### Example Data Model

```json
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
  ...
},
...
```
