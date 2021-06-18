---
{
  "title": "Set",
  "schema": "set",
  "meta": [
    {
      "name": "description",
      "content": "Set data model for MTGJSON.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, set, individual",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Set

The Set file model describes the properties and values of an individual set.

**Parent file:** [AllPrintings](/downloads/all-files/#allprintings), [Legacy](/downloads/all-files/#legacy), [Modern](/downloads/all-files/#modern), [Pioneer](/downloads/all-files/#pioneer), [Standard](/downloads/all-files/#standard), [Vintage](/downloads/all-files/#vintage)  
**Parent property:** `data`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### baseSetSize  
> Number of cards in the set. Will default to `totalSetSize` if not available. Note that Wizards sometimes prints extra cards beyond the set size into promos or supplemental products.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.1.0`

> ### block  
> Block name the set was in.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### booster  
> A breakdown of possibilities and weights of cards in a booster pack. See the [Booster](/abstract-models/booster/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### cards  
> List of cards in this set. See the [Card (Set)](../card-set/) data model.  
>
> - **Type:** `array(object)`  
> - **Introduced:** `v4.0.0`

> ### code  
> Set code for the set.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### codeV3  
> Alternate set code Wizards uses for a select few duel deck sets.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i> 

> ### isForeignOnly  
> If this set is available only outside the United States.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.1`  
> - **Attributes:** <i class="optional">optional</i> 

> ### isFoilOnly  
> If this set is only available in foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### isNonFoilOnly  
> If this set is only available in non-foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### isOnlineOnly  
> If this set is available only online.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### isPaperOnly  
> If this set is available only in paper.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.6.2`  
> - **Attributes:** <i class="optional">optional</i> 

> ### isPartialPreview  
> If this set is still in preview (spoiled). Preview sets do not have complete data.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i> 

> ### keyruneCode  
> The matching Keyrune code for [Keyrune](https://keyrune.andrewgioia.com) image icons.  
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
> Set code for the set as it appears on [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i> 

> ### name  
> Name of the set.  
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
> Release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for the set.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### sealedProduct
> Sealed product information for the set. See the [Sealed Product](/data-models/sealed-product/) data model.
>
> - **Type:** `object(props)`
> - **Introduced:** `v5.1.0`
> - **Attributes:** <i class="optional">optional</i>

> ### tcgplayerGroupId  
> Group identifier of the set on [TCGplayer](https://www.tcgplayer.com?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i> 

> ### tokens  
> Tokens available to the set. See the [Card (Token)](/data-models/card-token/) data model.  
>
> - **Type:** `array(object)`  
> - **Introduced:** `v4.0.0`

> ### totalSetSize  
> Total number of cards in the set, including promos and related supplemental products.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.1.0`

> ### translations  
> Translated set name by language. See the [Translations](/data-models/translations/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v4.3.2`

> ### type  
> Expansion type of the set.  
>
> - **Type:** `string`
> - <ExampleField type='type'/>
> - **Introduced:** `v4.0.0`
