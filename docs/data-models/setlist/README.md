---
{
  "title": "Set List",
  "schema": "set",
  "meta": [
    {
      "name": "description",
      "content": "Set List Data Model documentation.",
    },
    {
      "name": "og:description",
      "content": "Set List Data Model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, setlist",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Set List

The Set List Data Model describes a metadata-like model that holds information about a [Set](/data-models/set/).

**Parent file:** [SetList](/downloads/all-files/#setlist)  
**Parent property:** `data`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### baseSetSize  
> The number of cards in the set. This will default to [totalSetSize](#totalsetsize) if not available. [Wizards of the Coast](https://company.wizards.com) sometimes prints extra cards beyond the set size into promos or supplemental products.
>
> - **Type:** `integer`  
> - **Introduced:** `v4.1.0`

> ### block  
> The block name the set was in.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### code  
> The set code for the set.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### codeV3  
> The alternate set code [Wizards of the Coast](https://company.wizards.com) uses for a select few duel deck sets.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>

> ### isForeignOnly  
> If the set is available only outside the United States of America.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.1`  
> - **Attributes:** <i class="optional">optional</i>

> ### isFoilOnly  
> If the set is only available in foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### isNonFoilOnly  
> If the set is only available in non-foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### isOnlineOnly  
> If the set is only available in online game variations.
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### isPaperOnly  
> If the set is only available in paper.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.6.2`  
> - **Attributes:** <i class="optional">optional</i>

> ### isPartialPreview  
> If the set is still in preview (spoiled). Preview sets do not have complete data.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>

> ### keyruneCode  
> The matching Keyrune code for [Keyrune](https://keyrune.andrewgioia.com) set image icons.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.3.2`

> ### mcmId  
> The [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.4.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### mcmIdExtras  
> The split [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set identifier if a set is printed in two sets. This identifier represents the second set's identifier.  
>
> - **Type:** `integer`  
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### mcmName  
> The [Magic Card Market](https://www.cardmarket.com/en/Magic?utm_campaign=card_prices&utm_medium=text&utm_source=mtgjson) set name.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.4.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### mtgoCode  
> The set code for the set as it appears on [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### name  
> The name of the set.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### parentCode  
> The parent set code for set variations like promotions, guild kits, etc.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.3.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### releaseDate  
> The release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### sealedProduct
> The sealed product information for the set. See the [Sealed Product](/data-models/sealed-product/) Data Model.
>
> - **Type:** `object{props}`
> - **Introduced:** `v5.1.0`
> - **Attributes:** <i class="optional">optional</i>

> ### tcgplayerGroupId  
> The group identifier of the set on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>

> ### totalSetSize  
> The total number of cards in the set, including promos and related supplemental products.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.1.0`

> ### translations  
> The translated set name by language. See the [Translations](/data-models/translations/) Data Model.  
>
> - **Type:** `object{} | object{props}`  
> - **Introduced:** `v4.3.2`

> ### type  
> The expansion type of the set.  
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.0.0`
