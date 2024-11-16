export interface MandarinExample {
  sentence: string;
  englishTranslation: string;
}

export interface MandarinDefinition {
  word: string;
  wordType: "verb" | "noun" | "adjective" | "adverb" | "idiom" | "conjunction";
  pronunciation: string;
  definition: string;
  examples: MandarinExample[];
}
