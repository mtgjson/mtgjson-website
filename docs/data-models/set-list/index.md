---
title: Set List
enum: set
head:
  - - meta
    - property: og:title
      content: Set List
  - - meta
    - name: description
      content: The Set List Data Model describes the meta data properties for an individual Set.
  - - meta
    - property: og:description
      content: The Set List Data Model describes the meta data properties for an individual Set.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, set list
---

# Set List

The Set List Data Model describes the meta data properties for an individual [Set](/data-models/set/).

- **Parent file:** [SetList](/downloads/all-files/#setlist)
- **Parent property:** `data`

## Model Type

<ModelType type="SetList" />

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### baseSetSize
>
> The number of cards in the set. This will default to [totalSetSize](#totalsetsize) if not available. [Wizards of the Coast](https://company.wizards.com) sometimes prints extra cards beyond the set size into promos or supplemental products.
>
> - **Type:** `number`
> - **Introduced:** `v4.1.0`

> ### block <i class="optional"></i>
>
> The block name the set is in.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### code
>
> The printing set code for the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### codeV3 <i class="optional"></i>
>
> The alternate printing set code [Wizards of the Coast](https://company.wizards.com) uses for a select few duel deck sets.
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### isForeignOnly <i class="optional"></i>
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

> ### isNonFoilOnly <i class="optional"></i>
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

> ### isPaperOnly <i class="optional"></i>
>
> If the set is only available in paper game play.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.6.2`

> ### isPartialPreview <i class="optional"></i>
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

> ### mcmId <i class="optional"></i>
>
> The [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier.
>
> - **Type:** `number`
> - **Introduced:** `v4.4.0`

> ### mcmIdExtras <i class="optional"></i>
>
> The split [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier if a set is printed in two sets. This identifier represents the second set's identifier.
>
> - **Type:** `number`
> - **Introduced:** `v5.1.0`

> ### mcmName <i class="optional"></i>
>
> The [Cardmarket](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set name.
>
> - **Type:** `string`
> - **Introduced:** `v4.4.0`

> ### mtgoCode <i class="optional"></i>
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

> ### parentCode <i class="optional"></i>
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

> ### sealedProduct <i class="optional"></i>
>
> The sealed product information for the set. See the [Sealed Product](/data-models/sealed-product/) Data Model.
>
> - **Type:** `SealedProduct`
> - **Introduced:** `v5.1.0`

> ### tcgplayerGroupId <i class="optional"></i>
>
> The group identifier of the set on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).
>
> - **Type:** `number`
> - **Introduced:** `v4.2.1`

> ### totalSetSize
>
> The total number of cards in the set, including promos and related supplemental products.
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
