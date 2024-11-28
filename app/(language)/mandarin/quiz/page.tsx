"use client";

import { useEffect, useState } from "react";

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
import { generateCardType } from "./utils/generate-card-type";
import { generateFillBlank } from "./utils/generate-fill-blank";
import { generateMatchDefinition } from "./utils/generate-match-definition";
import { generateMatchPinyin } from "./utils/generate-match-pinyin";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const { score, setScore, maxScore, setMaxScore } = useMandarinQuizStore();

  const [quizState, setQuizState] = useState(QuizState.Question);
  const [cardType, setCardType] = useState<MandarinCardType>(
    MandarinCardType.FillBlank,
  );

  const [isResultCorrect, setResultCorrect] = useState(false);
  const [renderedResult, setRenderedResult] = useState<JSX.Element | null>(
    null,
  );

  const [onAcknowledge, setOnAcknowledge] = useState(() => () => {});

  const [fillBlankParams, setFillBlankParams] =
    useState<MandarinFillBlankCardParams | null>(null);
  const [matchPinyinParams, setMatchPinyinParams] =
    useState<MandarinMatchPinyinCardParams | null>(null);
  const [matchDefinitionParams, setMatchDefinitionParams] =
    useState<MandarinMatchDefinitionParams | null>(null);

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

    if (onAcknowledge) {
      onAcknowledge();
    }
  };

  const renderQuizCard = () => {
    switch (cardType) {
      case MandarinCardType.FillBlank:
        return (
          fillBlankParams && (
            <MandarinFillBlank
              {...fillBlankParams}
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
          matchPinyinParams && (
            <MandarinMatchPinyin
              {...matchPinyinParams}
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
          matchDefinitionParams && (
            <MandarinMatchDefinition
              {...matchDefinitionParams}
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

  useEffect(() => {
    if (quizState === QuizState.Question) {
      const cardType = generateCardType();

      if (cardType === MandarinCardType.FillBlank) {
        const params = generateFillBlank(chinese, 4);
        setFillBlankParams(params);
        setCardType(MandarinCardType.FillBlank);
      } else if (cardType === MandarinCardType.MatchPinyin) {
        const params = generateMatchPinyin(chinese, 4);
        setMatchPinyinParams(params);
        setCardType(MandarinCardType.MatchPinyin);
      } else {
        const params = generateMatchDefinition(chinese, 4);
        setMatchDefinitionParams(params);
        setCardType(MandarinCardType.MatchDefinition);
      }
    }
  }, [chinese, quizState]);

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
