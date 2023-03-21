export type SealedProduct = {
  category?: string;
  identifiers: Identifiers;
  name: string;
  productSize?: number;
  purchaseUrls: PurchaseUrls;
  releaseDate: string | null;
  subtype?: string;
  uuid: string;
};