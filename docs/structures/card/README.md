---
{
  "title": "card",
  "schema": "Card",
  "meta": [
    {
      "name": "description",
      "content": "Card data structure for MTGJSON.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card, cards",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Card

The card structure describes the properties and values of a single card.

> Potential Parent property: `cards`  
> Potential Parent property type: `array(anonymous object)`  
> Property type: `string`  

### Structure

::: warning Deprecation Warning
`tcgplayerPurchaseUrl` will be deprecated in v4.5.0. `purchaseUrls` is now a key that will contain multiple purchase urls.
:::

<GenerateTable/>