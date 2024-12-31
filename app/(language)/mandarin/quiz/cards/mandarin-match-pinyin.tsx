import { useState } from "react";

import { MatchCard } from "../../../quiz/match-cards";
import { CardProps } from "../../../quiz/types/card";
import { MandarinDefinition } from "../../api/mandarin";
import { MatchPinyinCardStat } from "../../api/stats";
import { useMandarinQuizStatsStore } from "../store/useMandarinQuizStatsStore";
import { MandarinCardType, MandarinMatchPinyinCardParams } from "./card";

type MandarinMatchPinyinProps = CardProps<MandarinDefinition> &
  MandarinMatchPinyinCardParams;

export default function MandarinMatchPinyin({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  setRenderedResult,
  setOnAcknowledge,
}: MandarinMatchPinyinProps) {
  const [generatedTime] = useState(new Date());

  const selectedPairs: [MandarinDefinition, MandarinDefinition][] = [];

  const { addQuizCardStat } = useMandarinQuizStatsStore();

  const renderOption = (option: MandarinDefinition, isFrom: boolean) => {
    if (isFrom) {
      return <span className="text-2xl">{option.word}</span>;
    } else {
      return <span className="text-xl">{option.pinyin}</span>;
    }
  };

  const onMatched = (from: MandarinDefinition, to: MandarinDefinition) => {
    selectedPairs.push([from, to]);
  };

  const onCompletedMatching = () => {
    const stat: MatchPinyinCardStat = {
      type: MandarinCardType.MatchPinyin,
      generatedTime,
      answeredTime: new Date(),
      isCorrect: selectedPairs.length === options.length,
      options: options.map((option) => option.word),
      userSelections: selectedPairs.map((pair) => [pair[0].word, pair[1].word]),
    };

    addQuizCardStat(stat);

    onAnswered();
  };

  return (
    <MatchCard
      cardTitle="Match the Pinyin"
      options={options}
      renderOption={renderOption}
      quizState={quizState}
      onMatched={onMatched}
      onAnswered={onCompletedMatching}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      setRenderedResult={setRenderedResult}
      setOnAcknowledge={setOnAcknowledge}
    />
  );
}
