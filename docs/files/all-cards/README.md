---
{
  "title": "AllCards",
  "schema": "Card",
  "meta": [
    {
      "name": "description",
      "content": "AllCards compiled output schema for MTGJSON.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, allcards, all cards",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# AllCards

Every card as a unique "atomic" object. May also be outputted as every card in a specific set.

> Data type: `array(anonymous object)`  
> Property type: `string`      

::: tip AllCards.json is strictly a unique record of every magic card and does not include all finite details about each card.

Each card's keys are limited to its atomic data only - data that typically will never change with the cards newer printings.
:::

::: warning Deprecation Warning
`tcgplayerPurchaseUrl` will be removed in v4.5.0.
:::

### Structure

<GenerateTable/>
