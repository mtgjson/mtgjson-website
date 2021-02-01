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

**Parent file:** [All Decks](../../downloads/all-decks/)  
**Parent model:** [Set](../set/)  
**Parent property:** `tokens`

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### artist  
> Name of the artist that illustrated the card art.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### asciiName  
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.  
>
> **Type:** `string`  
> **Introduced:** `v5.0.0`  
> **Attributes:** <i>optional</i>  

> ### availability  
> List of the card's available printing types.  
>
> **Type:** `array`  
> **Introduced:** `v5.0.0`

> ### borderColor  
> Color of the card border.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### colorIdentity  
> List of all the colors found in `manaCost`, `colorIndicator` and `text`.  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.0.0`

> ### colorIndicator  
> List of all the colors in the color indicator (The symbol prefixed to a card's types).  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.0.2`

> ### colors  
> List of all the colors in `manaCost` and `colorIndicator`. Some cards may not have a value, such as cards with "Devoid" in its `text`.  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.0.0`

> ### edhrecRank  
> Card rank on [EDHRec](https://www.edhrec.com).  
>
> **Type:** `integer`  
> **Introduced:** `v4.5.0`  
> **Attributes:** <i>optional</i>  

> ### faceName  
> Name on the face of the card.  
>
> **Type:** `string`  
> **Introduced:** `v5.0.0`  
> **Attributes:** <i>optional</i>  

> ### flavorText  
> Italicized text found below the rules text that has no game function.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### frameEffects  
> The visual frame effect.  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.6.0`

> ### frameVersion  
> Version of the card frame style.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### hasFoil  
> If the card be found in foil.  
>
> **Type:** `boolean`  
> **Introduced:** `v4.0.0`

> ### hasNonFoil  
> If the card can be found in non-foil  
>
> **Type:** `boolean`  
> **Introduced:** `v4.0.0`

> ### identifiers  
> List of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> **Type:** `object`  
> **Introduced:** `v5.0.0` 

> ### isFullArt  
> If the card has full artwork.  
>
> **Type:** `boolean`  
> **Introduced:** `v4.4.2`  
> **Attributes:** <i>optional</i>  

> ### isOnlineOnly  
> If the card is only available in [Magic: The Gathering Online](https://magic.wizards.com/en/mtgo).  
>
> **Type:** `boolean`  
> **Introduced:** `v4.0.1`  
> **Attributes:** <i>optional</i>  

> ### isPromo  
> If the card is promotional.  
>
> **Type:** `boolean`  
> **Introduced:** `v4.4.2`  
> **Attributes:** <i>optional</i>  

> ### isReprint  
> If the card has been reprinted.  
>
> **Type:** `boolean`  
> **Introduced:** `v4.4.2`  
> **Attributes:** <i>optional</i>  

> ### keywords  
> All keywords found on a card.  
>
> **Type:** `array`  
> **Introduced:** `v5.0.0`  
> **Attributes:** <i>optional</i>  

> ### layout  
> Type of card layout. For a token card, this will be `"token"`.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### loyalty  
> Planeswalker loyalty value.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### name  
> Names of each face on the card. Cards with multiple faces, like "Split" and "Meld" cards are given a delimiter. Example: `"Face 1 Name // Face 2 Name"`.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### number  
> Number of the card. Can be prefixed or suffixed with a `*` or other character for promo sets.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### power  
> Power of the card.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### promoTypes  
> List of promotional types for a card.  
>
> **Type:** `array`  
> **Introduced:** `v5.0.0`  
> **Attributes:** <i>optional</i>  

> ### reverseRelated
> The names of the cards that produce this card.  
>
> **Type:** `array`  
> **Introduced:** `v4.0.0`

> ### setCode  
> The set code that the card is from.  
>
> **Type:** `string`  
> **Introduced:** `v5.0.1`

> ### side  
> Identifier of the card side. Used on cards with multiple faces.  
>
> **Type:** `string`  
> **Introduced:** `v4.1.0`  
> **Attributes:** <i>optional</i>  

> ### subtypes  
> List of card subtypes found after em-dash.  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.0.0`

> ### supertypes  
> List of card supertypes found before em-dash.  
>
> **Type:** `array | array()`  
> **Introduced:** `v4.0.0`

> ### text  
> Rules text of the card.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### toughness  
> Toughness of the card.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>  

> ### type  
> Type of the card as visible, including any supertypes and subtypes.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### types  
> List of all card types of the card, including Un-sets and gameplay variants. See [Card Types](/data-models/card-types/) for reference.  
>
> **Type:** `array`  
> **Introduced:** `v4.0.0`

> ### uuid  
> A universal unique ID (v5) generated by MTGJSON. Each entry is unique.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`

> ### watermark  
> Name of the watermark on the card.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>

