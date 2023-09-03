---
title: Price List
head:
  - - meta
    - property: og:title
      content: Price List
  - - meta
    - name: description
      content: The Price List Data Model describes the properties of a card providers list of buying and selling ability.
  - - meta
    - property: og:description
      content: The Price List Data Model describes the properties of a card providers list of buying and selling ability.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, price provider
---

# Price List

The Price List Data Model describes the properties of a card providers list of buying and selling ability.

- **Parent model:** [Price Formats](/data-models/price-formats/)
- **Parent property:** `cardhoarder`, `cardkingdom`, `cardmarket`, `cardsphere`, `tcgplayer`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/PriceList.ts{TypeScript}

:::

## Model Properties

> ### buylist <DocBadge type="warning" text="optional" />
>
> A list of card type availability for selling cards to this provider. See the [Price List](/data-models/price-list/) Data Model.
>
> - **Type:** `PriceList`
> - **Introduced:** `v5.2.2`

> ### currency
>
> The currency of prices listed.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### retail <DocBadge type="warning" text="optional" />
>
> A list of card type availability for buying cards from this provider. See the [Price List](/data-models/price-list/) Data Model.
>
> - **Type:** `PriceList`
> - **Introduced:** `v5.2.2`
