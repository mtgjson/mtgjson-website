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

**Parent model:** [Card (Atomic)](../card-atomic/), [Card (Deck)](../card-deck/), [Card (Set)](../card-set/)  
**Parent property:** `rulings`

## Model Index

[[toc]]

<PropertyToggler/>

## Model Properties

> ### date  
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the rule.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### text  
> The text ruling of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`
