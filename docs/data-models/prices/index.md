---
title: Prices
head:
  - - meta
    - property: og:title
      content: Prices
  - - meta
    - name: description
      content: The Prices Data Model describes the properties of a card's price points.
  - - meta
    - property: og:description
      content: The Prices Data Model describes the properties of a card's price points.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, price list
---

# Prices

The Prices Data Model describes the properties of a card's price points.

- **Parent model:** [Price List](/data-models/price-list/)
- **Parent property:** `buylist`, `retail`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/Prices.ts{TypeScript}

:::

## Model Properties

> ### foil <DocBadge type="warning" text="optional" />
>
> The card's foil product price, where the key is the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) date and value is its price.
>
> - **Type:** `Record<string, number>`
> - **Introduced:** `v5.2.2`

> ### normal <DocBadge type="warning" text="optional" />
>
> The card's normal product price, where the key is the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) date and value is its price.
>
> - **Type:** `Record<string, number>`
> - **Introduced:** `v5.2.2`
