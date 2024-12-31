import { FillBlankCardData, MatchCardData } from "../../quiz/types/data";
import { MandarinDefinition, MandarinExample } from "../api/mandarin";

export type MandarinFillBlankData = FillBlankCardData<
  MandarinDefinition,
  MandarinExample
>;

export type MandarinMatchPinyinData = MatchCardData<MandarinDefinition>;

export type MandarinMatchDefinitionData = MatchCardData<MandarinDefinition>;
