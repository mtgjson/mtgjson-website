---
title: Related Cards
head:
  - - meta
    - property: og:title
      content: Related Cards
  - - meta
    - name: description
      content: The Related Cards Data Model describes the properties of a card that has relations to other cards.
  - - meta
    - property: og:description
      content: The Related Cards Data Model describes the properties of a card that has relations to other cards.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, version, related cards
---

# Related Cards

The Related Cards Data Model describes the properties of a card that has relations to other cards.

- **Parent model:** [Card (Atomic)](/data-models/card/card-atomic/), [Card (Deck)](/data-models/card/card-deck/), [Card (Set)](/data-models/card/card-set/), [Card (Token)](/data-models/card/card-token/)
- **Parent property:** `relatedCards`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/RelatedCards.ts{TypeScript}

:::

## Model Properties

> ### reverseRelated <DocBadge type="warning" text="optional" />
>
> A list of card names associated to a card, such as "meld" cards and token creation.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`

> ### spellbook <DocBadge type="warning" text="optional" />
>
> A list of card names associated to a card's [Spellbook](https://mtg.fandom.com/wiki/Spellbook) mechanic.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`
