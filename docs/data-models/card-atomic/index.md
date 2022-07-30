---
title: Card (Atomic)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Atomic)
  - - meta
    - name: description
      content: The Card (Atomic) data model describes a single atomic card, an oracle-like entity of a Magic The Gathering card that only stores evergreen data about a card that would never change from printing to printing.
  - - meta
    - property: og:description
      content: The Card (Atomic) data model describes a single atomic card, an oracle-like entity of a Magic The Gathering card that only stores evergreen data about a card that would never change from printing to printing.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card atomic
---

# Card (Atomic)

The Card (Atomic) data model describes a single atomic card, an oracle-like entity of a Magic: The Gathering card that only stores evergreen data about a card that would never change from printing to printing.

**Parent file:** [AtomicCards](/downloads/all-files/#atomiccards), [LegacyAtomic](/downloads/all-files/#legacyatomic), [ModernAtomic](/downloads/all-files/#modernatomic), [PauperAtomic](/downloads/all-files/#pauperatomic), [PioneerAtomic](/downloads/all-files/#pioneeratomic), [StandardAtomic](/downloads/all-files/#standardatomic), [VintageAtomic](/downloads/all-files/#vintageatomic)  

**Parent property:** `data`

<!-- For some reason tips before TOC will break the TOC, but HTML will not -->
<blockquote class="warning">
  <p class="small-header">Note</p>
  <p>The Card (Atomic) data model is accessed through a single index array where its parent property is the name of the card. Here is an example of the model:</p>

  ```json
  "data": {
    "Oblivion Ring": CardAtomic[],
    ... // More card names
  }
  ```

  <br />
  <p>and accessing the data would look like this:</p>
  <br />

  ```js
  data["Oblivion Ring"][0];
  ```

</blockquote>

## Model Index

<ModelType type="CardAtomic" />

<PropertyToggler/>

[[toc]]

## Model Properties

> ### asciiName <i class="optional"></i>
>
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### colorIdentity
>
> A list of all the colors found in `manaCost`, `colorIndicator`, and `text`.
>
> - **Type:** `string[]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator <i class="optional"></i>
>
> A list of all the colors in the color indicator (The symbol prefixed to a card's [types](#types)).
>
> - **Type:** `string[]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`

> ### colors
>
> A list of all the colors in `manaCost` and `colorIndicator`. Some cards may not have values, such as cards with `"Devoid"` in its [text](#text).
>
> - **Type:** `string[]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### convertedManaCost
>
> The converted mana cost of the card. Use the [manaValue](/data-models/card-atomic/#manavalue) property instead.
>
> - **Type:** `float`
> - **Introduced:** `v4.0.0`

> ### edhrecRank <i class="optional"></i>
>
> The card rank on [EDHRec](https://www.edhrec.com).
>
> - **Type:** `number`
> - **Introduced:** `v4.5.0`

> ### faceConvertedManaCost <i class="optional"></i>
>
> The converted mana cost or mana value for the face for either half or part of the card. Use the [faceManaValue](/data-models/card-atomic/#facemanavalue) property instead.
>
> - **Type:** `float`
> - **Introduced:** `v4.1.1`

> ### faceManaValue <i class="optional"></i>
>
> The mana value of the face for either half or part of the card.
>
> - **Type:** `float`
> - **Introduced:** `v5.2.0`

> ### faceName <i class="optional"></i>
>
> The name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### foreignData
>
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) data model.
>
> - **Type:** `ForeignData`
> - **Introduced:** `v4.0.0`

> ### hand <i class="optional"></i>
>
> The starting maximum hand size total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### hasAlternativeDeckLimit <i class="optional"></i>
>
> If the card allows a value other than 4 copies in a deck.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`

> ### identifiers
>
> A list of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.
>
> - **Type:** `Identifiers`
> - **Introduced:** `v5.0.0`

> ### isFunny <i class="optional"></i>
>
> If the card is part of a funny set, such as an Un-set.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.0`

> ### isReserved <i class="optional"></i>
>
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### keywords <i class="optional"></i>
>
> A list of keywords found on the card.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.1.0`

> ### layout
>
> The type of card layout. For a token card, this will be `"token"`.
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills <i class="optional"></i>
>
> A list of formats the card is legal to be a commander in. See the [Leadership Skills](/data-models/leadership-skills/) data model.
>
> - **Type:** `LeadershipSkills`
> - **Introduced:** `v4.5.1`

> ### legalities
>
> A list of play formats the card the card is legal in. See the [Legalities](/data-models/legalities/) data model.
>
> - **Type:** `Legalities`
> - **Introduced:** `v4.0.0`

> ### life <i class="optional"></i>
>
> The starting life total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### loyalty <i class="optional"></i>
>
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### manaCost <i class="optional"></i>
>
> The mana cost of the card wrapped in curly brackets for each value.
>
> - **Type:** `string`
> - **Example:** `"{1}{B}"`
> - **Introduced:** `v4.0.0`

> ### manaValue
>
> The mana value of the card.
>
> - **Type:** `float`
> - **Introduced:** `v5.2.0`

> ### name
>
> The name of the card. Cards with multiple faces, like `"Split"` and `"Meld"` cards are given a delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### power <i class="optional"></i>
>
> The power of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### printings <i class="optional"></i>
>
> A list of printing set codes the card was printed in, formatted in uppercase.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### purchaseUrls
>
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) data model.
>
> - **Type:** `PurchaseUrls`
> - **Introduced:** `v4.4.0`

> ### rulings
>
> The official rulings of the card. See the [Rulings](/data-models/rulings/) data model.
>
> - **Type:** `Rulings[]`
> - **Introduced:** `v4.0.0`

> ### side <i class="optional"></i>
>
> The identifier of the card side. Used on cards with multiple faces on the same card.
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`

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
> The type of the card as visible, including any supertypes and subtypes.
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
