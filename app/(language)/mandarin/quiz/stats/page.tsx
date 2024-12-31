"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { LanguageBody, LanguageLayout } from "@/app/(language)/language-layout";
import {
  faCalendarDays,
  faChartColumn,
  faCheckCircle,
  faQuestionCircle,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

import { MandarinLayoutHeader } from "../../mandarin-header";
import { MandarinCardType } from "../cards/card";
import { useMandarinQuizStatsStore } from "../store/useMandarinQuizStatsStore";
import { useMandarinQuizStore } from "../store/useMandarinQuizStore";
import { HeatMap } from "./heatmap/heatmap";
import {
  getLongestStreak,
  getNumQuestionsAnswered,
  getPercentageCorrect,
  getQuestionsByDay,
  getQuestionsByType,
  getWordMistakes,
  getWordOccurences,
} from "./stat-processor";

interface QuizStatTileProps {
  title: string;
  value: string;
  icon: IconDefinition;
}

function QuizStatTile(props: QuizStatTileProps) {
  const { title, value, icon } = props;

  return (
    <div className="flex flex-row border p-2 rounded-md justify-items-center items-center space-x-2">
      <FontAwesomeIcon className="p-4 w-8 h-8" icon={icon} size="2xl" />
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl h-8">{value}</h2>
        <p className="h-6 text-sm">{title}</p>
      </div>
    </div>
  );
}

interface QuizStatTableProps {
  maxHeight?: number;
  statPairs: { title: string; value: string; isBold?: boolean }[];
}

function QuizStatTable(props: QuizStatTableProps) {
  const { maxHeight, statPairs } = props;

  const getTable = () => {
    if (statPairs.length === 0) {
      return <p className="p-2 text-sm">No stats available</p>;
    }

    return (
      <div
        className={`${maxHeight ? `h-[${maxHeight}px] max-h-[${maxHeight}px] overflow-y-auto` : ""}`}
      >
        <table className="text-sm w-full">
          <tbody>
            {statPairs.map((statPair, idx, arr) => (
              <tr
                key={statPair.title}
                className={`${idx < arr.length - 1 && "border-b border-b-language-foreground/50"} ${statPair.isBold && "font-bold"}`}
              >
                <td>{statPair.title}</td>
                <td className="text-end py-1">{statPair.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="border border-language-foreground rounded-md py-1 px-2">
      {getTable()}
    </div>
  );
}

export default function QuizStats() {
  const router = useRouter();

  const { quizCardStats, resetQuizStats } = useMandarinQuizStatsStore();
  const { resetQuizState } = useMandarinQuizStore();

  const numQuestionsAnswered = getNumQuestionsAnswered(quizCardStats);
  const percentageCorrect = getPercentageCorrect(quizCardStats);

  const questionsByDay = getQuestionsByDay(quizCardStats);
  const maxQuestionsInDay = Object.values(questionsByDay)
    .map((questions) => questions.length)
    .reduce((a, b) => Math.max(a, b), 0);

  const longestStreak = getLongestStreak(quizCardStats);

  const questionsByType = getQuestionsByType(quizCardStats);

  const wordOccurences = getWordOccurences(quizCardStats);
  const wordMistakes = getWordMistakes(quizCardStats);

  const getBreakdownTableForType = (type: MandarinCardType) => {
    return (
      <QuizStatTable
        statPairs={[
          {
            title: "Total Questions",
            value: questionsByType[type].length.toString(),
          },
          {
            title: "Correct",
            value: questionsByType[type]
              .filter((q) => q.isCorrect)
              .length.toString(),
          },
          {
            title: "Incorrect",
            value: questionsByType[type]
              .filter((q) => !q.isCorrect)
              .length.toString(),
          },
          {
            title: "Percentage Correct",
            value: `${getPercentageCorrect(questionsByType[type]).toFixed(2)}%`,
          },
        ]}
      />
    );
  };

  const [isResetDialogOpen, setResetDialogOpen] = useState(false);

  const toggleDialog = () => {
    setResetDialogOpen(!isResetDialogOpen);
  };

  const closeDialog = () => {
    setResetDialogOpen(false);
  };

  const onResetData = () => {
    resetQuizState();
    resetQuizStats();

    router.push("/mandarin/quiz");
  };

  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faChartColumn} headerTitle="测验统计" />
      <LanguageBody>
        <div className="flex flex-col w-full h-full p-4 space-y-4">
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">OVERALL</h1>
            <div className="grid grid-cols-2 gap-2">
              <QuizStatTile
                title="questions"
                value={numQuestionsAnswered.toString()}
                icon={faQuestionCircle}
              />
              <QuizStatTile
                title="correct"
                value={`${percentageCorrect}%`}
                icon={faCheckCircle}
              />
              <QuizStatTile
                title="max qns in a day"
                value={maxQuestionsInDay.toString()}
                icon={faSun}
              />

              <QuizStatTile
                title="longest streak"
                value={longestStreak.toString()}
                icon={faCalendarDays}
              />
            </div>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">HEATMAP</h1>
            <HeatMap
              startDate={dayjs("2024-01-01").toDate()}
              questionsByDay={questionsByDay}
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">BREAKDOWN</h1>
            <QuizStatTable
              statPairs={[
                {
                  title: "Fill In The Blanks",
                  value:
                    questionsByType[
                      MandarinCardType.FillBlank
                    ].length.toString(),
                },
                {
                  title: "Match the Pinyin",
                  value:
                    questionsByType[
                      MandarinCardType.MatchPinyin
                    ].length.toString(),
                },
                {
                  title: "Match the Definition",
                  value:
                    questionsByType[
                      MandarinCardType.MatchDefinition
                    ].length.toString(),
                },
                {
                  title: "Total Questions",
                  value: numQuestionsAnswered.toString(),
                  isBold: true,
                },
              ]}
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">FILL IN THE BLANKS</h1>
            {getBreakdownTableForType(MandarinCardType.FillBlank)}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">MATCH THE PINYIN</h1>
            {getBreakdownTableForType(MandarinCardType.MatchPinyin)}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">MATCH THE DEFINITION</h1>
            {getBreakdownTableForType(MandarinCardType.MatchDefinition)}
          </div>

          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">MISTAKES</h1>

            <QuizStatTable
              maxHeight={360}
              statPairs={wordMistakes.map((w) => ({
                title: w[0] as string,
                value: w[1].toString(),
              }))}
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="my-auto text-sm font-bold">WORD OCCURENCES</h1>

            <QuizStatTable
              maxHeight={360}
              statPairs={wordOccurences.map((w) => ({
                title: w[0] as string,
                value: w[1].toString(),
              }))}
            />
          </div>

          <div className="flex flex-col w-full space-y-2">
            <button
              className="w-full bg-red-600 border border-red-500 text-white p-2 rounded-md"
              onClick={toggleDialog}
            >
              Reset statistics
            </button>
          </div>

          <span className="pb-2"></span>
        </div>

        {isResetDialogOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={closeDialog}
          >
            <div
              className="bg-language-background rounded-lg shadow-lg w-[384px] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-2">
                <h1 className="font-bold">Reset statistics?</h1>
                <p>
                  Are you sure you want to reset? This will clear all the stats
                  and the current state of the quiz.
                </p>
                <div className="flex flex-row space-x-2 justify-end">
                  <button
                    className="bg-red-600 text-white rounded-md p-2 w-20"
                    onClick={onResetData}
                  >
                    Reset
                  </button>
                  <button
                    className="bg-gray-600 text-white rounded-md p-2 w-20"
                    onClick={closeDialog}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </LanguageBody>
    </LanguageLayout>
  );
}
