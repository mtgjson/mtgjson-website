---
{
  "title": "Deck List",
  "schema": "deck",
  "meta": [
    {
      "name": "description",
      "content": "Deck List Data Model documentation.",
    },
    {
      "name": "og:description",
      "content": "Deck List Data Model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, decklist, deck list",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Deck List

The Deck List Data Model describes a metadata-like model that holds information about a [Deck](/data-models/deck/).

**Parent file:** [DeckList](/downloads/all-files/#decklist)  
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

> ### fileName
> The file name for the deck. Combines the `name` and `code` fields to avoid namespace collisions and are given a delimiter of `_`.
>
> - **Type:** `string`  
> - **Introduced:** `v4.3.0`  

> ### name
> The name of the deck.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### releaseDate
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set. Returns `null` if the set was not formally released as a product.
>
> - **Type:** `null || string`
> - **Introduced:** `v4.3.0`

> ### type
> The type of the deck.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.3.0`
