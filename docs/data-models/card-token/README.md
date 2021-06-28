---
{
  "title": "Card (Token)",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Card (Token) data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, tokens, token, card (token)",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Card (Token)

The Card (Token) data model describes the properties and values of a single card token.

**Parent model:** [Set](/file-models/set/)  
**Parent property:** `tokens`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### artist  
> Name of the artist that illustrated the card art.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### asciiName  
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### availability  
> List of the card's available printing types.  
>
> - **Type:** `array[string]`
> - <ExampleField type='availability'/>
> - **Introduced:** `v5.0.0`

> ### borderColor  
> Color of the card border.  
>
> - **Type:** `string`
> - <ExampleField type='borderColor'/>
> - **Introduced:** `v4.0.0`

> ### colorIdentity  
> List of all the colors found in `manaCost`, `colorIndicator`, and `text`.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator  
> List of all the colors in the color indicator (The symbol prefixed to a card's types).  
>
> - **Type:** `array[string]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`
> - **Attributes:** <i class="optional">optional</i>

> ### colors  
> List of all the colors in `manaCost` and `colorIndicator`. Some cards may not have a value, such as cards with "Devoid" in its `text`.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### edhrecRank  
> Card rank on [EDHRec](https://www.edhrec.com).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.5.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceName  
> Name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### flavorText  
> Italicized text found below the rules text that has no game function.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### frameEffects  
> The visual frame effect.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='frameEffects'/>
> - **Introduced:** `v4.6.0`

> ### frameVersion  
> Version of the card frame style.  
>
> - **Type:** `string`
> - <ExampleField type='frameVersion'/>
> - **Introduced:** `v4.0.0`

> ### hasFoil  
> If the card be found in foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### hasNonFoil  
> If the card can be found in non-foil  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### identifiers  
> List of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v5.0.0` 

> ### isFullArt  
> If the card has full artwork.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isOnlineOnly  
> If the card is only available in [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isPromo  
> If the card is promotional.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isReprint  
> If the card has been reprinted.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>  

> ### keywords  
> All keywords found on a card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### layout  
> Type of card layout. For a token card, this will be `"token"`.  
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### loyalty  
> Planeswalker loyalty value.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### name  
> Names of each face on the card. Cards with multiple faces, like "Split" and "Meld" cards are given a delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### number  
> Number of the card. Can be prefixed or suffixed with a `*` or other characters for promo sets.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### power  
> Power of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### promoTypes  
> List of promotional types for a card.  
>
> - **Type:** `array[string]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### reverseRelated
> The names of the cards that produce this card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v4.0.0`

> ### setCode  
> The set code that the card is from.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`

> ### side  
> Identifier of the card side. Used on cards with multiple faces.  
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### subtypes  
> List of card subtypes found after em-dash.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### supertypes  
> List of card supertypes found before em-dash.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`

> ### text  
> Rules text of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### toughness  
> Toughness of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### type  
> Type of the card as visible, including any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### types  
> List of all card types of the card, including Un-sets and gameplay variants.
>
> - **Type:** `array[string]`
> - <ExampleField type='types'/>
> - **Introduced:** `v4.0.0`

> ### uuid  
> A universal unique identifier (v5) generated by MTGJSON. Each entry is unique.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### watermark  
> Name of the watermark on the card.  
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>

