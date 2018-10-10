Title: Documentation
Date: 2018-10-01 00:00
Modified: 2018-10-01 00:00
Category: MTGJSON
Tags: mtgjson, mtgjson4
Slug: docs
Authors: MTGJSON Developers
Summary: Short version for index and feeds

<h1>Documentation</h1>

<h3>Card</h3>
Property | Value | Example | Description
-----|-----|-----|-----
artist | string | `"Svetlin Velinov"` | Name of artist.
bordercolor | string | `"black"` | Color of the border. Can be black, borderless, gold, silver, or white.
colorIdentity | array(string) | `["B","R","U"]` | List of all colors in card’s mana cost, rules text and any color indicator.
colors | array(string) | `["B","R","U"]` | List of all colors in card’s mana cost and any color indicator.
convertedManaCost | float | `4.0` | The converted mana cost of the card.
flavorText | string | `"\"Whatever hatred destroys, a single act of trust can revive.\""` | Italicized text found below the rules text that has no game function.
foreignData | array(object) |  | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flavorText | string | `"Schwester von Nicol Bolas. Überlebende des Krieges der Drachenältesten. Die bösartigste ihrer Art."` | Flavor text in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;language | string | `"German"` | Foreign language of card. Can be English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, Russian, Simplified Chinese, and Traditional Chinese. Promo cards have included Hebrew, Latin, Ancient Greek, Arabic, Sanskrit, and Phyrexian.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;multiverseId | integer | `447637` | Multiverse ID of the card.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | `"Palladia-Mors, die Verwüsterin"` | Name of the card in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text | string | `"Fliegend, Wachsamkeit, verursacht Trampelschaden\nPalladia-Mors, die Verwüsterin, hat Fluchsicherheit, falls sie noch keinen Schaden zugefügt hat."` | Rules text of the card in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | string | `"Legendäre Kreatur — Ältester, Drache"` | Type in foreign language.
frameVersion | string | `"2015"` | Style of the card frame. Can be 1993, 1997, 2003, 2015, or future.
hasFoil | bool | `true` | Can the card be found in foil? Can be true or false.
hasNonFoil | bool | `true` | Can the card be found in non-foil? Can be true or false.
layout | string | `"transform"` | Type of card. Can be normal, split, flip, transform, meld, leveler, saga, planar, scheme, vanguard, token, double_faced_token, emblem, augment, host.
legalities | object | `"{"1v1": "Legal", "brawl": "Legal", "commander": "Legal", "duel": "Legal", "frontier": "Legal", "future": "Legal", "legacy": "Legal", "modern": "Legal", "standard": "Legal", "vintage": “Legal"}"` | Keys are Magic play formats. Can be 1v1, brawl, commander, duel, frontier, future, legacy, modern, standard, and vintage. (Future is used for a revision of the format in which the card will be legal soon.) Values can be Legal, Restricted and Banned. (If the format is not listed, it is assumed the card is not legal in that format.)
loyalty | string | `"7"` | Planeswalker loyalty value.
manaCost | string | `"{1}{U}{B}{R}"` | Mana cost of the card.
multiverseId | integer | `447354` | An integer most cards have which Wizards uses as a card identifier.
name | string | `"Nicol Bolas, the Ravager"` | Name of the card.
names | array(string) | `["Nicol Bolas, the Ravager","Nicol Bolas, the Arisen"]` | Names of each face on the card.
number | string | `"218"` | Number of the card.
originalText | string | `"Flying\r\nWhen Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.\r\n{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery."` | Text on the card as originally printed.
originalType | string | `"Legendary Creature — Elder Dragon"` | Type as originally printed. Includes any supertypes and subtypes.
printings | array(string) | `["M19","PM19"]` | List of sets the card was printed in.
power | string | `"4"` | Power of the creature.
rarity | string | `"mythic"` | Rarity. Can be common, uncommon, rare, mythic
rulings | array(object) |  | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date | string | `"2018-07-13"` | Date (OBDC standard) of ruling for the card.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text | string | `"When Nicol Bolas’s enters-the-battlefield triggered ability resolves, first the next opponent in turn order (or, if it’s an opponent’s turn, that opponent) chooses a card in their hand without revealing it, then each other opponent in turn order does the same. Then all the chosen cards are discarded at the same time."` | Text of ruling for the card.
subtypes | array(string) | `["Elder","Dragon"]` | List of card subtypes found after em-dash.
supertypes | array(string) | `["Legendary"]` | List of card subtypes found before em-dash.
text | string | `"Flying\nWhen Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.\n{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery.",` | Rules text of the card.
toughness | string | `"4"` | Toughness of the card.
type | string | `"Legendary Creature — Elder Dragon"` | Type of the card. Includes any supertypes and subtypes.
types | array(string) | `["Creature"]` | List of types of the card.
uuid | string | `"7b215968-93a6-4278-ac61-4e3e8c3c3943"` | A universal unique id generated for the card.
&nbsp; | &nbsp; | &nbsp; | &nbsp;
<h3>Token</h3> | &nbsp; | &nbsp; | &nbsp;
**Property** | **Value** | **Example** | **Description**
artist | string | `"Jack Wang"` | Name of artist.
bordercolor | string | `"black"` | Color of the border. Can be black, borderless, gold, silver, or white.
colorIdentity | array(string) | `["G","W"]` | List of all colors in card’s mana cost, rules text and any color indicator.
colors | array(string) | `["G","W"]` | List of all colors in card’s mana cost and any color indicator.
loyalty | string | `"7"` | Planeswalker loyalty value.
name | string | `"Elf Knight"` | Name of the token.
number | string | `"2"` | Number of the token card.
power | string | `"2"` | Power of the creature.
reverseRelated | array(string) | `["Assemble","Conclave Cavalier","Conclave Guildmage","Ledev Champion","Sprouting Renewal"]` | List of cards in the same set which reference the token.
text | string | `"Vigilance"` | Rules text of the token.
toughness | string | `"4"` | Toughness of the creature.
type | string | `"Token Creature — Elf Knight"` | Type of the token. Includes any supertypes and subtypes. Will have either Token or Emblem listed as if a card type.
uuid | string | `"f43a5ec2-8898-4645-84d7-b7218682be9b"` | A universal unique id generated for the token card.
watermark | string | `"selesnya"` | Name of the watermark on the card.
&nbsp; | &nbsp; | &nbsp; | &nbsp;
<h3>Set</h3> | &nbsp; | &nbsp; | &nbsp;
**Property** | **Value** | **Example** | **Description**
cards | array(object) |  | List of cards. (See Card table.)
code | string | `"m19"` | Set code for the set.
meta | object | `{"date": “2018-09-28","version": "4.0.0"}` | Keys are date and version. Date (OBDC standard) is date of build. Version is version of MTGJSON release.
mtgoCode | string | `"m19"` | Set code for the set as it appears on Magic: The Gathering Online.
releaseDate | string | `"2018-07-13"` | Date of release for the set.
type | string | `"core"` | Type of set. Can be core, expansion, masters, masterpiece, from_the_vault, spellbook, premium_deck, duel_deck, draft_innovation, commander, planechase, archenemy, vanguard, funny, starter, box, promo, token or memorabilia.
tokens | array(object) |  | List of tokens for the set. (See Token table.)
