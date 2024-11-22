"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chineseJson from "../api/chinese.json";
import { MandarinDefinition } from "../api/mandarin";
import { generateFillBlank } from "./utils/generate-fill-blank";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { QuizState } from "../../quiz/types/quiz";
import { useEffect, useState } from "react";
import MandarinFillBlank from "./cards/mandarin-fill-blank";
import {
  MandarinCardType,
  MandarinFillBlankCardParams,
  MandarinMatchDefinitionParams,
  MandarinMatchPinyinCardParams,
} from "./cards/card";
import { generateMatchPinyin } from "./utils/generate-match-pinyin";
import MandarinMatchPinyin from "./cards/mandarin-match-pinyin";
import { QuizCardResult } from "../../quiz/quiz-card-wrapper";
import { generateMatchDefinition } from "./utils/generate-match-definition";
import MandarinMatchDefinition from "./cards/mandarin-match-definition";
import { generateCardType } from "./utils/generate-card-type";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const [quizState, setQuizState] = useState(QuizState.Question);
  const [cardType, setCardType] = useState<MandarinCardType>(
    MandarinCardType.FillBlank
  );

  const [isResultCorrect, setResultCorrect] = useState(false);
  const [renderedResult, setRenderedResult] = useState<JSX.Element | null>(
    null
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
    setMaxScore((score) => score + 1);
  };

  const onCorrect = () => {
    setResultCorrect(true);
    setScore((score) => score + 1);
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
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center w-screen max-w-[480px] flex-1 bg-slate-900">
        <div className="w-full flex flex-row p-4 bg-white/5">
          <FontAwesomeIcon icon={faLanguage} size="xl" />
          <h1 className="ms-2">中文测验</h1>
          <p className="ms-auto">
            Score: {score}/{maxScore}
          </p>
        </div>
        {renderQuizCard()}
      </div>
      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={isResultCorrect}
        onAcknowledgeResult={onNext}
      >
        {renderedResult}
      </QuizCardResult>
    </div>
  );
}
