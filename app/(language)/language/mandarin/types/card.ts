import { MandarinDefinition } from "./mandarin";

export enum CardType {
  FillBlank = "fill-in-the-blank",
  MatchDefinition = "match-definition",
  MatchPinyin = "match-pinyin",
}

export interface MandarinCardProps {
  onCorrect: () => void;
  onIncorrect: () => void;
}

export interface FillBlankCardProps extends MandarinCardProps {
  answer: MandarinDefinition;
  options: MandarinDefinition[];
  sentence: string;
}

export interface MatchDefinitionCardProps extends MandarinCardProps {
  options: MandarinDefinition[];
}

export interface MatchPinyinCardProps extends MandarinCardProps {
  options: MandarinDefinition[];
}
