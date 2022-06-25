---
{
  "title": "Card (Token)",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "The Card (Token) Data Model describes the properties and values of a single token card.",
    },
    {
      "property": "og:description",
      "content": "The Card (Token) Data Model describes the properties and values of a single token card."
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

The Card (Token) Data Model describes the properties and values of a single token card.

**Parent model:** [Set](/data-models/set/)  
**Parent property:** `tokens`

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### artist  
> The name of the artist that illustrated the card art.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### asciiName  
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Tags:** <i class="optional">optional</i>  

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
> - **Tags:** <i class="optional">optional</i><i class="new">new</i>

> ### colorIdentity  
> A list of all the colors found in `manaCost`, `colorIndicator`, and `text`.  
>
> - **Type:** `array[] || array[string]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator  
> A list of all the colors in the color indicator (The symbol prefixed to a card's [types](#types)).  
>
> - **Type:** `array[string]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`
> - **Tags:** <i class="optional">optional</i>

> ### colors  
> A list of all the colors in `manaCost` and `colorIndicator`. Some cards may not have values, such as cards with `"Devoid"` in its [text](#text).
>
> - **Type:** `array[] || array[string]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### faceName  
> The name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### faceFlavorName
> The flavor name on the face of the card.
>
> - **Type:** `string`  
> - **Introduced:** `v5.2.0`  
> - **Tags:** <i class="optional">optional</i><i class="new">new</i>

> ### finishes
> The finishes of the card.
>
> - **Type:** `array[] || array[string]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`
> - **Tags:** <i class="new">new</i>

> ### flavorText  
> The italicized text found below the rules text that has no game function.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### frameEffects  
> The visual frame effects.  
>
> - **Type:** `array[string]`
> - <ExampleField type='frameEffects'/>
> - **Introduced:** `v4.6.0`
> - **Tags:** <i class="optional">optional</i>  

> ### frameVersion  
> The version of the card frame style.  
>
> - **Type:** `string`
> - <ExampleField type='frameVersion'/>
> - **Introduced:** `v4.0.0`

> ### hasFoil
> If the card can be found in foil. Use the [finishes](/data-models/card-token/#finishes) property.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="deprecated">deprecated</i>

> ### hasNonFoil
> If the card can be found in non-foil. Use the [finishes](/data-models/card-token/#finishes) property.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`
> - **Tags:** <i class="deprecated">deprecated</i>

> ### identifiers  
> A list of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) Data Model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v5.0.0`

> ### isFullArt  
> If the card has full artwork.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Tags:** <i class="optional">optional</i>

> ### isFunny  
> If the card is part of a funny set.
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.2.0`  
> - **Tags:** <i class="optional">optional</i><i class="new">new</i>

> ### isOnlineOnly  
> If the card is only available in online game variations.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.1`  
> - **Tags:** <i class="optional">optional</i>  

> ### isPromo
> If the card is a promotional printing.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`
> - **Tags:** <i class="optional">optional</i>

> ### isReprint  
> If the card has been reprinted.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.4.2`  
> - **Tags:** <i class="optional">optional</i>  

> ### keywords  
> A list of keywords found on the card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v5.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### layout  
> The type of card layout. For a token card, this will be `"token"`.  
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### loyalty  
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### name  
> The name of the card. Cards with multiple faces, like `"Split"` and `"Meld"` cards are given a delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### number
> The number of the card. Can be prefixed or suffixed with a `*` or other characters for promotional sets.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### otherFaceIds  
> A list of card UUID's to this card's counterparts, such as transformed or melded faces.
>
> - **Type:** `array[string]`  
> - **Introduced:** `v4.6.1`
> - **Tags:** <i class="optional">optional</i>  

> ### power  
> The power of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### promoTypes  
> A list of promotional types for a card.  
>
> - **Type:** `array[string]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`  
> - **Tags:** <i class="optional">optional</i>

> ### reverseRelated
> The names of the cards that produce this card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v4.0.0`

> ### securityStamp
> The security stamp printed on the card.
>
> - **Type:** `string`
> - <ExampleField type='securityStamp'/>
> - **Introduced:** `v5.2.0`
> - **Tags:** <i class="optional">optional</i><i class="new">new</i>

> ### setCode  
> The set printing code that the card is from.
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.1`

> ### side
> The identifier of the card side. Used on cards with multiple faces on the same card.
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`
> - **Tags:** <i class="optional">optional</i>

> ### signature
> The name of the signature on the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`  
> - **Tags:** <i class="optional">optional</i><i class="new">new</i>

> ### subtypes  
> A list of card subtypes found after em-dash.  
>
> - **Type:** `array[] || array[string]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### supertypes  
> A list of card supertypes found before em-dash.  
>
> - **Type:** `array[] || array[string]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`

> ### text  
> The rules text of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

> ### toughness  
> The toughness of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>  

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

> ### watermark  
> The name of the watermark on the card.  
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`  
> - **Tags:** <i class="optional">optional</i>
