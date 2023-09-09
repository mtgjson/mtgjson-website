---
title: Purchase Urls
head:
  - - meta
    - property: og:title
      content: Purchase Urls
  - - meta
    - name: description
      content: The Purchase Urls Data Model describes the properties of links to purchase a product from a marketplace.
  - - meta
    - property: og:description
      content: The Purchase Urls Data Model describes the properties of links to purchase a product from a marketplace.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, purchase urls
---

# Purchase Urls

The Purchase Urls Data Model describes the properties of links to purchase a product from a marketplace.

- **Parent model:** [Card (Atomic)](/data-models/card/card-atomic/), [Card (Deck)](/data-models/card/card-deck/), [Card (Set)](/data-models/card/card-set/)
- **Parent property:** `purchaseUrls`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/PurchaseUrls.ts{TypeScript}

:::

## Model Properties

> ### cardKingdom <DocBadge type="warning" text="optional" />
>
> The URL to purchase a product on [Card Kingdom](https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### cardKingdomEtched <DocBadge type="warning" text="optional" />
>
> The URL to purchase an etched product on [Card Kingdom](https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### cardKingdomFoil <DocBadge type="warning" text="optional" />
>
> The URL to purchase a foil product on [Card Kingdom](https://www.cardkingdom.com?partner=mtgjson&utm_source=mtgjson&utm_medium=affiliate&utm_campaign=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### cardmarket <DocBadge type="warning" text="optional" />
>
> The URL to purchase a product on [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v4.4.0`

> ### tcgplayer <DocBadge type="warning" text="optional" />
>
> The URL to purchase a product on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v4.4.0`

> ### tcgplayerEtched <DocBadge type="warning" text="optional" />
>
> The URL to purchase an etched product on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
