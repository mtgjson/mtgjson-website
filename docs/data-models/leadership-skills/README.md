---
{
  "title": "Leadership Skills",
  "schema": "leadershipSkills",
  "meta": [
    {
      "name": "description",
      "content": "Leadership Skills Data Model documentation.",
    },
    {
      "property": "og:description",
      "content": "Leadership Skills Data Model documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, leadership skills, commander",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Leadership Skills

The Leadership Skills Data Model describes a list of formats that a specific card is legal to be your Commander in play formats that utilize commanders.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `leadershipSkills`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### brawl  
> If the card can be your commander in the [Brawl](https://magic.wizards.com/en/game-info/gameplay/formats/brawl) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`

> ### commander  
> If the card can be your commander in the [Commander/EDH](https://magic.wizards.com/en/content/commander-format) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`

> ### oathbreaker  
> If the card can be your commander in the [Oathbreaker](https://oathbreakermtg.org/) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`
