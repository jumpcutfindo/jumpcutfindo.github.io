import { MandarinCardType } from "../cards/card";

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
