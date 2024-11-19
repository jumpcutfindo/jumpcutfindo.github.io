export interface CardProps {
  isAnswered: boolean;
  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
}

export interface FillBlankCardParams {
  answer: string;
  options: string[];
  example: string;
  blankedSentence: string;
}
