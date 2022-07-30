
export type CardAtomic = {
  
  // asciiName
  asciiName?: string;
        
  // colorIdentity
  colorIdentity?: string[];
        
  // colorIndicator
  colorIndicator: string[];
        
  // colors
  colors?: string[];
        
  // convertedManaCost
  convertedManaCost?: number;
        
  // edhrecRank
  edhrecRank?: number;
        
  // faceConvertedManaCost
  faceConvertedManaCost?: number;
        
  // faceManaValue
  faceManaValue?: number;
        
  // faceName
  faceName?: string;
        
  // foreignData
  foreignData?: ForeignData;
        
  // hand
  hand?: string;
        
  // hasAlternativeDeckLimit
  hasAlternativeDeckLimit?: boolean;
        
  // identifiers
  identifiers?: Identifiers;
        
  // isFunny
  isFunny?: boolean;
        
  // isReserved
  isReserved?: boolean;
        
  // keywords
  keywords?: string[];
        
  // layout
  layout: string;
        
  // leadershipSkills
  leadershipSkills?: LeadershipSkills;
        
  // legalities
  legalities?: Legalities;
        
  // life
  life?: string;
        
  // loyalty
  loyalty?: string;
        
  // manaCost
  manaCost?: string;
        
  // manaValue
  manaValue: number;
        
  // name
  name: string;
        
  // power
  power: string;
        
  // printings
  printings: string[];
        
  // purchaseUrls
  purchaseUrls: PurchaseUrls;
        
  // rulings
  rulings: Rulings[];
        
  // side
  side: string;
        
  // subtypes
  subtypes: string[];
        
  // supertypes
  supertypes: string[];
        
  // text
  text: string;
        
  // toughness
  toughness: string;
        
  // type
  type: string;
        
  // types
  types: string[];
        
}
  
export type CardDeck = {
  
  // artist
  artist?: string;
        
  // asciiName
  asciiName?: string;
        
  // availability
  availability?: string[];
        
  // boosterTypes
  boosterTypes?: string[];
        
  // borderColor
  borderColor?: string;
        
  // cardParts
  cardParts: string[];
        
  // colorIdentity
  colorIdentity?: string[];
        
  // colorIndicator
  colorIndicator?: string[];
        
  // colors
  colors?: string[];
        
  // convertedManaCost
  convertedManaCost?: number;
        
  // count
  count?: number;
        
  // duelDeck
  duelDeck?: string;
        
  // edhrecRank
  edhrecRank: number;
        
  // faceConvertedManaCost
  faceConvertedManaCost?: number;
        
  // faceFlavorName
  faceFlavorName?: string;
        
  // faceManaValue
  faceManaValue?: number;
        
  // faceName
  faceName?: string;
        
  // finishes
  finishes?: string[];
        
  // flavorName
  flavorName?: string;
        
  // flavorText
  flavorText: string;
        
  // foreignData
  foreignData: ForeignData;
        
  // frameEffects
  frameEffects?: string[];
        
  // frameVersion
  frameVersion?: string;
        
  // hand
  hand?: string;
        
  // hasAlternativeDeckLimit
  hasAlternativeDeckLimit?: boolean;
        
  // hasContentWarning
  hasContentWarning?: boolean;
        
  // hasFoil
  hasFoil?: boolean;
        
  // hasNonFoil
  hasNonFoil?: boolean;
        
  // identifiers
  identifiers?: Identifiers;
        
  // isAlternative
  isAlternative?: boolean;
        
  // isFoil
  isFoil?: boolean;
        
  // isFullArt
  isFullArt?: boolean;
        
  // isFunny
  isFunny?: boolean;
        
  // isOnlineOnly
  isOnlineOnly?: boolean;
        
  // isOversized
  isOversized?: boolean;
        
  // isPromo
  isPromo: boolean;
        
  // isRebalanced
  isRebalanced?: boolean;
        
  // isReprint
  isReprint?: boolean;
        
  // isReserved
  isReserved?: boolean;
        
  // isStarter
  isStarter?: boolean;
        
  // isStorySpotlight
  isStorySpotlight: boolean;
        
  // isTextless
  isTextless?: boolean;
        
  // isTimeshifted
  isTimeshifted?: boolean;
        
  // keywords
  keywords?: string[];
        
  // language
  language?: string;
        
  // layout
  layout?: string;
        
  // leadershipSkills
  leadershipSkills?: LeadershipSkills;
        
  // legalities
  legalities?: Legalities;
        
  // life
  life?: string;
        
  // loyalty
  loyalty?: string;
        
  // manaCost
  manaCost?: string;
        
  // manaValue
  manaValue?: number;
        
  // name
  name?: string;
        
  // number
  number?: string;
        
  // originalPrintings
  originalPrintings?: string[];
        
  // originalReleaseDate
  originalReleaseDate?: string;
        
  // originalText
  originalText: string;
        
  // originalType
  originalType: string;
        
  // otherFaceIds
  otherFaceIds: string[];
        
  // power
  power: string;
        
  // printings
  printings: string[];
        
  // promoTypes
  promoTypes: string[];
        
  // purchaseUrls
  purchaseUrls: PurchaseUrls;
        
  // rarity
  rarity: string;
        
  // rebalancedPrintings
  rebalancedPrintings: string[];
        
  // rulings
  rulings: Rulings[];
        
  // securityStamp
  securityStamp: string;
        
  // setCode
  setCode: string;
        
  // side
  side: string;
        
  // signature
  signature: string;
        
  // subtypes
  subtypes: string[];
        
  // supertypes
  supertypes: string[];
        
  // text
  text: string;
        
  // toughness
  toughness: string;
        
  // type
  type: string;
        
  // types
  types: string[];
        
  // uuid
  uuid: string;
        
  // variations
  variations: string[];
        
  // watermark
  watermark: string;
        
}
  
export type CardSet = {
  
  // artist
  artist?: string;
        
  // asciiName
  asciiName?: string;
        
  // availability
  availability?: string[];
        
  // boosterTypes
  boosterTypes?: string[];
        
  // borderColor
  borderColor?: string;
        
  // cardParts
  cardParts: string[];
        
  // colorIdentity
  colorIdentity?: string[];
        
  // colorIndicator
  colorIndicator?: string[];
        
  // colors
  colors?: string[];
        
  // convertedManaCost
  convertedManaCost?: number;
        
  // edhrecRank
  edhrecRank?: number;
        
  // faceConvertedManaCost
  faceConvertedManaCost: number;
        
  // faceFlavorName
  faceFlavorName?: string;
        
  // faceManaValue
  faceManaValue?: number;
        
  // faceName
  faceName?: string;
        
  // finishes
  finishes?: string[];
        
  // flavorName
  flavorName?: string;
        
  // flavorText
  flavorText?: string;
        
  // foreignData
  foreignData: ForeignData;
        
  // frameEffects
  frameEffects: string[];
        
  // frameVersion
  frameVersion?: string;
        
  // hand
  hand?: string;
        
  // hasAlternativeDeckLimit
  hasAlternativeDeckLimit?: boolean;
        
  // hasContentWarning
  hasContentWarning?: boolean;
        
  // hasFoil
  hasFoil?: boolean;
        
  // hasNonFoil
  hasNonFoil?: boolean;
        
  // identifiers
  identifiers?: Identifiers;
        
  // isAlternative
  isAlternative?: boolean;
        
  // isFullArt
  isFullArt?: boolean;
        
  // isFunny
  isFunny?: boolean;
        
  // isOnlineOnly
  isOnlineOnly?: boolean;
        
  // isOversized
  isOversized?: boolean;
        
  // isPromo
  isPromo?: boolean;
        
  // isRebalanced
  isRebalanced?: boolean;
        
  // isReprint
  isReprint: boolean;
        
  // isReserved
  isReserved?: boolean;
        
  // isStarter
  isStarter?: boolean;
        
  // isStorySpotlight
  isStorySpotlight?: boolean;
        
  // isTextless
  isTextless?: boolean;
        
  // isTimeshifted
  isTimeshifted: boolean;
        
  // keywords
  keywords?: string[];
        
  // language
  language?: string;
        
  // layout
  layout?: string;
        
  // leadershipSkills
  leadershipSkills?: LeadershipSkills;
        
  // legalities
  legalities?: Legalities;
        
  // life
  life?: string;
        
  // loyalty
  loyalty?: string;
        
  // manaCost
  manaCost?: string;
        
  // manaValue
  manaValue?: number;
        
  // name
  name?: string;
        
  // number
  number?: string;
        
  // originalPrintings
  originalPrintings?: string[];
        
  // originalReleaseDate
  originalReleaseDate?: string;
        
  // originalText
  originalText?: string;
        
  // originalType
  originalType?: string;
        
  // otherFaceIds
  otherFaceIds: string[];
        
  // power
  power: string;
        
  // printings
  printings: string[];
        
  // promoTypes
  promoTypes: string[];
        
  // purchaseUrls
  purchaseUrls: PurchaseUrls;
        
  // rarity
  rarity: string;
        
  // rebalancedPrintings
  rebalancedPrintings: string[];
        
  // rulings
  rulings: Rulings[];
        
  // securityStamp
  securityStamp: string;
        
  // setCode
  setCode: string;
        
  // side
  side: string;
        
  // signature
  signature: string;
        
  // subtypes
  subtypes: string[];
        
  // supertypes
  supertypes: string[];
        
  // text
  text: string;
        
  // toughness
  toughness: string;
        
  // type
  type: string;
        
  // types
  types: string[];
        
  // uuid
  uuid: string;
        
  // variations
  variations: string[];
        
  // watermark
  watermark: string;
        
}
  
export type CardToken = {
  
  // artist
  artist?: string;
        
  // asciiName
  asciiName?: string;
        
  // availability
  availability?: string[];
        
  // boosterTypes
  boosterTypes?: string[];
        
  // borderColor
  borderColor?: string;
        
  // cardParts
  cardParts?: string[];
        
  // colorIdentity
  colorIdentity?: string[];
        
  // colorIndicator
  colorIndicator: string[];
        
  // colors
  colors?: string[];
        
  // faceName
  faceName?: string;
        
  // faceFlavorName
  faceFlavorName: string;
        
  // finishes
  finishes: string[];
        
  // flavorText
  flavorText?: string;
        
  // frameEffects
  frameEffects?: string[];
        
  // frameVersion
  frameVersion?: string;
        
  // hasFoil
  hasFoil?: boolean;
        
  // hasNonFoil
  hasNonFoil?: boolean;
        
  // identifiers
  identifiers?: Identifiers;
        
  // isFullArt
  isFullArt: boolean;
        
  // isFunny
  isFunny?: boolean;
        
  // isOnlineOnly
  isOnlineOnly?: boolean;
        
  // isPromo
  isPromo?: boolean;
        
  // isReprint
  isReprint?: boolean;
        
  // keywords
  keywords?: string[];
        
  // language
  language?: string;
        
  // layout
  layout?: string;
        
  // loyalty
  loyalty?: string;
        
  // name
  name?: string;
        
  // number
  number?: string;
        
  // otherFaceIds
  otherFaceIds: string[];
        
  // power
  power: string;
        
  // promoTypes
  promoTypes: string[];
        
  // reverseRelated
  reverseRelated: string[];
        
  // securityStamp
  securityStamp: string;
        
  // setCode
  setCode: string;
        
  // side
  side: string;
        
  // signature
  signature: string;
        
  // subtypes
  subtypes: string[];
        
  // supertypes
  supertypes: string[];
        
  // text
  text: string;
        
  // toughness
  toughness: string;
        
  // type
  type: string;
        
  // types
  types: string[];
        
  // uuid
  uuid: string;
        
  // watermark
  watermark: string;
        
}
  
export type Deck = {
  
  // code
  code?: string;
        
  // commander
  commander: CardDeck;
        
  // fileName
  fileName: string;
        
  // mainBoard
  mainBoard: CardDeck[];
        
  // name
  name: string;
        
  // sideBoard
  sideBoard: CardDeck[];
        
  // releaseDate
  releaseDate: null | string;
        
  // type
  type: string;
        
}
  
export type DeckList = {
  
  // code
  code: string;
        
  // fileName
  fileName: string;
        
  // name
  name: string;
        
  // releaseDate
  releaseDate: null | string;
        
  // type
  type: string;
        
}
  
export type ForeignData = {
  
  // faceName
  faceName?: string;
        
  // flavorText
  flavorText?: string;
        
  // language
  language?: string;
        
  // multiverseId
  multiverseId?: number;
        
  // name
  name?: string;
        
  // text
  text: string;
        
  // type
  type: string;
        
}
  
export type Identifiers = {
  
  // cardKingdomEtchedId
  cardKingdomEtchedId?: string;
        
  // cardKingdomFoilId
  cardKingdomFoilId?: string;
        
  // cardKingdomId
  cardKingdomId?: string;
        
  // cardsphereId
  cardsphereId?: string;
        
  // mcmId
  mcmId?: string;
        
  // mcmMetaId
  mcmMetaId?: string;
        
  // mtgArenaId
  mtgArenaId?: string;
        
  // mtgoFoilId
  mtgoFoilId?: string;
        
  // mtgoId
  mtgoId?: string;
        
  // mtgjsonV4Id
  mtgjsonV4Id?: string;
        
  // multiverseId
  multiverseId?: string;
        
  // scryfallId
  scryfallId?: string;
        
  // scryfallOracleId
  scryfallOracleId?: string;
        
  // scryfallIllustrationId
  scryfallIllustrationId?: string;
        
  // tcgplayerProductId
  tcgplayerProductId?: string;
        
  // tcgplayerEtchedProductId
  tcgplayerEtchedProductId?: string;
        
}
  
export type Keywords = {
  
  // abilityWords
  abilityWords: string[];
        
  // keywordAbilities
  keywordAbilities: string[];
        
  // keywordActions
  keywordActions: string[];
        
}
  
export type LeadershipSkills = {
  
  // brawl
  brawl: boolean;
        
  // commander
  commander: boolean;
        
  // oathbreaker
  oathbreaker: boolean;
        
}
  
export type Legalities = {
  
  // brawl
  brawl?: string;
        
  // commander
  commander?: string;
        
  // duel
  duel?: string;
        
  // future
  future?: string;
        
  // frontier
  frontier?: string;
        
  // gladiator
  gladiator?: string;
        
  // historic
  historic?: string;
        
  // historicbrawl
  historicbrawl?: string;
        
  // legacy
  legacy?: string;
        
  // modern
  modern?: string;
        
  // oldschool
  oldschool?: string;
        
  // pauper
  pauper?: string;
        
  // paupercommander
  paupercommander?: string;
        
  // penny
  penny?: string;
        
  // pioneer
  pioneer?: string;
        
  // premodern
  premodern?: string;
        
  // standard
  standard?: string;
        
  // vintage
  vintage?: string;
        
}
  
export type Meta = {
  
  // date
  date: string;
        
  // version
  version: string;
        
}
  
export type PurchaseUrls = {
  
  // cardKingdom
  cardKingdom?: string;
        
  // cardKingdomEtched
  cardKingdomEtched?: string;
        
  // cardKingdomFoil
  cardKingdomFoil?: string;
        
  // cardmarket
  cardmarket?: string;
        
  // tcgplayer
  tcgplayer?: string;
        
  // tcgplayerEtched
  tcgplayerEtched?: string;
        
}
  
export type Rulings = {
  
  // date
  date: string;
        
  // text
  text: string;
        
}
  
export type SealedProduct = {
  
  // identifiers
  identifiers: Identifiers;
        
  // name
  name: string;
        
  // purchaseUrls
  purchaseUrls: PurchaseUrls;
        
  // releaseDate
  releaseDate: null | string;
        
  // uuid
  uuid: string;
        
}
  
export type Set = {
  
  // baseSetSize
  baseSetSize?: number;
        
  // block
  block?: string;
        
  // booster
  booster?: object;
        
  // cards
  cards?: CardSet[];
        
  // cardsphereSetId
  cardsphereSetId?: number;
        
  // code
  code?: string;
        
  // codeV3
  codeV3?: string;
        
  // isForeignOnly
  isForeignOnly?: boolean;
        
  // isFoilOnly
  isFoilOnly?: boolean;
        
  // isNonFoilOnly
  isNonFoilOnly?: boolean;
        
  // isOnlineOnly
  isOnlineOnly?: boolean;
        
  // isPaperOnly
  isPaperOnly?: boolean;
        
  // isPartialPreview
  isPartialPreview?: boolean;
        
  // keyruneCode
  keyruneCode?: string;
        
  // mcmId
  mcmId?: number;
        
  // mcmIdExtras
  mcmIdExtras: number;
        
  // mcmName
  mcmName: string;
        
  // mtgoCode
  mtgoCode: string;
        
  // name
  name: string;
        
  // parentCode
  parentCode: string;
        
  // releaseDate
  releaseDate: string;
        
  // sealedProduct
  sealedProduct: SealedProduct;
        
  // tcgplayerGroupId
  tcgplayerGroupId: number;
        
  // tokens
  tokens: CardToken[];
        
  // totalSetSize
  totalSetSize: number;
        
  // translations
  translations: Translations;
        
  // type
  type: string;
        
}
  
export type SetList = {
  
  // baseSetSize
  baseSetSize?: number;
        
  // block
  block?: string;
        
  // code
  code?: string;
        
  // codeV3
  codeV3?: string;
        
  // isForeignOnly
  isForeignOnly?: boolean;
        
  // isFoilOnly
  isFoilOnly?: boolean;
        
  // isNonFoilOnly
  isNonFoilOnly?: boolean;
        
  // isOnlineOnly
  isOnlineOnly?: boolean;
        
  // isPaperOnly
  isPaperOnly?: boolean;
        
  // isPartialPreview
  isPartialPreview?: boolean;
        
  // keyruneCode
  keyruneCode?: string;
        
  // mcmId
  mcmId?: number;
        
  // mcmIdExtras
  mcmIdExtras?: number;
        
  // mcmName
  mcmName: string;
        
  // mtgoCode
  mtgoCode: string;
        
  // name
  name: string;
        
  // parentCode
  parentCode: string;
        
  // releaseDate
  releaseDate: string;
        
  // sealedProduct
  sealedProduct: SealedProduct;
        
  // tcgplayerGroupId
  tcgplayerGroupId: number;
        
  // totalSetSize
  totalSetSize: number;
        
  // translations
  translations: Translations;
        
  // type
  type: string;
        
}
  
export type TcgplayerSkus = {
  
  // condition
  condition: string;
        
  // finishes
  finishes: string[];
        
  // language
  language: string;
        
  // printing
  printing: string;
        
  // productId
  productId: string;
        
  // skuId
  skuId: string;
        
}
  
export type Translations = {
  
  // "Ancient Greek"
  "Ancient Greek"?: string;
        
  // Arabic
  Arabic?: string;
        
  // "Chinese Simplified"
  "Chinese Simplified"?: string;
        
  // "Chinese Traditional"
  "Chinese Traditional"?: string;
        
  // French
  French?: string;
        
  // German
  German?: string;
        
  // Hebrew
  Hebrew?: string;
        
  // Italian
  Italian?: string;
        
  // Japanese
  Japanese?: string;
        
  // Korean
  Korean?: string;
        
  // Latin
  Latin?: string;
        
  // Phyrexian
  Phyrexian?: string;
        
  // "Portuguese (Brazil)"
  "Portuguese (Brazil)"?: string;
        
  // Russian
  Russian?: string;
        
  // Sanskrit
  Sanskrit?: string;
        
  // Spanish
  Spanish?: string;
        
}
  
  