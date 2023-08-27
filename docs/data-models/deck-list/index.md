---
title: Deck List
enum: deck
head:
  - - meta
    - property: og:title
      content: Deck List
  - - meta
    - name: description
      content: The Deck List Data Model describes the meta data properties of an individual Deck.
  - - meta
    - property: og:description
      content: The Deck List Data Model describes the meta data properties of an individual Deck.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, deck list
---

# Deck List

The Deck List Data Model describes the meta data properties of an individual [Deck](/data-models/deck/).

- **Parent file:** [DeckList](/downloads/all-files/#decklist)
- **Parent property:** `data`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/DeckList.ts{TypeScript}

:::

## Model Properties

> ### code
>
> The printing deck code for the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### fileName
>
> The file name for the deck. Combines the `name` and `code` properties to avoid namespace collisions and are given a `_` delimiter.
>
> - **Type:** `string`
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

> ### type
>
> The type of the deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v5.1.0`
