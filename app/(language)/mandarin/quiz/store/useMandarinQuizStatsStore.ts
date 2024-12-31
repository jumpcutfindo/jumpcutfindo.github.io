import { create } from "zustand";

import { QuizCardStat } from "../../api/stats";
import { MandarinCardType } from "../cards/card";

interface MandarinQuizStatsState {
  quizCardStats: QuizCardStat[];
  addQuizCardStat: (quizCardStat: QuizCardStat) => void;
}

export const useMandarinQuizStatsStore = create<MandarinQuizStatsState>()(
  (set) => ({
    quizCardStats: [
      {
        type: MandarinCardType.FillBlank,
        correctResult: "跃跃欲试",
        generatedTime: new Date("2024-12-25T03:42:59.630Z"),
        answeredTime: new Date("2024-12-25T03:43:06.836Z"),
        isCorrect: true,
        options: ["罪孽", "凑齐", "恻隐", "跃跃欲试"],
        userResult: "跃跃欲试",
      },
      {
        type: MandarinCardType.MatchPinyin,
        generatedTime: new Date("2024-12-26T03:43:07.989Z"),
        answeredTime: new Date("2024-12-26T03:43:13.378Z"),
        isCorrect: true,
        options: ["憧憬", "规矩", "训诫", "孤陋寡闻"],
        userSelections: [
          ["孤陋寡闻", "孤陋寡闻"],
          ["规矩", "规矩"],
          ["训诫", "训诫"],
          ["憧憬", "憧憬"],
        ],
      },
      {
        type: MandarinCardType.FillBlank,
        correctResult: "诙谐",
        generatedTime: new Date("2024-12-27T03:43:14.530Z"),
        answeredTime: new Date("2024-12-27T03:43:21.255Z"),
        isCorrect: false,
        options: ["赫赫", "吝啬", "耻辱", "诙谐"],
        userResult: "赫赫",
      },
      {
        type: MandarinCardType.MatchPinyin,
        generatedTime: new Date("2024-12-27T03:43:23.950Z"),
        answeredTime: new Date("2024-12-27T03:43:30.702Z"),
        isCorrect: false,
        options: ["累赘", "衣冠禽兽", "不知廉耻", "督促"],
        userSelections: [
          ["累赘", "累赘"],
          ["督促", "衣冠禽兽"],
          ["督促", "督促"],
          ["不知廉耻", "不知廉耻"],
          ["衣冠禽兽", "衣冠禽兽"],
        ],
      },
      {
        type: MandarinCardType.MatchDefinition,
        generatedTime: new Date("2024-12-27T03:43:31.488Z"),
        answeredTime: new Date("2024-12-27T03:43:45.635Z"),
        isCorrect: true,
        options: ["寄予厚望", "摘", "吊儿郎当", "奢侈"],
        userSelections: [
          ["摘", "摘"],
          ["奢侈", "奢侈"],
          ["吊儿郎当", "吊儿郎当"],
          ["寄予厚望", "寄予厚望"],
        ],
      },
      {
        type: MandarinCardType.MatchPinyin,
        generatedTime: new Date("2024-12-27T03:43:46.388Z"),
        answeredTime: new Date("2024-12-27T03:43:57.984Z"),
        isCorrect: false,
        options: ["非但", "膨胀", "普遍", "嚣张"],
        userSelections: [
          ["非但", "非但"],
          ["普遍", "普遍"],
          ["膨胀", "嚣张"],
          ["嚣张", "嚣张"],
          ["膨胀", "膨胀"],
        ],
      },
      {
        type: MandarinCardType.FillBlank,
        correctResult: "耻辱",
        generatedTime: new Date("2024-12-27T03:43:59.091Z"),
        answeredTime: new Date("2024-12-27T03:44:06.794Z"),
        isCorrect: true,
        options: ["耻辱", "英俊", "摘", "架势"],
        userResult: "耻辱",
      },
      {
        type: MandarinCardType.MatchPinyin,
        generatedTime: new Date("2024-12-28T03:44:07.732Z"),
        answeredTime: new Date("2024-12-28T03:44:11.915Z"),
        isCorrect: true,
        options: ["惬意", "上缴", "新颖", "蔚为大观"],
        userSelections: [
          ["惬意", "惬意"],
          ["上缴", "上缴"],
          ["蔚为大观", "蔚为大观"],
          ["新颖", "新颖"],
        ],
      },
    ],
    addQuizCardStat: (quizCardStat: QuizCardStat) =>
      set((state) => ({
        quizCardStats: [...state.quizCardStats, quizCardStat],
      })),
  }),
);
