import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MandarinQuizState {
  score: number;
  setScore: (score: number) => void;
  maxScore: number;
  setMaxScore: (score: number) => void;
}

export const useMandarinQuizStore = create<MandarinQuizState>()(
  persist(
    (set) => ({
      score: 0,
      setScore: (score) => {
        set({ score: score });
      },
      maxScore: 0,
      setMaxScore: (score) => set({ maxScore: score }),
    }),
    {
      name: "mandarin-quiz-store",
    },
  ),
);
