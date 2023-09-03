---
title: Booster (Sheet)
head:
  - - meta
    - property: og:title
      content: Booster (Sheet)
  - - meta
    - name: description
      content: The Booster (Sheet) Data Model describes the properties of how a sheet of printed cards can be configured.
  - - meta
    - property: og:description
      content: The Booster (Sheet) Data Model describes the properties of how a sheet of printed cards can be configured.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster sheet, sheet
---

# Booster (Sheet)

The Booster (Sheet) Data Model describes the properties of how a sheet of printed cards can be configured.

- **Parent model:** [Booster](/data-models/booster/)
- **Parent property:** `sheets`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/BoosterSheet.ts{TypeScript}

:::

## Model Properties

> ### allowDuplicates
>
> If the sheet can be picked for cards in duplicates.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### balanceColors
>
> If the sheet needs to have it colors balanced.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### cards
>
> The cards in the sheet, where the key is the card `uuid` and value is its weight in the sheet.
>
> - **Type:** `Record<string, number>`
> - **Introduced:** `v5.2.2`

> ### foil
>
> If the cards in the sheet are all foiled.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### fixed
>
> If cards are garunteed to be in this sheet. Used for "Jump Start"-style products.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### totalWeight
>
> Total weight of the sheet.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.2`
