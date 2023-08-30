---
title: Card (Set Deck)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Set Deck)
  - - meta
    - name: description
      content: The Card (Set Deck) Data Model describes the properties of a single card found in a Deck (Set).
  - - meta
    - property: og:description
      content: The Card (Set Deck) Data Model describes the properties of a single card found in a Deck (Set).
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card deck meta
---

# Card (Set Deck)

The Card (Set Deck) Data Model describes the properties of a single card found in a [Deck (Set)](/data-models/deck-set/).

- **Parent model:** [Deck (Set)](/data-models/deck-set/)
- **Parent property:** `cards`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/CardSetDeck.ts{TypeScript}

:::

## Model Properties

> ### count
>
> The amount of this cards in the deck.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.2`

> ### finish
>
> The finish of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### uuid
>
> The universal unique identifier (v5) generated by MTGJSON.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`