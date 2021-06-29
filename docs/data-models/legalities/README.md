---
{
  "title": "Legalities",
  "schema": "legalities",
  "meta": [
    {
      "name": "description",
      "content": "Legalities data model documentation.",
    },
    {
      "property": "og:description",
      "content": "Legalities data model documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, legal, legalities",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Legalities

The Legalities data model describes a list of legalities in  play formats for a specific card.

**Parent model:** [Card (Atomic)](../card-atomic/), [Card (Deck)](../card-deck/), [Card (Set)](../card-set/)  
**Parent property:** `legalities`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

::: warning
Below, [Sol Ring](https://scryfall.com/card/c18/222/sol-ring) is used as an example of a returned data model.
:::

> ### brawl  
> Sol Ring is not legal in the Brawl play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### commander  
> Sol Ring is legal in the Commander play format.  
>
> - **Type:** `string`  
> - **Example:** `"Legal"`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### duel  
> Sol Ring is banned in the Duel Commander play format.  
>
> - **Type:** `string`  
> - **Example:** `"Banned"`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### future  
> Sol Ring is not legal in the Future play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### frontier  
> Sol Ring is not legal in the Frontier play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### historic  
> Sol Ring is not legal in the Historic play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### legacy  
> Sol Ring is banned in the Legacy play format.  
>
> - **Type:** `string`  
> - **Example:** `"Banned"`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### modern  
> Sol Ring is not legal in the Modern play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### pauper  
> Sol Ring is not legal in the Pauper play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### penny  
> Sol Ring is not legal in the Penny play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### pioneer  
> Sol Ring is not legal in the Pioneer play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.6.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### standard  
> Sol Ring is not legal in the Standard play format. **This property is omitted**.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### vintage  
> Sol Ring is restricted in the Vintage play format.  
>
> - **Type:** `string`  
> - **Example:** `"Restricted"`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 
