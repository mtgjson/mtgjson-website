export type TStoreRootState = {
  Meta: TMeta,
  DeckList: TList[],
  SetList: TList[],
  EnumValues: object,
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
  items: any[];
  props: {
    href: string;
  };
  children: JSX.Element;
}

export type TEditLink = {
  link: string;
  text: string;
}

export type TSocialLink = {
  text: string;
  link: string;
  class: string;
}

export interface IPagesDataHeader {
  text?: string;
  slug?: string;
  hash?: string;
}

export interface IPagesData extends IPagesDataHeader {
  id: number;
  path: string;
  title: string;
  headers?: IPagesDataHeader[];
  isOwnPage?: boolean;
}

export interface HTMLChangeEvent extends Event {
  target: HTMLFormElement;
}

// Use when pageData is available to error pages
// declare module "vitepress" {
//   interface PageData {
//     pages: IPagesData[]
//   }
// }
