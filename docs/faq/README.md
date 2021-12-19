---
{
  'meta': [
    {
      'name': 'description',
      'content': 'MTGJSON frequently asked questions.'
    },
    {
      "property": "og:description",
      "content": "MTGJSON frequently asked questions."
    },
    {
      'name': 'keywords',
      'content': 'mtg, magic: the gathering, mtgjson, json, FAQ, frequently asked questions',
    },
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Frequently Asked Questions

Here is a list of frequently asked questions from our users since some data can be nuanced.

[[toc]]

> ### Which file should I use for my project?
> In most cases, [AllPrintings](/downloads/all-files/#allprintings) is the correct file. It contains all data for every printing of each card organized by set. Alternatively you can browse the per-set json files or download database images.
>
> **Note:** The json files are minified, and not really human-readable. Depending on your implementation, you can use a software like [JQ](https://stedolan.github.io/jq/) to parse and process them.

> ### Which file formats should I use for my project?
> We recommend downloading the compressed files and unpacking them on your local/remote drive. This is be faster than downloading just the pure JSON files.

> ### Where does the data come from?
> Data is collected from a variety of sources, including Gatherer, Scryfall, TCGplayer, and many more. If you want to know more, or you would like to help, jump on our [Discord](https://mtgjson.com/discord)!

> ### How much does MTGJSON cost?
> MTGJSON is free and open source under the MIT License. If you find it useful, please consider helping us to keep the lights on and develop new features for you with a donation to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).

> ### How can I help, report a bug, etc?
> You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you are a data provider and would like to integrate your data with us, please join our [Discord](https://mtgjson.com/discord).

> ### How often is the data updated?
> Full builds are available weekly at **Tuesday, 12:01AM ET**, but prices are available daily at **12:01AM ET**. Also, when a new set is being previewed, that set will be rebuilt daily until the set is released.

> ### Can I verify the downloaded files?
> Yes. Every file has a SHA-256 file available at the same API location with an appended `.sha256` format.
>
> - **Example:** `https://mtgjson.com/api/v5/AllPrintings.json.sha256`

> ### How do I access a card's imagery?
> While we do not offer card images directly through MTGJSON, we recommend getting card images through [Scryfall](https://scryfall.com/) or [Gatherer](https://gatherer.wizards.com/) API's using the MTGJSON a property from the [Identifiers](/data-models/identifiers/) data model within the various Card data models.
>
> - **Scryfall:** `https://api.scryfall.com/cards/${scryfallId}?format=image`
> - **Gatherer:** `https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=${multiverseId}`
>
> - **Note:**
> [Gatherer](https://gatherer.wizards.com/) may not have all images. If a `multiverseId` is missing, the imagery will not exist there.
> For [Scryfall](https://scryfall.com/), to access another face of a card, such as for transform or meld cards, add `&face=front` or `&face=back` to the url to get the respective image.

> ### How can I access a card's set imagery?
> The `keyruneCode` property from the [Set](/data-models/set/) data model provides information you need for implementing set code imagery but is mostly limited to projects that can use CSS, however, there is ways to use them in desktop applications. See the [Keyrune official documentation](https://keyrune.andrewgioia.com/) for more information.
>
> Additionally, you can use [Gatherer](https://gatherer.wizards.com/) for a limited amount of set printings using the following Gatherer API.  
>
> **Example**: `https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${setCode}&rarity=${rarity}&size=large`  
>
> In this case, `rarity` is just the starting letter of the rarity, such as `m`, `r`, `u`, or `c`.

> ### How do I find the other card faces of "Meld" cards?
> The most effective way to get the other cards for "Meld" cards is to access the `otherFaceIds` property of any of the "Meld" cards. This property will return two `uuid` values for the other associated cards.
>
> **Note:** Depending on your use case, this can be enough data to get the information you need, otherwise you can use those cards to access their `otherFaceIds` to get the card you need by comparing the data that you have already.

> ### What information is in AtomicCards?
> [AtomicCards](/downloads/all-files/#atomiccards) only contains oracle information for each card. Any data that is persistent across the printings of a card will be included, such as `colorIdentity`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.
>
> For a full list of properties, see the [Card (Atomic)](/data-models/card-atomic/) data model documentation.
>
> **Note:** Depending on your use case you probably do not need this file, as it can be easily derived from [AllPrintings](/downloads/all-files/#allprintings) - handle with care.

> ### Why is a file/website out of date?
> You have probably received a cached version of the file or website. Try hard&#8209;refreshing the url (`CTRL + F5` on Windows, `Shift + Command + R` on Mac) to get the newest version.
