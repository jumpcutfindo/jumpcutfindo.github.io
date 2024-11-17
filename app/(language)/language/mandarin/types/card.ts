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

export interface FillBlankCard {
  answer: MandarinDefinition;
  options: MandarinDefinition[];
  blankedSentence: string;
  sentence: string;
}

export interface MatchDefinitionCard {
  options: MandarinDefinition[];
}

export interface MatchPinyinCard {
  options: MandarinDefinition[];
}
