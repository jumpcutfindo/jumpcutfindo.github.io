export interface MandarinExample {
  sentence: string;
  englishTranslation: string;
}

export type MandarinWordType =
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "idiom"
  | "conjunction";

export interface MandarinDefinition {
  word: string;
  wordType: MandarinWordType;
  pinyin: string;
  definition: string;
  examples: MandarinExample[];
}
