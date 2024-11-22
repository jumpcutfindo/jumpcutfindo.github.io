import { MandarinDefinition } from "../types/mandarin";

export function selectRandomDefinition(definitions: MandarinDefinition[]) {
  return definitions[Math.floor(Math.random() * definitions.length)];
}
