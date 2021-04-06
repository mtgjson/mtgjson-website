---
{
  "title": "Card (Atomic)",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Card (Atomic) data model documentation.",
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

The Card (Atomic) data model describes the a single atomic card, an oracle-like entity of a Magic: The Gathering card that only stores evergreen data about a card that would never change from printing to printing.

**Parent file:** [AtomicCards](/downloads/all-files/#atomiccards), [LegacyAtomic](/downloads/all-files/#legacyatomic), [ModernAtomic](/downloads/all-files/#modernatomic), [PauperAtomic](/downloads/all-files/#pauperatomic), [PioneerAtomic](/downloads/all-files/#pioneeratomic), [StandardAtomic](/downloads/all-files/#standardatomic), [VintageAtomic](/downloads/all-files/#vintageatomic)  
**Parent property:** `data`  

::: warning
Card (Atomic) objects are accessed from a **single index array** with the property name being the card's name.

**Example:**

```json
{
  "data": {
    "Dark Ritual": [
      <Card Model>
    ],
    ... // More cards
  },
  "meta": <Meta Model> 
}
```
:::

#### Model Index

<PropertyToggler/>

[[toc]]

#### Model Properties

> ### asciiName  
> The [ASCII](http://www.asciitable.com) (Basic/128) code formatted card name with no special unicode characters.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i>optional</i>  

> ### colorIdentity  
> List of all the colors found in `manaCost`, `colorIndicator` and `text`.  
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

> ### edhrecRank  
> Card rank on [EDHRec](https://www.edhrec.com).  
>
> - **Type:** `integer`  
> - **Introduced:** `v4.5.0`  
> - **Attributes:** <i>optional</i>  

> ### faceConvertedManaCost  
> The converted mana cost of the face of either half or part of the card.  
>
> - **Type:** `float`  
> - **Introduced:** `v4.1.1`  
> - **Attributes:** <i>optional</i>  

> ### faceName  
> Name on the face of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i>optional</i>  

> ### foreignData  
> A list of data properties in other languages. See the [Foreign Data](/data-models/foreign-data/) data model.  
>
> - **Type:** `array | array(object)`  
> - **Introduced:** `v4.0.0`

> ### hand  
> Starting maximum hand size total modifier. A `+` or `-` character precedes an integer.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i>optional</i>  

> ### hasAlternativeDeckLimit
> If the card allows a value other than 4 copies in a deck.  
>
> - **Type:** `boolean`  
> - **Introduced:** `v5.0.0`  
> - **Attributes:** <i>optional</i>  

> ### identifiers  
> List of identifiers associated to a card. See the [Identifiers](/data-models/identifiers/) data model.  
>
> - **Type:** `object`  
> - **Introduced:** `v5.0.0`

> ### isReserved  
> If the card is on the Magic: The Gathering [Reserved List](https://magic.wizards.com/en/articles/archive/official-reprint-policy-2010-03-10).  
>
> - **Type:** `boolean`  
> - **Introduced:** `v4.0.1`  
> - **Attributes:** <i>optional</i>  

> ### keywords  
> All keywords found on a card.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v5.1.0`  
> - **Attributes:** <i>optional</i>  

> ### layout  
> Type of card layout. For a token card, this will be `"token"`.  
>
> - **Type:** `string`
> - <ExampleField type='layout'/>
> - **Introduced:** `v4.0.0`

> ### leadershipSkills  
> List of formats the card is legal to be a commander in. See the [Leadership Skills](/data-models/leadership-skills/) data model.  
>
> - **Type:** `object`  
> - **Introduced:** `v4.5.1`  
> - **Attributes:** <i>optional</i>  

> ### legalities  
> List of play formats the card the card is legal in. See the [Legalities](/data-models/legalities/) data model.  
>
> - **Type:** `object`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### life  
> Starting life total modifier. A plus or minus character precedes an integer. Used only on Vanguard cards.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.2.1`  
> - **Attributes:** <i>optional</i>  

> ### loyalty  
> Planeswalker loyalty value.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### manaCost  
> Mana cost of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### name  
> Names of each face on the card. Cards with multiple faces, like "Split" and "Meld" cards are given a delimiter. 
>
> - **Type:** `string`
> - **Example:** `Wear // Tear`
> - **Introduced:** `v4.0.0`

> ### power  
> Power of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### printings  
> List of sets the card was printed in, formatted in uppercase.  
>
> - **Type:** `array(string)`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### purchaseUrls  
> Links that navigate to websites where the card can be purchased. See the [Purchase Urls](/data-models/purchase-urls/) data model.  
>
> - **Type:** `object`  
> - **Introduced:** `v4.4.0`

> ### rulings  
> Official rulings of the card. See the [Rulings](/data-models/rulings/) data model.  
>
> - **Type:** `array | array(object)`  
> - **Introduced:** `v4.0.0`

> ### side  
> Identifier of the card side. Used on cards with multiple faces.  
>
> - **Type:** `string`
> - <ExampleField type='side'/>
> - **Introduced:** `v4.1.0`  
> - **Attributes:** <i>optional</i>  

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
> - **Attributes:** <i>optional</i>  

> ### toughness  
> Toughness of the card.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`  
> - **Attributes:** <i>optional</i>  

> ### type  
> Type of the card as visible, including any supertypes and subtypes.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`

> ### types  
> List of all card types of the card, including Un-sets and gameplay variants. See [Card Types](/data-models/card-types/) for reference.  
>
> - **Type:** `array(string)`
> - <ExampleField type='types'/>
> - **Introduced:** `v4.0.0`

> ### uuid  
> A universal unique identifier (v5) generated by MTGJSON. Each entry is unique.  
>
> - **Type:** `string`  
> - **Introduced:** `v4.0.0`
