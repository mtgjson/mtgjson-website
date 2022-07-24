---
{
  'title': 'Meta',
  'schema': 'meta',
  'meta':
    [
      { 'name': 'description', 'content': 'The Meta Data Model describes application metadata.' },
      { 'name': 'og:description', 'content': 'The Meta Data Model describes application metadata.' },
      { 'name': 'keywords', 'content': 'mtg, magic: the gathering, mtgjson, json, version, meta' },
    ],
}
---

# Meta

The Meta Data Model describes application metadata.

**Parent file:** [Meta](/downloads/all-files/#meta)  
**Parent property:** `meta`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### date
>
> The current release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the MTGJSON build.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### version
>
> The current [SemVer](https://semver.org) version for the MTGJSON build appended with the build date.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
