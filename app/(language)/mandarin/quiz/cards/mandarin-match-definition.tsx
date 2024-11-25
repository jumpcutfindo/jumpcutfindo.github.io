import { MatchCard } from "../../../quiz/match-cards";
import { CardProps } from "../../../quiz/types/card";
import { MandarinDefinition } from "../../api/mandarin";
import { MandarinMatchDefinitionParams } from "./card";

type MandarinMatchDefinitionProps = CardProps & MandarinMatchDefinitionParams;

export default function MandarinMatchDefinition({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  setRenderedResult,
  setOnAcknowledge,
}: MandarinMatchDefinitionProps) {
  const renderOption = (option: MandarinDefinition, isFrom: boolean) => {
    if (isFrom) {
      return (
        <div className="flex flex-col">
          <p className="text-2xl">{option.word}</p>
          <p className="text-sm text-white/60">{option.pinyin}</p>
        </div>
      );
    } else {
      return (
        <span>
          ({option.wordType}) {option.definition}
        </span>
      );
    }
  };

  return (
    <MatchCard
      cardTitle="Match the Definitions"
      options={options}
      renderOption={renderOption}
      quizState={quizState}
      onAnswered={onAnswered}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      setRenderedResult={setRenderedResult}
      setOnAcknowledge={setOnAcknowledge}
    />
  );
}
