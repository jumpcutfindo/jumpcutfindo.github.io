import { QuizState } from "./quiz";

export interface CardProps {
  quizState: QuizState;
  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;

  setResult: (result: JSX.Element) => void;
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
