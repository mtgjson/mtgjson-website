---
title: Related Cards
head:
  - - meta
    - property: og:title
      content: Related Cards
  - - meta
    - name: description
      content: The Related Cards Data Model describes cards that have relations to other cards.
  - - meta
    - property: og:description
      content: The Related Cards Data Model describes cards that have relations to other cards.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, version, related cards
---

# Related Cards

The Related Cards Data Model describes cards that have relations to other cards.

- **Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/), [Card (Token)](/data-models/card-token/)
- **Parent property:** `relatedCards`

## Model Type

<ModelType type="RelatedCards" />

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### reverseRelated <i class="optional"></i>
>
> A list of card names associated to a card, such as "meld" cards and token creation.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`

> ### spellbook <i class="optional"></i>
>
> A list of card names associated to a card's [Spellbook](https://mtg.fandom.com/wiki/Spellbook) mechanic.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`
