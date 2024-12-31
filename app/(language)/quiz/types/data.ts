export interface FillBlankCardData<T, U> {
  answer: T;
  options: T[];
  example: U;
  blankedSentence: string;
}

export interface MatchCardData<T> {
  options: T[];
}
