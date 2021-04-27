---
{
  "title": "File Structures",
  "schema": "files",
  "meta": [
    {
      "name": "description",
      "content": "Understanding MTGJSON files structures.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, cards, file structures",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# File Models

The "Web API" or more commonly known as "files" that MTGJSON.com provides varies from JSON to compressed files to SQL databases. The following documentation describes the JSON-based files and how they are served. Compressed versions of these files have the same data inside of them.

::: tip While MTGJSON.com serves a variety of files, there are only a few major file types, and variations to those types, that utilize one or more data models:
</br>

- **AllPrintings**: Serves all set data using the [Set](/file-models/set/) file model.
- **AllIdentifiers**: Serves all card data using the [Card (Set)](../card-set/) data model.
- **AtomicCards**: Serves all card data using the [Card (Atomic)](/file-models/card-atomic) data model.
- **[Format]**: Serves variable set data using the [Set](/file-models/set/) file model.
- **[Format]Atomic**: Serves variable card data using [Card (Atomic)](/file-models/card-atomic/) data model.
- Other files serve specific data using data models such as the [Deck](/file-models/deck/), [All Prices](/abstract-models/all-prices/) or other abstract data models.
</br>
</br>
For a full list of files, see [All Files](../downloads/all-files/) downloads page.
:::

#### File Model Index

[[toc]]

#### File Model Properties

> ### meta
> Application metadata object. See the [Meta](/file-models/meta/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v5.0.0`  

> ### data
> Top-level key that holds the "Web API" data. The returned data is based on the file.
>
> - **Type:** `object | array(object)`  
> - **Introduced:** `v5.0.0`  
