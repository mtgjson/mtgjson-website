---
title: Card Type
head:
  - - meta
    - property: og:title
      content: Card Type
  - - meta
    - name: description
      content: The Card Type Data Model describes the properties of any possible subtypes and supertypes of a CardType Data Model.
  - - meta
    - property: og:description
      content: The Card Type Data Model describes the properties of any possible subtypes and supertypes of a CardType Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card type
---

# Card Type

The Card Type Data Model describes the properties of any possible subtypes and supertypes of a [CardType](/data-models/card-type/) Data Model.

- **Parent model:** [CardTypes](/data-models/card-types/)
- **Parent property:** `artifact`, `conspiracy`, `creature`, `enchantment`, `instant`, `land`, `phenomenon`, `plane`, `planeswalker`, `scheme`, `sorcery`, `tribal`, `vanguard`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/CardType.ts{TypeScript}

:::

## Model Properties

> ### subTypes
>
> A list of subtypes associated to a card property.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### superTypes
>
> A list of supertypes associated to a card property.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`
