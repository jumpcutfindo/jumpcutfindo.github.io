import { FillBlankCardParams, MatchCardParams } from "../../quiz/types/card";
import { MandarinDefinition, MandarinExample } from "./mandarin";

export type MandarinFillBlankCardParams = FillBlankCardParams<
  MandarinDefinition,
  MandarinExample
>;

export type MandarinMatchPinyinCardParams = MatchCardParams<MandarinDefinition>;
