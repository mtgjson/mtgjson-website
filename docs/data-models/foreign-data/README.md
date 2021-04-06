---
{
  "title": "Foreign Data",
  "schema": "foreignData",
  "meta": [
    {
      "name": "description",
      "content": "ForeignData data model documentation.",
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

The Foreign Data data model describes a list of properties for a [Card](../card/) data model in alternate languages.

**Parent model:** [Card](../card/), [Card (Atomic)](../card-atomic/), [Card (Deck)](../card-deck/)  
**Parent property:** `foreignData`

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### faceName  
> Name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`

> ### flavorText  
> Flavor text in foreign language.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i> 

> ### language  
> Foreign language of card.  
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v4.0.0`

> ### multiverseId  
> Multiverse identifier of the card.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i> 

> ### name  
> Name of the card in foreign language.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### text  
> Text ruling of the card in foreign language.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i> 

> ### type  
> Type of the card. Includes any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i> 
