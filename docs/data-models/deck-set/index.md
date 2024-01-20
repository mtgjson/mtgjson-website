---
title: Deck (Set)
enum: deck
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

::: details Toggle Model {open}

<<< @/public/types/DeckSet.ts{TypeScript}

:::

## Model Properties

> ### code
>
> The printing set code for the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### commander <DocBadge type="warning" text="optional" />
>
> The card that is the Commander in this deck. See the [Card (Set Deck)](/data-models/card/card-set-deck/) Data Model.
>
> - **Type:** `CardSetDeck[]`
> - **Introduced:** `v5.1.0`

> ### mainBoard
>
> The cards in the main-board. See the [Card (Set Deck)](/data-models/card/card-set-deck/) Data Model.
>
> - **Type:** `CardSetDeck[]`
> - **Introduced:** `v4.3.0`

> ### name
>
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### releaseDate
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns `null` if the deck was not formally released as a product.
>
> - **Type:** `string | null`
> - **Introduced:** `v4.3.0`

> ### sealedProductUuids
>
> A list of UUID's associated to this Deck in a [Sealed Product](/data-models/sealed-product/).
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.2`

> ### sideBoard
>
> The cards in the side-board. See the [Card (Set Deck)](/data-models/card/card-set-deck/) Data Model.
>
> - **Type:** `CardSetDeck[]`
> - **Introduced:** `v4.3.0`

> ### type
>
> The type of deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
