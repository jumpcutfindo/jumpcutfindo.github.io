import { MandarinCardProps } from "../types/card";

interface FillInMandarinCardProps extends MandarinCardProps {
  word: string;
  wordOptions: string[];
  sentence: string;
}

export default function FillInMandarinCard({
  onCorrect,
  onIncorrect,
  word,
  wordOptions,
  sentence,
}: FillInMandarinCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[480px] min-h-screen bg-slate-900 space-y-4">
      <h1 className="text-4xl">Fill in the blank</h1>
      <p className="text-2xl">{sentence}</p>
      <p className="text-2xl">{word}</p>
      <div className="flex flex-row space-x-4">
        {wordOptions.map((option) => (
          <button
            key={option}
            className="w-64 rounded-full bg-slate-200 text-slate-900 px-1 py-2 hover:bg-slate-100 transition-all"
            onClick={() => {
              if (option === word) {
                onCorrect();
              } else {
                onIncorrect();
              }
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
