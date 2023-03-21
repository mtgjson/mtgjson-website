---
title: Set
enum: set
head:
  - - meta
    - property: og:title
      content: Set
  - - meta
    - name: description
      content: The Set Data Model describes the properties of an individual set.
  - - meta
    - property: og:description
      content: The Set Data Model describes the properties of an individual set.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, set
---

# Set

The Set Data Model describes the properties of an individual set.

- **Parent file:** [AllIdentifiers](/downloads/all-files/#allidentifiers), [AllPrintings](/downloads/all-files/#allprintings), [Legacy](/downloads/all-files/#legacy), [Modern](/downloads/all-files/#modern), [Pioneer](/downloads/all-files/#pioneer), [Standard](/downloads/all-files/#standard), [Vintage](/downloads/all-files/#vintage)
- **Parent property:** `data`

## TypeScript Model

::: details Show/Hide Model

<<< @/public/types/Set.ts{TypeScript}

:::

## Model Properties

> ### baseSetSize
>
> The number of cards in the set. This will default to [totalSetSize](#totalsetsize) if not available. [Wizards of the Coast](https://company.wizards.com) sometimes prints extra cards beyond the set size into promos or supplemental products.
>
> - **Type:** `number`
> - **Introduced:** `v4.1.0`

> ### block <Badge type="warning" text="optional" />
>
> The block name the set is in.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### booster <Badge type="warning" text="optional" />
>
> A breakdown of possibilities and weights of cards in a booster pack. See the [Booster](/abstract-models/booster/) Abstract Model.
>
> - **Type:** `object`
> - **Introduced:** `v5.0.0`

> ### cards
>
> The list of cards in the set. See the [Card (Set)](/data-models/card-set/) Data Model.
>
> - **Type:** `CardSet[]`
> - **Introduced:** `v4.0.0`

> ### cardsphereSetId <Badge type="warning" text="optional" />
>
> The [Cardsphere](https://www.cardsphere.com/) set identifier.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.1`

> ### code
>
> The printing set code for the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### codeV3 <Badge type="warning" text="optional" />
>
> The alternate printing set code [Wizards of the Coast](https://company.wizards.com) uses for a select few duel deck sets.
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### isForeignOnly <Badge type="warning" text="optional" />
>
> If the set is only available outside the United States of America.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.1`

> ### isFoilOnly
>
> If the set is only available in foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isNonFoilOnly <Badge type="warning" text="optional" />
>
> If the set is only available in non-foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`

> ### isOnlineOnly
>
> If the set is only available in online game play variations.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isPaperOnly <Badge type="warning" text="optional" />
>
> If the set is only available in paper game play.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.6.2`

> ### isPartialPreview <Badge type="warning" text="optional" />
>
> If the set is still in preview (spoiled). Preview sets do not have complete data.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### keyruneCode
>
> The matching [Keyrune](https://keyrune.andrewgioia.com) code for set image icons.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.2`

> ### languages
>
> The languages the set was printed in.
>
> - **Type:** `string[]`
> - <ExampleField type='languages'/>
> - **Introduced:** `v5.2.1`

> ### mcmId <Badge type="warning" text="optional" />
>
> The [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier.
>
> - **Type:** `number`
> - **Introduced:** `v4.4.0`

> ### mcmIdExtras <Badge type="warning" text="optional" />
>
> The split [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier if a set is printed in two sets. This identifier represents the second set's identifier.
>
> - **Type:** `number`
> - **Introduced:** `v5.1.0`

> ### mcmName <Badge type="warning" text="optional" />
>
> The [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set name.
>
> - **Type:** `string`
> - **Introduced:** `v4.4.0`

> ### mtgoCode <Badge type="warning" text="optional" />
>
> The set code for the set as it appears on [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### name
>
> The name of the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### parentCode <Badge type="warning" text="optional" />
>
> The parent printing set code for set variations like promotions, guild kits, etc.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`

> ### releaseDate
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### sealedProduct <Badge type="warning" text="optional" />
>
> The sealed product information for the set. See the [Sealed Product](/data-models/sealed-product/) Data Model.
>
> - **Type:** `SealedProduct`
> - **Introduced:** `v5.2.0`

> ### tcgplayerGroupId <Badge type="warning" text="optional" />
>
> The group identifier of the set on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).
>
> - **Type:** `number`
> - **Introduced:** `v4.2.1`

> ### tokens
>
> The tokens available to the set. See the [Card (Token)](/data-models/card-token/) Data Model.
>
> - **Type:** `CardToken[]`
> - **Introduced:** `v4.0.0`

> ### tokenSetCode <Badge type="warning" text="optional" />
>
> The tokens set code, formatted in uppercase.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### totalSetSize
>
> The total number of cards in the set, including promotional and related supplemental products but excluding [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) modifications - however those cards are included in the set itself.
>
> - **Type:** `number`
> - **Introduced:** `v4.1.0`

> ### translations
>
> The translated set name by language. See the [Translations](/data-models/translations/) Data Model.
>
> - **Type:** `Translations`
> - **Introduced:** `v4.3.2`

> ### type
>
> The expansion type of the set.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.0.0`
