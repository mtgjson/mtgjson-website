---
title: MTGGraphQL Changelog
outline: false
head:
  - - meta
    - property: og:title
      content: MTGGraphQL Changelog
  - - meta
    - name: description
      content: The changelog for the MTGGraphQL application.
  - - meta
    - property: og:description
      content: The changelog for the MTGGraphQL application.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, mtggraphql, graphql
---

# MTGGraphQL Changelog

The following is the MTGGraphQL Changelog. Some parts may be updated for clarity or corrections at any point.

## 1.4.0

Release Date: 2023-09-01

### Announcements

With this release we've put a focus on making the `cards` endpoint more robust.

### Cards

#### Added

- Added price querying directly from cards
- Added `latestPrice` and `prices` as a field resolver
- Added `decksContaining` method to get decks associated with each card found
- Added `set` method to get information for the related set
- Added advanced searching by specifying exact search operators such as `eq`, `in`, and `like`
- Added querying by `text`, `type`, etc; identifieres like `scryfallId`, `multiverseId`, etc

### Misc

- Added defaults for page/order if not specified. (Defaults to {take: 15, skip 0}, and {order: ASC})

## 1.3.0

Release Date: 2023-02-12

### Announcements

With this release of MTGGraphQL we've stablized the application and added prices! Become a patron today at our <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> and get access to our [MTGGraphQL](/mtggraphql/) service.

### Prices (New)

#### Added

- Added price querying

## 1.0.2

Release Date: 2021-01-18

### Announcements

The first public release of MTGGraphQL has gone live! For more information see the [MTGGraphQL](/mtggraphql/) documentation. Access during our beta rollout is limited to <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> supporters. The GraphQL GUI can be accessed via the [MTGGraphQL Playground](https://graphql.mtgjson.com/).

### Notes

#### Prices

- Prices are currently not supported but will be in release v1.1.0
