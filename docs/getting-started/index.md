---
title: Getting Started
head:
  - - meta
    - property: og:title
      content: Getting Started
  - - meta
    - name: description
      content: Guides for getting started with MTGJSON data.
  - - meta
    - property: og:description
      content: Guides for getting started with MTGJSON data.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, getting started, guides
---

# Getting Started

MTGJSON is an open-source project that catalogs all [Magic: The Gathering](https://magic.wizards.com/en) data in portable formats. Using an aggregation process we fetch information between multiple resources and approved partners, and combine all that data in to various downloadable formats.

**Below is some guiding information to get you started on working with MTGJSON data.**

## Data Index

[[toc]]

## Files

### Formats

Formats are provided via an "API-like" server. JSON can be fetched in your code, but many of the files are extremely large in size so it is not recommended to open links in your browser.

- **JSON**
- **CSV**
- **SQL/SQLite**
- **Compressed files**

### Downloads

For a full list of files see the [Downloads](/downloads/) section.

## Models

### Data Models

Data Models are what we call the structures that contain data inside files and other Data Models. They vary in their availability and are based heavily on the type of file accessed and the Data Models in those files. Some of the Data Models used in the files are:

- [Card (Atomic)](/data-models/card-atomic/): Data inside `AtomicCards.json` and `<Format>Atomic.json`
- [Card (Set)](/data-models/card-set/): Data inside `AllIdentifiers.json`
- [Set](/data-models/set/): Data inside `AllPrintings.json` and `<Format>.json`

### Abstract Models

Abstract Models are what we call the structures that contain more complex data inside files. They tend to have many nested properties and thus documentation is formalized with example responses and structures. Some of the Abstract Models used in files are:

- [All Prices](/abstract-models/all-prices/): Data inside `AllPrices.json`
- [Booster](/abstract-models/booster/): Data inside [Set](/data-models/set/#booster) `booster` property
- [Enum Values](/abstract-models/enum-values/): Data inside `EnumValues.json`

## GraphQL API

### MTGGraphQL

A sub-service of MTGJSON, [MTGGraphQL](/mtggraphql/) is a GraphQL API built on top of the MTGJSON data sets.
