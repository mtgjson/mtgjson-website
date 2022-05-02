---
{
  "title": "Deck",
  "schema": "deck",
  "meta": [
    {
      "name": "description",
      "content": "The Deck Data Model describes a complete deck reference.",
    },
    {
      "name": "og:description",
      "content": "The Deck Data Model describes a complete deck reference.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, deck, individual deck",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Deck

The Deck Data Model describes a complete deck reference.

**Parent file:** [All Decks](/downloads/all-decks/)  
**Parent property:** `data`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### code
> The set code for the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### commander
> The card that is the Commander in this deck. See the [Card (Deck)](/data-models/card-deck/) Data Model.
>
> - **Type:** `object{props}`
> - **Introduced:** `v5.1.0`  
> - **Tags:** <i class="optional">optional</i>

> ### fileName
> The file name for the deck. Combines the `name` and `code` fields to avoid namespace collisions and are given a delimiter of `_`.
>
> - **Type:** `string`
> - **Examples:** `"SpiritSquadron_VOC"`
> - **Introduced:** `v4.3.0`

> ### mainBoard
> The cards in the main-board. See the [Card (Deck)](/data-models/card-deck/) Data Model.
>
> - **Type:** `array[object]`
> - **Introduced:** `v4.3.0`

> ### name
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### sideBoard
> The cards in the side-board. See the [Card (Deck)](/data-models/card-deck/) Data Model.
>
> - **Type:** `array[object]`
> - **Introduced:** `v4.3.0`

> ### releaseDate
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns `null` if the set was not formally released as a product.
>
> - **Type:** `null || string`
> - **Introduced:** `v4.3.0`

> ### type
> The type of deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
