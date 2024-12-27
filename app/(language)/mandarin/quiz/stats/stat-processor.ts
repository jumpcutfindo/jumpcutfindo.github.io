import dayjs from "dayjs";

import { QuizCardStat } from "../../api/stats";

export function getNumQuestionsAnswered(quizCardStats: QuizCardStat[]) {
  return quizCardStats.length;
}

export function getNumQuestionsCorrect(quizCardStats: QuizCardStat[]) {
  return quizCardStats.filter((stat) => stat.isCorrect).length;
}

export function getPercentageCorrect(quizCardStats: QuizCardStat[]) {
  return (
    (getNumQuestionsCorrect(quizCardStats) /
      getNumQuestionsAnswered(quizCardStats)) *
    100
  );
}

export function getQuestionsByDay(quizCardStats: QuizCardStat[]) {
  const questionsByDay: Record<string, QuizCardStat[]> = {};

  for (const stat of quizCardStats) {
    const date = new Date(stat.answeredTime).toDateString();

    if (!questionsByDay[date]) {
      questionsByDay[date] = [];
    }

    questionsByDay[date].push(stat);
  }

  return questionsByDay;
}

export function getLongestStreak(quizCardStats: QuizCardStat[]) {
  const questionsByDay = getQuestionsByDay(quizCardStats);

  const dates = Object.keys(questionsByDay).sort((a, b) =>
    dayjs(a).isAfter(b) ? 1 : -1,
  );

  let longestStreak = 1,
    currStreak = 1;
  for (let i = 1; i < dates.length; i++) {
    const date = dates[i];
    if (dayjs(date).diff(dayjs(dates[i - 1]), "day") === 1) {
      currStreak++;
      longestStreak = Math.max(longestStreak, currStreak);
    }
  }

  return longestStreak;
}
