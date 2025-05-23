import { MandarinDefinition } from "../../api/mandarin";
import { MandarinMatchDefinitionData } from "../data";
import { selectRandomDefinition } from "./definition-utils";

export function generateMatchDefinition(
  definitions: MandarinDefinition[],
  count: number,
): MandarinMatchDefinitionData {
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
