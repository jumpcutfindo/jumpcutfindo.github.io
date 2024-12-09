import { QuizState } from "./quiz";

export interface CardProps<T> {
  cardTitle?: string;
  quizState: QuizState;
  onAnswered: (answer: T) => void;
  onCorrect: (answer: T) => void;
  onIncorrect: (answer: T) => void;

  setRenderedResult: (result: JSX.Element) => void;
  setOnAcknowledge: (onNext: () => void) => void;
}

export interface FillBlankCardParams<T, U> {
  answer: T;
  options: T[];
  example: U;
  blankedSentence: string;
}

export interface MatchCardParams<T> {
  options: T[];

  // Special case as they don't follow the one question one answer convention
  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;

  onFromSelected?: (option: T) => void;
  onToSelected?: (option: T) => void;
  onMatched?: (from: T, to: T) => void;
}
