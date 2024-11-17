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

type FillBlankMandarinCardProps = MandarinCardProps & FillBlankCard;

export default function FillBlankMandarinCard({
  answer,
  options,
  sentence,
  blankedSentence,
  onCorrect,
  onIncorrect,
}: FillBlankMandarinCardProps) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onAnswerCorrect = () => {
    setIsAnswered(true);
    setIsCorrect(true);
    onCorrect();
  };

  const onAnswerIncorrect = () => {
    setIsAnswered(true);
    setIsCorrect(false);
    onIncorrect();
  };

  const renderResult = () => {
    if (isCorrect) {
      return (
        <div className="flex flex-row space-x-4">
          <FontAwesomeIcon icon={faCheck} size="lg" className="my-auto" />
          <p className="text-lg my-auto">{sentence}</p>
        </div>
      );
    }

    return (
      <div className="flex flex-row space-x-4">
        <FontAwesomeIcon icon={faTimes} size="lg" className="my-auto" />
        <p className="text-lg my-auto">{sentence}</p>
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
          <>{renderResult()}</>
          <button className="bg-white/50">OK</button>
        </QuizCardResult>
      )}
    </QuizCard>
  );
}
