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

  const options = [answer];
  const optionWordSet = new Set();
  optionWordSet.add(answer.word);

  for (let i = 0; i < optionCount - 1; i++) {
    let option = selectRandomDefinition(definitions);

    while (optionWordSet.has(option.word)) {
      option = selectRandomDefinition(definitions);
    }

    options.push(option);
    optionWordSet.add(option.word);
  }

  return {
    answer,
    options,
    example,
    blankedSentence: example.sentence.replace(answer.word, " ____ "),
  };
}
