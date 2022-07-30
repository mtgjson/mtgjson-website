---
title: Deck
enum: deck
head:
  - - meta
    - property: og:title
      content: Deck
  - - meta
    - name: description
      content: The Deck data model describes a complete deck reference.
  - - meta
    - property: og:description
      content: The Deck data model describes a complete deck reference.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, deck
---

# Deck

The Deck data model describes a complete deck reference.

**Parent file:** [All Decks](/downloads/all-decks/)  

**Parent property:** `data`

## Model Index

<ModelType type="Deck" />

<PropertyToggler/>

[[toc]]

## Model Properties

> ### code
>
> The printing deck code for the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### commander <i class="optional"></i>
>
> The card that is the Commander in this deck. See the [Card (Deck)](/data-models/card-deck/) data model.
>
> - **Type:** `CardDeck`
> - **Introduced:** `v5.1.0`

> ### fileName
>
> The file name for the deck. Combines the `name` and `code` properties to avoid namespace collisions and are given a delimiter of `_`.
>
> - **Type:** `string`
> - **Examples:** `"SpiritSquadron_VOC"`
> - **Introduced:** `v4.3.0`

> ### mainBoard
>
> The cards in the main-board. See the [Card (Deck)](/data-models/card-deck/) data model.
>
> - **Type:** `CardDeck[]`
> - **Introduced:** `v4.3.0`

> ### name
>
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### sideBoard
>
> The cards in the side-board. See the [Card (Deck)](/data-models/card-deck/) data model.
>
> - **Type:** `CardDeck[]`
> - **Introduced:** `v4.3.0`

> ### releaseDate
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns `null` if the set was not formally released as a product.
>
> - **Type:** `null | string`
> - **Introduced:** `v4.3.0`

> ### type
>
> The type of deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
