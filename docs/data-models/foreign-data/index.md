---
{
  "title": "Foreign Data",
  "schema": "foreignData",
  "meta": [
    {
      "name": "description",
      "content": "The Foreign Data Data Model describes a list of properties for various Card Data Models in alternate languages.",
    },
    {
      "property": "og:description",
      "content": "The Foreign Data Data Model describes a list of properties for various Card Data Models in alternate languages."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, foreigndata, foreign data",
    }
  ]
}
---

# Foreign Data

The Foreign Data Data Model describes a list of properties for various Card Data Models in alternate languages.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `foreignData`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### faceName  
> The foreign name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`
> - **Tags:** <i class="optional">Optional</i>

> ### flavorText  
> The foreign flavor text of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">Optional</i>

> ### language  
> The foreign language of card.  
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v4.0.0`

> ### multiverseId  
> The foreign multiverse identifier of the card.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">Optional</i>

> ### name  
> The foreign name of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### text  
> The foreign text ruling of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">Optional</i>

> ### type  
> The foreign type of the card. Includes any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">Optional</i>
