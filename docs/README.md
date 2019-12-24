---
{
  "title": "",
  "meta": [
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---

# What Is MTGJSON?

## How It Works

MTGJSON is an open-source project that catalogs all Magic: The Gathering cards in a portable format. A dedicated group of fans maintains and supplies data for a variety of projects and sites in the community. Using an aggregation process we fetch data between multiple resources and approved partners, and combine all this data in to various JSON files that you can learn about and download from this website.

<em>The [version](/files/version.json) file, which describes the metadata of all available files contains 3 principle properties:</em>

  - `date` When all files were last completely built. (All data is updated)
  - `pricesDate` When card prices were updated on cards. (Prices data is updated)
  - `version` What version all files are on. (Updates with `pricesDate`)

<strong>Builds for JSON files run weekly at 4PM EST (typically on Sundays) while rebuilds for new prices are run daily around the same time.</strong>

In the [version](/files/version.json) file and `meta` in associated files, when the files are rebuilt to update card prices, the `pricesDate` value will update and that date will be appended to the current `version`, for example, `v4.6.0+20191129`. Rebuilds that update card prices are fully backwards compatible with its primary release.

## The Team

::: tip Zach - Lead Developer &amp; Maintainer
![avatar](/images/avatar-zach.jpg "Zach")
Zach is a 22-year old hippo fanatic who loves playing with big data and giving back to the community in unique ways. He has worked on MTGJSON since 2016, and has led the design and development of version 4. His work can also be seen heavily in the open-source Cockatrice game client.<br/><br/>
<em>All inquires about MTGJSON can be sent to <a href="mailto:zach@mtgjson.com">zach@mtgjson.com</a></em>
:::

::: tip Eric - Documentation Developer
![avatar](/images/avatar-eric.gif "Eric")
Eric is a conceptualizer that loves cervidae, nature, cheesy sci-fi movies and delving in to any code he can find. He has worked on the MTGJSON documentation since 2018 and is an avid supporter of open-source software and the MTG community.
:::

::: tip Mark - Cloud Developer
![avatar](/images/avatar-mark.jpg "Mark")
Mark is an old man obsessed with learning anything he can, a self-proclaimed Jack of All Trades, yet Master of None. He spends his time gaming, writing, farming, cuddling with his dogs, and providing comedic relief.
:::

::: tip Martin - Web Developer
![avatar](/images/avatar-martin.jpg "Martin")
Martin is an avid strategy gamer and Magic player since late 1994. When he’s not looking at Javascript or playing commander, he’s likely spending time on a host of smaller projects, including the custom card creator MTG.Design.
:::

## Contributing

Many others have devoted their time and effort in to this project. If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the main [MTGJSON repo](https://github.com/mtgjson/mtgjson) or the [MTGJSON website repo](https://github.com/mtgjson/mtgjson-website). If you would like to help in other ways please consider donating to the project via [Paypal](https://www.paypal.me/Zachhalpern) (one-time donation) or via [Patreon](https://www.patreon.com/MTGJSON) (reoccurring donations).

## Supporters

<Supporters/>
