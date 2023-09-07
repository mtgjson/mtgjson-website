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

::: warning Clarity On Documentation

This documentation leverages **TypeScript** syntax to describe data.

:::

## MTGJSON Files

### File Formats

Formats are provided via an "API-like" server. JSON can be fetched in your code, but many of the files are extremely large in size so it is not recommended to open links in your browser.

**The following formats are provided by MTGJSON services:**

- **JSON**
- **CSV**
- **Parquet**
- **SQL**
- **SQLite**
- **PSQL**
- **Compressed files**

## File Models

A File Model is defined by two main properties. One being the `meta` property described as the [Meta](/data-models/meta/) Data Model and the `data` property which can vary on a file by file basis.

For example, the `AllPrintings.json` File Model uses the [Set](/data-models/set/) Data Model within the `data` property using a Set's [code](/data-models/set/#code) property as the key.

::: tip A closer look at AllPrintings

```TypeScript
{
  meta: Meta;
  data: Record<string, Set>;
}
```

:::

## Data Models

Data Models are a general term used to categorize data objects when using this documentation.

::: tip Quick Tip

**File Models** inherit **Data Models** and **Data Models** provide further definitions for a **File Model**. **Abstract Data Models** have many non-unique property names and values for specific **File Models** and are documented differently from **Data Models**.

:::

Generally flat in nature, Data Models is JSON that have one or more key/value pairs. Some of those values become more complex data objects that are documented separately, but similarly, as other Data Models. They vary in their availability and are based heavily on the File Model.

For example, the `AllIdentifiers.json` File Model uses the [Card (Set)](/data-models/card-set/) Data Model for the card data returned using that card's [uuid](/data-models/card-set/#uuid) property as the key.

::: tip A closer look at AllIdentifiers

```TypeScript
{
  meta: Meta;
  data: Record<string, CardSet>;
}
```

:::

Alternatively, the `AtomicCards.json` File Model uses the [Card (Atomic)](/data-models/card-atomic/) Data Model for the card data returned using that card's [name](/data-models/card-atomic/#name) property as the key.

::: tip A closer look at AtomicCards

```TypeScript
{
  meta: Meta;
  data: Record<string, CardAtomic>;
}
```

:::

## GraphQL API

### MTGGraphQL

A service of MTGJSON, [MTGGraphQL](/mtggraphql/) is a GraphQL API service built on top of MTGJSON data.
