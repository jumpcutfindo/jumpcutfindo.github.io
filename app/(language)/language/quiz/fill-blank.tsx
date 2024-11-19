import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import renderResult from "next/dist/server/render-result";
import {
  QuizCard,
  QuizCardHeader,
  QuizCardBody,
  QuizCardResult,
} from "./quiz-card-wrapper";
import { CardProps, FillBlankCardParams } from "./types/card";
import { useState } from "react";
import { QuizState } from "./types/quiz";

interface FillBlankOptionProps {
  quizState: QuizState;
  isAnswer: boolean;
  onClick: () => void;
  renderOption: { [state in QuizState]: () => JSX.Element };
}

function FillBlankOption({
  quizState,
  isAnswer,
  onClick,
  renderOption,
}: FillBlankOptionProps) {
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
      {renderOption[quizState]()}
    </button>
  );
}

type FillBlankCardProps = CardProps &
  FillBlankCardParams & {
    renderOptions: () => JSX.Element;
    renderResult: () => JSX.Element;
  };

export function FillBlankCard({
  answer,
  options,
  example,
  blankedSentence,
  quizState,
  onAnswered,
  onCorrect,
  onIncorrect,
  onNext,
  renderOptions,
  renderResult,
}: FillBlankCardProps) {
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
        <div className="grid grid-cols-2 gap-4">{renderOptions()}</div>
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
