import { QuizState } from "./quiz";

export interface CardProps {
  cardTitle?: string;
  quizState: QuizState;
  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;

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
}
