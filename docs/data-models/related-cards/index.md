---
title: Related Cards
head:
  - - meta
    - property: og:title
      content: Related Cards
  - - meta
    - name: description
      content: The Related Cards data model describes cards that have relations to other cards.
  - - meta
    - property: og:description
      content: The Related Cards data model describes cards that have relations to other cards.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, version, related cards
---

# Related Cards

The Related Cards data model describes cards that have relations to other cards.

- **Parent file:** [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)
- **Parent model:** `relatedCards`

## Model Type

<ModelType type="RelatedCards" />

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### spellbook
>
> A list of card names associated to a Card's `spellbook` mechanic.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`