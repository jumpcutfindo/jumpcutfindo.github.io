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

interface FillBlankOptionProps {
  isAnswered: boolean;
  isAnswer: boolean;
  option: MandarinDefinition;
  onClick: () => void;
}

function FillBlankOption({
  isAnswered,
  isAnswer,
  option,
  onClick,
}: FillBlankOptionProps) {
  const [isSelected, setIsSelected] = useState(false);

  const onOptionSelected = () => {
    if (isAnswered) return;

    onClick();
    setIsSelected(true);
  };

  const getClassName = () => {
    const baseClassName =
      "flex flex-col justify-center items-center p-2 rounded-lg h-32";

    if (isAnswered) {
      if (isAnswer) {
        return `${baseClassName} border border-emerald-400 bg-emerald-700`;
      }

      if (isSelected) {
        return `${baseClassName} border border-slate-400 bg-slate-700`;
      }
    }

    return `${baseClassName} border bg-transparent hover:bg-white/5`;
  };

  return (
    <button className={getClassName()} onClick={onOptionSelected}>
      <p className="text-2xl">{option.word}</p>
      {isAnswered && (
        <div className="flex flex-col">
          <p className="text-sm text-white/60">{option.pinyin}</p>
          <p className="text-sm">
            ({option.wordType}) {option.definition}
          </p>
        </div>
      )}
    </button>
  );
}

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
    if (isAnswered) return;

    onAnswered();
    setIsCorrect(true);
    onCorrect();
  };

  const onAnswerIncorrect = () => {
    if (isAnswered) return;

    onAnswered();
    setIsCorrect(false);
    onIncorrect();
  };

  const onAcknowledgeResult = () => {
    onNext();
  };

  const renderOptions = () => {
    return options.map((option) => (
      <FillBlankOption
        key={option.word}
        isAnswered={isAnswered}
        isAnswer={option.word === answer.word}
        option={option}
        onClick={() => {
          if (option.word === answer.word) {
            onAnswerCorrect();
          } else {
            onAnswerIncorrect();
          }
        }}
      />
    ));
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
    <QuizCard>
      <QuizCardHeader icon={faCoffee} title="Fill in the blanks" />
      <QuizCardBody>
        <div className="flex flex-col p-2 border rounded-lg">
          <p className="text-2xl">{blankedSentence}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">{renderOptions()}</div>
      </QuizCardBody>

      <QuizCardResult isVisible={isAnswered} isCorrect={isCorrect}>
        {renderResult()}
        <button
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30"
            onClick={onAcknowledgeResult}
        >
          OK
        </button>
      </QuizCardResult>
    </QuizCard>
  );
}
