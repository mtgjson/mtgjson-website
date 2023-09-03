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

Data Models in MTGJSON describe any JSON structure within a file or other Data Model. These are the response structures of the JSON payload.

## Attributes

Certain Data Models and Data Model properties may have different attributes to denote alternate types of data returned. Use the below to guide you in understanding what data flows through your application and when to use it.

<!-- ### Abstract Models

<DocBadge inline="true" type="info" text="abstract" /> Data Model is an Abstract Data Model. -->

### Optional Properties

<DocBadge inline="true" type="warning" text="optional" /> Property may not return in the Data Model.

### Deprecated Properties

<DocBadge inline="true" type="danger" text="deprecated" /> Property is deprecated in the Data Model.
