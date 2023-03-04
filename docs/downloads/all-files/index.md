---
title: All Files
head:
  - - meta
    - property: og:title
      content: All Files
  - - meta
    - name: description
      content: A list of all files output by the MTGJSON application.
  - - meta
    - property: og:description
      content: A list of all files output by the MTGJSON application.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, all files, downloads
---

# All Files

A list of all files output by the MTGJSON application.

You can see a dump of all files, including individual sets and decks by going to the [file server](https://mtgjson.com/api/v5/) directly.

## On this page

[[toc]]

## Downloads

> ### AllPrintings
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property.
>
> SQL/SQLite downloads courtesy of [mtgsqlive](https://github.com/mtgjson/mtgsqlive).
>
> <DownloadNativeSelect fileName='AllPrintings'/>

> ### AllPrintingsCSVFiles
>
> File containing a directory of split-out CSV files from the `AllPrintings` file, compressed.
>
> <DownloadNativeSelect fileName='AllPrintingsCSVFiles'/>

> ### AllDeckFiles
>
> File containing a directory of all individual [Deck](/data-models/deck/) Data Models named by a Deck's [fileName](/data-models/deck/#filename) property, compressed.
>
> <DownloadNativeSelect fileName='AllDeckFiles'/>

> ### AllIdentifiers
>
> File containing all [Card (Set)](/data-models/card-set/) cards organized by the [uuid](/data-models/card-set/#uuid) property.
>
> <DownloadNativeSelect fileName='AllIdentifiers'/>

> ### AllPrices
>
> File containing all prices of cards in various formats organized by a card's `uuid` property. See the [All Prices](/abstract-models/all-prices/) Abstract Model for the model of returned data.
>
> <DownloadNativeSelect fileName='AllPrices'/>

> ### AllSetFiles
>
> File containing a directory of all individual [Set](/data-models/set/) data, compressed.
>
> <DownloadNativeSelect fileName='AllSetFiles'/>

> ### AtomicCards
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property.
>
> <DownloadNativeSelect fileName='AtomicCards'/>

> ### CardTypes
>
> File containing every card type of any type of card, defined by the [Card Types](/abstract-models/card-types/) Abstract Model.
>
> <DownloadNativeSelect fileName='CardTypes'/>

> ### CompiledList
>
> File containing all filename outputs by the MTGJSON application, such as `AllPrintings`, `CardTypes`, etc.
>
> **Note:** This file does not contain data for these outputs, only string references to their existence. Generally, this data is used for documentation, but is also available to the public.
>
> <DownloadNativeSelect fileName='CompiledList'/>

> ### DeckList
>
> File containing a list of all individual Deck's "meta data" based on the [Deck List](/data-models/deck-list/) Data Model.
>
> <DownloadNativeSelect fileName='DeckList'/>

> ### EnumValues
>
> File containing known property values for various Data Models.
>
> **Note:** Generally, this data is used for documentation, but is also available to the public.
>
> <DownloadNativeSelect fileName='EnumValues'/>

> ### Keywords
>
> File containing a list of possible all keywords used on all cards, using the [Keywords](/data-models/keywords/) Data Model
>
> <DownloadNativeSelect fileName='Keywords'/>

> ### Legacy
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property, restricted to sets legal in the Legacy play format.
>
> <DownloadNativeSelect fileName='Legacy'/>

> ### LegacyAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Legacy play format.
>
> <DownloadNativeSelect fileName='LegacyAtomic'/>

> ### Meta
>
> File containing the metadata object with [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) dates for latest build and [SemVer](https://semver.org/) specifications of the MTGJSON release.
>
> <DownloadNativeSelect fileName='Meta'/>

> ### Modern
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property, restricted to sets legal in the Modern play format.
>
> <DownloadNativeSelect fileName='Modern'/>

> ### ModernAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Modern play format.
>
> <DownloadNativeSelect fileName='ModernAtomic'/>

> ### PauperAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Pauper play format.
>
> <DownloadNativeSelect fileName='PauperAtomic'/>

> ### Pioneer
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property, restricted to sets legal in the Pioneer play format.
>
> <DownloadNativeSelect fileName='Pioneer'/>

> ### PioneerAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Pioneer play format.
>
> <DownloadNativeSelect fileName='PioneerAtomic'/>

> ### SetList
>
> File containing a list of meta data for all [Set](/data-models/set/) data using the [Set List](/data-models/set-list/) Data Model.
>
> <DownloadNativeSelect fileName='SetList'/>

> ### Standard
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property, restricted to sets legal in the Standard play format.
>
> <DownloadNativeSelect fileName='Standard'/>

> ### StandardAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Standard play format.
>
> <DownloadNativeSelect fileName='StandardAtomic'/>

> ### TcgplayerSkus
>
> File containing [TCGplayer](https://www.tcgplayer.com/?partner=mtgjson&utm_campaign=affiliate&utm_medium=mtgjson&utm_source=mtgjson) SKU information based on a card's `uuid` property.
>
> <DownloadNativeSelect fileName='TcgplayerSkus'/>

> ### Vintage
>
> File containing all sets using the [Set](/data-models/set/) Data Model which includes all printings and variations of the [Card (Set)](/data-models/card-set/) Data Model, categorized by a Set's [code](/data-models/set/#code) property, restricted to sets legal in the Vintage play format.
>
> <DownloadNativeSelect fileName='Vintage'/>

> ### VintageAtomic
>
> File containing every [Card (Atomic)](/data-models/card-atomic/) card organized by the card's [name](/data-models/card-atomic/#name) property, restricted to cards legal in the Vintage play format.
>
> <DownloadNativeSelect fileName='VintageAtomic'/>
