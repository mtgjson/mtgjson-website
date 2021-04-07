---
{
  "title": "Deck",
  "schema": "deck",
  "meta": [
    {
      "name": "description",
      "content": "Deck data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, deck",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Deck

The Deck file model describes a complete deck reference.

**Parent file:** [All Decks](../../downloads/all-decks/)  
**Parent property:** `data`

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### code
> Set code for the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### commander
> The card that is the Commander in this deck. See the [Card (Deck)](../../data-models/card-deck) data model.
>
> - **Type:** `object(props)`
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i>optional</i>

> ### fileName
> File name for the deck. Combines the `name` and `code` fields to avoid namespace collisions.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.3.0`  


> ### mainBoard
> The cards in the main-board. See the [Card (Deck)](../../data-models/card-deck) data model.
>
> - **Type:** `array(object)`
> - **Introduced:** `v4.3.0`

> ### name
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### sideBoard
> The cards in the side-board. See the [Card (Deck)](../../data-models/card-deck) data model.
>
> - **Type:** `array(object)`
> - **Introduced:** `v4.3.0`

> ### releaseDate
> Release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns `null` if the set was not formally released as a product.
>
> - **Type:** `string | null`
> - **Introduced:** `v4.3.0`

> ### type
> The type of deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
