---
{
  "title": "Leadership Skills",
  "schema": "leadershipSkills",
  "meta": [
    {
      "name": "description",
      "content": "LeadershipSkills data model documentation.",
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

The Leadership Skills data model describes a list of formats that a specific card is legal to be your Commander in play formats that utilize commanders.

**Parent model:** [Card](../card/)  
**Parent property:** `leadershipSkills`

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### brawl  
> If this card can be your commander in the [Brawl](https://magic.wizards.com/en/game-info/gameplay/formats/brawl) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`

> ### commander  
> If this card can be your commander in the [Commander/EDH](https://magic.wizards.com/en/content/commander-format) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`

> ### oathbreaker  
> If this card can be your commander in the [Oathbreaker](https://oathbreakermtg.org/) format.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.5.1`
