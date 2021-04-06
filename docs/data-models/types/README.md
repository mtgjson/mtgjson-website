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
 
**Parent model:** [Card Types](/file-models/card-types/)  
**Parent property:** `artifact`, `conspiracy`, `creature`, `enchantment`, `instant`, `land`, `phenomenon`, `plane`, `planeswalker`, `scheme`, `sorcery`, `tribal`, `vanguard`

#### Model Index

<PropertyToggler/>

[[toc]]
#### Model Properties

> ### subTypes  
> All available subtypes of a card.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v4.0.0`

> ### superTypes  
> All available supertypes of a card.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v4.0.0`
