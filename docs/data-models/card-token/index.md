---
title: Card (Token)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Token)
  - - meta
    - name: description
      content: The Card (Token) Data Model describes the properties of a single token card found in a Set.
  - - meta
    - property: og:description
      content: The Card (Token) Data Model describes the properties of a single token card found in a Set.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card token
---

# Card (Token)

The Card (Token) Data Model describes the properties of a single token card found in a [Set](/data-models/set/).

- **Parent model:** [Set](/data-models/set/)
- **Parent property:** `tokens`

## TypeScript Model

::: details Toggle Model

<<< @/public/types/CardToken.ts{TypeScript}

:::

## Model Properties

> ### artist <DocBadge type="warning" text="optional" />
>
> The name of the artist that illustrated the card art.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### artistIds <DocBadge type="warning" text="optional" />
>
> A list of identifiers for the artists that illustrated the card art.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`

> ### asciiName <DocBadge type="warning" text="optional" />
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

> ### boosterTypes <DocBadge type="warning" text="optional" />
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

> ### cardParts <DocBadge type="warning" text="optional" />
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

> ### colorIndicator <DocBadge type="warning" text="optional" />
>
> A list of all the colors in the color indicator. This is the symbol prefixed to a card's [types](#types).
>
> - **Type:** `string[]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`

> ### colors
>
> A list of all the colors in `manaCost` and `colorIndicator` properties. Some cards may not have values, such as cards with `"Devoid"` in its [text](/data-models/card-token/#text).
>
> - **Type:** `string[]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### faceName <DocBadge type="warning" text="optional" />
>
> The name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### faceFlavorName <DocBadge type="warning" text="optional" />
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

> ### flavorText <DocBadge type="warning" text="optional" />
>
> The italicized text found below the rules text that has no game function.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### frameEffects <DocBadge type="warning" text="optional" />
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

> ### hasFoil <DocBadge type="danger" text="deprecated" />
>
> If the card can be found in foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card-token/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### hasNonFoil <DocBadge type="danger" text="deprecated" />
>
> If the card can be found in non-foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card-token/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### identifiers
>
> The identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) Data Model.
>
> - **Type:** `Identifiers`
> - **Introduced:** `v5.0.0`

> ### isFullArt <DocBadge type="warning" text="optional" />
>
> If the card has full artwork.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isFunny <DocBadge type="warning" text="optional" />
>
> If the card is part of a funny set, such as an Un-set.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.0`

> ### isOnlineOnly <DocBadge type="warning" text="optional" />
>
> If the card is only available in online game play variations.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### isPromo <DocBadge type="warning" text="optional" />
>
> If the card is a promotional printing.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isReprint <DocBadge type="warning" text="optional" />
>
> If the card has been reprinted.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isTextless <DocBadge type="warning" text="optional" />
>
> If the card does not have a text box.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### keywords <DocBadge type="warning" text="optional" />
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
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### loyalty <DocBadge type="warning" text="optional" />
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
> The number of the card. Cards can have a variety of numbers, letters and/or symbols for promotional qualities.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### orientation <DocBadge type="warning" text="optional" />
>
> The layout direction of the card. Used on [Art cards](https://mtg.fandom.com/wiki/Art_card).
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### originalText <DocBadge type="warning" text="optional" />
>
> The text on the card as originally printed.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### originalType <DocBadge type="warning" text="optional" />
>
> The type of the card as originally printed. Includes any supertypes and subtypes.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### otherFaceIds <DocBadge type="warning" text="optional" />
>
> A list of card `uuid`'s to this card's counterparts, such as transformed or melded faces.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.6.1`

> ### power <DocBadge type="warning" text="optional" />
>
> The power of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### promoTypes <DocBadge type="warning" text="optional" />
>
> A list of promotional types for a card.
>
> - **Type:** `string[]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`

> ### relatedCards <DocBadge type="warning" text="optional" />
>
> The related cards for this card. See the [Related Cards](/data-models/related-cards/) Data Model.
>
> - **Type:** `RelatedCards`
> - **Introduced:** `v5.2.1`

> ### reverseRelated <DocBadge type="danger" text="deprecated" /><DocBadge type="warning" text="optional" />
>
> The names of the cards that produce this card.
>
> _This property is deprecated. Use the [relatedCards](/data-models/card-token/#relatedcards) property instead._
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### securityStamp <DocBadge type="warning" text="optional" />
>
> The security stamp printed on the card.
>
> - **Type:** `string`
> - <ExampleField type='securityStamp'/>
> - **Introduced:** `v5.2.0`

> ### setCode
>
> The printing set code that the card is from, formatted in uppercase.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.1`

> ### side <DocBadge type="warning" text="optional" />
>
> The identifier of the card side. Used on cards with multiple faces on the same card.
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`

> ### signature <DocBadge type="warning" text="optional" />
>
> The name of the signature on the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### sourceProducts <DocBadge type="warning" text="optional" />
>
> A list of associated Sealed Product `uuid` properties where this card can be found in.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.2`

> ### subsets <DocBadge type="warning" text="optional" />
>
> The names of the subset printings a card is in. Used primarily on "Secret Lair Drop" cards.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`

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

> ### text <DocBadge type="warning" text="optional" />
>
> The rules text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### toughness <DocBadge type="warning" text="optional" />
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

> ### watermark <DocBadge type="warning" text="optional" />
>
> The name of the watermark on the card.
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`
