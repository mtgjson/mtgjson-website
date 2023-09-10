---
title: Price Formats
head:
  - - meta
    - property: og:title
      content: Price Formats
  - - meta
    - name: description
      content: The Price Formats Data Model describes the properties of a card providers buying and selling data.
  - - meta
    - property: og:description
      content: The Price Formats Data Model describes the properties of a card providers buying and selling data.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, price providers
---

# Price Formats

The Price Formats Data Model describes the properties of all product formats that the price providers provide.

- **Parent file:** [All Prices](/downloads/all-files/#allprices), [All Prices Today](/downloads/all-files/#allpricestoday)
- **Parent property:** `data`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/PriceFormats.ts{TypeScript}

:::

## Model Properties

> ### mtgo <DocBadge type="warning" text="optional" />
>
> Card prices available to this card for MTGO products. See the [Price List](/data-models/price/price-list/) Data Model.
>
> - **Type:** `Record<'cardhoarder', PriceList>`
> - **Introduced:** `v5.2.2`

> ### paper <DocBadge type="warning" text="optional" />
>
> Card prices available to this card for paper products. See the [Price List](/data-models/price/price-list/) Data Model.
>
> - **Type:** `Record<'cardkingdom' | 'cardmarket' | 'cardsphere' | 'tcgplayer', PriceList>`
> - **Introduced:** `v5.2.2`
