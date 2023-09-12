---
title: Price
head:
  - - meta
    - property: og:title
      content: Price
  - - meta
    - name: description
      content: A Price is a data structure with containing property values of prices for a card, organized by its `uuid`, and is not a Data Model itself.
  - - meta
    - property: og:description
      content: A Price is a data structure with containing property values of prices for a card, organized by its `uuid`, and is not a Data Model itself.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, price list
---

# Price

A Price is a data structure with containing property values of prices for a card, organized by its `uuid`, and is not a Data Model itself.

- **Parent file:** [AllPrices](/downloads/all-files/#allprices), [AllPricesToday](/downloads/all-files/#allpricestoday)
- **Parent property:** `data`

### TypeScript Model

::: details Toggle Model {open}

```TypeScript
{
  data: Record<string, PriceFormats>;
}
```

:::

The Data Models of a configuration are documented in the following pages.
