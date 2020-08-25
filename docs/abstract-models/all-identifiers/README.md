---
{
  'title': 'All Identifiers',
  'meta':
    [
      { 'name': 'description', 'content': 'All Identifiers data model documentation.' },
      {
        'name': 'keywords',
        'content': 'mtg, magic: the gathering, mtgjson, json, all identifiers',
      },
    ],
  'feed': { 'enable': 'true' },
}
---

# All Identifiers

The All Identifiers data model describes a list of all cards organized by UUID.

> Parent file: <span class="code-wrap">[AllIdentifiers](../../api/v5/AllIdentifiers.json)</span>  
> Parent property: `data`

## File Structure Overview

```json
{
  "<Card UUID>": <Card Model>
}
```

### Example Model

```json
{
  "00010d56-fe38-5e35-8aed-518019aa36a5": {
    "artist": "Lius Lasahido",
    "availability": ["paper"],
    "borderColor": "black",
    "colorIdentity": ["U"],
    "colors": ["U"],
    "convertedManaCost": 7.0,
    "edhrecRank": 2932,
    "flavorText": "He answers questions as readily as he asks them, but his answer is always \"no.\"",
    "foreignData": [],
    "frameVersion": "2015",
    "hasFoil": true,
    "hasNonFoil": false,
    "identifiers": {
      "cardKingdomFoilId": "206447",
      "mtgjsonV4Id": "7bf63c97-27da-516c-b722-75299370a28d",
      "scryfallId": "f6555d1f-d4cf-41f7-99d3-88fd53e75457",
      "scryfallIllustrationId": "414c0cef-4fd9-4515-b602-91c206c33a3d",
      "scryfallOracleId": "d4246e4d-390d-4925-a5a8-89cd096a237c",
      "tcgplayerProductId": "111268"
    },
    "isPromo": true,
    "isReprint": true,
    "isStarter": true,
    "keywords": ["Flying", "Hexproof"],
    "layout": "normal",
    "legalities": {
      "commander": "Legal",
      "duel": "Legal",
      "legacy": "Legal",
      "modern": "Legal",
      "pioneer": "Legal",
      "vintage": "Legal"
    },
    "manaCost": "{5}{U}{U}",
    "name": "Sphinx of the Final Word",
    "number": "63s",
    "power": "5",
    "printings": ["OGW", "POGW"],
    "promoTypes": ["datestamped", "prerelease", "setpromo"],
    "purchaseUrls": {
      "cardKingdomFoil": "https://mtgjson.com/links/cf9936d3fed16d63",
      "tcgplayer": "https://mtgjson.com/links/f81cadeb87698023"
    },
    "rarity": "mythic",
    "rulings": [
      {
        "date": "2016-01-22",
        "text": "A spell that can’t be countered can still be targeted by spells or abilities that would counter it. The part of their effect that would counter the spell won’t do anything, but any other effects those spells or abilities may have will still happen, if applicable."
      }
    ],
    "setCode": "POGW",
    "subtypes": ["Sphinx"],
    "supertypes": [],
    "text": "This spell can't be countered.\nFlying, hexproof\nInstant and sorcery spells you control can't be countered.",
    "toughness": "5",
    "type": "Creature — Sphinx",
    "types": ["Creature"],
    "uuid": "00010d56-fe38-5e35-8aed-518019aa36a5"
  }
}
```
