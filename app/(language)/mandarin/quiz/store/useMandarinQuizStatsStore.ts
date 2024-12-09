import { create } from "zustand";

import { QuizCardStat } from "../../api/stats";

interface MandarinQuizStatsState {
  quizCardStats: QuizCardStat[];
  addQuizCardStat: (quizCardStat: QuizCardStat) => void;
}

export const useMandarinQuizStatsStore = create<MandarinQuizStatsState>()(
  (set) => ({
    quizCardStats: [],
    addQuizCardStat: (quizCardStat: QuizCardStat) =>
      set((state) => ({
        quizCardStats: [...state.quizCardStats, quizCardStat],
      })),
  }),
);
