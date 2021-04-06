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

The Enum Values data model describes a list of key value pairs that are direct possible values of key properties in specific data models. Generally, this data is used for documenting data on this website, but is also available to the public.

**Parent file:** [EnumValues](/downloads/all-files/#enumvalues)  
**Parent property:** `data`

#### File Structure Overview

```json
{
  "<Data Model>": { // Unique data model name
    "<Property Key>": [ // Property of a data model
      <Property Value>, // Possible property value
      ... // More values
    ],
    ... // More keys
  },
  ... // More models
}
```

#### Example Model

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
    ... // More keys
  },
  ... // More models
}
```
