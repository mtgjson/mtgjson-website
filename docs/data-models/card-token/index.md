---
title: Card (Token)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Token)
  - - meta
    - name: description
      content: The Card (Token) data model describes the properties of a single token card.
  - - meta
    - property: og:description
      content: The Card (Token) data model describes the properties of a single token card.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card token
---

# Card (Token)

The Card (Token) data model describes the properties of a single token card.

- **Parent file:** [Set](/data-models/set/)
- **Parent model:** `tokens`

## Model Type

<ModelType type="CardToken" />

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### artist <i class="optional"></i>
>
> The name of the artist that illustrated the card art.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### asciiName <i class="optional"></i>
>
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### availability
>
> A list of the card's available printing types.
>
> - **Type:** `string[]`
> - <ExampleField type='availability'/>
> - **Introduced:** `v5.0.0`

> ### boosterTypes <i class="optional"></i>
>
> A list of types this card is in a booster pack.
>
> - **Type:** `string[]`
> - <ExampleField type='boosterTypes'/>
> - **Introduced:** `v5.2.1`

> ### borderColor
>
> The color of the card border.
>
> - **Type:** `string`
> - <ExampleField type='borderColor'/>
> - **Introduced:** `v4.0.0`

> ### cardParts <i class="optional"></i>
>
> A list of card names associated to this card, such as `"Meld"` card face names.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.0`

> ### colorIdentity
>
> A list of all the colors found in `manaCost`, `colorIndicator`, and `text` properties.
>
> - **Type:** `string[]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator <i class="optional"></i>
>
> A list of all the colors in the color indicator. This is the symbol prefixed to a card's [types](#types).
>
> - **Type:** `string[]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`

> ### colors
>
> A list of all the colors in `manaCost` and `colorIndicator` properties. Some cards may not have values, such as cards with `"Devoid"` in its [text](#text).
>
> - **Type:** `string[]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### faceName <i class="optional"></i>
>
> The name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### faceFlavorName <i class="optional"></i>
>
> The flavor name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### finishes
>
> The finishes of the card.
>
> - **Type:** `string[]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`

> ### flavorText <i class="optional"></i>
>
> The italicized text found below the rules text that has no game function.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### frameEffects <i class="optional"></i>
>
> The visual frame effects.
>
> - **Type:** `string[]`
> - <ExampleField type='frameEffects'/>
> - **Introduced:** `v4.6.0`

> ### frameVersion
>
> The version of the card frame style.
>
> - **Type:** `string`
> - <ExampleField type='frameVersion'/>
> - **Introduced:** `v4.0.0`

> ### hasFoil
>
> If the card can be found in foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card-token/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### hasNonFoil
>
> If the card can be found in non-foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card-token/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### identifiers
>
> The identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.
>
> - **Type:** `Identifiers`
> - **Introduced:** `v5.0.0`

> ### isFullArt <i class="optional"></i>
>
> If the card has full artwork.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isFunny <i class="optional"></i>
>
> If the card is part of a funny set, such as an Un-set.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.0`

> ### isOnlineOnly <i class="optional"></i>
>
> If the card is only available in online game play variations.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### isPromo <i class="optional"></i>
>
> If the card is a promotional printing.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isReprint <i class="optional"></i>
>
> If the card has been reprinted.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### keywords <i class="optional"></i>
>
> A list of keywords found on the card.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.0.0`

> ### language
>
> The language the card is printed in.
>
> - **Type:** `string`
> - <ExampleField type='language'/>
> - **Introduced:** `v5.2.1`

> ### layout
>
> The type of card layout. For a Card (Token), this will only ever be `"token"`.
>
> - **Type:** `string`
> - **Example:** `"token"`
> - **Introduced:** `v4.0.0`

> ### loyalty <i class="optional"></i>
>
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### name
>
> The name of the card. Cards with multiple faces are given a `//` delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### number
>
> The number of the card. Cards can be prefixed or suffixed with a `*` or other characters for promotional qualities.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### otherFaceIds <i class="optional"></i>
>
> A list of card UUID's to this card's counterparts, such as transformed or melded faces.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.6.1`

> ### power <i class="optional"></i>
>
> The power of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### promoTypes <i class="optional"></i>
>
> A list of promotional types for a card.
>
> - **Type:** `string[]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`

> ### relatedCards <i class="optional"></i>
>
> The related cards for this card.
>
> - **Type:** `RelatedCards`
> - **Introduced:** `v5.2.1`

> ### reverseRelated
>
> The names of the cards that produce this card.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### securityStamp <i class="optional"></i>
>
> The security stamp printed on the card.
>
> - **Type:** `string`
> - <ExampleField type='securityStamp'/>
> - **Introduced:** `v5.2.0`

> ### setCode
>
> The printing set code that the card is from.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.1`

> ### side <i class="optional"></i>
>
> The identifier of the card side. Used on cards with multiple faces on the same card.
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`

> ### signature <i class="optional"></i>
>
> The name of the signature on the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### subtypes
>
> A list of card subtypes found after em-dash.
>
> - **Type:** `string[]`
> - <ExampleField type='subtypes'/>
> - **Introduced:** `v4.0.0`

> ### supertypes
>
> A list of card supertypes found before em-dash.
>
> - **Type:** `string[]`
> - <ExampleField type='supertypes'/>
> - **Introduced:** `v4.0.0`

> ### text <i class="optional"></i>
>
> The rules text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### toughness <i class="optional"></i>
>
> The toughness of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### type
>
> The type of the card as visible, including any supertypes and subtypes and are given a `-` delimiter if appropriate.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### types
>
> A list of all card types of the card, including Un&#8209;sets and gameplay variants.
>
> - **Type:** `string[]`
> - <ExampleField type='types'/>
> - **Introduced:** `v4.0.0`

> ### uuid
>
> The universal unique identifier (v5) generated by MTGJSON.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### watermark <i class="optional"></i>
>
> The name of the watermark on the card.
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`
