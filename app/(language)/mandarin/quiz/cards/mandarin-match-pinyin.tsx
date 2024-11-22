import { MatchCard } from "../../../quiz/match-cards";
import { CardProps } from "../../../quiz/types/card";
import { MandarinMatchPinyinCardParams } from "../types/card";
import { MandarinDefinition } from "../types/mandarin";

type MandarinMatchPinyinProps = CardProps & MandarinMatchPinyinCardParams;

export default function MandarinMatchPinyin({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  setRenderedResult,
  setOnAcknowledge,
}: MandarinMatchPinyinProps) {
  const renderOption = (option: MandarinDefinition, isFrom: boolean) => {
    if (isFrom) {
      return <span className="text-2xl">{option.word}</span>;
    } else {
      return <span className="text-xl">{option.pinyin}</span>;
    }
  };

  return (
    <MatchCard
      cardTitle="Match the Pinyin"
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
