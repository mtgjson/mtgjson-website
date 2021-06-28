---
{
  "title": "Keywords",
  "schema": "keywords",
  "meta": [
    {
      "name": "description",
      "content": "Keywords file model documentation.",
    },
    {
      "name": "og:description",
      "content": "Keywords file model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, keywords",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Keywords

The Keywords file model describes a list of all keywords used on Magic: The Gathering cards.

**Parent file:** [Keywords](/downloads/all-files/#keywords)   
**Parent property:** `data`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### abilityWords
> List of ability words found in rules text on cards.
>
> - **Type:** `array[string]`
> - <ExampleField type='abilityWords'/>
> - **Introduced:** `v4.3.0`

> ### keywordAbilities
> List of keyword abilities found in rules text on cards.
>
> - **Type:** `array[string]`
> - <ExampleField type='keywordAbilities'/>
> - **Introduced:** `v4.3.0`

> ### keywordActions
> List of keyword actions found in rules text on cards.
>
> - **Type:** `array[string]`
> - <ExampleField type='keywordActions'/>
> - **Introduced:** `v4.3.0`
