---
title: Card (Deck)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Deck)
  - - meta
    - name: description
      content: The Card (Deck) Data Model describes the properties of a single card found in a Deck.
  - - meta
    - property: og:description
      content: The Card (Deck) Data Model describes the properties of a single card found in a Deck.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card deck
---

# Card (Deck)

The Card (Deck) Data Model describes the properties of a single card found in a [Deck](/data-models/deck/).

- **Parent model:** [Deck](/data-models/deck/)
- **Parent property:** `commander`, `mainBoard`, `sideBoard`

## TypeScript Model

::: details Toggle Model {open}

<<< @/public/types/CardDeck.ts{TypeScript}

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

> ### attractionLights <DocBadge type="warning" text="optional" />
>
> A list of attraction lights found on a card, available only to cards printed in certain Un-sets.
>
> - **Type:** `number[]`
> - **Introduced:** `v5.2.1`

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
> A list of all the colors in `manaCost` and `colorIndicator` properties. Some cards may not have values, such as cards with `"Devoid"` in its [text](/data-models/card/card-deck/#text).
>
> - **Type:** `string[]`
> - <ExampleField type='colors'/>
> - **Introduced:** `v4.0.0`

> ### convertedManaCost <DocBadge type="danger" text="deprecated" />
>
> The converted mana cost of the card.
>
> _This property is deprecated. Use the [manaValue](/data-models/card/card-deck/#manavalue) property instead._
>
> - **Type:** `number`
> - **Introduced:** `v4.0.0`

> ### count
>
> The count of how many of this card exists in a relevant deck.
>
> - **Type:** `number`
> - **Introduced:** `v4.4.1`

> ### defense <DocBadge type="warning" text="optional" />
>
> The defense of the card. Used on [battle](https://mtg.fandom.com/wiki/Battle) cards.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.1`

> ### duelDeck <DocBadge type="warning" text="optional" />
>
> The indicator for which duel deck the card is in.
>
> - **Type:** `string`
> - <ExampleField type='duelDeck'/>
> - **Introduced:** `v4.2.0`

> ### edhrecRank <DocBadge type="warning" text="optional" />
>
> The card rank on [EDHRec](https://www.edhrec.com).
>
> - **Type:** `number`
> - **Introduced:** `v4.5.0`

> ### edhrecSaltiness <DocBadge type="warning" text="optional" />
>
> The card saltiness score on [EDHRec](https://www.edhrec.com).
>
> - **Type:** `number`
> - **Introduced:** `v5.2.1`

> ### faceConvertedManaCost <DocBadge type="danger" text="deprecated" /><DocBadge type="warning" text="optional" />
>
> The converted mana cost or mana value for the face for either half or part of the card.
>
> _This property is deprecated. Use the [faceManaValue](/data-models/card/card-deck/#facemanavalue) property instead._
>
> - **Type:** `number`
> - **Introduced:** `v4.1.1`

> ### faceFlavorName <DocBadge type="warning" text="optional" />
>
> The flavor name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.2.0`

> ### faceManaValue <DocBadge type="warning" text="optional" />
>
> The mana value of the face for either half or part of the card.
>
> - **Type:** `number`
> - **Introduced:** `v5.2.0`

> ### faceName <DocBadge type="warning" text="optional" />
>
> The name on the face of the card.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### finishes
>
> The finishes of the card. These finishes are not mutually exclusive.
>
> - **Type:** `string[]`
> - <ExampleField type='finishes'/>
> - **Introduced:** `v5.2.0`

> ### flavorName <DocBadge type="warning" text="optional" />
>
> The promotional card name printed above the true card name on special cards that has no game function. See [this card](https://scryfall.com/card/plg20/2/hangarback-walker) for an example.
>
> - **Type:** `string`
> - **Introduced:** `v5.0.0`

> ### flavorText <DocBadge type="warning" text="optional" />
>
> The italicized text found below the rules text that has no game function.
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### foreignData <DocBadge type="warning" text="optional" />
>
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) Data Model.
>
> - **Type:** `ForeignData[]`
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

> ### hand <DocBadge type="warning" text="optional" />
>
> The starting maximum hand size total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### hasAlternativeDeckLimit <DocBadge type="warning" text="optional" />
>
> If the card allows a value other than 4 copies in a deck.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`

> ### hasContentWarning <DocBadge type="warning" text="optional" />
>
> If the card marked by [Wizards of the Coast](https://company.wizards.com) for having sensitive content. Cards with this property may have missing or degraded properties. See this [official article](https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10) for more information.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.0.0`

> ### hasFoil <DocBadge type="danger" text="deprecated" />
>
> If the card can be found in foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card/card-deck/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### hasNonFoil <DocBadge type="danger" text="deprecated" />
>
> If the card can be found in non-foil.
>
> _This property is deprecated. Use the [finishes](/data-models/card/card-deck/#finishes) property instead._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### identifiers
>
> The identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) Data Model.
>
> - **Type:** `Identifiers`
> - **Introduced:** `v5.0.0`

> ### isAlternative <DocBadge type="warning" text="optional" />
>
> If the card is an alternate variation to a printing in this set.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.2.0`

> ### isFoil
>
> If the card is in foil.
>
> - **Type:** `boolean`
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

> ### isGameChanger <DocBadge type="warning" text="optional" />
>
> If the card is a part of the [game changers](https://mtg.wiki/page/Game_Changers) commander list.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.2`

> ### isOnlineOnly <DocBadge type="warning" text="optional" />
>
> If the card is only available in online game play variations.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### isOversized <DocBadge type="warning" text="optional" />
>
> If the card is oversized.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isPromo <DocBadge type="warning" text="optional" />
>
> If the card is a promotional printing.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isRebalanced <DocBadge type="warning" text="optional" />
>
> If the card is [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) for the [Alchemy](https://magic.wizards.com/en/articles/archive/magic-digital/introducing-alchemy-new-way-play-mtg-arena-2021-12-02) play format.
>
> - **Type:** `boolean`
> - **Introduced:** `v5.2.0`

> ### isReprint <DocBadge type="warning" text="optional" />
>
> If the card has been reprinted.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isReserved <DocBadge type="warning" text="optional" />
>
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.1`

> ### isStarter <DocBadge type="danger" text="deprecated" /><DocBadge type="warning" text="optional" />
>
> If the card is found in a starter deck such as a Planeswalker/Brawl deck.
>
> _This property is deprecated and no longer provides any useful information._
>
> - **Type:** `boolean`
> - **Introduced:** `v4.0.0`

> ### isStorySpotlight <DocBadge type="warning" text="optional" />
>
> If the card is a [Story Spotlight](https://mtg.fandom.com/wiki/Story_Spotlight) card.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isTextless <DocBadge type="warning" text="optional" />
>
> If the card does not have a text box.
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.2`

> ### isTimeshifted <DocBadge type="warning" text="optional" />
>
> If the card is "timeshifted", a feature of certain sets where a card will have a different [frameVersion](/data-models/card/card-deck/#frameversion).
>
> - **Type:** `boolean`
> - **Introduced:** `v4.4.1`

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
> The type of card layout.
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills <DocBadge type="warning" text="optional" />
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

> ### life <DocBadge type="warning" text="optional" />
>
> The starting life total modifier. A `+` or `-` character precedes a number. Used only on cards with `"Vanguard"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.2.1`

> ### loyalty <DocBadge type="warning" text="optional" />
>
> The starting loyalty value of the card. Used only on cards with `"Planeswalker"` in its [types](./#types).
>
> - **Type:** `string`
> - **Introduced:** `v4.0.0`

> ### manaCost <DocBadge type="warning" text="optional" />
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
> - **Type:** `number`
> - **Introduced:** `v5.2.0`

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

> ### originalPrintings <DocBadge type="warning" text="optional" />
>
> A list of card `uuid`'s to original printings of the card if this card is somehow different from its original, such as [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) cards.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.0`

> ### originalReleaseDate <DocBadge type="warning" text="optional" />
>
> The original release date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format for a promotional card printed outside of a cycle window, such as Secret Lair Drop promotions.
>
> - **Type:** `string`
> - **Introduced:** `v5.1.0`

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

> ### printings <DocBadge type="warning" text="optional" />
>
> A list of printing set codes the card was printed in, formatted in uppercase.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.0.0`

> ### promoTypes <DocBadge type="warning" text="optional" />
>
> A list of promotional types for a card.
>
> - **Type:** `string[]`
> - <ExampleField type='promoTypes'/>
> - **Introduced:** `v5.0.0`

> ### purchaseUrls
>
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) Data Model.
>
> - **Type:** `PurchaseUrls`
> - **Introduced:** `v4.4.0`

> ### rarity
>
> The card printing rarity. Rarity `bonus` relates to cards that have an alternate availability in booster packs, while `special` relates to "Timeshifted" cards.
>
> - **Type:** `string`
> - <ExampleField type='rarity'/>
> - **Introduced:** `v4.0.0`

> ### relatedCards <DocBadge type="warning" text="optional" />
>
> The related cards for this card. See the [Related Cards](/data-models/related-cards/) Data Model.
>
> - **Type:** `RelatedCards`
> - **Introduced:** `v5.2.1`

> ### rebalancedPrintings <DocBadge type="warning" text="optional" />
>
> A list of card `uuid`'s to printings that are [rebalanced](https://magic.wizards.com/en/articles/archive/magic-digital/alchemy-rebalancing-philosophy-2021-12-02) versions of this card.
>
> - **Type:** `string[]`
> - **Introduced:** `v5.2.0`

> ### rulings <DocBadge type="warning" text="optional" />
>
> A list of the official rulings of the card. See the [Rulings](/data-models/rulings/) Data Model.
>
> - **Type:** `Rulings[]`
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
> The type of the card as visible, including any supertypes and subtypes anre are given a `-` delimiter if appropriate.
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

> ### variations <DocBadge type="warning" text="optional" />
>
> A list of card `uuid`'s of this card with alternate printings in the same set, excluding Un&#8209;sets.
>
> - **Type:** `string[]`
> - **Introduced:** `v4.1.2`

> ### watermark <DocBadge type="warning" text="optional" />
>
> The name of the watermark on the card.
>
> - **Type:** `string`
> - <ExampleField type='watermark'/>
> - **Introduced:** `v4.0.0`
