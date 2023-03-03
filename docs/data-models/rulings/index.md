---
title: Rulings
head:
  - - meta
    - property: og:title
      content: Rulings
  - - meta
    - name: description
      content: The Rulings Data Model describes the properties of rulings for a card.
  - - meta
    - property: og:description
      content: The Rulings Data Model describes the properties of rulings for a card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, rulings
---

# Rulings

The Rulings Data Model describes the properties of rulings for a card.

- **Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)
- **Parent property:** `rulings`

## TypeScript Model

::: details Show/Hide Model

<<< @/public/static/Rulings.ts{TypeScript}

:::

## Model Index

[[toc]]

## Model Properties

> ### date
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the rule.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### text
>
> The text ruling of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
