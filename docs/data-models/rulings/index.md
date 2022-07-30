---
title: Rulings
head:
  - - meta
    - property: og:title
      content: Rulings
  - - meta
    - name: description
      content: The Rulings data model describes a list of rulings for a Card.
  - - meta
    - property: og:description
      content: The Rulings data model describes a list of rulings for a Card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, rulings
---

# Rulings

The Rulings data model describes a list of rulings for a Card.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  

**Parent property:** `rulings`

## Model Index

<ModelType type="Rulings" />

<PropertyToggler/>

[[toc]]

## Model Properties

> ### date
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the rule.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional"></i>

> ### text
>
> The text ruling of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes** <i class="optional"></i>
