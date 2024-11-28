"use client";

import { useEffect, useState } from "react";

import {
  faCircleNotch,
  faLanguage,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LanguageLayout } from "../../language-layout";
import { QuizCardResult } from "../../quiz/quiz-card-wrapper";
import { QuizState } from "../../quiz/types/quiz";
import chineseJson from "../api/chinese.json";
import { MandarinDefinition } from "../api/mandarin";
import { MandarinLayoutHeader } from "../mandarin-header";
import {
  MandarinCardType,
  MandarinFillBlankCardParams,
  MandarinMatchDefinitionParams,
  MandarinMatchPinyinCardParams,
} from "./cards/card";
import MandarinFillBlank from "./cards/mandarin-fill-blank";
import MandarinMatchDefinition from "./cards/mandarin-match-definition";
import MandarinMatchPinyin from "./cards/mandarin-match-pinyin";
import { useMandarinQuizStore } from "./store/useMandarinQuizStore";
import { generateCardContent } from "./utils/generate-card";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const {
    score,
    setScore,
    maxScore,
    setMaxScore,
    cardType,
    setCardType,
    cardContent,
    setCardContent,
  } = useMandarinQuizStore();

  const [isLoading, setIsLoading] = useState(true);

  const [quizState, setQuizState] = useState(QuizState.Question);

  const [isResultCorrect, setResultCorrect] = useState(false);
  const [renderedResult, setRenderedResult] = useState<JSX.Element | null>(
    null,
  );

  const [onAcknowledge, setOnAcknowledge] = useState(() => () => {});

  const generateCard = () => {
    // Generate a new card type and content, automatically persisted
    const { cardType, cardContent } = generateCardContent(chinese);
    setCardType(cardType);
    setCardContent(cardContent);
  };

  const onAnswered = () => {
    setQuizState(QuizState.Review);
    setMaxScore(maxScore + 1);
  };

  const onCorrect = () => {
    setResultCorrect(true);
    setScore(score + 1);
  };

  const onIncorrect = () => {
    setResultCorrect(false);
  };

  const onNext = () => {
    setQuizState(QuizState.Question);

    generateCard();

    if (onAcknowledge) {
      onAcknowledge();
    }
  };

  const renderQuizCard = () => {
    switch (cardType) {
      case MandarinCardType.FillBlank:
        return (
          cardContent && (
            <MandarinFillBlank
              {...(cardContent as MandarinFillBlankCardParams)}
              quizState={quizState}
              onAnswered={onAnswered}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              setRenderedResult={setRenderedResult}
              setOnAcknowledge={setOnAcknowledge}
            />
          )
        );
      case MandarinCardType.MatchPinyin:
        return (
          cardContent && (
            <MandarinMatchPinyin
              {...(cardContent as MandarinMatchPinyinCardParams)}
              quizState={quizState}
              onAnswered={onAnswered}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              setRenderedResult={setRenderedResult}
              setOnAcknowledge={setOnAcknowledge}
            />
          )
        );
      case MandarinCardType.MatchDefinition:
        return (
          cardContent && (
            <MandarinMatchDefinition
              {...(cardContent as MandarinMatchDefinitionParams)}
              quizState={quizState}
              onAnswered={onAnswered}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              setRenderedResult={setRenderedResult}
              setOnAcknowledge={setOnAcknowledge}
            />
          )
        );
      default:
        return (
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-72 flex flex-col space-y-8 text-center justify-center items-center">
              <h1 className="text-5xl">中文测试</h1>
              <p>
                Welcome to the Mandarin Quiz! Are you ready to test your
                Mandarin?
              </p>
              <button
                className="text-xl p-2 outline outline-1 rounded-lg w-48 hover:bg-white/5"
                onClick={generateCard}
              >
                开始
              </button>
            </div>
          </div>
        );
    }
  };

  const renderLoading = () => {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center opacity-80">
        <FontAwesomeIcon
          icon={faCircleNotch}
          size="2x"
          className="animate-spin"
        />
      </div>
    );
  };

  useEffect(() => {
    // Add artificial delay to prevent flash of unloaded content
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faLanguage} headerTitle="中文测验">
        <div className="flex items-center me-2">
          <div className="text-base">
            Score: {score} / {maxScore}
          </div>
        </div>
      </MandarinLayoutHeader>

      {isLoading ? renderLoading() : renderQuizCard()}

      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={isResultCorrect}
        onAcknowledgeResult={onNext}
      >
        {renderedResult}
      </QuizCardResult>
    </LanguageLayout>
  );
}
