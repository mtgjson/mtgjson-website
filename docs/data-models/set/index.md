---
{
  'title': 'Set',
  'schema': 'set',
  'meta':
    [
      {
        'name': 'description',
        'content': 'The Set Data Model describes the properties and values of an individual Set.',
      },
      {
        'name': 'og:description',
        'content': 'The Set Data Model describes the properties and values of an individual Set.',
      },
      { 'name': 'keywords', 'content': 'mtg, magic: the gathering, mtgjson, json, set, individual set' },
    ],
}
---

# Set

The Set Data Model describes the properties and values of an individual Set.

**Parent file:** [AllPrintings](/downloads/all-files/#allprintings), [Legacy](/downloads/all-files/#legacy), [Modern](/downloads/all-files/#modern), [Pioneer](/downloads/all-files/#pioneer), [Standard](/downloads/all-files/#standard), [Vintage](/downloads/all-files/#vintage)  
**Parent property:** `data`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### baseSetSize
>
> The number of cards in the set. This will default to [totalSetSize](#totalsetsize) if not available. [Wizards of the Coast](https://company.wizards.com) sometimes prints extra cards beyond the set size into promos or supplemental products.
>
> - **Type:** `integer`
> - **Introduced:** `v4.1.0`

> ### block
>
> The block name the set was in.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional">Optional</i>

> ### booster
>
> A breakdown of possibilities and weights of cards in a booster pack. See the [Booster](/abstract-models/booster/) abstract model.
>
> - **Type:** `object{props}`
> - **Introduced:** `v5.0.0`
> - **Tags:** <i class="optional">Optional</i>

> ### cards
>
> The list of cards in the set. See the [Card (Set)](/data-models/card-set/) Data Model.
>
> - **Type:** `array[object]`
> - **Introduced:** `v4.0.0`

> ### cardsphereSetId
>
> The [Cardsphere](https://www.cardsphere.com/) set identifier.
>
> - **Type:** `integer`
> - **Introduced:** `v5.2.1`
> - **Tags:** <i class="optional">Optional</i><i class="new">New</i><i class="preview">Preview v5.2.1</i>

> ### code
>
> The set code for the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### codeV3
>
> The alternate set code [Wizards of the Coast](https://company.wizards.com) uses for a select few duel deck sets.
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`
> - **Tags:** <i class="optional">Optional</i>

> ### isForeignOnly
>
> If the set is available only outside the United States of America.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.1`
> - **Tags:** <i class="optional">Optional</i>

> ### isFoilOnly
>
> If the set is only available in foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isNonFoilOnly
>
> If the set is only available in non-foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`
> - **Tags:** <i class="optional">Optional</i>

> ### isOnlineOnly
>
> If the set is only available in online game variations.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isPaperOnly
>
> If the set is available only in paper.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.6.2`
> - **Tags:** <i class="optional">Optional</i>

> ### isPartialPreview
>
> If the set is still in preview (spoiled). Preview sets do not have complete data.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`
> - **Tags:** <i class="optional">Optional</i>

> ### keyruneCode
>
> The matching [Keyrune](https://keyrune.andrewgioia.com) code for set image icons.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.2`

> ### mcmId
>
> The [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier.
>
> - **Type:** `integer`
> - **Introduced:** `v4.4.0`
> - **Tags:** <i class="optional">Optional</i>

> ### mcmIdExtras
>
> The split [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier if a set is printed in two sets. This identifier represents the second set's identifier.
>
> - **Type:** `integer`
> - **Introduced:** `v5.1.0`
> - **Tags:** <i class="optional">Optional</i>

> ### mcmName
>
> The [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set name.
>
> - **Type:** `string`
> - **Introduced:** `v4.4.0`
> - **Tags:** <i class="optional">Optional</i>

> ### mtgoCode
>
> The set code for the set as it appears on [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="optional">Optional</i>

> ### name
>
> The name of the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### parentCode
>
> The parent set code for set variations like promotions, guild kits, etc.
>
> - **Type:** `string`
> - **Introduced:** `v4.3.0`
> - **Tags:** <i class="optional">Optional</i>

> ### releaseDate
>
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### sealedProduct
>
> The sealed product information for the set. See the [Sealed Product](/data-models/sealed-product/) Data Model.
>
> - **Type:** `object{props}`
> - **Introduced:** `v5.2.0`
> - **Tags:** <i class="optional">Optional</i><i class="new">New</i>

> ### tcgplayerGroupId
>
> The group identifier of the set on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).
>
> - **Type:** `integer`
> - **Introduced:** `v4.2.1`
> - **Tags:** <i class="optional">Optional</i>

> ### tokens
>
> The tokens available to the set. See the [Card (Token)](/data-models/card-token/) Data Model.
>
> - **Type:** `array[object]`
> - **Introduced:** `v4.0.0`

> ### totalSetSize
>
> The total number of cards in the set, including promotional and related supplemental products but excluding [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) modifications - however those cards are included in the set itself.
>
> - **Type:** `integer`
> - **Introduced:** `v4.1.0`

> ### translations
>
> The translated set name by language. See the [Translations](/data-models/translations/) Data Model.
>
> - **Type:** `object{} || object{props}`
> - **Introduced:** `v4.3.2`

> ### type
>
> The expansion type of the set.
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.0.0`
