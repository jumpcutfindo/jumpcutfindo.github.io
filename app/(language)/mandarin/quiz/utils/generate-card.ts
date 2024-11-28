import { MandarinDefinition } from "../../api/mandarin";
import { MandarinCardType } from "../cards/card";
import { generateFillBlank } from "./generate-fill-blank";
import { generateMatchDefinition } from "./generate-match-definition";
import { generateMatchPinyin } from "./generate-match-pinyin";

export function generateCardType(): MandarinCardType {
  const p = Math.random();

  if (p < 0.6) {
    // Weigh fill blank more heavily
    return MandarinCardType.FillBlank;
  } else if (p < 0.8) {
    return MandarinCardType.MatchPinyin;
  } else {
    return MandarinCardType.MatchDefinition;
  }
}

export function generateCardContent(wordSet: MandarinDefinition[]) {
  const cardType = generateCardType();

  let cardContent;

  if (cardType === MandarinCardType.FillBlank) {
    cardContent = generateFillBlank(wordSet, 4);
  } else if (cardType === MandarinCardType.MatchPinyin) {
    cardContent = generateMatchPinyin(wordSet, 4);
  } else {
    cardContent = generateMatchDefinition(wordSet, 4);
  }

  return { cardType, cardContent };
}
