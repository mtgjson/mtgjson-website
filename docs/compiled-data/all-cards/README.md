---
{
  "title": "AllCards",
  "schema": "AllCards",
  "meta": [
    {
      "name": "description",
      "content": "AllCards compiled output schema for MTGJSON.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, allcards, all cards",
    }
  ]
}
---

# AllCards

Every card as a unique "atomic" object. May also be outputted as every card in a specific set.

::: warning
Some data properties will be omitted if they have differing values from set to set.
:::

> Data type: `array(object)`  
> Property type: `anonymous object`  

### Structure

<GenerateTable/>