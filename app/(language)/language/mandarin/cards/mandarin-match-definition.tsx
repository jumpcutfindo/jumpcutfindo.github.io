import { MatchCard } from "../../quiz/match-cards";
import { CardProps } from "../../quiz/types/card";
import { MandarinMatchDefinitionParams } from "../types/card";
import { MandarinDefinition } from "../types/mandarin";

type MandarinMatchDefinitionProps = CardProps & MandarinMatchDefinitionParams;

export default function MandarinMatchDefinition({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  onNext,
  setRenderedResult: setResult,
}: MandarinMatchDefinitionProps) {
  const renderOption = (option: MandarinDefinition, isFrom: boolean) => {
    if (isFrom) {
      return <span className="text-2xl">{option.word}</span>;
    } else {
      return (
        <span className="text-sm">
          ({option.wordType}) {option.definition}
        </span>
      );
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
      setRenderedResult={setResult}
    />
  );
}
