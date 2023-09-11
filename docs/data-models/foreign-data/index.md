---
title: Foreign Data
enum: foreignData
head:
  - - meta
    - property: og:title
      content: Foreign Data
  - - meta
    - name: description
      content: The Foreign Data Data Model describes the properties for a card in alternate languages.
  - - meta
    - property: og:description
      content: The Foreign Data Data Model describes the properties for a card in alternate languages.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, foreign data
---

# Foreign Data

The Foreign Data Data Model describes the properties for a card in alternate languages.

- **Parent model:** [Card (Atomic)](/data-models/card/card-atomic/), [Card (Deck)](/data-models/card/card-deck/), [Card (Set)](/data-models/card/card-set/)
- **Parent property:** `foreignData`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/ForeignData.ts{TypeScript}

:::

## Model Properties

> ### faceName <DocBadge type="warning" text="optional" />
>
> The foreign name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.1`

> ### flavorText <DocBadge type="warning" text="optional" />
>
> The foreign flavor text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### language
>
> The foreign language of card.
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v4.0.0`

> ### multiverseId <DocBadge type="warning" text="optional" />
>
> The foreign multiverse identifier of the card.
>
> - **Type:** `number`
> - **Introduced:** `v4.0.0`

> ### name
>
> The foreign name of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### text <DocBadge type="warning" text="optional" />
>
> The foreign text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### type <DocBadge type="warning" text="optional" />
>
> The foreign type of the card, including any supertypes and subtypes, and are given a `-` delimiter if appropriate.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
