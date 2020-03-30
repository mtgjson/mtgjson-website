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

### Which file should I use for my project?
In most cases, [AllPrintings.json](/api/v5/AllPrintings.json) is the correct file. It contains all data for every printing of each card.

### What information is in AtomicCards.json?
AllCards.json only contains oracle information for each card. Any data that is persistent across the printings of a card will be included, such as `convertedManaCost`, but anything that pertains to a specific printing of a card will **NOT** be included, such as `artist`.

For a full list of properties, see the [Card (Atomic)](/data-models/card-atomic/) data model documentation.

### Where does the data come from?
Data is collected from a variety of sources, including Gatherer, Scryfall, TCGPlayer, and many more.

### How can I help? I found a bug, have a suggestion, etc. Where can I report it?
See [Contributing](/#contributing).

### How often is the data updated?
Full builds are run weekly on Mondays, but prices are updated daily. Also, spoilers for new sets will be rebuilt daily until the set is released.

### Why is the file I just downloaded out of date?
You have probably received a cached version of the file. Try hard refreshing the website (*CTRL+f5* on Windows, *Shift+Command+R* on Mac) and re-downloading to get the newest version.
