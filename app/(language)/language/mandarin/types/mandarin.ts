export interface MandarinExample {
  sentence: string;
  englishTranslation: string;
}

export interface MandarinDefinition {
  phrase: string;
  pronunciation: string;
  definition: string;
  examples: MandarinExample[];
}
