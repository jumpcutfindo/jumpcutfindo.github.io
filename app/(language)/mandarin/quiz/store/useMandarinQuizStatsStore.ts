import { create } from "zustand";
import { persist } from "zustand/middleware";

import { QuizCardStat } from "../../api/stats";

interface MandarinQuizStatsState {
  quizCardStats: QuizCardStat[];
  addQuizCardStat: (quizCardStat: QuizCardStat) => void;
  resetQuizStats: () => void;
}

export const useMandarinQuizStatsStore = create<MandarinQuizStatsState>()(
  persist(
    (set) => ({
      quizCardStats: [],
      addQuizCardStat: (quizCardStat: QuizCardStat) =>
        set((state) => ({
          quizCardStats: [...state.quizCardStats, quizCardStat],
        })),
      resetQuizStats: () => set({ quizCardStats: [] }),
    }),
    {
      name: "mandarin-quiz-stats",
    },
  ),
);
