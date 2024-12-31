import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  MandarinCardType,
  MandarinFillBlankCardParams,
  MandarinMatchDefinitionParams,
  MandarinMatchPinyinCardParams,
} from "../cards/card";
import {
  MandarinFillBlankData,
  MandarinMatchDefinitionData,
  MandarinMatchPinyinData,
} from "../data";

interface MandarinQuizState {
  score: number;
  setScore: (score: number) => void;
  maxScore: number;
  setMaxScore: (score: number) => void;
  cardType: MandarinCardType | null;
  setCardType: (cardType: MandarinCardType) => void;
  cardContent:
    | MandarinFillBlankData
    | MandarinMatchPinyinData
    | MandarinMatchDefinitionData
    | null;
  setCardContent: (
    content:
      | MandarinFillBlankData
      | MandarinMatchPinyinData
      | MandarinMatchDefinitionData
      | null,
  ) => void;
  resetQuizState: () => void;
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
      cardType: null,
      setCardType: (cardType) => set({ cardType }),
      cardContent: null,
      setCardContent: (content) => set({ cardContent: content }),
      resetQuizState: () =>
        set({ score: 0, maxScore: 0, cardType: null, cardContent: null }),
    }),
    {
      name: "mandarin-quiz-store",
    },
  ),
);
