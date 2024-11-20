import { MandarinCardType } from "../types/card";

export function generateCardType(): MandarinCardType {
  const p = Math.random();

  if (p < 1.0) {
    // Weigh fill blank more heavily
    return MandarinCardType.MatchPinyin;
  } else if (p < 0.8) {
    return MandarinCardType.MatchPinyin;
  } else {
    return MandarinCardType.MatchDefinition;
  }
}
