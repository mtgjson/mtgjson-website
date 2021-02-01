---
{
  "title": "Deck (DeckList)",
  "schema": "deck",
  "meta": [
    {
      "name": "description",
      "content": "Deck (DeckList) data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, deck, deck (decklist)",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Deck (DeckList)

The Deck (DeckList) data model describes a metadata-like structure that holds top-level information about a [Deck](../deck/).

**Parent file:** [DeckList](../../api/v5/DeckList.json.zip)  
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

> ### fileName
> File name for the deck. Combines the `name` and `code` fields to avoid namespace collisions.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.3.0`  

> ### name
> The name of the deck.
>
> - **Type:** `string`
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
> - **Examples:** <ExampleField :type='"type"'/>
> - **Introduced:** `v4.3.0`

