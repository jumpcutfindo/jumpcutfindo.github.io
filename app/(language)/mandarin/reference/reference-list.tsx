import { Virtuoso } from "react-virtuoso";
import { MandarinDefinition, MandarinWordType } from "../api/mandarin";

const WORD_TYPE_CLASS_MAP: Record<MandarinWordType, string> = {
  noun: "text-sky-400",
  verb: "text-emerald-400",
  idiom: "text-rose-400",
  adjective: "text-amber-400",
  adverb: "text-pink-400",
  conjunction: "text-pink-400",
};

interface MandarinReferenceListItemProps {
  definition: MandarinDefinition;
}

export function MandarinReferenceListItem({
  definition,
}: MandarinReferenceListItemProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col border rounded-lg p-4 mb-2 mx-2">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-2xl">{definition.word}</span>
          <span className="text-lg opacity-80">{definition.pinyin}</span>
        </div>
        <div className="flex flex-row items-baseline space-x-2">
          <p className="space-x-2">
            <span
              className={`text-sm font-bold ${WORD_TYPE_CLASS_MAP[definition.wordType]}`}
            >
              {definition.wordType.toUpperCase()}
            </span>
            <span>{definition.definition}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export interface MandarinReferenceListProps {
  chinese: MandarinDefinition[];
}

export function MandarinReferenceList({ chinese }: MandarinReferenceListProps) {
  return (
    <Virtuoso
      totalCount={chinese.length}
      itemContent={(index) => (
        <MandarinReferenceListItem definition={chinese[index]} />
      )}
    />
  );
}
