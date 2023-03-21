export type Deck = {
  code: string;
  commander?: CardDeck;
  fileName: string;
  mainBoard: CardDeck[];
  name: string;
  releaseDate: string | null;
  sideBoard: CardDeck[];
  type: string;
};