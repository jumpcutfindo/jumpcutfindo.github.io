import { MandarinDefinition } from "../../api/mandarin";
import { MandarinMatchPinyinData } from "../data";
import { selectRandomDefinition } from "./definition-utils";

export function generateMatchPinyin(
  definitions: MandarinDefinition[],
  count: number,
): MandarinMatchPinyinData {
  const options = [];
  const wordSet = new Set();

  for (let i = 0; i < count; i++) {
    let randomDefinition;

    while (!randomDefinition || wordSet.has(randomDefinition.word)) {
      randomDefinition = selectRandomDefinition(definitions);
    }

    options.push(randomDefinition);
    wordSet.add(randomDefinition.word);
  }

  return { options };
}
