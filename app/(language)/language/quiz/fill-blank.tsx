import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import {
  QuizCard,
  QuizCardHeader,
  QuizCardBody,
  QuizCardResult,
} from "./quiz-card-wrapper";
import { CardProps, FillBlankCardParams } from "./types/card";
import { useState } from "react";
import { QuizState } from "./types/quiz";
import { randomUUID } from "crypto";

interface FillBlankOptionProps<T> {
  option: T;
  quizState: QuizState;
  isAnswer: boolean;
  onClick: () => void;
  renderOption: { [state in QuizState]: (option: any) => JSX.Element };
}

function FillBlankOption<T>({
  option,
  quizState,
  isAnswer,
  onClick,
  renderOption,
}: FillBlankOptionProps<T>) {
  const [isSelected, setIsSelected] = useState(false);

  const onOptionSelected = () => {
    if (quizState === QuizState.Review) return;

    onClick();
    setIsSelected(true);
  };

  const getClassName = () => {
    const baseClassName =
      "flex flex-col justify-center items-center p-2 rounded-lg h-32";

    if (quizState) {
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
      {renderOption[quizState](option)}
    </button>
  );
}

type FillBlankCardProps<T, U> = CardProps &
  FillBlankCardParams<T, U> & {
    renderOption: { [state in QuizState]: (option: T) => JSX.Element };
    renderResult: () => JSX.Element;
  };

export function FillBlankCard<T, U>({
  answer,
  options,
  blankedSentence,
  quizState,
  onAnswered,
  onCorrect,
  onIncorrect,
  onNext,
  renderOption,
  renderResult,
}: FillBlankCardProps<T, U>) {
  const [isCorrect, setIsCorrect] = useState(false);

  const onAnswerCorrect = () => {
    if (quizState === QuizState.Review) return;

    onAnswered();
    setIsCorrect(true);
    onCorrect();
  };

  const onAnswerIncorrect = () => {
    if (quizState === QuizState.Review) return;

    onAnswered();
    setIsCorrect(false);
    onIncorrect();
  };

  const onAcknowledgeResult = () => {
    onNext();
  };

  return (
    <QuizCard>
      <QuizCardHeader icon={faCoffee} title="Fill in the blanks" />
      <QuizCardBody>
        <div className="flex flex-col p-2 border rounded-lg">
          <p className="text-2xl">{blankedSentence}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => {
            return (
              <FillBlankOption
                key={uuidv4()}
                option={option}
                quizState={quizState}
                isAnswer={option === answer}
                onClick={() =>
                  option === answer ? onAnswerCorrect() : onAnswerIncorrect()
                }
                renderOption={renderOption}
              />
            );
          })}
        </div>
      </QuizCardBody>

      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={isCorrect}
        onAcknowledgeResult={onAcknowledgeResult}
      >
        {renderResult()}
      </QuizCardResult>
    </QuizCard>
  );
}
