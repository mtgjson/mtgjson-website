---
{
  "title": "Understanding Files",
  "schema": "Files",
  "meta": [
    {
      "name": "description",
      "content": "Understanding MTGJSON files.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, cards, understanding files",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Understanding Files

> The "Web API" or more commonly known as "files" that MTGJSON.com provides varies from JSON to compressed files to database files. The following documentation describes the JSON-based files and how they are served. Compressed versions of these files have the same data inside of them.

While MTGJSON.com serves a variety of files, there are 4 major file types and variation to those types that one or more data structures...  

- *Cards: Serves data variations of the [Card](../structures/card) structure.
- *Printings: Serves data variations of the [Set](../structures/set) structure.
- AllPrices: Serves data variations of [Prices](../structures/prices) structure.
- Other: Serves data for specific a data structure, like [Card Types](../structures/card-types) or [Deck (Individual)](../structures/deck-individual).

The following is the data structure for all files:
</br>
</br>

### Data Properties

<Documentation/>
