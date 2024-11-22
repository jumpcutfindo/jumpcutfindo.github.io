import Markdown, { Components } from "react-markdown";
import { FillBlankCard } from "../../quiz/fill-blank";
import { QuizState } from "../../quiz/types/quiz";
import { MandarinDefinition, MandarinExample } from "../types/mandarin";
import { MandarinFillBlankCardParams } from "../types/card";
import { CardProps } from "../../quiz/types/card";

const MARKDOWN_STYLING: Components = {
  p(props) {
    return <p className="text-xl">{props.children}</p>;
  },
};

type MandarinFillBlankProps = CardProps & MandarinFillBlankCardParams;

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

  return (
    <FillBlankCard<MandarinDefinition, MandarinExample>
      answer={answer}
      options={options}
      blankedSentence={blankedSentence}
      example={example}
      quizState={quizState}
      onAnswered={onAnswered}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
      setRenderedResult={setRenderedResult}
      setOnAcknowledge={setOnAcknowledge}
      renderOption={renderOption}
      renderResult={renderResult}
    />
  );
}
