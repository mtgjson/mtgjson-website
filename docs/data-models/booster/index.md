---
title: Booster
head:
  - - meta
    - property: og:title
      content: Booster
  - - meta
    - name: description
      content: A Booster is a data structure with containing property values of Data Models, and not a Data Model itself. The booster property is found on a Set Data Model.
  - - meta
    - property: og:description
      content: A Booster is a data structure with containing property values of Data Models, and not a Data Model itself. The booster property is found on a Set Data Model.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, booster
---

# Booster

A Booster is a data structure with containing property values of Booster configurations, and is not a Data Model itself.

- **Parent model:** [Set](/data-models/set/)

## Booster Configurations

### Overview

The actual Booster data is accessed through a property key that defines the [Booster Config](/data-models/booster/booster-config/). What this property key name is depends on the Set that contains this Data Model and all of its booster variations for that Set.

### TypeScript Model

::: details Toggle Model

```TypeScript
{
  data: Record<string, BoosterConfig>;
}
```

:::

The Data Models of a configuration are documented in the following pages.
