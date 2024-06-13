---
title: Frequently Asked Questions
head:
  - - meta
    - property: og:title
      content: Frequently Asked Questions
  - - meta
    - name: description
      content: Common questions about MTGJSON data and services.
  - - meta
    - property: og:description
      content: Common questions about MTGJSON data and services.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, frequently asked questions, faq, common questions
---

# Frequently Asked Questions

Here are some common questions about MTGJSON data and services.

> ### Which file should I use for my project?
>
> In most cases, [AllPrintings](/downloads/all-files/#allprintings) is the correct file. It contains all data for every printing of each card organized by set, however, this file is quite large. Alternatively, you can browse the [All Sets](/downloads/all-sets/) and [All Decks](/downloads/all-decks/) files individually.
>
> **Note:** The JSON files are minified, and not human-readable. Depending on your implementation, you can use a software like [JQ](https://stedolan.github.io/jq/) to parse and process them.

> ### Which file formats should I use for my project?
>
> We recommend downloading the compressed files and unpacking them locally or remotely. This would be faster than downloading the JSON files. If you are wanting to work with database files, we also export SQL and SQLite databases.

> ### What information is in AtomicCards or similar files?
>
> These files contains oracle-like information for every card using the [Card (Atomic)](/data-models/card/card-atomic/) Data Model. Any data that is persistent across the printings of a card will be included, such as `colorIdentity`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.
>
> For a full list of properties, see the [Card (Atomic)](/data-models/card/card-atomic/) Data Model documentation.
>
> **Note:** Depending on your use case you probably do not need this file, as it can be easily derived from [AllPrintings](/downloads/all-files/#allprintings) - handle with care.

> ### Where does the data come from?
>
> Data is collected from a variety of sources, including Magic: The Gathering's own [Gatherer](https://gatherer.wizards.com/Pages/Default.aspx), API's like [Scryfall](https://scryfall.com/docs/api) and [TCGplayer](https://docs.tcgplayer.com/docs), and many more. For more information, or if you would like to help, please join our [Discord](https://mtgjson.com/discord).

> ### How often is the data updated?
>
> Builds kick off at **1:00AM EST** and go live at **9:00AM EST**.
>
> **Note:** These time may be adjusted to compensate upstream issues and may not be accurately reflected here.

> ### How much does MTGJSON cost?
>
> MTGJSON is free and open source under the MIT License. If you find this project useful, please consider helping us to keep the lights on and develop new features for you with a one-time donation using <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal</a> or recurring donations using <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon</a>.

> ### How can I help, report a bug, etc?
>
> You can contribute to the project through the [MTGJSON Repository](https://github.com/mtgjson/mtgjson) or the [Documentation Repository](https://github.com/mtgjson/mtgjson-website). If you are a data provider and would like to integrate your data with us, please join our [Discord](https://mtgjson.com/discord).

> ### How can I verify the downloaded files?
>
> Yes. Every file has a SHA-256 file available at the same location appended with `.sha256`.
>
> - **Example:** `https://mtgjson.com/api/v5/AllPrintings.json.sha256`

> ### How do I access a card's imagery?
>
> While we do not offer card images directly through MTGJSON, we recommend getting card images through [Scryfall](https://scryfall.com/) using the `scryfallId` or [Gatherer](https://gatherer.wizards.com/) using the `multiverseId` property from the [Identifiers](/data-models/identifiers/) Data Model.
>
> #### Scryfall Imagery
>
> Here is an example of a complete Scryfall image path for the front and back of a dual-faced card:
>
> - **Front:** `https://cards.scryfall.io/large/front/6/7/67f4c93b-080c-4196-b095-6a120a221988.jpg`
> - **Back:** `https://cards.scryfall.io/large/back/6/7/67f4c93b-080c-4196-b095-6a120a221988.jpg`
>
> **Note:** Notice that previous to the actual image file name is two other paths - these match with the first and second characters of the `scryfallId`. Here is an example of how you might construct the Scryfall image path:
>
> ```TypeScript
> // Assuming you have the scryfallId property available in your code...
> const fileFace: string = 'front';
> const fileType: string = 'large';
> const fileFormat: string = 'jpg';
> const fileName: string = scryfallId;
> const dir1: string = fileName.charAt(0);
> const dir2: string = fileName.charAt(1);
> const image: string = `https://cards.scryfall.io/${fileType}/${fileFace}/${dir1}/${dir2}/${fileName}.${fileFormat}`;
> ```
>
> See the official documentaion [here](https://scryfall.com/docs/api/images) for more information about different image variants, formats and pathing rules.
>
> #### Gatherer Imagery
>
> Here is an example how you would construct the Gatherer image path:
>
> ```TypeScript
> // Assuming you have the multiverseId property available in your code...
> const image: string = `https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=${multiverseId}`;
> ```
>
> **Note:** If a `multiverseId` is missing from the [Identifiers](/data-models/identifiers/) Data Model, the imagery will not exist on Gatherer.

> ### How can I access a card's set imagery?
>
> #### Using the `keyruneCode` property
>
> You can use **Keyrune** and the [keyruneCode](/data-models/set/#keyrunecode) from the [Set](/data-models/set/) Data Model to implement set code imagery, but is mostly limited to projects that can use CSS. There is ways to use them in desktop applications - See the [Keyrune documentation](https://keyrune.andrewgioia.com/) for more information.
>
> #### Using the `setCode` property
>
> You can use the `setCode` property from [Card (Deck)](/data-models/card/card-deck/#setcode), [Card (Set)](/data-models/card/card-set/#setcode), and [Card (Token)](/data-models/card/card-token/#setcode) for both **Scryfall** and **Gatherer**. Gatherer also lets you pass a rarity parameter to return a set symbol with a color applied - you can use the `rarity` property from [Card (Deck)](/data-models/card/card-deck/#rarity) and [Card (Set)](/data-models/card/card-set/#rarity) for this value and extrapolate what Gatherer needs in its parameter. Here is an example of how you might construct the different image paths:
>
> ```TypeScript
> // Assuming you have the setCode property available in your code...
> // Scryfall
> const scrylfallSetImage: string = `https://svgs.scryfall.io/sets/${setCode}.svg`;
>
> // Gatherer
> // Assuming you also have a rarity property available in your code....
> const cardRarity: string = rarity.charAt(0);
> // Gatherer only uses the first letter of a rarity as the parameter value
> // "mythic" => "m", applies a red-ish color
> // "rare" => "r", applies a gold-ish color
> // "uncommon" => "u", applies a silver-ish color
> // "common" => "c", applies a black color
> // "special" => "s", applies a purple color. This is only available on some set codes, such as "TSP"
> // "bonus" is a unique rarity that Gatherer does not parse
> const gathererSetImage: string = `https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${setCode}&rarity=${cardRarity}&size=large`;
> ```
>
> **Note:** Gatherer may not have all rarity variants of set codes available. Use at your own discretion.

> ### How do I find the other card faces of "Meld" cards?
>
> The most effective way to get the other cards for "Meld" cards is to access the `otherFaceIds` property of any of the "Meld" cards. This property will return two `uuid` values for the other associated cards.
>
> **Note:** Depending on your use case, this can be enough data to get the information you need, otherwise you can use those cards to access their `otherFaceIds` to get the card you need by comparing the data that you have already.

> ### How can I use TypeScript for MTGJSON data?
>
> While there is currently no official Types exported from MTGJSON, each Data Model documentation page does outline its associated TypeScript notation which is as updated as the documentation is updated. As well, once you know the TypeScript Typed name of a Data Model you can use that to access that TypeScript Type file to download. Here are some examples:
>
> - Card (Atomic) Data Model, Typed as **CardAtomic**: [https://mtgjson.com/types/CardAtomic.ts](/types/CardAtomic.ts)
> - Card (Set) Data Model, Typed as **CardSet**: [https://mtgjson.com/types/CardSet.ts](/types/CardSet.ts)
> - Set Data Model, Typed as **Set**: [https://mtgjson.com/types/Set.ts](/types/Set.ts)
> - Deck Data Model, Typed as **Deck**: [https://mtgjson.com/types/Deck.ts](/types/Deck.ts)
>
> However, more useful would likely be **all** the Types in one file location:
>
> - All Types: [https://mtgjson.com/types/AllMTGJSONTypes.ts](/types/AllMTGJSONTypes.ts)
>
> Additionally, when using MTGGraphQL, our GraphQL API layer, we offer a [NPM TypeScript Package](https://www.npmjs.com/package/mtggraphql/) that exports Types that the GraphQL service uses.

> ### Why is a file/website out of date?
>
> You have probably received a cached version of the file or website. If are using a browser, try hard&#8209;refreshing the page (`CTRL + F5` on Windows, `Shift + Command + R` on MacOS).
