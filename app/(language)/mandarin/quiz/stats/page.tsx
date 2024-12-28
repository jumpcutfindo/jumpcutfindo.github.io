"use client";

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
import { useMandarinQuizStatsStore } from "../store/useMandarinQuizStatsStore";
import { HeatMap } from "./heatmap";
import {
  getLongestStreak,
  getNumQuestionsAnswered,
  getPercentageCorrect,
  getQuestionsByDay,
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

export default function QuizStats() {
  const { quizCardStats } = useMandarinQuizStatsStore();

  const numQuestionsAnswered = getNumQuestionsAnswered(quizCardStats);
  const percentageCorrect = getPercentageCorrect(quizCardStats);

  const questionsByDay = getQuestionsByDay(quizCardStats);
  const maxQuestionsInDay = Object.values(questionsByDay)
    .map((questions) => questions.length)
    .reduce((a, b) => Math.max(a, b), 0);

  const longestStreak = getLongestStreak(quizCardStats);

  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faChartColumn} headerTitle="测验统计" />
      <LanguageBody>
        <div className="flex flex-col w-full h-full p-4 space-y-4">
          <div className="flex flex-col w-full space-y-4">
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

          <div className="flex flex-col w-full space-y-4">
            <h1 className="my-auto text-sm font-bold">HEATMAP</h1>
            <HeatMap
              startDate={dayjs("2024-01-01").toDate()}
              questionsByDay={questionsByDay}
            />
          </div>
        </div>
      </LanguageBody>
    </LanguageLayout>
  );
}
