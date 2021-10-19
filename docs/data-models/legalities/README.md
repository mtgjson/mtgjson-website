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

The Legalities data model describes a list of legalities in play formats for a specific card.

**Parent model:** [Card (Atomic)](/file-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `legalities`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### brawl
> If the card is legal in the Brawl play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### commander
> If the card is legal in the Commander play format.
>
> - **Type:** `string`
> - **Example:** `"Legal"`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### duel
> If the card is legal in the Duel Commander play format.
>
> - **Type:** `string`
> - **Example:** `"Banned"`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### future
> If the card is legal in the Future play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### frontier
> If the card is legal in the Frontier play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### gladiator
> If the card is legal in the Gladiator play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### historic
> If the card is legal in the Historic play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`
> - **Attributes:** <i class="optional">optional</i>

> ### historicbrawl
> If the card is legal in the Historic Brawl play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### legacy
> If the card is legal in the Legacy play format.
>
> - **Type:** `string`
> - **Example:** `"Banned"`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### modern
> If the card is legal in the Modern play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### oldschool
> If the card is legal in the Old School play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### pauper
> If the card is legal in the Pauper play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### paupercommander
> If the card is legal in the Pauper Commander play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### penny
> If the card is legal in the Penny play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### pioneer
> If the card is legal in the Pioneer play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.6.0`
> - **Attributes:** <i class="optional">optional</i>

> ### premodern
> If the card is legal in the Pre-Modern play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.6.0`
> - **Attributes:** <i class="optional">optional</i>

> ### standard
> If the card is legal in the Standard play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### vintage
> If the card is legal in the Vintage play format.
>
> - **Type:** `string`
> - **Example:** `"Restricted"`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>
