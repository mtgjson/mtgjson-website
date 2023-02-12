
export type CardAtomic = {
  
  asciiName?: string;
        
  attractionLights?: string[];
        
  colorIdentity: string[];
        
  colorIndicator?: string[];
        
  colors: string[];
        
  convertedManaCost: number;
        
  edhrecRank?: number;
        
  edhrecSaltiness?: number;
        
  faceConvertedManaCost?: number;
        
  faceManaValue?: number;
        
  faceName?: string;
        
  firstPrinting?: string;
        
  foreignData: ForeignData[];
        
  hand?: string;
        
  hasAlternativeDeckLimit?: boolean;
        
  identifiers: Identifiers;
        
  isFunny?: boolean;
        
  isReserved?: boolean;
        
  keywords?: string[];
        
  layout: string;
        
  leadershipSkills?: LeadershipSkills;
        
  legalities: Legalities;
        
  life?: string;
        
  loyalty?: string;
        
  manaCost?: string;
        
  manaValue: number;
        
  name: string;
        
  power?: string;
        
  printings?: string[];
        
  purchaseUrls: PurchaseUrls;
        
  relatedCards?: RelatedCards;
        
  rulings: Rulings[];
        
  side?: string;
        
  subset?: string[];
        
  subtypes: string[];
        
  supertypes: string[];
        
  text?: string;
        
  toughness?: string;
        
  type: string;
        
  types: string[];
        
}
  
export type CardDeck = {
  
  artist?: string;
        
  asciiName?: string;
        
  attractionLights?: string[];
        
  availability: string[];
        
  boosterTypes?: string[];
        
  borderColor: string;
        
  cardParts?: string[];
        
  colorIdentity: string[];
        
  colorIndicator?: string[];
        
  colors: string[];
        
  convertedManaCost: number;
        
  count: number;
        
  duelDeck?: string;
        
  edhrecRank?: number;
        
  edhrecSaltiness?: number;
        
  faceConvertedManaCost?: number;
        
  faceFlavorName?: string;
        
  faceManaValue?: number;
        
  faceName?: string;
        
  finishes: string[];
        
  flavorName?: string;
        
  flavorText?: string;
        
  foreignData: ForeignData[];
        
  frameEffects?: string[];
        
  frameVersion: string;
        
  hand?: string;
        
  hasAlternativeDeckLimit?: boolean;
        
  hasContentWarning?: boolean;
        
  hasFoil: boolean;
        
  hasNonFoil: boolean;
        
  identifiers: Identifiers;
        
  isAlternative?: boolean;
        
  isFoil: boolean;
        
  isFullArt?: boolean;
        
  isFunny?: boolean;
        
  isOnlineOnly?: boolean;
        
  isOversized?: boolean;
        
  isPromo?: boolean;
        
  isRebalanced?: boolean;
        
  isReprint?: boolean;
        
  isReserved?: boolean;
        
  isStarter?: boolean;
        
  isStorySpotlight?: boolean;
        
  isTextless?: boolean;
        
  isTimeshifted?: boolean;
        
  keywords?: string[];
        
  language: string;
        
  layout: string;
        
  leadershipSkills?: LeadershipSkills;
        
  legalities: Legalities;
        
  life?: string;
        
  loyalty?: string;
        
  manaCost?: string;
        
  manaValue: number;
        
  name: string;
        
  number: string;
        
  originalPrintings?: string[];
        
  originalReleaseDate?: string;
        
  originalText?: string;
        
  originalType?: string;
        
  otherFaceIds?: string[];
        
  power?: string;
        
  printings?: string[];
        
  promoTypes?: string[];
        
  purchaseUrls: PurchaseUrls;
        
  rarity: string;
        
  relatedCards?: RelatedCards;
        
  rebalancedPrintings?: string[];
        
  rulings: Rulings[];
        
  securityStamp?: string;
        
  setCode: string;
        
  side?: string;
        
  signature?: string;
        
  subset?: string[];
        
  subtypes: string[];
        
  supertypes: string[];
        
  text?: string;
        
  toughness?: string;
        
  type: string;
        
  types: string[];
        
  uuid: string;
        
  variations: string[];
        
  watermark?: string;
        
}
  
export type CardSet = {
  
  artist?: string;
        
  asciiName?: string;
        
  attractionLights?: string[];
        
  availability: string[];
        
  boosterTypes?: string[];
        
  borderColor: string;
        
  cardParts?: string[];
        
  colorIdentity: string[];
        
  colorIndicator?: string[];
        
  colors: string[];
        
  convertedManaCost: number;
        
  edhrecRank?: number;
        
  edhrecSaltiness?: number;
        
  faceConvertedManaCost?: number;
        
  faceFlavorName?: string;
        
  faceManaValue?: number;
        
  faceName?: string;
        
  finishes: string[];
        
  flavorName?: string;
        
  flavorText?: string;
        
  foreignData: ForeignData[];
        
  frameEffects?: string[];
        
  frameVersion: string;
        
  hand?: string;
        
  hasAlternativeDeckLimit?: boolean;
        
  hasContentWarning?: boolean;
        
  hasFoil: boolean;
        
  hasNonFoil: boolean;
        
  identifiers: Identifiers;
        
  isAlternative?: boolean;
        
  isFullArt?: boolean;
        
  isFunny?: boolean;
        
  isOnlineOnly?: boolean;
        
  isOversized?: boolean;
        
  isPromo?: boolean;
        
  isRebalanced?: boolean;
        
  isReprint?: boolean;
        
  isReserved?: boolean;
        
  isStarter?: boolean;
        
  isStorySpotlight?: boolean;
        
  isTextless?: boolean;
        
  isTimeshifted?: boolean;
        
  keywords?: string[];
        
  language: string;
        
  layout: string;
        
  leadershipSkills?: LeadershipSkills;
        
  legalities: Legalities;
        
  life?: string;
        
  loyalty?: string;
        
  manaCost?: string;
        
  manaValue: number;
        
  name: string;
        
  number: string;
        
  originalPrintings?: string[];
        
  originalReleaseDate?: string;
        
  originalText?: string;
        
  originalType?: string;
        
  otherFaceIds?: string[];
        
  power?: string;
        
  printings?: string[];
        
  promoTypes?: string[];
        
  purchaseUrls: PurchaseUrls;
        
  rarity: string;
        
  relatedCards?: RelatedCards;
        
  rebalancedPrintings?: string[];
        
  rulings: Rulings[];
        
  securityStamp?: string;
        
  setCode: string;
        
  side?: string;
        
  signature?: string;
        
  subset?: string[];
        
  subtypes: string[];
        
  supertypes: string[];
        
  text?: string;
        
  toughness?: string;
        
  type: string;
        
  types: string[];
        
  uuid: string;
        
  variations: string[];
        
  watermark?: string;
        
}
  
export type CardToken = {
  
  artist?: string;
        
  asciiName?: string;
        
  availability: string[];
        
  boosterTypes?: string[];
        
  borderColor: string;
        
  cardParts?: string[];
        
  colorIdentity: string[];
        
  colorIndicator?: string[];
        
  colors: string[];
        
  faceName?: string;
        
  faceFlavorName?: string;
        
  finishes: string[];
        
  flavorText?: string;
        
  frameEffects?: string[];
        
  frameVersion: string;
        
  hasFoil: boolean;
        
  hasNonFoil: boolean;
        
  identifiers: Identifiers;
        
  isFullArt?: boolean;
        
  isFunny?: boolean;
        
  isOnlineOnly?: boolean;
        
  isPromo?: boolean;
        
  isReprint?: boolean;
        
  keywords?: string[];
        
  language: string;
        
  layout: string;
        
  loyalty?: string;
        
  name: string;
        
  number: string;
        
  otherFaceIds?: string[];
        
  power?: string;
        
  promoTypes?: string[];
        
  relatedCards?: RelatedCards;
        
  reverseRelated: string[];
        
  securityStamp?: string;
        
  setCode: string;
        
  side?: string;
        
  signature?: string;
        
  subset?: string[];
        
  subtypes: string[];
        
  supertypes: string[];
        
  text?: string;
        
  toughness?: string;
        
  type: string;
        
  types: string[];
        
  uuid: string;
        
  watermark?: string;
        
}
  
export type Deck = {
  
  code: string;
        
  commander?: CardDeck;
        
  fileName: string;
        
  mainBoard: CardDeck[];
        
  name: string;
        
  sideBoard: CardDeck[];
        
  releaseDate: string | null;
        
  type: string;
        
}
  
export type DeckList = {
  
  code: string;
        
  fileName: string;
        
  name: string;
        
  releaseDate: string | null;
        
  type: string;
        
}
  
export type ForeignData = {
  
  faceName?: string;
        
  flavorText?: string;
        
  language: string;
        
  multiverseId?: number;
        
  name: string;
        
  text?: string;
        
  type?: string;
        
}
  
export type Identifiers = {
  
  cardKingdomEtchedId?: string;
        
  cardKingdomFoilId?: string;
        
  cardKingdomId?: string;
        
  cardsphereId?: string;
        
  mcmId?: string;
        
  mcmMetaId?: string;
        
  mtgArenaId?: string;
        
  mtgjsonFoilVersionId?: string;
        
  mtgjsonNonFoilVersionId?: string;
        
  mtgjsonV4Id?: string;
        
  mtgoFoilId?: string;
        
  mtgoId?: string;
        
  multiverseId?: string;
        
  scryfallId?: string;
        
  scryfallOracleId?: string;
        
  scryfallIllustrationId?: string;
        
  tcgplayerProductId?: string;
        
  tcgplayerEtchedProductId?: string;
        
}
  
export type Keywords = {
  
  abilityWords: string[];
        
  keywordAbilities: string[];
        
  keywordActions: string[];
        
}
  
export type LeadershipSkills = {
  
  brawl: boolean;
        
  commander: boolean;
        
  oathbreaker: boolean;
        
}
  
export type Legalities = {
  
  alchemy?: string;
        
  brawl?: string;
        
  commander?: string;
        
  duel?: string;
        
  explorer?: string;
        
  future?: string;
        
  gladiator?: string;
        
  historic?: string;
        
  historicbrawl?: string;
        
  legacy?: string;
        
  modern?: string;
        
  oldschool?: string;
        
  pauper?: string;
        
  penny?: string;
        
  pioneer?: string;
        
  premodern?: string;
        
  standard?: string;
        
  vintage?: string;
        
}
  
export type Meta = {
  
  date: string;
        
  version: string;
        
}
  
export type PurchaseUrls = {
  
  cardKingdom?: string;
        
  cardKingdomEtched?: string;
        
  cardKingdomFoil?: string;
        
  cardmarket?: string;
        
  tcgplayer?: string;
        
  tcgplayerEtched?: string;
        
}
  
export type RelatedCards = {
  
  reverseRelated: string[];
        
  spellbook: string[];
        
}
  
export type Rulings = {
  
  date: string;
        
  text: string;
        
}
  
export type SealedProduct = {
  
  identifiers: Identifiers;
        
  name: string;
        
  purchaseUrls: PurchaseUrls;
        
  releaseDate: string | null;
        
  uuid: string;
        
}
  
export type Set = {
  
  baseSetSize: number;
        
  block?: string;
        
  booster?: object;
        
  cards: CardSet[];
        
  cardsphereSetId?: number;
        
  code: string;
        
  codeV3?: string;
        
  isForeignOnly?: boolean;
        
  isFoilOnly: boolean;
        
  isNonFoilOnly?: boolean;
        
  isOnlineOnly: boolean;
        
  isPaperOnly?: boolean;
        
  isPartialPreview?: boolean;
        
  keyruneCode: string;
        
  languages: string[];
        
  mcmId?: number;
        
  mcmIdExtras?: number;
        
  mcmName?: string;
        
  mtgoCode?: string;
        
  name: string;
        
  parentCode?: string;
        
  releaseDate: string;
        
  sealedProduct?: SealedProduct;
        
  tcgplayerGroupId?: number;
        
  tokens: CardToken[];
        
  tokenSetCode?: string;
        
  totalSetSize: number;
        
  translations: Translations;
        
  type: string;
        
}
  
export type SetList = {
  
  baseSetSize: number;
        
  block?: string;
        
  code: string;
        
  codeV3?: string;
        
  isForeignOnly?: boolean;
        
  isFoilOnly: boolean;
        
  isNonFoilOnly?: boolean;
        
  isOnlineOnly: boolean;
        
  isPaperOnly?: boolean;
        
  isPartialPreview?: boolean;
        
  keyruneCode: string;
        
  mcmId?: number;
        
  mcmIdExtras?: number;
        
  mcmName?: string;
        
  mtgoCode?: string;
        
  name: string;
        
  parentCode?: string;
        
  releaseDate: string;
        
  sealedProduct?: SealedProduct;
        
  tcgplayerGroupId?: number;
        
  totalSetSize: number;
        
  translations: Translations;
        
  type: string;
        
}
  
export type TcgplayerSkus = {
  
  condition: string;
        
  finishes: string[];
        
  language: string;
        
  printing: string;
        
  productId: string;
        
  skuId: string;
        
}
  
export type Translations = {
  
  "Ancient Greek"?: string;
        
  Arabic?: string;
        
  "Chinese Simplified"?: string;
        
  "Chinese Traditional"?: string;
        
  French?: string;
        
  German?: string;
        
  Hebrew?: string;
        
  Italian?: string;
        
  Japanese?: string;
        
  Korean?: string;
        
  Latin?: string;
        
  Phyrexian?: string;
        
  "Portuguese (Brazil)"?: string;
        
  Russian?: string;
        
  Sanskrit?: string;
        
  Spanish?: string;
        
}
  
  