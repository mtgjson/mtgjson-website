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

# File Structures

The "Web API" or more commonly known as "files" that MTGJSON.com provides varies from JSON to compressed files to SQL databases. The following documentation describes the JSON-based files and how they are served. Compressed versions of these files have the same data inside of them.

> While MTGJSON.com serves a variety of files, there are only a few major file types, and variations to those types, that utilize one or more data models:<br><br>
> - **AllPrintings**: Serves all set data using [Set](../data-models/set/) data models.
> - **AtomicCards**: Serves all card data using [Card (Atomic)](../data-models/card-atomic) data models.
> - **[Format]**: Serves variable set data using [Set](../data-models/set/) data models.
> - **[Format]Atomic**: Serves variable card data using [Card (Atomic)](../data-models/card-atomic/) data models.
> - Other files serve specific data using data models such as [Card Types](../data-models/card-types/), [Deck](../data-models/deck/), [All Prices](../abstract-models/all-prices/) or more abstract data model information.<br><br>
> For a full list of files, see [All Files](../downloads/all-files/) downloads page.

### File Model Properties

<Documentation/>
