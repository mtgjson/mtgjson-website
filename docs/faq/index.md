---
title: Frequently Asked Questions
head:
  - - meta
    - property: og:title
      content: Frequently Asked Questions
  - - meta
    - name: description
      content: Frequently Asked Questions for MTGJSON and documentation.
  - - meta
    - property: og:description
      content: Frequently Asked Questions for MTGJSON and documentation.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, frequently asked questions, faq
---

# Frequently Asked Questions

Here is a list of frequently asked questions from our users since some data can be nuanced.

## Question Index

[[toc]]

> ### Which file should I use for my project?
>
> In most cases, [AllPrintings](/downloads/all-files/#allprintings) is the correct file. It contains all data for every printing of each card organized by set, however, this file is quite large. Alternatively, you can browse the [All Sets](/downloads/all-sets/) and [All Decks](/downloads/all-decks/) files individually.
>
> **Note:** The JSON files are minified, and not human-readable. Depending on your implementation, you can use a software like [JQ](https://stedolan.github.io/jq/) to parse and process them.

> ### Which file formats should I use for my project?
>
> We recommend downloading the compressed files and unpacking them locally or remotely. This would be faster than downloading the JSON files. If you are wanting to work with database files, we also export SQL and SQLite databases.

> ### Where does the data come from?
>
> Data is collected from a variety of sources, including Magic: The Gathering's own [Gatherer](https://gatherer.wizards.com/Pages/Default.aspx), API's like [Scryfall](https://scryfall.com/docs/api) and [TCGplayer](https://docs.tcgplayer.com/docs), and many more. For more information, or if you would like to help, please join our [Discord](https://mtgjson.com/discord).

> ### How much does MTGJSON cost?
>
> MTGJSON is free and open source under the MIT License. If you find this project useful, please consider helping us to keep the lights on and develop new features for you with a one-time donation using <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> or recurring donations using <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a>.

> ### How can I help, report a bug, etc?
>
> You can contribute to the project through the [MTGJSON Repository](https://github.com/mtgjson/mtgjson) or the [Documentation Repository](https://github.com/mtgjson/mtgjson-website). If you are a data provider and would like to integrate your data with us, please join our [Discord](https://mtgjson.com/discord).

> ### How often is the data updated?
>
> Builds kick off at **2:00PM ET** taking between 4-5 hours to complete and go live at **7:00PM ET**.
>
> **Note:** These time may be adjusted to compensate upstream issues and may not be accurately reflected here.

> ### How can I verify the downloaded files?
>
> Yes. Every file has a SHA-256 file available at the same location appended with `.sha256`.
>
> - **Example:** `https://mtgjson.com/api/v5/AllPrintings.json.sha256`

> ### How can I use TypeScript typings for MTGJSON data?
>
> There is currently no official typings exported from MTGJSON, however each data model documentation page does outline its associated type notation. As well, a TypeScript types file for all data models can be accessed <a href="/static/mtgjson-types.ts" target="_blank" rel="noreferrer noopener">here</a>.

> ### How do I access a card's imagery?
>
> While we do not offer card images directly through MTGJSON, we recommend getting card images through [Scryfall](https://scryfall.com/) or [Gatherer](https://gatherer.wizards.com/) using the MTGJSON property from the [Identifiers](/data-models/identifiers/) data model within the various Card data models.
>
> - **Scryfall:**
>   - Front face: `https://cards.scryfall.io/large/front/6/7/67f4c93b-080c-4196-b095-6a120a221988.jpg`
>   - Back face: `https://cards.scryfall.io/large/back/6/7/67f4c93b-080c-4196-b095-6a120a221988.jpg`
>
> **Note:** Notice that before the `scrylfallId` is two other paths, these coincide with the first and second string entry of the scryfallId. See the official documentaion [here](https://scryfall.com/docs/api/images) for more information about different image variants.
>
> - **Gatherer:** `https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=${multiverseId}`
>
> **Note:** Gatherer may not have all images. If a `multiverseId` is missing, the imagery will not exist there.

> ### How can I access a card's set imagery?
>
> The `keyruneCode` property from the [Set](/data-models/set/#keyrunecode) data model provides information you need for implementing set code imagery but is mostly limited to projects that can use CSS, however, there is ways to use them in desktop applications. See the [Keyrune official documentation](https://keyrune.andrewgioia.com/) for more information.
>
> **Scryfall:** `https://svgs.scryfall.io/sets/${setCode}.svg`  
> **Gatherer:** `https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${setCode}&rarity=${rarity}&size=large`
>
> For Gatherer, `rarity` is just the starting letter of the rarity, such as `m`, `r`, `u`, or `c`.

> ### How do I find the other card faces of "Meld" cards?
>
> The most effective way to get the other cards for "Meld" cards is to access the `otherFaceIds` property of any of the "Meld" cards. This property will return two `uuid` values for the other associated cards.
>
> **Note:** Depending on your use case, this can be enough data to get the information you need, otherwise you can use those cards to access their `otherFaceIds` to get the card you need by comparing the data that you have already.

> ### What information is in AtomicCards or similar files?
>
> These files contains oracle-like information for every card using the [Card (Atomic)](/data-models/card-atomic/) data model. Any data that is persistent across the printings of a card will be included, such as `colorIdentity`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.
>
> For a full list of properties, see the [Card (Atomic)](/data-models/card-atomic/) data model documentation.
>
> **Note:** Depending on your use case you probably do not need this file, as it can be easily derived from [AllPrintings](/downloads/all-files/#allprintings) - handle with care.

> ### Why is a file/website out of date?
>
> You have probably received a cached version of the file or website. If you are using the website or have a file open in the browser, try hard&#8209;refreshing the path (`CTRL + F5` on Windows, `Shift + Command + R` on MacOS).
