import { useState } from "react";

import { useRouter } from "next/navigation";

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

type MandarinListItem = MandarinDefinition & { itemIndex: number };

interface MandarinReferenceListItemProps {
  item: MandarinListItem;
}

export function MandarinReferenceListItem({
  item,
}: MandarinReferenceListItemProps) {
  const router = useRouter();

  return (
    <div className="w-full">
      <div
        className="flex flex-col border rounded-lg p-4 mb-2 mx-2 cursor-pointer hover:bg-white/5"
        onClick={() => router.push(`/mandarin/reference/${item.itemIndex}`)}
      >
        <div className="flex flex-row items-center space-x-2">
          <span className="text-2xl">{item.word}</span>
          <span className="text-lg opacity-80">{item.pinyin}</span>
        </div>
        <div className="flex flex-row items-baseline space-x-2">
          <p className="space-x-2">
            <span
              className={`text-sm font-bold ${WORD_TYPE_CLASS_MAP[item.wordType]}`}
            >
              {item.wordType.toUpperCase()}
            </span>
            <span>{item.definition}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export interface MandarinReferenceListProps {
  chinese: MandarinListItem[];
}

export function MandarinReferenceList({ chinese }: MandarinReferenceListProps) {
  const [visibleChinese, setVisibleChinese] = useState(chinese);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    if (!searchTerm || searchTerm === "") {
      setVisibleChinese(chinese);
      return;
    }

    setVisibleChinese(
      chinese.filter(
        (definition) =>
          definition.word.toLowerCase().includes(searchTerm) ||
          definition.definition.toLowerCase().includes(searchTerm),
      ),
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col space-y-2 m-2">
        <div className="flex flex-row">
          <input
            type="search"
            placeholder="Search..."
            className="bg-white bg-opacity-10 rounded-lg p-2 text-white flex-1"
            onChange={onSearchChange}
          />
        </div>
        <span className="ms-auto text-sm font-semibold">
          {visibleChinese.length} RESULTS FOUND
        </span>
      </div>
      <Virtuoso
        totalCount={visibleChinese.length}
        itemContent={(index) => (
          <MandarinReferenceListItem item={visibleChinese[index]} />
        )}
      />
    </div>
  );
}
