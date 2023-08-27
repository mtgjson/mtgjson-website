---
title: Meta
enum: meta
head:
  - - meta
    - property: og:title
      content: Meta
  - - meta
    - name: description
      content: The Meta Data Model describes the properties of the MTGJSON application meta data.
  - - meta
    - property: og:description
      content: The Meta Data Model describes the properties of the MTGJSON application meta data.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, version, meta
---

# Meta

The Meta Data Model describes the properties of the MTGJSON application meta data.

- **Parent file:** [Meta](/downloads/all-files/#meta)
- **Parent property:** `meta`, `data`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/Meta.ts{TypeScript}

:::

## Model Properties

> ### date
>
> The current release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the MTGJSON build.
>
> - **Type:** `string`
> - <ExampleField type="date" />
> - **Introduced:** `v4.0.0`

> ### version
>
> The current [SemVer](https://semver.org) version for the MTGJSON build appended with the build date.
>
> - **Type:** `string`
> - <ExampleField type="version" />
> - **Introduced:** `v4.0.0`
