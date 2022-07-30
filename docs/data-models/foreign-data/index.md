---
title: Foreign Data
enum: foreignData
head:
  - - meta
    - property: og:title
      content: Foreign Data
  - - meta
    - name: description
      content: The Foreign Data data model describes a list of properties for various Card data models in alternate languages.
  - - meta
    - property: og:description
      content: The Foreign Data data model describes a list of properties for various Card data models in alternate languages.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, foreign data
---

# Foreign Data

The Foreign Data data model describes a list of properties for various Card data models in alternate languages.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  

**Parent property:** `foreignData`

## Model Index

<ModelType type="ForeignData" />

<PropertyToggler/>

[[toc]]

## Model Properties

> ### faceName
>
> The foreign name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.1`
> - **Tags:** <i class="optional"></i>

> ### flavorText
>
> The foreign flavor text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional"></i>

> ### language
>
> The foreign language of card.
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v4.0.0`

> ### multiverseId
>
> The foreign multiverse identifier of the card.
>
> - **Type:** `number`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional"></i>

> ### name
>
> The foreign name of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### text
>
> The foreign text ruling of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional"></i>

> ### type
>
> The foreign type of the card. Includes any supertypes and subtypes.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional"></i>
