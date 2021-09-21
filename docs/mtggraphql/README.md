---
{
  "title": "MTGGraphQL",
  "meta": [
    {
      "name": "description",
      "content": "MTGGraphQL service documentation",
    },
    {
      "property": "og:description",
      "content": "MTGGraphQL service documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, graphql, mtggraphql",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# MTGGraphQL

[MTGGraphQL](https://mtgjson.com/graphql), a sub-service of MTGJSON, is a GraphQL API and Server built on top of the MTGJSON data sets. The goal being to reduce the amount of unnecessary data retrieved and empowering clients with the power to ask for exactly what they need from the MTGJSON service and nothing more. This service will also allow us to connect future projects & changes under a single API that can evolve over time. The current service focuses on JSON payloads for:

- Cards
- Decks
- Sets
- Metadata

::: warning
The beta rollout of the service will be available to all <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> supporters with the goal of bringing a version to the rest of the community in the near future. Feel free to submit suggestions via the [Discord Server](https://mtgjson.com/discord).
:::

## Service Overview

[[toc]]

### Data Source

The GraphQL endpoint is based on the latest MTGJSONv5 release. The dataset is normally refreshed once a week, coinciding with the MTGJSON weekly rebuild.

### Rate Limits

The current rate limits are capped at `1,000` requests per IP Address per hour and `500` requests per key per hour.

### NPM Typescript Package

To go along with MTGGraphQL, we have released a Typescript package for your convenience: [mtggraphql](https://www.npmjs.com/package/mtggraphql)

## Service Usage

### GraphQL Playground

We provide a [GraphQL Playground](https://mtgjson.com/graphql) where you can query the server and get a response. The playground consists of 3 main sections:

- The top left, for your query.
- The bottom left tabs, containing `HTTP HEADERS` for your authorization.
- The right, which has the server response.

#### Example Headers Authorization

```json
{
  "authorization": "Bearer <Token>"
}
```

#### Example Query

```
query{
  cards(
    input:{
        name: "Phelddagrif"
      },
      page:{
        take: 100,
        skip: 0
      },
      order:{
        order:ASC
      }
  )
  {
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
https://mtgjson.com/graphql?query=query{cards(input:{name:"Phelddagrif"},page:{take:100,skip:0},order:{order:ASC}){name,setCode,type,text}}
```

You can utilize a tool like Apollo to make client-based calls. See the [Apollo Documentation](https://www.apollographql.com/docs/react/data/queries/) for more information.
