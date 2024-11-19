import { FillBlankCardParams, MatchCardParams } from "../../quiz/types/card";
import { MandarinDefinition, MandarinExample } from "./mandarin";

export enum MandarinCardType {
  FillBlank = "fill-blank",
  MatchPinyin = "match-pinyin",
}

export type MandarinFillBlankCardParams = FillBlankCardParams<
  MandarinDefinition,
  MandarinExample
>;

export type MandarinMatchPinyinCardParams = MatchCardParams<MandarinDefinition>;

export type MandarinMatchDefinitionParams = MatchCardParams<MandarinDefinition>;
