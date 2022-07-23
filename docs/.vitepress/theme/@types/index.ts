export interface IList {
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

export interface ISidebarItem {
  text: string;
  link: string;
  items: any[],
}
