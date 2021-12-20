---
{
  "title": "Downloads",
  "meta": [
    {
      "name": "description",
      "content": "MTGJSON downloads.",
    },
    {
      "property": "og:description",
      "content": "MTGJSON downloads."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, downloads",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Downloads

MTGJSON provides a variable amount of data to work with in various types of file formats.

**Downloads are provided as:**

- [All Files](/downloads/all-files/) (All available top-level download files)
- [All Sets](/downloads/all-sets) (All individual sets)
- [All Decks](/downloads/all-decks) (All individual decks).

## Understanding Files

The "Web API" or more commonly known as "files" that MTGJSON.com provides formats from JSON to compressed files to SQL databases. The following describes the JSON-based files and how they are served. Compressed versions of these files have the same data inside of them.

::: tip While MTGJSON.com serves a variety of files, there are only a few major file types, and variations to those types, that utilize one or more data models:
</br>

- **AllPrintings**: Serves all set data using the [Set](/data-models/set/) data model.
- **AllIdentifiers**: Serves all card data using the [Card (Set)](/data-models/card-set/) data model.
- **AtomicCards**: Serves all card data using the [Card (Atomic)](/data-models/card-atomic/) data model.
- **[Format]Atomic**: Serves variable card data using [Card (Atomic)](/data-models/card-atomic/) data model.
- **[Format]**: Serves variable set data using the [Set](/data-models/set/) data model.
- Other files serve specific data using data models such as the [Deck](/data-models/deck/), [All Prices](/abstract-models/all-prices/) and other [Abstract Models](/abstract-models/).
</br>
</br>
For a full list of files, see [All Files](/downloads/all-files/) downloads page.
:::

## File Model Index

[[toc]]

## File Model Properties

> ### meta
> Application metadata object. See the [Meta](/data-models/meta/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v5.0.0`  

> ### data
> The returned data is based on the file.
>
> - **Type:** `object{props} | array[object]`  
> - **Introduced:** `v5.0.0`  
