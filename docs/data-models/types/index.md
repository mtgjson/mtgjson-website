---
title: Types
enum: card
head:
  - - meta
    - property: og:title
      content: Types
  - - meta
    - name: description
      content: The Types Data Model describes all types available on a Card.
  - - meta
    - property: og:description
      content: The Types Data Model describes all types available on a Card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, types
---

# Types

The Types Data Model describes all types available on a Card.

**Parent model:** [Card Types](/data-models/card-types/)  
**Parent property:** `artifact`, `conspiracy`, `creature`, `enchantment`, `instant`, `land`, `phenomenon`, `plane`, `planeswalker`, `scheme`, `sorcery`, `tribal`, `vanguard`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### subTypes
>
> A list of all available subtypes of a type.
>
> - **Type:** `array[string]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### superTypes
>
> A list of all available supertypes of a type.
>
> - **Type:** `array[string]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`
