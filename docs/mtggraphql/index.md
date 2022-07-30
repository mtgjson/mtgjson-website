---
title: MTGGraphQL
head:
  - - meta
    - property: og:title
      content: MTGGraphQL
  - - meta
    - name: description
      content: MTGGraphQL is a sub-service of MTGJSON and a GraphQL API/Server built on top of the MTGJSON data sets. The goal being to reduce the amount of unnecessary data retrieved and empowering users to ask for exactly what they need from the GraphQL service.
  - - meta
    - property: og:description
      content: MTGGraphQL is a sub-service of MTGJSON and a GraphQL API/Server built on top of the MTGJSON data sets. The goal being to reduce the amount of unnecessary data retrieved and empowering users to ask for exactly what they need from the GraphQL service.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, graphql, mtggraphql
---

# MTGGraphQL

MTGGraphQL is a sub-service of MTGJSON and a GraphQL API/Server built on top of the MTGJSON data sets. The goal being to reduce the amount of unnecessary data retrieved and empowering users to ask for exactly what they need from the GraphQL service. This will also allow us to connect future projects & changes under a single API that can evolve over time. While more data is in the works, the current service focuses on these JSON payloads:

- **Cards**
- **Decks**
- **Sets**
- **Metadata**

<blockquote class="warning">
  <p class="small-header">Beta Information</p>
  <p>The beta rollout of the service will be available to all <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a> supporters with the goal of bringing a version to the rest of the community in the near future. Feel free to submit suggestions via the <a href="https://mtgjson.com/discord">Discord Server</a>.</p>
</blockquote>

## Service Index

[[toc]]

### Data Source

The GraphQL endpoint is based on the latest MTGJSON release. The dataset is normally refreshed once a week, coinciding with the MTGJSON weekly rebuild.

### Rate Limits

The current rate limits are capped at `1,000` requests per IP Address per hour and `500` requests per key per hour.

### NPM Typescript Package

To go along with MTGGraphQL, we have released a Typescript package for your convenience: [mtggraphql](https://www.npmjs.com/package/mtggraphql/)

### GraphQL Playground

We provide a [GraphQL Playground](https://graphql.mtgjson.com/) where you can query the server and get a response. The playground consists of 3 main sections:

- **The top left, for your query**
- **The bottom left tabs, containing `HTTP HEADERS` for your authorization**
- **The right, which has the server response**

#### Example Headers Authorization

```json
{
  "authorization": "Bearer <Token>"
}
```

#### Example Query

```graphql
query {
  cards(input: { name: "Phelddagrif" }, page: { take: 100, skip: 0 }, order: { order: ASC }) {
    name
    setCode
    type
    text
  }
}
```

#### Example Response

```json
{
  "data": {
    "cards": [
      {
        "name": "Phelddagrif",
        "setCode": "ME1",
        "type": "Legendary Creature — Phelddagrif",
        "text": "{G}: Phelddagrif gains trample until end of turn. Target opponent creates a 1/1 green Hippo creature token.\n{W}: Phelddagrif gains flying until end of turn. Target opponent gains 2 life.\n{U}: Return Phelddagrif to its owner's hand. Target opponent may draw a card."
      },
      ... // More cards
    ]
  }
}
```

### Client-based Querying

Assuming you send the proper Headers, you can use an HTTP request on the GraphQL endpoint with the following format:

```
https://graphql.mtgjson.com?query=query{cards(input:{name:"Phelddagrif"},page:{take:100,skip:0},order:{order:ASC}){name,setCode,type,text}}
```

You can utilize a tool like [Apollo](https://www.apollographql.com/docs/react/data/queries/) to make Client-based calls.
