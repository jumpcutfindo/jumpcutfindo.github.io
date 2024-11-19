"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chineseJson from "./api/chinese.json";
import { MandarinDefinition } from "./types/mandarin";
import { generateFillBlank } from "./utils/generate-fill-blank";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { QuizState } from "../quiz/types/quiz";
import { useEffect, useState } from "react";
import MandarinFillBlank from "./cards/mandarin-fill-blank";
import { MandarinMatchPinyinCardParams } from "./types/card";
import { generatePinyinOptions } from "./utils/generate-match-pinyin";
import MandarinMatchPinyin from "./cards/mandarin-match-pinyin";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const [quizState, setQuizState] = useState(QuizState.Question);
  const [matchPinyinExample, setMatchPinyinExample] =
    useState<MandarinMatchPinyinCardParams | null>();

  const onAnswered = () => {
    setQuizState(QuizState.Review);
    setMaxScore((score) => score + 1);
  };

  const onCorrect = () => {
    setScore((score) => score + 1);
  };

  const onIncorrect = () => {};

  const onNext = () => {
    setQuizState(QuizState.Question);
  };

  useEffect(() => {
    if (quizState === QuizState.Question) {
      setMatchPinyinExample({
        options: generatePinyinOptions(chinese, 4),
      });
    }
  }, [chinese, quizState]);

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center w-screen max-w-[480px] flex-1 bg-slate-900">
        <div className="w-full flex flex-row p-4 bg-white/5">
          <FontAwesomeIcon icon={faLanguage} size="xl" />
          <h1 className="ms-2">中文测验</h1>
          <p className="ms-auto">
            Score: {score}/{maxScore}
          </p>
        </div>
        {matchPinyinExample && (
          <MandarinMatchPinyin
            options={matchPinyinExample.options}
            quizState={quizState}
            onAnswered={onAnswered}
            onCorrect={onCorrect}
            onIncorrect={onIncorrect}
            onNext={onNext}
          />
        )}
      </div>
    </div>
  );
}
