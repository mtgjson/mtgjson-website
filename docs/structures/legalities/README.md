---
{
  "title": "legalities",
  "schema": "Legalities",
  "meta": [
    {
      "name": "description",
      "content": "legalities data structure for MTGJSON.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, legal, legalities",
    }
  ]
}
---

# Legalities (Play Formats)

List of play formats that are legal for a specific card.

> Parent structure: [card](../card)  
> Parent property: `legalities`  
> Parent property type: `array(object)`  
> Property type: `string`  
> Property values: `Legal`, `Restricted`, `Banned`, or `Future`  

`Future` is used for a revision of the format in which the card will be legal soon. If the format is not listed, it is assumed the card is not legal in that format.)

If a card is "not legal", it will be omitted from the data.

### Structure

Using [Sol Ring](https://scryfall.com/card/c18/222/sol-ring) as an example:

<GenerateTable/>