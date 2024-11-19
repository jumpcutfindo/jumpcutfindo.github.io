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
  const renderOption = (option: MandarinDefinition, isFrom: boolean) => {
    if (isFrom) {
      return <span className="text-2xl">{option.word}</span>;
    } else {
      return <span className="text-xl">{option.pinyin}</span>;
    }
  };

  return (
    <MatchCard
      options={options}
      renderOption={renderOption}
      quizState={quizState}
      onAnswered={onAnswered}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      onNext={onNext}
    />
  );
}
