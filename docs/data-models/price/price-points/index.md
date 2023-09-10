---
title: Price Points
head:
  - - meta
    - property: og:title
      content: Price Points
  - - meta
    - name: description
      content: The Price Points Data Model describes the properties of a card's price provider prices.
  - - meta
    - property: og:description
      content: The Price Points Data Model describes the properties of a card's price provider prices.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, price list
---

# Price Points

The Price Points Data Model describes the properties of a card's price provider prices.

- **Parent model:** [Price List](/data-models/price/price-list/)
- **Parent property:** `buylist`, `retail`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/PricePoints.ts{TypeScript}

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
