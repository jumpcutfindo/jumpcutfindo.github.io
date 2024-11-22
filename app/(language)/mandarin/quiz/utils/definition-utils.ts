import { MandarinDefinition } from "../../api/mandarin";

export function selectRandomDefinition(definitions: MandarinDefinition[]) {
  return definitions[Math.floor(Math.random() * definitions.length)];
}
