---
{
  'meta': [
    {
      'name': 'description',
      'content': 'MTGJSON frequently asked questions.'
    },
    {
      'name': 'keywords',
      'content': 'mtg, magic: the gathering, mtgjson, json, faq, frequently asked questions',
    },
  ],
  "feed": {
    "enable": "true"
  }
}
---

# Frequently Asked Questions

### <span>Q.</span> Which file should I use for my project?
<span>A.</span> In most cases, [AllPrintings.json](/api/v5/AllPrintings.json) is the correct file. It contains all data for every printing of each card. Alternatively you can browse the per-set json files or download database images.

Note that the json files are minified, and not really human-readable: use a software like JQ to parse and process them.

### <span>Q.</span> Where does the data come from?
<span>A.</span> Data is collected from a variety of sources, including Gatherer, Scryfall, TCGPlayer, and many more. If you want to know more, or you would like to help, jump on our [Discord](https://mtgjson.com/discord)!

### <span>Q.</span> How much does MTGJSON cost?
<span>A.</span> MTGJSON is free and open source under the MIT License. If you find it useful, please consider helping us to keep the lights on and develop new features for you with a donation to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).

### <span>Q.</span> How can I help? I found a bug, have a suggestion, etc. Where can I report it?
<span>A.</span> You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you are a data provider and would like to integrate your data with us, please join our [Discord](https://mtgjson.com/discord).

### <span>Q.</span> How often is the data updated?
<span>A.</span> Full builds are available weekly at Tuesday, 12:01AM ET, but prices are available daily at 12:01AM ET. Also, when a new set is being previewed, that set will be rebuilt daily until the set is released.

### <span>Q.</span> Can I verify the downloaded files?
<span>A.</span> Yes. Every file has a SHA-256 file available at the same API location with an appended `.sha256` format.

For example: `https://mtgjson.com/api/v5/AllPrintings.json.sha256`.

### <span>Q.</span> Why is the file I just downloaded out of date?
<span>A.</span> You have probably received a cached version of the file. Try hard refreshing the website (<code>CTRL&nbsp;+&nbsp;F5</code> on Windows, <code>Shift&nbsp;+&nbsp;Command&nbsp;+&nbsp;R</code> on Mac) and re-downloading to get the newest version.

### <span>Q.</span>  What information is in AtomicCards.json?
<span>A.</span> [AtomicCards.json](/api/v5/AtomicCards.json) only contains oracle information for each card. Any data that is persistent across the printings of a card will be included, such as `convertedManaCost`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.

For a full list of properties, see the [Card (Atomic)](/data-models/card-atomic/) data model documentation. Note that depending on your use case you probably do not need this file, as it can be easily derived from `AllPrintings.json` - handle with care.
