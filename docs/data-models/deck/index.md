---
title: Deck
enum: deck
head:
  - - meta
    - property: og:title
      content: Deck
  - - meta
    - name: description
      content: The Deck Data Model describes the properties of an individual Deck.
  - - meta
    - property: og:description
      content: The Deck Data Model describes the properties of an individual Deck.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, deck
---

# Deck

The Deck Data Model describes the properties of an individual Deck.

- **Parent file:** [All Decks](/downloads/all-decks/)
- **Parent property:** `data`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/Deck.ts{TypeScript}

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
> The card that is the Commander in this deck. See the [Card (Deck)](/data-models/card/card-deck/) Data Model.
>
> - **Type:** `CardDeck[]`
> - **Introduced:** `v5.1.0`

> ### mainBoard
>
> The cards in the main-board. See the [Card (Deck)](/data-models/card/card-deck/) Data Model.
>
> - **Type:** `CardDeck[]`
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
> A cross-reference identifier to determine which sealed products contain this deck.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### sideBoard
>
> The cards in the side-board. See the [Card (Deck)](/data-models/card/card-deck/) Data Model.
>
> - **Type:** `CardDeck[]`
> - **Introduced:** `v4.3.0`

> ### tokens
>
> The tokens included with the product. See the [Card (Deck)](/data-models/card/card-deck/) Data Model.
>
> - **Type:** `CardDeck[]`
> - **Introduced:** `v5.2.2`

> ### type
>
> The type of deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
