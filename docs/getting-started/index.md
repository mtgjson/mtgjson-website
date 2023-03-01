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

## On this page

[[toc]]

## MTGJSON Files

### File Formats

Formats are provided via an "API-like" server. JSON can be fetched in your code, but many of the files are extremely large in size so it is not recommended to open links in your browser.

**The following formats are provided by MTGJSON services:**

- **JSON**
- **CSV**
- **SQL/SQLite**
- **Compressed files**

## Models

Models are a general term used to categorize data objects when using this documentation.

::: tip Quick Tip

_**File Models** inherit **Data Models** and **Data Models** provide further definitions for a **File Model**. **Abstract Models** have many nested key/value pairs for specific **File Models** and are documented separately from **Data Models**._

:::

### File Models

A File Model is defined by two main properties. One being the `meta` property described as the [Meta](/data-models/meta/) Data Model and the `data` property which can vary on a file by file basis.

For example, the commonly used `AllPrintings.json` file uses the [Set](/data-models/set/) Data Model within the `data` property using a Set's [code](/data-models/set/#code) property as the access key.

::: tip A Closer Look

This documentation leverages TypeScript concepts to define properties.

```JSON
"data": {
  "10E": Set
}
```

:::

### Data Models

Data Models are data objects that are generally flat in nature, they are an object or array and they have one or more key/value pairs. Some of those values become more complex data objects that are documented separately, but similarly, as other Data Models. They vary in their availability and are based heavily on the File Model.

For example, a [Set](/data-models/set/) Data Model is the model used in the `data` property for `AllPrintings.json`. With this, a object of data about card Sets are returned using the [Card (Set)](/data-models/card-set/) Data Model - which has its own unique property values based on the Set it was defined in.

::: tip An Even Closer Look

```JSON
"data": {
  "10E": {
    "cards": CardSet[]
  }
}
```

:::

### Abstract Models

Abstract Models have abnormal data objects that are not clearly defined. They tend to have many nested properties with non-unique keys so documentation is formalized with example data.

For example, `AllPrices.json` uses the [All Prices](/abstract-models/all-prices/) Abstract Model in its `data` property.

## GraphQL API

### MTGGraphQL

A sub-service of MTGJSON, [MTGGraphQL](/mtggraphql/) is a GraphQL API service built on top of MTGJSON data.
