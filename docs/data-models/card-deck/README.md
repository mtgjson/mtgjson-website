---
{
  "title": "Card (Deck)",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Card (Deck) data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card (deck)",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Card (Deck)

The Card (Deck) data model describes the properties and values of a single card.

**Parent model:** [Deck](/file-models/deck/)  
**Parent property:** `commander`, `mainBoard`, `sideBoard`  

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
> - **Type:** `array(string)`
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
> - **Type:** `array | array(string)`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator  
> List of all the colors in the color indicator (The symbol prefixed to a card's types).  
>
> - **Type:** `array | array(string)`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`

> ### colors  
> List of all the colors in `manaCost` and `colorIndicator`. Some cards may not have a value, such as cards with "Devoid" in its `text`.  
>
> - **Type:** `array | array(string)`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### convertedManaCost  
> The converted mana cost of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.0.0`

> ### count  
> How many of this card exists in a relevant deck.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.4.1`  

> ### duelDeck  
> An indicator for which duel deck the card is in.  
>
> - **Type:** `string`
> - <ExampleField type='duelDeck'/>
> - **Introduced:** `v4.2.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### edhrecRank  
> Card rank on [EDHRec](https://www.edhrec.com).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.5.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceConvertedManaCost  
> The converted mana cost of the face of either half or part of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.1.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceName  
> Name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### flavorName  
> Promotional card name printed above the true card name on special cards that has no game function.  
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

> ### foreignData  
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) data model.  
>
> - **Type:** `array | array(object)`  
> - **Introduced:** `v4.0.0`

> ### frameEffects  
> The visual frame effect.  
>
> - **Type:** `array | array(string)`
> - <ExampleField type='frameEffects'/>
> - **Introduced:** `v4.6.0`

> ### frameVersion  
> Version of the card frame style.  
>
> - **Type:** `string`
> - <ExampleField type='frameVersion'/>
> - **Introduced:** `v4.0.0`

> ### hand  
> Starting maximum hand size total modifier. A `+` or `-` character precedes an integer.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasContentWarning  
> If the card marked by Wizards of the Coast for having sensitive content. Cards with this property may have missing or degraded properties and values. See this [official article](https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10) for more information.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasFoil  
> If the card be found in foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### hasAlternativeDeckLimit  
> If the card allows a value other than 4 copies in a deck.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasNonFoil  
> If the card can be found in non-foil.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`

> ### identifiers  
> List of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v5.0.0`

> ### isAlternative  
> The card has some kind of alternative variation to its printed counterpart.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.2.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isFoil  
> If the card is in foil.  
>
> - **Type:** `boolean`  
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

> ### isOversized  
> If the card is oversized.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`  
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

> ### isReserved  
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isStarter  
> If this card is found in a booster pack.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isStorySpotlight  
> If the card has a story spotlight.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isTextless  
> If the card does not have a text box.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Attributes:** <i class="optional">optional</i>  

> ### isTimeshifted  
> If this card is "timeshifted", a feature from Time Spiral block.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### keywords  
> All keywords found on a card.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### layout  
> Type of card layout. For a token card, this will be `"token"`.  
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills  
> List of formats the card is legal to be a commander in. See the [Leadership Skills](/data-models/leadership-skills/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v4.5.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### legalities  
> List of play formats the card the card is legal in. See the [Legalities](/data-models/legalities/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### life  
> Starting life total modifier. A plus or minus character precedes an integer. Used only on cards with `"Vanguard"` in its [types](./#types).  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### loyalty  
> Planeswalker loyalty value.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### manaCost  
> Mana cost of the card.  
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

> ### originalReleaseDate  
> Release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for a promotional card printed outside of a cycle window, such as Friday Night Magic and Secret Lair Drop promotions.
>
> - **Type:** `string`  
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### originalText  
> Text on the card as originally printed.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### originalType  
> Type as originally printed. Includes any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### otherFaceIds  
> List of UUID's of this card with counterparts, such as transformed or melded faces.  
>
> - **Type:** `array | array(string)`  
> - **Introduced:** `v4.6.1`

> ### power  
> Power of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### printings  
> List of sets the card was printed in, formatted in uppercase.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### promoTypes  
> List of promotional types for a card.  
>
> - **Type:** `array(string)`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### purchaseUrls  
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) data model.  
>
> - **Type:** `object(props)`  
> - **Introduced:** `v4.4.0`

> ### rarity  
> Card printing rarity.  
>
> - **Type:** `string`
> - <ExampleField type='rarity'/>
> - **Introduced:** `v4.0.0`

> ### rulings  
> Official rulings of the card. See the [Rulings](/data-models/rulings/) data model.  
>
> - **Type:** `array | array(object)`  
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
> - **Type:** `array | array(string)`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### supertypes  
> List of card supertypes found before em-dash.  
>
> - **Type:** `array | array(string)`
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
> - **Type:** `array(string)`
> - <ExampleField type='types'/>
> - **Introduced:** `v4.0.0`

> ### uuid  
> A universal unique identifier (v5) generated by MTGJSON. Each entry is unique.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### variations  
> List of UUID's of this card with alternate printings in the same set. Excludes Un-sets.  
>
> - **Type:** `array | array(string)`  
> - **Introduced:** `v4.1.2`  

> ### watermark  
> Name of the watermark on the card.  
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>
