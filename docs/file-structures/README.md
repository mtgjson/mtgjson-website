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

> The "Web API" or more commonly known as "files" that MTGJSON.com provides varies from JSON to compressed files to SQL databases. The following documentation describes the JSON-based files and how they are served. Compressed versions of these files have the same data inside of them.

While MTGJSON.com serves a variety of files, there are 3 major file types, and variations to those types, that utilize one or more data models...  

- *AtomicCards: Serves variable data using the [Card (Atomic)](../data-models/card-atomic/) data model.
- *Printings: Serves variable data using the [Set (Individual)](../data-models/set-individual/) data model.
- Other files serve specific data using data models such as [Card Types](../data-models/card-types/) or [Deck (Individual)](../data-models/deck-individual/).

For a full list of files, see [All Files](../downloads/all-files/) downloads page.

The following is the data model for all files:
</br>
</br>

### Model Properties

<Documentation/>
