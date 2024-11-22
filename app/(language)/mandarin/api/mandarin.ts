export interface MandarinExample {
  sentence: string;
  englishTranslation: string;
}

export interface MandarinDefinition {
  word: string;
  wordType: "verb" | "noun" | "adjective" | "adverb" | "idiom" | "conjunction";
  pinyin: string;
  definition: string;
  examples: MandarinExample[];
}
