import { MatchCard } from "../../quiz/match-cards";
import { QuizState } from "../../quiz/types/quiz";
import { MandarinDefinition } from "../types/mandarin";

interface MandarinFillBlankProps {
  quizState: QuizState;
  options: MandarinDefinition[];

  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
}

export default function MandarinMatchPinyin({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  onNext,
}: MandarinFillBlankProps) {
  return (
    <MatchCard
      options={options}
      quizState={quizState}
      onAnswered={onAnswered}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      onNext={onNext}
    />
  );
}
