---
{
  "title": "Rulings",
  "schema": "rulings",
  "meta": [
    {
      "name": "description",
      "content": "Rulings data model documentation.",
    },
    {
      "property": "og:description",
      "content": "Rulings data model documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, rules, rulings, ruling",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Rulings

The Rulings data model describes a list of rulings for a specific card.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `rulings`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### date  
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the rule.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional">Optional</i>

> ### text  
> The text ruling of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional">Optional</i>
