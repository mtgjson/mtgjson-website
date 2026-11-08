---
title: Token Product (Part)
head:
  - - meta
    - property: og:title
      content: Token Product (Part)
  - - meta
    - name: description
      content: The Token Product (Part) Data Model describes a single token face found in the Token Product Data Model.
  - - meta
    - property: og:description
      content: The Token Product (Part) Data Model describes a single token face found in the Token Product Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, token product part
---

# Token Product (Part)

The Token Product (Part) Data Model describes a single token face found in the [Token Product](/data-models/token-product/) Data Model.

- **Parent model:** [Token Product](/data-models/token-product/)
- **Parent property:** `tokenParts`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/TokenProductPart.ts{TypeScript}

:::

## Model Properties

> ### faceAttribute <DocBadge type="warning" text="optional" />
>
> A list of attributes printed on this face of the product, such as `Gold Stamped`.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.3.0`

> ### uuid <DocBadge type="warning" text="optional" />
>
> The universal unique identifier (v5) of the [Card (Token)](/data-models/card/card-token/) for this face. The token may be in a different set than the token this product is listed under. A small number of parts have no `uuid` and carry `faceId`, `faceName` and `tokenType` instead.
>
> - **Type:** `string`
> - **Introduced:** `v5.3.0`
