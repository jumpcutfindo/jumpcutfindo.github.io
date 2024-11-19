import { MandarinDefinition } from "../types/mandarin";
import { selectRandomDefinition } from "./definition-utils";

export function generatePinyinOptions(definitions: MandarinDefinition[]) {
  const options = [];
  const wordSet = new Set();

  for (let i = 0; i < definitions.length; i++) {
    let randomDefinition;

    while (!randomDefinition || wordSet.has(randomDefinition.word)) {
      randomDefinition = selectRandomDefinition(definitions);
    }

    options.push(randomDefinition);
    wordSet.add(randomDefinition.word);
  }

  return options;
}
