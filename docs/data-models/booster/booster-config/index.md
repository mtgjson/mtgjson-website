---
title: Booster Config
head:
  - - meta
    - property: og:title
      content: Booster Config
  - - meta
    - name: description
      content: The Booster Config Data Model describes the properties of how a Set's booster data may be configured.
  - - meta
    - property: og:description
      content: The Booster Config Data Model describes the properties of how a Set's booster data may be configured.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster config
---

# Booster Config

The Booster Config Data Model describes the properties of how a [Set](/data-models/set/)'s booster data may be configured.

- **Parent model:** [Set](/data-models/set/)
- **Parent property:** `booster`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/BoosterConfig.ts{TypeScript}

:::

## Model Properties

> ### boosters
>
> The booster packs configurations. See the [Booster (Pack)](/data-models/booster/booster-pack/) Data Model.
>
> - **Type:** `BoosterPack[]`
> - **Introduced:** `v5.2.2`

> ### boostersTotalWeight
>
> The weight of total booster pack configurations.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.2`

> ### name <DocBadge type="warning" text="optional" />
>
> The name of the product, if applicable.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.2`

> ### sheets
>
> The sheets of cards in a printing where the key is the name of the sheet and value is the configuration. See the [Booster (Sheet)](/data-models/booster/booster-sheet/) Data Model.
>
> - **Type:** `Record<string, BoosterSheet>`
> - **Introduced:** `v5.2.2`

> ### sourceSetCodes
>
> The set codes with which cards in this booster are selected from.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.2`
