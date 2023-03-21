---
title: Card (Atomic)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Atomic)
  - - meta
    - name: description
      content: The Card (Atomic) Data Model describes the properties of a single "atomic" card, an oracle-like entity of a card that only has evergreen properties that would never change from printing to printing.
  - - meta
    - property: og:description
      content: The Card (Atomic) Data Model describes the properties of a single "atomic" card, an oracle-like entity of a card that only has evergreen properties that would never change from printing to printing.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card atomic
---

# Card (Atomic)

The Card (Atomic) Data Model describes the properties of a single "atomic" card, an oracle-like entity of a card that only has evergreen properties that would never change from printing to printing.

- **Parent file:** [AtomicCards](/downloads/all-files/#atomiccards), [LegacyAtomic](/downloads/all-files/#legacyatomic), [ModernAtomic](/downloads/all-files/#modernatomic), [PauperAtomic](/downloads/all-files/#pauperatomic), [PioneerAtomic](/downloads/all-files/#pioneeratomic), [StandardAtomic](/downloads/all-files/#standardatomic), [VintageAtomic](/downloads/all-files/#vintageatomic)
- **Parent property:** `data`

::: info Accessing the data

When using any **Atomic-like** file, the Card (Atomic) Data Model is accessed through a single index array where its parent property is the card's [name](/data-models/card-atomic/#name) property. Here is a reduced payload of the model as an example:

```TypeScript
{
  data: Record<string, CardAtomic[]>;
}
```

and accessing the data would look like this:

```TypeScript
const card: CardAtomic = data["Phelddagrif"][0];
```

:::

## TypeScript Model

::: details Show/Hide Model

<<< @/public/types/CardAtomic.ts{TypeScript}

:::

## Model Properties

> ### asciiName <Badge type="warning" text="optional" />
>
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

> ### attractionLights <Badge type="warning" text="optional" />
>
> A list of attraction lights found on a card, available only to cards printed in certain Un-sets.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.1`

> ### colorIdentity
>
> A list of all the colors found in `manaCost`, `colorIndicator`, and `text` properties.
>
> - **Type:** `string[]`
> - <ExampleField type='colorIdentity'/>
> - **Introduced:** `v4.0.0`

> ### colorIndicator <Badge type="warning" text="optional" />
>
> A list of all the colors in the color indicator. This is the symbol prefixed to a card's [types](#types).
>
> - **Type:** `string[]`
> - <ExampleField type='colorIndicator'/>
> - **Introduced:** `v4.0.2`

> ### colors
>
> A list of all the colors in `manaCost` and `colorIndicator` properties. Some cards may not have values, such as cards with `"Devoid"` in its [text](/data-models/card-atomic/#text).
>
> - **Type:** `string[]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### convertedManaCost <Badge type="danger" text="deprecated" />
>
> The converted mana cost of the card.
>
> _This property is deprecated. Use the [manaValue](/data-models/card-atomic/#manavalue) property instead._
>
> - **Type:** `float`
> - **Introduced:** `v4.0.0`

> ### edhrecRank <Badge type="warning" text="optional" />
>
> The card rank on [EDHRec](https://www.edhrec.com).
>
> - **Type:** `number`
> - **Introduced:** `v4.5.0`

> ### edhrecSaltiness <Badge type="warning" text="optional" />
>
> The card saltiness score on [EDHRec](https://www.edhrec.com).
>
> - **Type:** `float`
> - **Introduced:** `v5.2.1`

> ### faceConvertedManaCost <Badge type="danger" text="deprecated" /><Badge type="warning" text="optional" />
>
> The converted mana cost or mana value for the face for either half or part of the card.
>
> _This property is deprecated. Use the [faceManaValue](/data-models/card-atomic/#facemanavalue) property instead._
>
> - **Type:** `float`
> - **Introduced:** `v4.1.1`

> ### faceManaValue <Badge type="warning" text="optional" />
>
> The mana value of the face for either half or part of the card.
>
> - **Type:** `float`
> - **Introduced:** `v5.2.0`

> ### faceName <Badge type="warning" text="optional" />
>
> The name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### firstPrinting <Badge type="warning" text="optional" />
>
> The set code the card was first printed in.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### foreignData <Badge type="warning" text="optional" />
>
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) Data Model.
>
> - **Type:** `ForeignData[]`
> - **Introduced:** `v5.2.1`

> ### hand <Badge type="warning" text="optional" />
>
> The starting maximum hand size total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### hasAlternativeDeckLimit <Badge type="warning" text="optional" />
>
> If the card allows a value other than 4 copies in a deck.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`

> ### identifiers
>
> The identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) Data Model.
>
> - **Type:** `Identifiers`
> - **Introduced:** `v5.1.0`

> ### isFunny <Badge type="warning" text="optional" />
>
> If the card is part of a funny set, such as an Un-set.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.1`

> ### isReserved <Badge type="warning" text="optional" />
>
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### keywords <Badge type="warning" text="optional" />
>
> A list of keywords found on the card.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.1.0`

> ### layout
>
> The type of card layout.
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills <Badge type="warning" text="optional" />
>
> The formats the card is legal to be a commander in. See the [Leadership Skills](/data-models/leadership-skills/) Data Model.
>
> - **Type:** `LeadershipSkills`
> - **Introduced:** `v4.5.1`

> ### legalities
>
> The legalities of play formats for this printing of the card. See the [Legalities](/data-models/legalities/) Data Model.
>
> - **Type:** `Legalities`
> - **Introduced:** `v4.0.0`

> ### life <Badge type="warning" text="optional" />
>
> The starting life total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### loyalty <Badge type="warning" text="optional" />
>
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### manaCost <Badge type="warning" text="optional" />
>
> The mana cost of the card wrapped in curly brackets for each mana symbol value.
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
> The name of the card. Cards with multiple faces are given a `//` delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

> ### power <Badge type="warning" text="optional" />
>
> The power of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### printings <Badge type="warning" text="optional" />
>
> A list of printing set codes the card was printed in, formatted in uppercase.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### purchaseUrls
>
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) Data Model.
>
> - **Type:** `PurchaseUrls`
> - **Introduced:** `v4.4.0`

> ### relatedCards
>
> The related cards for this card. See the [Related Cards](/data-models/related-cards/) Data Model.
>
> - **Type:** `RelatedCards`
> - **Introduced:** `v5.2.1`

> ### rulings
>
> A list of the official rulings of the card. See the [Rulings](/data-models/rulings/) Data Model.
>
> - **Type:** `Rulings[]`
> - **Introduced:** `v4.0.0`

> ### side <Badge type="warning" text="optional" />
>
> The identifier of the card side. Used on cards with multiple faces on the same card.
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`

> ### subsets <Badge type="warning" text="optional" />
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

> ### text <Badge type="warning" text="optional" />
>
> The rules text of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### toughness <Badge type="warning" text="optional" />
>
> The toughness of the card.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### type
>
> The type of the card as visible, including any supertypes and subtypes are given a `-` delimiter if appropriate.
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
