---
title: Booster Sheet
head:
  - - meta
    - property: og:title
      content: Booster Sheet
  - - meta
    - name: description
      content: The Booster Sheet Data Model describes the properties of how a sheet of printed cards can be configured.
  - - meta
    - property: og:description
      content: The Booster Sheet Data Model describes the properties of how a sheet of printed cards can be configured.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster sheet, sheet
---

# Booster Sheet

The Booster Sheet Data Model describes the properties of how a sheet of printed cards can be configured.

- **Parent model:** [Booster Config](/data-models/booster/booster-config/)
- **Parent property:** `sheets`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/BoosterSheet.ts{TypeScript}

:::

## Model Properties

> ### allowDuplicates <DocBadge type="warning" text="optional" />
>
> If the sheet can be picked for cards in duplicates.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### balanceColors <DocBadge type="warning" text="optional" />
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

> ### fixed <DocBadge type="warning" text="optional" />
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
