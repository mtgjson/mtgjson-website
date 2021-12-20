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
      "property": "og:description",
      "content": "Card (Deck) data model documentation."
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

The Card (Deck) data model describes the properties and values of a single card in a deck.

**Parent model:** [Deck](/data-models/deck/)  
**Parent property:** `commander`, `mainBoard`, `sideBoard`  

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### artist  
> The name of the artist that illustrated the card art.  
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
> A list of the card's available printing types.  
>
> - **Type:** `array[string]`
> - <ExampleField type='availability'/>
> - **Introduced:** `v5.0.0`

> ### borderColor  
> The color of the card border.  
>
> - **Type:** `string`
> - <ExampleField type='borderColor'/>
> - **Introduced:** `v4.0.0`

> ### cardParts
> A list of card names associated to this card, such as `"Meld"` card face names.
>
> - **Type:** `array[string]`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### colorIdentity  
> A list of all the colors found in `manaCost`, `colorIndicator`, and `text`.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator  
> A list of all the colors in the color indicator (The symbol prefixed to a card's [types](#types)).  
>
> - **Type:** `array[string]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`
> - **Attributes:** <i class="optional">optional</i>

> ### colors  
> A list of all the colors in `manaCost` and `colorIndicator`. Some cards may not have values, such as cards with `"Devoid"` in its [text](#text).
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### convertedManaCost  
> The converted mana cost or mana value of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="deprecated">Deprecated in v6.0.0</i>

> ### count  
> The count of how many of this card exists in a relevant deck.  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.4.1`  

> ### duelDeck  
> The indicator for which duel deck the card is in.  
>
> - **Type:** `string`
> - <ExampleField type='duelDeck'/>
> - **Introduced:** `v4.2.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### edhrecRank  
> The card rank on [EDHRec](https://www.edhrec.com).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.5.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceConvertedManaCost  
> The converted mana cost or mana value of the face for either half or part of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.1.1`  
> - **Attributes:** <i class="optional">optional</i><i class="deprecated">Deprecated in v6.0.0</i>

> ### faceFlavorName
> The flavor name on the face of the card.
>
> - **Type:** `string`  
> - **Introduced:** `v5.2.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### faceManaValue  
> The mana value of the face for either half or part of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v5.2.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### faceName  
> The name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### finishes
> The finishes of the card.
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`

> ### flavorName  
> The promotional card name printed above the true card name on special cards that has no game function. See [this card](https://scryfall.com/card/plg20/2/hangarback-walker) for an example.
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### flavorText  
> The italicized text found below the rules text that has no game function.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### foreignData  
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) data model.  
>
> - **Type:** `array[] | array[object]`  
> - **Introduced:** `v4.0.0`

> ### frameEffects  
> The visual frame effects.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='frameEffects'/>
> - **Introduced:** `v4.6.0`

> ### frameVersion  
> The version of the card frame style.  
>
> - **Type:** `string`
> - <ExampleField type='frameVersion'/>
> - **Introduced:** `v4.0.0`

> ### hand  
> The starting maximum hand size total modifier. A `+` or `-` character precedes an integer.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasAlternativeDeckLimit  
> If the card allows a value other than 4 copies in a deck.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasContentWarning  
> If the card marked by [Wizards of the Coast](https://company.wizards.com) for having sensitive content. Cards with this property may have missing or degraded properties and values. See this [official article](https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10) for more information.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### hasFoil
> If the card can be found in foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="deprecated">deprecated in v5.3.0</i>

> ### hasNonFoil
> If the card can be found in non-foil.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="deprecated">deprecated in v5.3.0</i>

> ### identifiers  
> A list of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v5.0.0`

> ### isAlternative  
> If the card is an alternate variation to an original printing.  
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

> ### isFunny  
> If the card is part of a funny set.
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.2.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### isOnlineOnly  
> If the card is only available in online game variations.
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

> ### isRebalanced
> If the card is rebalanced for the [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) play format.
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.2.0`  
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
> If the card is found in a booster pack.  
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
> If the card is `"timeshifted"`.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### keywords  
> A list of keywords found on the card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### layout  
> The type of card layout. For a token card, this will be `"token"`.  
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills  
> A list of formats the card is legal to be a commander in. See the [Leadership Skills](/data-models/leadership-skills/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v4.5.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### legalities  
> A list of play formats the card the card is legal in. See the [Legalities](/data-models/legalities/) data model.  
>
> - **Type:** `object{} | object{props}`  
> - **Introduced:** `v4.0.0`

> ### life  
> The starting life total modifier. A plus or minus character precedes an integer. Used only on cards with `"Vanguard"` in its [types](./#types).  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### loyalty  
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### manaCost
> The mana cost of the card wrapped in brackets for each value.
>
> - **Type:** `string`
> - **Example:** `"{1}{B}"`
> - **Introduced:** `v4.0.0`
> - **Attributes:** <i class="optional">optional</i>

> ### manaValue
> The mana value of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.0.0`

> ### name  
> The name of the card. Cards with multiple faces, like `"Split"` and `"Meld"` cards are given a delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### number  
> The number of the card. Can be prefixed or suffixed with a `*` or other characters for promo sets.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### originalPrintings
> A list of card UUID's to original printings of the card if this card is somehow different from its original, such as [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) cards.
>
> - **Type:** `array[string]`
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### originalReleaseDate  
> The original release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for a promotional card printed outside of a cycle window, such as Secret Lair Drop promotions.
>
> - **Type:** `string`  
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### originalText  
> The text on the card as originally printed.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### originalType  
> The type of the card as originally printed. Includes any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### otherFaceIds  
> A list of card UUID's to this card's counterparts, such as transformed or melded faces.
>
> - **Type:** `array[] | array[string]`  
> - **Introduced:** `v4.6.1`

> ### power  
> The power of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### printings  
> A list of set printing codes the card was printed in, formatted in uppercase.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### promoTypes  
> A list of promotional types for a card.  
>
> - **Type:** `array[string]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### purchaseUrls  
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v4.4.0`

> ### rarity  
> The card printing rarity. Rarity `bonus` relates to cards that have an alternate availability in booster packs, while `special` relates to "Timeshifted" cards.
>
> - **Type:** `string`
> - <ExampleField type='rarity'/>
> - **Introduced:** `v4.0.0`

> ### rebalancedPrintings
> A list of card UUID's to printings that are [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) versions of this card.
>
> - **Type:** `array[string]`  
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### rulings  
> The official rulings of the card. See the [Rulings](/data-models/rulings/) data model.  
>
> - **Type:** `array[] | array[object]`  
> - **Introduced:** `v4.0.0`

> ### securityStamp
> The security stamp printed on the card.
>
> - **Type:** `string`
> - <ExampleField type='securityStamp'/>
> - **Introduced:** `v5.2.0`
> - **Attributes:** <i class="optional">optional</i>

> ### setCode  
> The set printing code that the card is from.
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`

> ### side  
> The identifier of the card side. Used on cards with multiple faces.  
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### signature
> The names of the signatures on the card.
>
> - **Type:** `array[string]`
> - **Introduced:** `v5.2.0`  
> - **Attributes:** <i class="optional">optional</i>

> ### subtypes  
> A list of card subtypes found after em-dash.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### supertypes  
> A list of card supertypes found before em-dash.  
>
> - **Type:** `array[] | array[string]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`

> ### text  
> The rules text of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### toughness  
> The toughness of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### type  
> The type of the card as visible, including any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### types  
> A list of all card types of the card, including Un&#8209;sets and gameplay variants.
>
> - **Type:** `array[string]`
> - <ExampleField type='types'/>
> - **Introduced:** `v4.0.0`

> ### uuid  
> The universal unique identifier (v5) generated by MTGJSON. Each entry is unique.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### variations  
> A list of card UUID's of this card with alternate printings in the same set. Excludes Un&#8209;sets.  
>
> - **Type:** `array[] | array[string]`  
> - **Introduced:** `v4.1.2`  

> ### watermark  
> The name of the watermark on the card.  
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i class="optional">optional</i>
