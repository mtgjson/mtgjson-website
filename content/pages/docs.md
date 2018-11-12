Title: Documentation
Date: 2018-10-13 00:00
Modified: 2018-10-17 00:00
Category: MTGJSON
Tags: mtgjson, mtgjson4
Slug: docs
Authors: MTGJSON Developers
Summary: Short version for index and feeds
Page-order: 4

# Documentation

## 4.1 <small>(2018-11-11)</small>

<h3>Card</h3>
Property | Value | Example | Description
-----|-----|-----|-----
artist | string | `"Svetlin Velinov"` | Name of artist.
borderColor | string | `"black"` | Color of the border. Can be `black`, `borderless`, `gold`, `silver`, or `white`.
colorIdentity | array(string) | `["B","R","U"]` | List of all colors in card’s mana cost, rules text and any color indicator.
colorIndicator | array(string) | `[]` | List of all colors in card’s color indicator. Usually found only on cards without mana costs and other special cards.
colors | array(string) | `["B","R","U"]` | List of all colors in card’s mana cost and any color indicator. Some cards are special (such as Devoid cards or other cards with certain rules text).
convertedManaCost | float | `4.0` | The converted mana cost of the card.
flavorText | string | `"\"Whatever hatred destroys, a single act of trust can revive.\""` | Italicized text found below the rules text that has no game function.
foreignData | array(object) |  | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flavorText | string | `"Schwester von Nicol Bolas. Überlebende des Krieges der Drachenältesten. Die bösartigste ihrer Art."` | Flavor text in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;language | string | `"German"` | Foreign language of card. Can be `English`, `Spanish`, `French`, `German`, `Italian`, `Portuguese`, `Japanese`, `Korean`, `Russian`, `Simplified Chinese`, or `Traditional Chinese`. Promo cards can be `Hebrew`, `Latin`, `Ancient Greek`, `Arabic`, `Sanskrit`, or `Phyrexian`.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;multiverseId | integer | `447637` | Multiverse ID of the card.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | `"Palladia-Mors, die Verwüsterin"` | Name of the card in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text | string | `"Fliegend, Wachsamkeit, verursacht Trampelschaden\nPalladia-Mors, die Verwüsterin, hat Fluchsicherheit, falls sie noch keinen Schaden zugefügt hat."` | Rules text of the card in foreign language.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | string | `"Legendäre Kreatur — Ältester, Drache"` | Type in foreign language.
frameVersion | string | `"2015"` | Style of the card frame. Can be `1993`, `1997`, `2003`, `2015`, or `future`.
hasFoil | bool | `true` | Can the card be found in foil? Can be `true` or `false`. (If false, it is usually omitted.)
hasNonFoil | bool | `true` | Can the card be found in non-foil? Can be `true` or `false`. (If false, it is usually omitted.)
isFoilOnly | bool | `false` | Can the card only be found in foil? `true` or `false`. (If false, it is usually omitted.)
isOnlineOnly | bool | `false` | Is the card only available online? Can be `true` or `false`. (If false, it is usually omitted.)
isOversized | bool | `false` | Is the card oversized? Can be `true` or `false`. (If false, it is usually omitted.)
isReserved | bool | `false` | Is the card on the Reserved List? Can be `true` or `false`. (If false, isReserved is usually omitted.)
layout | string | `"transform"` | Type of card. Can be `normal`, `split`, `flip`, `transform`, `meld`, `leveler`, `saga`, `planar`, `scheme`, `vanguard`, `token`, `double_faced_token`, `emblem`, `augment`, or `host`. (If normal, it is usually omitted.)
legalities | object | `"{"1v1": "Legal", "brawl": "Legal", "commander": "Legal", "duel": "Legal", "frontier": "Legal", "legacy": "Legal", "modern": "Legal", "standard": "Legal", "vintage": “Legal"}"` | Keys are Magic play formats. Can be `1v1`, `brawl`, `commander`, `duel`, `frontier`, `legacy`, `modern`, `standard`, or `vintage`. Values can be `Legal`, `Restricted`, `Banned`, or `Future`. (“Future” is used for a revision of the format in which the card will be legal soon. If the format is not listed, it is assumed the card is not legal in that format.)
loyalty | string | `"7"` | Planeswalker loyalty value.
manaCost | string | `"{1}{U}{B}{R}"` | Mana cost of the card.
multiverseId | integer | `447354` | An integer most cards have which Wizards uses as a card identifier.
name | string | `"Nicol Bolas, the Ravager"` | Name of the card.
names | array(string) | `["Nicol Bolas, the Ravager","Nicol Bolas, the Arisen"]` | Names of each face on the card.
number | string | `"218"` | Number of the card.
originalText | string | `"Flying\r\nWhen Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.\r\n{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery."` | Text on the card as originally printed.
originalType | string | `"Legendary Creature — Elder Dragon"` | Type as originally printed. Includes any supertypes and subtypes.
printings | array(string) | `["M19","PM19"]` | List of sets the card was printed in, in uppercase.
power | string | `"4"` | Power of the creature.
rarity | string | `"mythic"` | Rarity. Can be `common`, `uncommon`, `rare`, or `mythic`
rulings | array(object) |  | 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date | string | `"2018-07-13"` | Date (OBDC standard) of ruling for the card.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text | string | `"When Nicol Bolas’s enters-the-battlefield triggered ability resolves, first the next opponent in turn order (or, if it’s an opponent’s turn, that opponent) chooses a card in their hand without revealing it, then each other opponent in turn order does the same. Then all the chosen cards are discarded at the same time."` | Text of ruling for the card.
subtypes | array(string) | `["Elder","Dragon"]` | List of card subtypes found after em-dash.
supertypes | array(string) | `["Legendary"]` | List of card supertypes found before em-dash.
text | string | `"Flying\nWhen Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.\n{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery."` | Rules text of the card.
toughness | string | `"4"` | Toughness of the card.
type | string | `"Legendary Creature — Elder Dragon"` | Type of the card. Includes any supertypes and subtypes.
types | array(string) | `["Creature"]` | List of types of the card.
uuid | string | `"7b215968-93a6-4278-ac61-4e3e8c3c3943"` | A universal unique id generated for the card.
watermark | string | `""` | Name of the watermark on the card. Can be one of many different values, including a guild name, clan name, or `wotc` for the shooting star. (If there isn’t one, it can be an empty string, but it is usually omitted.)
&nbsp; | &nbsp; | &nbsp; | &nbsp;
<h3>Token</h3> | &nbsp; | &nbsp; | &nbsp;
**Property** | **Value** | **Example** | **Description**
artist | string | `"Jack Wang"` | Name of artist.
borderColor | string | `"black"` | Color of the border. Can be `black`, `borderless`, `gold`, `silver`, or `white`.
colorIdentity | array(string) | `["G","W"]` | List of all colors in card’s mana 
colorIndicator | array(string) | `[]` | List of all colors in card’s color indicator. Usually found only on cards without mana costs and other special cards.
colors | array(string) | `["G","W"]` | List of all colors in card’s mana cost and any color indicator.
loyalty | string | `"7"` | Planeswalker loyalty value.
name | string | `"Elf Knight"` | Name of the token.
number | string | `"2"` | Number of the token card.
power | string | `"2"` | Power of the creature.
reverseRelated | array(string) | `["Assemble","Conclave Cavalier","Conclave Guildmage","Ledev Champion","Sprouting Renewal"]` | List of cards in the same set which reference the token.
side | string | `a` | Identifier of the side. Used on cards with multiple faces, such as flip, split, transform cards. Can be `a` or `b`.
text | string | `"Vigilance"` | Rules text of the token.
toughness | string | `"4"` | Toughness of the creature.
type | string | `"Token Creature — Elf Knight"` | Type of the token. Includes any supertypes and subtypes. Will have either Token or Emblem listed as if a card type.
uuid | string | `"f43a5ec2-8898-4645-84d7-b7218682be9b"` | A universal unique id generated for the token card.
watermark | string | `"selesnya"` | Name of the watermark on the card. Can be one of many different values, including a guild name, clan name, or `wotc` for the shooting star. (If there isn’t one, it can be an empty string, but it is usually omitted.)
<h3>Set</h3> | &nbsp; | &nbsp; | &nbsp;
**Property** | **Value** | **Example** | **Description**
baseSetSize | integer | `280` | Number of cards in the set. Note that Wizards sometimes prints extra cards beyond the set size into promos or supplemental products.
block | string | `"Core Set 2019"` | Block the set was in.
boosterV3 | array(string) | `"boosterV3": [ [ "rare", "mythic rare" ], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing" ]` | Contents of a typical booster.
cards | array(object) |  | List of cards. (See Card table.)
code | string | `"m19"` | Set code for the set.
isOnlineOnly | bool | `false` | Is the set only available online? Can be `true` or `false`. (If false, it is usually omitted.)
meta | object | `{"date": "2018-10-13","version": "4.0.0"}` | Keys are date and version. Date (OBDC standard) is date of build. Version is version of MTGJSON release.
mtgoCode | string | `"m19"` | Set code for the set as it appears on Magic: The Gathering Online.
name | string | `"Core Set 2019"` | Name of the set.
releaseDate | string | `"2018-07-13"` | Date of release for the set.
tokens | array(object) |  | List of tokens for the set. (See Token table.)
totalSetSize | integer | `314` | Total number of cards in the set, including promos and related supplemental products.
type | string | `"core"` | Type of set. Can be `core`, `expansion`, `masters`, `masterpiece`, `from_the_vault`, `spellbook`, `premium_deck`, `duel_deck`, `draft_innovation`, `commander`, `planechase`, `archenemy`, `vanguard`, `funny`, `starter`, `box`, `promo`, `token` or `memorabilia`.
