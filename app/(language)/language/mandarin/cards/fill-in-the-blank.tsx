import { useState } from "react";
import { FillBlankCard, MandarinCardProps } from "../types/card";
import { CardWrapper } from "./card-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const onAnswerCorrect = () => {
    setIsAnswered(true);
    onCorrect();
  };

  const onAnswerIncorrect = () => {
    setIsAnswered(true);
    onIncorrect();
  };

  return (
    <CardWrapper icon="language" title="Fill in the blank">
      <div className="flex flex-col p-2 border rounded-lg">
        <p className="text-2xl">{blankedSentence}</p>
      </div>

      <div className="flex flex-col w-full flex-1">
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
      </div>

      {isAnswered && (
        <div className="w-full flex flex-row items-start space-x-2 bg-white/5">
          <FontAwesomeIcon icon="language" size="xl" />
          <h1>中文测验</h1>
        </div>
      )}
    </CardWrapper>
  );
}
