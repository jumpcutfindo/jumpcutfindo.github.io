import { useState } from "react";
import { FillBlankCard, MandarinCardProps } from "../types/card";
import {
  QuizCard,
  QuizCardBody,
  QuizCardHeader,
  QuizCardResult,
} from "./card-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee, faTimes } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import Markdown from "react-markdown";

type FillBlankMandarinCardProps = MandarinCardProps & FillBlankCard;

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

  const renderResult = () => {
    const resultSentenceBolded = example.sentence.replace(
      answer.word,
      `**${answer.word}**`
    );

    return (
      <div>
        <Markdown
          components={{
            p(props) {
              return <p className="text-xl">{props.children}</p>;
            },
          }}
        >
          {resultSentenceBolded}
        </Markdown>
        <p>{example.englishTranslation}</p>
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
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option.word}
              className="flex justify-center items-center p-2 border rounded-lg hover:bg-white/5 h-32"
              onClick={() =>
                option === answer ? onAnswerCorrect() : onAnswerIncorrect()
              }
            >
              <p className="text-2xl">{option.word}</p>
            </button>
          ))}
        </div>
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
