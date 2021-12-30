---
{
  "title": "Types",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Types Data Model documentation.",
    },
    {
      "property": "og:description",
      "content": "Types Data Model documentation."
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

The Types Data Model describes card types available to MTGJSON.

**Parent model:** [Card Types](/data-models/card-types/)  
**Parent property:** `artifact`, `conspiracy`, `creature`, `enchantment`, `instant`, `land`, `phenomenon`, `plane`, `planeswalker`, `scheme`, `sorcery`, `tribal`, `vanguard`

## Model Index

<PropertyToggler/>

[[toc]]
## Model Properties

> ### subTypes  
> A list of all available subtypes of a type.  
>
> - **Type:** `array[string]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### superTypes  
> A list of all available supertypes of a type.  
>
> - **Type:** `array[string]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`
