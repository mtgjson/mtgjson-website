---
title: Data Models
head:
  - - meta
    - property: og:title
      content: Data Models
  - - meta
    - name: description
      content: Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.
  - - meta
    - property: og:description
      content: Data Models in MTGJSON describe any JSON object or nested JSON object that provides a flat response. As such, they will only have one level of nested keys. Any additional nested keys that return another object that is also a flat response are they themselves, a Data Model, and will have its own documentation.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, data models
---

# Data Models

Data Models in MTGJSON describe any JSON object or nested JSON object.

Generally speaking, most **Data Models** describe flat structures, but **Abstract Data Models** describe many nested data structures within Files and Data Models.

The easiest way to think about the difference is that a regular Data Model is a Record or Array containing few other known Records or Arrays, while Abstract Data Models are Records with many variable keys of nested Records or Arrays.

::: info Identifying Abstract Data Models

To help identify Abstract Data Models, they are marked with an <span class="model-badge abstract">A</span> badge in the sidebar.
:::
