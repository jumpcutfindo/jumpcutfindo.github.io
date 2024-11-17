import { MandarinDefinition, MandarinExample } from "./mandarin";

export enum CardType {
  FillBlank = "fill-in-the-blank",
  MatchDefinition = "match-definition",
  MatchPinyin = "match-pinyin",
}

export interface MandarinCardProps {
  isAnswered: boolean;
  onAnswered: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
}

export interface FillBlankCard {
  answer: MandarinDefinition;
  options: MandarinDefinition[];
  example: MandarinExample;
  blankedSentence: string;
}

export interface MatchDefinitionCard {
  options: MandarinDefinition[];
}

export interface MatchPinyinCard {
  options: MandarinDefinition[];
}
