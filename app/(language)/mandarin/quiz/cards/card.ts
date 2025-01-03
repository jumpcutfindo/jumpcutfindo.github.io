import { FillBlankCardParams, MatchCardParams } from "../../../quiz/types/card";
import { MandarinDefinition, MandarinExample } from "../../api/mandarin";

export enum MandarinCardType {
  FillBlank = "fill-blank",
  MatchPinyin = "match-pinyin",
  MatchDefinition = "match-definition",
}

export type MandarinFillBlankCardParams = FillBlankCardParams<
  MandarinDefinition,
  MandarinExample
>;

export type MandarinMatchPinyinCardParams = MatchCardParams<MandarinDefinition>;

export type MandarinMatchDefinitionParams = MatchCardParams<MandarinDefinition>;
