---
{
  'title': 'All Identifiers',
  'meta':
    [
      {
        'name': 'description', 
        'content': 'All Identifiers abstract model documentation.'
      },
      {
        "property": "og:description",
        "content": "All Identifiers abstract model documentation."
      },
      {
        'name': 'keywords',
        'content': 'mtg, magic: the gathering, mtgjson, json, all identifiers',
      },
    ],
  'feed': { 'enable': 'true' },
}
---

# All Identifiers

The All Identifiers abstract data model describes a list of all cards organized by MTGJSON Card UUID using the [Card (Set)](/data-models/card-set/) data model.

**Parent file:** [AllIdentifiers](/downloads/all-files/#allidentifiers)  
**Parent property:** `data`

## Structure Overview

```json
{
  <MTGJSON Card UUID>: <Card (Set) Model>
}
```

## Example Model

```json
{
  84d2e61d-46ef-5fa7-aeff-7a4cd8db71c8: {
    artist: "Jarel Threat",
    availability: [
      "arena",
      "mtgo",
      "paper"
    ],
    borderColor: "black",
    colorIdentity: [
      "W"
    ],
    colors: [
      "W"
    ],
    convertedManaCost: 2,
    edhrecRank: 14032,
    finishes: [
      "nonfoil",
      "foil"
    ],
    flavorText: "The weight of this magic weapon falls heavy on the wicked.",
    foreignData: [],
    frameVersion: "2015",
    hasFoil: true,
    hasNonFoil: true,
    identifiers: {
      cardKingdomFoilId: "248423",
      cardKingdomId: "248071",
      mcmId: "571299",
      mcmMetaId: "343730",
      mtgArenaId: "77106",
      mtgjsonV4Id: "49ad4ebe-75b7-57b1-9716-db565edca0d0",
      mtgoId: "91504",
      scryfallId: "e882c9f9-bf30-46b6-bedc-379d2c80e5cb",
      scryfallIllustrationId: "444cd469-4a05-4a58-a098-8af8a7b0f886",
      scryfallOracleId: "629fe1be-272d-465f-b9b1-2ce177410f13",
      tcgplayerProductId: "243201"
    },
    keywords: [
      "Equip"
    ],
    layout: "normal",
    legalities: {
      brawl: "Legal",
      commander: "Legal",
      duel: "Legal",
      future: "Legal",
      gladiator: "Legal",
      historic: "Legal",
      historicbrawl: "Legal",
      legacy: "Legal",
      modern: "Legal",
      pauper: "Legal",
      penny: "Legal",
      pioneer: "Legal",
      standard: "Legal",
      vintage: "Legal"
    },
    manaCost: "{1}{W}",
    manaValue: 2,
    name: "+2 Mace",
    number: "1",
    printings: [
      "AFR"
    ],
    purchaseUrls: {
      cardKingdom: "https://mtgjson.com/links/2466db20a07b5a89",
      cardKingdomFoil: "https://mtgjson.com/links/60eeaa7b611aa07c",
      cardmarket: "https://mtgjson.com/links/416d2f3c4583aac5",
      tcgplayer: "https://mtgjson.com/links/2254f000ff7f8516"
    },
    rarity: "common",
    rulings: [],
    setCode: "AFR",
    subtypes: [
      "Equipment"
    ],
    supertypes: [],
    text: "Equipped creature gets +2/+2. Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)",
    type: "Artifact — Equipment",
    types: [
      "Artifact"
    ],
    uuid: "84d2e61d-46ef-5fa7-aeff-7a4cd8db71c8"
  }
}
```
