---
{
  "title": "Card (Atomic)",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Card (Atomic) file model documentation.",
    },
    {
      "name": "og:description",
      "content": "Card (Atomic) file model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card (atomic)",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Card (Atomic)

The Card (Atomic) file model describes the a single atomic card, an oracle-like entity of a Magic: The Gathering card that only stores evergreen data about a card that would never change from printing to printing.

**Parent file:** [AtomicCards](/downloads/all-files/#atomiccards), [LegacyAtomic](/downloads/all-files/#legacyatomic), [ModernAtomic](/downloads/all-files/#modernatomic), [PauperAtomic](/downloads/all-files/#pauperatomic), [PioneerAtomic](/downloads/all-files/#pioneeratomic), [StandardAtomic](/downloads/all-files/#standardatomic), [VintageAtomic](/downloads/all-files/#vintageatomic)  
**Parent property:** `data`  

::: tip
Card (Atomic) objects are accessed from a **single index array** with the property name being the card's name.

**Example:**

```json
{
  "data": {
    "Dark Ritual": [
      <Card (Atomic) Model>
    ],
    ... // More cards
  },
  "meta": <Meta Model> 
}
```

:::

## Model Index

<PropertyToggler/>

[[toc]]

## Model Properties

> ### asciiName  
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
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

> ### edhrecRank  
> The card rank on [EDHRec](https://www.edhrec.com).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.5.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceConvertedManaCost  
> The converted mana cost or mana value for the face of either half or part of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.1.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### faceName  
> The name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i class="optional">optional</i>  

> ### foreignData  
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) data model.  
>
> - **Type:** `array[] | array[object]`  
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

> ### identifiers  
> A list of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v5.0.0`

> ### isReserved  
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.1`  
> - **Attributes:** <i class="optional">optional</i>  

> ### keywords  
> A list of keywords found on the card.  
>
> - **Type:** `array[string]`  
> - **Introduced:** `v5.1.0`  
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

> ### name  
> The name of the card. Cards with multiple faces, like `"Split"` and `"Meld"` cards are given a delimiter.
>
> - **Type:** `string`
> - **Example:** `"Wear // Tear"`
> - **Introduced:** `v4.0.0`

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

> ### purchaseUrls  
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) data model.  
>
> - **Type:** `object{props}`  
> - **Introduced:** `v4.4.0`

> ### rulings  
> The official rulings of the card. See the [Rulings](/data-models/rulings/) data model.  
>
> - **Type:** `array[] | array[object]`  
> - **Introduced:** `v4.0.0`

> ### side  
> The identifier of the card side. Used on cards with multiple faces.  
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`  
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
