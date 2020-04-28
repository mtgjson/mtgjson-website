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
<span>A.</span> In most cases, [AllPrintings.json](/api/v5/AllPrintings.json) is the correct file. It contains all data for every printing of each card.

### <span>Q.</span>  What information is in AtomicCards.json?
<span>A.</span> AtomicCards.json only contains oracle information for each card. Any data that is persistent across the printings of a card will be included, such as `convertedManaCost`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.

For a full list of properties, see the [Card (Atomic)](/data-models/card-atomic/) data model documentation.

### <span>Q.</span>  Where does the data come from?
<span>A.</span> Data is collected from a variety of sources, including Gatherer, Scryfall, TCGPlayer, and many more.

### <span>Q.</span>  How can I help? I found a bug, have a suggestion, etc. Where can I report it?
<span>A.</span> See [Contributing](/#contributing).

### <span>Q.</span>  How often is the data updated?
<span>A.</span> Full builds are run weekly on Mondays, but prices are updated daily. Also, spoilers for new sets will be rebuilt daily until the set is released.

### <span>Q.</span>  Why is the file I just downloaded out of date?
<span>A.</span> You have probably received a cached version of the file. Try hard refreshing the website (<code>CTRL&nbsp;+&nbsp;F5</code> on Windows, <code>Shift&nbsp;+&nbsp;Command&nbsp;+&nbsp;R</code> on Mac) and re-downloading to get the newest version.
