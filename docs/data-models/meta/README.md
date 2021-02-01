---
{
  "title": "Meta",
  "schema": "meta",
  "meta": [
    {
      "name": "description",
      "content": "Meta data model compiled output documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, version",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Meta

The Meta data model describes application build date and version number.

**Parent file:** [Meta](../../api/v5/Meta.json.zip)  
**Parent property:** `data`, `meta`  

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### date  
> [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) date of the current MTGJSON build.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### version  
> [SemVer](https://semver.org) specification of the current MTGJSON build.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`
