import { create } from "zustand";

interface MandarinQuizState {
  score: number;
  setScore: (score: number) => void;
  maxScore: number;
  setMaxScore: (score: number) => void;
}

export const useMandarinQuizStore = create<MandarinQuizState>()((set) => ({
  score: 0,
  setScore: (score) => set({ score: score }),
  maxScore: 0,
  setMaxScore: (score) => set({ maxScore: score }),
}));
