---
title: Deck (Set)
head:
  - - meta
    - property: og:title
      content: Deck (Set)
  - - meta
    - name: description
      content: The Deck (Set) Data Model describes the properties of an individual Deck within a Set.
  - - meta
    - property: og:description
      content: The Deck (Set) Data Model describes the properties of an individual Deck within a Set.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, deck (set)
---

# Deck (Set)

The Deck (Set) Data Model describes the properties of an individual Deck within a [Set](/data-models/set/).

- **Parent model:** [Set](/data-models/set/)
- **Parent property:** `decks`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/DeckSet.ts{TypeScript}

:::

## Model Properties

> ### cards
>
> A list of cards in this deck. See the [Card (Set Deck)](/data-models/card-set-deck/) Data Model.
>
> - **Type:** `CardDeckMeta[]`
> - **Introduced:** `v5.2.2`

> ### name
>
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### sealedProductUuids
>
> A list of UUID's associated to this Deck in a [Sealed Product](/data-models/sealed-product/).
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.2`
