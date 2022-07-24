---
{
  'title': 'Rulings',
  'schema': 'rulings',
  'meta':
    [
      { 'name': 'description', 'content': 'The Rulings Data Model describes a list of rulings for a Card.' },
      { 'property': 'og:description', 'content': 'The Rulings Data Model describes a list of rulings for a Card.' },
      { 'name': 'keywords', 'content': 'mtg, magic: the gathering, mtgjson, json, rules, rulings, ruling' },
    ],
}
---

# Rulings

The Rulings Data Model describes a list of rulings for a Card.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `rulings`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### date
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the rule.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional">optional</i>

> ### text
>
> The text ruling of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional">optional</i>
