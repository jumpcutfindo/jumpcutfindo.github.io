import { useState } from "react";

import { MatchCard } from "../../../quiz/match-cards";
import { CardProps } from "../../../quiz/types/card";
import { MandarinDefinition } from "../../api/mandarin";
import { MatchDefintionCardStat } from "../../api/stats";
import { useMandarinQuizStatsStore } from "../store/useMandarinQuizStatsStore";
import { MandarinCardType, MandarinMatchDefinitionParams } from "./card";

type MandarinMatchDefinitionProps = CardProps<MandarinDefinition> &
  MandarinMatchDefinitionParams;

export default function MandarinMatchDefinition({
  quizState,
  options,
  onAnswered,
  onCorrect,
  onIncorrect,
  setRenderedResult,
  setOnAcknowledge,
}: MandarinMatchDefinitionProps) {
  const [generatedTime] = useState(new Date());

  const selectedPairs: [MandarinDefinition, MandarinDefinition][] = [];

  const { addQuizCardStat } = useMandarinQuizStatsStore();

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

  const onMatched = (from: MandarinDefinition, to: MandarinDefinition) => {
    selectedPairs.push([from, to]);
  };

  const onCompletedMatching = () => {
    const stat: MatchDefintionCardStat = {
      type: MandarinCardType.MatchDefinition,
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
      cardTitle="Match the Definitions"
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
