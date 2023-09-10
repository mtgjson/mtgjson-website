---
title: Booster Pack
head:
  - - meta
    - property: og:title
      content: Booster Pack
  - - meta
    - name: description
      content: The Booster Pack Data Model describes the properties of how a Booster Pack can be configured.
  - - meta
    - property: og:description
      content: The Booster Pack Data Model describes the properties of how a Booster Pack can be configured.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster pack, pack
---

# Booster Pack

The Booster Pack Data Model describes the properties of how a Booster Pack can be configured.

- **Parent model:** [Booster Config](/data-models/booster/booster-config/)
- **Parent property:** `boosters`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/BoosterPack.ts{TypeScript}

:::

## Model Properties

> ### contents
>
> The contents of the booster pack, where the key is the card slot and value is the weight.
>
> - **Type:** `Record<string, number>`
> - **Introduced:** `v5.2.2`

> ### weight
>
> The weight of the booster pack configuration.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.2`
