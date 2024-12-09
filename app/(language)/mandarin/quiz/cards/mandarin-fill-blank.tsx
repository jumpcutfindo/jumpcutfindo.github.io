import { useState } from "react";

import Markdown, { Components } from "react-markdown";

import { FillBlankCard } from "../../../quiz/fill-blank";
import { CardProps } from "../../../quiz/types/card";
import { QuizState } from "../../../quiz/types/quiz";
import { MandarinDefinition, MandarinExample } from "../../api/mandarin";
import { FillBlankCardStat } from "../../api/stats";
import { useMandarinQuizStatsStore } from "../store/useMandarinQuizStatsStore";
import { MandarinCardType, MandarinFillBlankCardParams } from "./card";

const MARKDOWN_STYLING: Components = {
  p(props) {
    return <p className="text-xl">{props.children}</p>;
  },
};

type MandarinFillBlankProps = CardProps<MandarinDefinition> &
  MandarinFillBlankCardParams;

export default function MandarinFillBlank({
  quizState,
  answer,
  options,
  example,
  blankedSentence,
  onAnswered,
  onCorrect,
  onIncorrect,
  setRenderedResult,
  setOnAcknowledge,
}: MandarinFillBlankProps) {
  const [cardGenerateTime] = useState(new Date());

  const { addQuizCardStat } = useMandarinQuizStatsStore();

  const renderOption = {
    [QuizState.Question]: (option: MandarinDefinition) => (
      <div className="flex flex-col">
        <p className="text-2xl">{option.word}</p>
      </div>
    ),
    [QuizState.Review]: (option: MandarinDefinition) => (
      <div className="flex flex-col">
        <p className="text-2xl">{option.word}</p>
        <p className="text-sm text-white/60">{option.pinyin}</p>
        <p className="text-sm">
          ({option.wordType}) {option.definition}
        </p>
      </div>
    ),
  };

  const renderResult = () => {
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col border rounded-lg p-4 bg-white/10">
          <Markdown components={MARKDOWN_STYLING}>{`${answer.word}`}</Markdown>
          <p className="text-white/60">{answer.pinyin}</p>
          <p>
            ({answer.wordType}) {answer.definition}
          </p>
        </div>
        <div>
          <Markdown components={MARKDOWN_STYLING}>
            {`${example.sentence.replace(answer.word, `**${answer.word}**`)}`}
          </Markdown>
          <p>{example.englishTranslation}</p>
        </div>
      </div>
    );
  };

  const onAnsweredFillBlank = (userAnswer: MandarinDefinition) => {
    // Add stat
    const fillBlankQuizStat: FillBlankCardStat = {
      type: MandarinCardType.FillBlank,
      correctResult: answer.word,
      generatedTime: cardGenerateTime,
      answeredTime: new Date(),
      isCorrect: answer.word === userAnswer.word,
      options: options.map((option) => option.word),
      userResult: userAnswer.word,
    };

    addQuizCardStat(fillBlankQuizStat);

    onAnswered(answer);
  };

  return (
    <FillBlankCard<MandarinDefinition, MandarinExample>
      answer={answer}
      options={options}
      blankedSentence={blankedSentence}
      example={example}
      quizState={quizState}
      onAnswered={onAnsweredFillBlank}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      setRenderedResult={setRenderedResult}
      setOnAcknowledge={setOnAcknowledge}
      renderOption={renderOption}
      renderResult={renderResult}
    />
  );
}
