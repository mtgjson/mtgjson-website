---
{
  "title": "Foreign Data",
  "schema": "foreignData",
  "meta": [
    {
      "name": "description",
      "content": "Foreign Data data model documentation.",
    },
    {
      "property": "og:description",
      "content": "Foreign Data data model documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, foreigndata, foreign data",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Foreign Data

The Foreign Data data model describes a list of properties for various card data models in alternate languages.

**Parent model:** [Card (Atomic)](/file-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `foreignData`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### faceName  
> The name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`
> - **Attributes:** <i class="optional">optional</i>

> ### flavorText  
> The flavor text of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### language  
> The foreign language of card.  
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v4.0.0`

> ### multiverseId  
> The multiverse identifier of the card.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### name  
> The name of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### text  
> The text ruling of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### type  
> The type of the card. Includes any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>
