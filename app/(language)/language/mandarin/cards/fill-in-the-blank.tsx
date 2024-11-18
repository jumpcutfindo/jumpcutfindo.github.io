import { useState } from "react";
import { FillBlankCard, MandarinCardProps } from "../types/card";
import {
  QuizCard,
  QuizCardBody,
  QuizCardHeader,
  QuizCardResult,
} from "./card-wrapper";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Markdown, { Components } from "react-markdown";
import { MandarinDefinition } from "../types/mandarin";

type FillBlankMandarinCardProps = MandarinCardProps & FillBlankCard;

const MARKDOWN_STYLING: Components = {
  p(props) {
    return <p className="text-xl">{props.children}</p>;
  },
};

export default function FillBlankMandarinCard({
  answer,
  options,
  example,
  blankedSentence,
  isAnswered,
  onAnswered,
  onCorrect,
  onIncorrect,
  onNext,
}: FillBlankMandarinCardProps) {
  const [isCorrect, setIsCorrect] = useState(false);

  const onAnswerCorrect = () => {
    onAnswered();
    setIsCorrect(true);
    onCorrect();
  };

  const onAnswerIncorrect = () => {
    onAnswered();
    setIsCorrect(false);
    onIncorrect();
  };

  const onAcknowledgeResult = () => {
    onNext();
  };

  const renderOptions = () => {
    const getClassName = (isCorrectOption: boolean) => {
      const baseClassName =
        "flex justify-center items-center p-2 rounded-lg h-32";

      if (isAnswered && isCorrectOption) {
        return `${baseClassName} border border-emerald-400 bg-emerald-700`;
      }

      return `${baseClassName} border bg-transparent hover:bg-white/5`;
    };

    const renderOptionContent = (option: MandarinDefinition) => {
      if (isAnswered) {
        return (
          <div className="flex flex-col">
            <p className="text-2xl">{option.word}</p>
            <p className="text-sm text-white/60">({option.pinyin})</p>
            <p className="text-sm">{option.definition}</p>
          </div>
        );
      }

      return (
        <div className="flex flex-col">
          <p className="text-2xl">{option.word}</p>
        </div>
      );
    };

    return options.map((option) => (
      <button
        key={option.word}
        className={getClassName(option === answer)}
        onClick={() =>
          option === answer ? onAnswerCorrect() : onAnswerIncorrect()
        }
      >
        {renderOptionContent(option)}
      </button>
    ));
  };

  const renderResult = () => {
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col border rounded-lg p-4 bg-white/10">
          <Markdown components={MARKDOWN_STYLING}>
            {`${answer.word} (${answer.pinyin})`}
          </Markdown>
          <p>{answer.definition}</p>
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
    <QuizCard>
      <QuizCardHeader icon={faCoffee} title="Fill in the blanks" />
      <QuizCardBody>
        <div className="flex flex-col p-2 border rounded-lg">
          <p className="text-2xl">{blankedSentence}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">{renderOptions()}</div>
      </QuizCardBody>

      {isAnswered && (
        <QuizCardResult isCorrect={isCorrect}>
          {renderResult()}
          <button
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30"
            onClick={onAcknowledgeResult}
          >
            OK
          </button>
        </QuizCardResult>
      )}
    </QuizCard>
  );
}
