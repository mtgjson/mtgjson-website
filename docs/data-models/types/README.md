---
{
  "title": "Types",
  "schema": "types",
  "enum": "card",
  "meta": [
    {
      "name": "description",
      "content": "Types data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, types",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Types

The Types data model describes card types available to MTGJSON.
 
**Parent model:** [Card Types](/data-models/card-types/)

#### Model Index

[[toc]]
#### Model Properties

<PropertyToggler/>

> ### subTypes  
> All available subtypes of a card.  
>
> **Type:** `array`  
> **Introduced:** `v4.0.0`

> ### superTypes  
> All available supertypes of a card.  
>
> **Type:** `array`  
> **Introduced:** `v4.0.0`
