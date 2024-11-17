import { FillBlankCard, MandarinCardProps } from "../types/card";
import { CardWrapper } from "./card-wrapper";

type FillBlankMandarinCardProps = MandarinCardProps & FillBlankCard;

export default function FillBlankMandarinCard({
  answer,
  options,
  sentence,
  blankedSentence,
  onCorrect,
  onIncorrect,
}: FillBlankMandarinCardProps) {
  return (
    <CardWrapper icon="flag" title="Fill in the blank">
      <div className="flex flex-col p-2 border rounded-lg">
        <p className="text-2xl">{blankedSentence}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option.word}
            className="flex flex-col p-2 border rounded-lg"
            onClick={() => (option === answer ? onCorrect() : onIncorrect())}
          >
            <p className="text-2xl">{option.word}</p>
          </button>
        ))}
      </div>
    </CardWrapper>
  );
}
