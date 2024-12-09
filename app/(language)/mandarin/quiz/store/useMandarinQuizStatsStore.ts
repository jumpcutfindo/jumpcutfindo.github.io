import { create } from "zustand";

import { MandarinCardType } from "../cards/card";

// Use the word as the identifier
type MandarinWord = string;

type Pair<A, B> = [A, B];

interface QuizCardStat {
  type: MandarinCardType;
  startTime: Date;
  endTime: Date;
  isCorrect: boolean;
  options: MandarinWord[];
}

interface FillBlankCardStat extends QuizCardStat {
  correctResult: MandarinWord;
  userResult: MandarinWord;
}

interface MatchPinyinCardStat extends QuizCardStat {
  // Pairs of the selections in the order they were selected
  // For MatchPinyin, the first is the word, the second is the pinyin
  userSelections: Pair<MandarinCardType, MandarinWord>[];
}

interface MatchDefintionCardStat extends QuizCardStat {
  // Pairs of the selections in the order they were selected
  // For MatchDefinition, the first is the word, the second is the definition
  userSelections: Pair<MandarinCardType, MandarinWord>[];
}

interface MandarinQuizStatsState {
  quizCardStats: QuizCardStat[];
  addQuizCardStat: (quizCardStat: QuizCardStat) => void;
}

const useMandarinQuizStatsStore = create<MandarinQuizStatsState>()((set) => ({
  quizCardStats: [],
  addQuizCardStat: (quizCardStat: QuizCardStat) =>
    set((state) => ({
      quizCardStats: [...state.quizCardStats, quizCardStat],
    })),
}));

export { useMandarinQuizStatsStore };
export type { FillBlankCardStat, MatchPinyinCardStat, MatchDefintionCardStat };
