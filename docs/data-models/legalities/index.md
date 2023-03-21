---
title: Legalities
enum: legalities
head:
  - - meta
    - property: og:title
      content: Legalities
  - - meta
    - name: description
      content: The Legalities Data Model describes the properties of legalities of a card in various game play formats.
  - - meta
    - property: og:description
      content: The Legalities Data Model describes the properties of legalities of a card in various game play formats.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, legalities
---

# Legalities

The Legalities Data Model describes the properties of legalities of a card in various game play formats.

- **Parent model:** [Card (Atomic)](/data-models/card-atomic/), [Card (Deck)](/data-models/card-deck/), [Card (Set)](/data-models/card-set/)
- **Parent property:** `legalities`

## TypeScript Model

::: details Show/Hide Model

<<< @/public/types/Legalities.ts{TypeScript}

:::

## Model Properties

> ### alchemy <Badge type="warning" text="optional" />
>
> Legality of the card in the [Alchemy](https://magic.wizards.com/en/mtgarena/alchemy) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

> ### brawl <Badge type="warning" text="optional" />
>
> Legality of the card in the [Brawl](https://magic.wizards.com/en/formats/brawl) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### commander <Badge type="warning" text="optional" />
>
> Legality of the card in the [Commander](https://magic.wizards.com/en/formats/commander) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### duel <Badge type="warning" text="optional" />
>
> Legality of the card in the [Duel Commander](https://magic.wizards.com/en/formats/commander-1v1) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### explorer <Badge type="warning" text="optional" />
>
> Legality of the card in the [Explorer](https://magic.wizards.com/en/formats/explorer) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### future <Badge type="warning" text="optional" />
>
> Legality of the card in the future for the [Standard](https://magic.wizards.com/en/formats/standard) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### gladiator <Badge type="warning" text="optional" />
>
> Legality of the card in the [Gladiator](https://gladiator.blog/about-gladiator/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### historic <Badge type="warning" text="optional" />
>
> Legality of the card in the [Historic](https://magic.wizards.com/en/formats/historic) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

> ### historicbrawl <Badge type="warning" text="optional" />
>
> Legality of the card in the [Historic Brawl](https://draftsim.com/mtg-arena-historic-brawl/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### legacy <Badge type="warning" text="optional" />
>
> Legality of the card in the [Legacy](https://magic.wizards.com/en/formats/legacy) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### modern <Badge type="warning" text="optional" />
>
> Legality of the card in the [Modern](https://magic.wizards.com/en/formats/modern) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### oldschool <Badge type="warning" text="optional" />
>
> Legality of the card in the [Old School](https://mtg.fandom.com/wiki/Old_School) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### pauper <Badge type="warning" text="optional" />
>
> Legality of the card in the [Pauper](https://magic.wizards.com/en/formats/pauper) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### penny <Badge type="warning" text="optional" />
>
> Legality of the card in the [Penny Dreadful](https://mtg.fandom.com/wiki/Penny_Dreadful) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### pioneer <Badge type="warning" text="optional" />
>
> Legality of the card in the [Pioneer](https://magic.wizards.com/en/formats/pioneer) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.6.0`

> ### predh <Badge type="warning" text="optional" />
>
> Legality of the card in the [PreDH](https://articles.starcitygames.com/magic-the-gathering/commander-sub-format-predh-is-the-new-magic-rage/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### premodern <Badge type="warning" text="optional" />
>
> Legality of the card in the [Premodern](https://premodernmagic.com/) play format.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### standard <Badge type="warning" text="optional" />
>
> Legality of the card in the [Standard](https://magic.wizards.com/en/formats/standard) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### vintage <Badge type="warning" text="optional" />
>
> Legality of the card in the [Vintage](https://magic.wizards.com/en/formats/vintage) play format.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
