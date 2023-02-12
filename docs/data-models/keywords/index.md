---
title: Keywords
enum: keywords
head:
  - - meta
    - property: og:title
      content: Keywords
  - - meta
    - name: description
      content: The Keywords Data Model describes a list of all keywords used on a Card.
  - - meta
    - property: og:description
      content: The Keywords Data Model describes a list of all keywords used on a Card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, keywords
---

# Keywords

The Keywords Data Model describes a list of all keywords used on a Card.

- **Parent file:** [Keywords](/downloads/all-files/#keywords)
- **Parent property:** `data`

## Model Type

<ModelType type="Keywords" />

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### abilityWords
>
> A list of ability words found in rules text on cards.
>
> - **Type:** `string[]`
> - <ExampleField type='abilityWords'/>
> - **Introduced:** `v4.3.0`

> ### keywordAbilities
>
> A list of keyword abilities found in rules text on cards.
>
> - **Type:** `string[]`
> - <ExampleField type='keywordAbilities'/>
> - **Introduced:** `v4.3.0`

> ### keywordActions
>
> A list of keyword actions found in rules text on cards.
>
> - **Type:** `string[]`
> - <ExampleField type='keywordActions'/>
> - **Introduced:** `v4.3.0`
