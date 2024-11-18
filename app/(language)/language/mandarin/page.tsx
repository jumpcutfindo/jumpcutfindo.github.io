"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chineseJson from "./api/chinese.json";
import { MandarinDefinition } from "./types/mandarin";
import FillBlankMandarinCard from "./cards/fill-in-the-blank";
import { generateFillBlank } from "./utils/generate-fill-blank";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { QuizState } from "./types/quiz";
import { useEffect, useState } from "react";
import { FillBlankCard } from "./types/card";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const [quizState, setQuizState] = useState(QuizState.Question);
  const [fillBlankExample, setFillBlankExample] =
    useState<FillBlankCard | null>();

  const onAnswered = () => {
    setQuizState(QuizState.Review);
    setMaxScore((score) => score + 1);
  };

  const onCorrect = () => {
    setQuizState(QuizState.Review);
    setScore((score) => score + 1);
  };

  const onIncorrect = () => {
    setQuizState(QuizState.Review);
  };

  const onNext = () => {
    setQuizState(QuizState.Question);
  };

  useEffect(() => {
    if (quizState === QuizState.Question) {
      setFillBlankExample(generateFillBlank(chinese, 4));
    }
  }, [chinese, quizState]);

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center w-[480px] flex-1 bg-slate-900">
        <div className="w-full flex flex-row p-4 bg-white/5">
          <FontAwesomeIcon icon={faLanguage} size="xl" />
          <h1 className="ms-2">中文测验</h1>
          <p className="ms-auto">
            Score: {score}/{maxScore}
          </p>
        </div>
        {fillBlankExample && (
          <div className="w-full flex flex-col flex-1">
            <FillBlankMandarinCard
              answer={fillBlankExample.answer}
              options={fillBlankExample.options}
              example={fillBlankExample.example}
              blankedSentence={fillBlankExample.blankedSentence}
              isAnswered={quizState === QuizState.Review}
              onAnswered={onAnswered}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              onNext={onNext}
            />
          </div>
        )}
      </div>
    </div>
  );
}
