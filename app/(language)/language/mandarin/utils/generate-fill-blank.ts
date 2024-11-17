import { FillBlankCard } from "../types/card";
import { MandarinDefinition } from "../types/mandarin";
import { selectRandomDefinition } from "./definition-utils";

export function generateFillBlank(
  definitions: MandarinDefinition[],
  optionCount: number
): FillBlankCard {
  const answer = selectRandomDefinition(definitions);
  const example =
    answer.examples[Math.floor(Math.random() * answer.examples.length)];

  const options = [];
  for (let i = 0; i < optionCount - 1; i++) {
    let randomDefinition;

    // Ensure that the random definition is not the same as the answer
    while (!randomDefinition || randomDefinition.word === answer.word) {
      randomDefinition = selectRandomDefinition(definitions);
    }

    options.push(randomDefinition);
  }

  options.push(answer);

  return {
    answer,
    options,
    example,
    blankedSentence: example.sentence.replace(answer.word, " ____ "),
  };
}
