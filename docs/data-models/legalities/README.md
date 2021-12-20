---
{
  "title": "Legalities",
  "schema": "legalities",
  "meta": [
    {
      "name": "description",
      "content": "Legalities data model documentation.",
    },
    {
      "property": "og:description",
      "content": "Legalities data model documentation."
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, legal, legalities",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Legalities

The Legalities data model describes a list of legalities in play formats for a specific card.

**Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)  
**Parent property:** `legalities`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### brawl
> If the card is legal in the [Brawl](https://magic.wizards.com/en/game-info/gameplay/formats/brawl) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### commander
> If the card is legal in the [Commander](https://magic.wizards.com/en/content/commander-format) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### duel
> If the card is legal in the [Duel Commander](https://mtg.fandom.com/wiki/Duel_Commander) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### future
> If the card is legal in the future for the [Standard](https://magic.wizards.com/en/content/standard-formats-magic-gathering) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### frontier
> If the card is legal in the [Frontier](https://magic.wizards.com/en/articles/archive/feature/frontier-magic-2010-05-24) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### gladiator
> If the card is legal in the [Gladiator](https://gladiator.blog/about-gladiator/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### historic
> If the card is legal in the [Historic](https://mtg.fandom.com/wiki/Historic_(format)) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`
> - **Attributes:** <i class="optional">optional</i>

> ### historicbrawl
> If the card is legal in the [Historic Brawl](https://draftsim.com/mtg-arena-historic-brawl/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### legacy
> If the card is legal in the [Legacy](https://magic.wizards.com/en/game-info/gameplay/formats/legacy) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### modern
> If the card is legal in the [Modern](https://magic.wizards.com/en/game-info/gameplay/formats/modern) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### oldschool
> If the card is legal in the [Old School](https://mtg.fandom.com/wiki/Old_School) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### pauper
> If the card is legal in the [Pauper](https://magic.wizards.com/en/game-info/gameplay/formats/pauper) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### paupercommander
> If the card is legal in the [Pauper Commander](https://mtg.fandom.com/wiki/Pauper_Commander) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### penny
> If the card is legal in the [Penny Dreadful](https://mtg.fandom.com/wiki/Penny_Dreadful) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### pioneer
> If the card is legal in the [Pioneer](https://magic.wizards.com/en/game-info/gameplay/formats/pioneer) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.6.0`
> - **Attributes:** <i class="optional">optional</i>

> ### premodern
> If the card is legal in the [Pre-Modern](https://premodernmagic.com/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### standard
> If the card is legal in the [Standard](https://magic.wizards.com/en/content/standard-formats-magic-gathering) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### vintage
> If the card is legal in the [Vintage](https://magic.wizards.com/en/game-info/gameplay/formats/vintage) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>
