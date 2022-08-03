export type TStoreRootState = {
  Meta: TMeta,
  DeckList: TList[],
  SetList: TList[],
  EnumValues: object,
  ThemeColor: string,
}

export type TMeta = {
  date: string;
  version: string;
}

export type TList = {
  baseSetSize: number;
  code: string;
  fileName: string;
  isFoilOnly: boolean;
  isNonFoilOnly: boolean;
  isOnline: boolean;
  isOnlineOnly: boolean;
  isPaperOnly: boolean;
  isPaper: boolean;
  isPartialPreview: boolean;
  keyruneCode: string;
  mtgoCode: string;
  name: string;
  releaseDate: string;
  totalSetSize: number;
  translations: any;
  type: string;
}

export type TSidebarItem = {
  text: string;
  link: string;
  items: any[],
}

export type TEditLink = {
  link: string;
  text: string;
}

export interface ISearchResultHeader {
  text?: string;
  slug?: string;
  hash?: string;
}

export interface ISearchResult extends ISearchResultHeader {
  id: number;
  path: string;
  title: string;
  isOwnPage?: boolean;
}

export interface HTMLChangeEvent extends Event {
  target: HTMLFormElement;
}
