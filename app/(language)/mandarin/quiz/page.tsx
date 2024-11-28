"use client";

import { useState } from "react";

import { faLanguage } from "@fortawesome/free-solid-svg-icons";

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

  const [quizState, setQuizState] = useState(QuizState.Question);

  const [isResultCorrect, setResultCorrect] = useState(false);
  const [renderedResult, setRenderedResult] = useState<JSX.Element | null>(
    null,
  );

  const [onAcknowledge, setOnAcknowledge] = useState(() => () => {});

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

    // Generate a new card type and content
    const { cardType, cardContent } = generateCardContent(chinese);
    setCardType(cardType);
    setCardContent(cardContent);

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
        return null;
    }
  };

  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faLanguage} headerTitle="中文测验">
        <div className="flex items-center me-2">
          <div className="text-base">
            Score: {score} / {maxScore}
          </div>
        </div>
      </MandarinLayoutHeader>

      {renderQuizCard()}

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
