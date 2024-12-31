import dayjs from "dayjs";

import { QuizCardStat } from "../../api/stats";
import { MandarinCardType } from "../cards/card";

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
    const date = dayjs(stat.answeredTime).format("YYYY-MM-DD");

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

  let longestStreak = 1;
  let currStreak = 1;

  for (let i = 1; i < dates.length; i++) {
    const date = dates[i];
    if (dayjs(date).diff(dayjs(dates[i - 1]), "day") === 1) {
      currStreak++;
      longestStreak = Math.max(longestStreak, currStreak);
    }
  }

  return longestStreak;
}

export function getQuestionsByType(quizCardStats: QuizCardStat[]) {
  const questionsByType: Record<MandarinCardType, QuizCardStat[]> = {
    [MandarinCardType.FillBlank]: [],
    [MandarinCardType.MatchPinyin]: [],
    [MandarinCardType.MatchDefinition]: [],
  };

  for (const stat of quizCardStats) {
    questionsByType[stat.type].push(stat);
  }

  return questionsByType;
}

export function getWordOccurences(quizCardStats: QuizCardStat[]) {
  const wordOccurrences: Record<string, number> = {};

  for (const stat of quizCardStats) {
    for (const option of stat.options) {
      if (!wordOccurrences[option]) {
        wordOccurrences[option] = 1;
      } else {
        wordOccurrences[option]++;
      }
    }
  }

  // Sort by number of occurences
  const sortedWordOccurrences = Object.keys(wordOccurrences)
    .map((key) => [key, wordOccurrences[key]])
    .sort((a, b) => (b[1] as number) - (a[1] as number));

  return sortedWordOccurrences;
}
