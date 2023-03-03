export type Deck = {
  code: string;
  commander?: CardDeck;
  fileName: string;
  mainBoard: CardDeck[];
  name: string;
  sideBoard: CardDeck[];
  releaseDate: string | null;
  type: string;
};