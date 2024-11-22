import { MandarinMatchDefinitionParams } from "../types/card";
import { MandarinDefinition } from "../types/mandarin";
import { selectRandomDefinition } from "./definition-utils";

export function generateMatchDefinition(
  definitions: MandarinDefinition[],
  count: number
): MandarinMatchDefinitionParams {
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