import { useEffect, useMemo, useState } from "react";

import {
  faCheck,
  faCircle,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { QuizCard, QuizCardBody, QuizCardHeader } from "./quiz-card-wrapper";
import { CardProps, MatchCardParams } from "./types/card";
import { shuffle } from "./utils/shuffle";

interface MatchCardTileProps<T> {
  tileKey: string;
  option: T;
  renderOption: (option: T, isFrom: boolean) => JSX.Element;
  isFrom: boolean;
  isSelected: boolean;
  onSelect: () => void;
  isMatched: boolean;
  isShaking: boolean;
}

function MatchCardTile<T>({
  option,
  renderOption,
  isFrom,
  isSelected,
  onSelect,
  isMatched,
  isShaking,
}: MatchCardTileProps<T>) {
  const getClassName = () => {
    const classNames = [
      "flex flex-col justify-center items-center p-2 rounded-lg h-32 border disabled:opacity-20 transition-all",
    ];

    if (isSelected) {
      classNames.push("bg-white/30");
    }

    if (isShaking) {
      classNames.push("animate-shake");
    }

    if (isMatched) {
      classNames.push("border border-emerald-400 bg-emerald-700");
    }

    if (!isSelected && !isMatched) {
      // To avoid hover effect overriding other styling
      classNames.push("bg-transparent hover:bg-white/5");
    }

    return classNames.join(" ");
  };

  return (
    <button className={getClassName()} onClick={onSelect} disabled={isMatched}>
      {renderOption(option, isFrom)}
    </button>
  );
}

type MatchCardProps<T> = CardProps &
  MatchCardParams<T> & {
    renderOption: (option: T, isFrom: boolean) => JSX.Element;
  };

export function MatchCard<T>({
  cardTitle,
  onAnswered,
  onCorrect,
  options,
  renderOption,
  setRenderedResult,
  setOnAcknowledge,
}: MatchCardProps<T>) {
  const fromOptions = useMemo(() => shuffle([...options]), [options]);
  const toOptions = useMemo(() => shuffle([...options]), [options]);

  const [matchedSets, setMatchedSets] = useState<Set<T>>(new Set());

  const [shakingTiles, setShakingTiles] = useState<Set<string>>(new Set());

  const [selectedFrom, setSelectedFrom] = useState<T | null>(null);
  const [selectedFromKey, setSelectedFromKey] = useState<string | null>(null);
  const [selectedTo, setSelectedTo] = useState<T | null>(null);
  const [selectedToKey, setSelectedToKey] = useState<string | null>(null);

  const checkComplete = (matchedSetSize: number) => {
    if (matchedSetSize === options.length) {
      // When all cards are matched
      setRenderedResult(<span>Successfully matched all pairs! Good job!</span>);
      onAnswered();
      onCorrect();

      // Update on acknowledged
      setOnAcknowledge(() => () => {
        setMatchedSets(new Set());
        setShakingTiles(new Set());
        setSelectedFrom(null);
        setSelectedFromKey(null);
        setSelectedTo(null);
        setSelectedToKey(null);
      });
    }
  };

  const checkMatch = (
    fromKey: string | null,
    from: T | null,
    toKey: string | null,
    to: T | null,
  ) => {
    if (from && to) {
      if (from === to) {
        // If match, add to matched sets
        setMatchedSets((prevSet) => {
          prevSet.add(from);
          return prevSet;
        });

        // Check if the game is complete
        checkComplete(matchedSets.size + 1);
      } else {
        // If not match, shake them to indicate error
        setShakingTiles((prevSet) => {
          prevSet.add(fromKey!);
          prevSet.add(toKey!);
          return prevSet;
        });
      }

      // Unselect both items
      setSelectedFrom(null);
      setSelectedTo(null);
    }
  };

  const onSelectTo = (key: string, option: T) => {
    // Deselect if selected
    if (selectedToKey === key) {
      setSelectedTo(null);
      setSelectedToKey(null);
      return;
    }

    setSelectedToKey(key);
    setSelectedTo(option);

    checkMatch(selectedFromKey, selectedFrom, key, option);
  };

  const onSelectFrom = (key: string, option: T) => {
    // Deselect if selected
    if (selectedFromKey === key) {
      setSelectedFrom(null);
      setSelectedFromKey(null);
      return;
    }

    setSelectedFromKey(key);
    setSelectedFrom(option);

    checkMatch(key, option, selectedToKey, selectedTo);
  };

  const renderOptions = () => {
    const tiles: JSX.Element[] = [];

    const fromElements = fromOptions.map((option, index) => {
      const tileKey = `fromTile-${index}`;
      return (
        <MatchCardTile<T>
          key={tileKey}
          tileKey={tileKey}
          option={option}
          renderOption={renderOption}
          isFrom={true}
          isSelected={selectedFrom === option}
          onSelect={() => onSelectFrom(tileKey, option)}
          isMatched={matchedSets.has(option)}
          isShaking={shakingTiles.has(tileKey)}
        />
      );
    });

    const toElements = toOptions.map((option, index) => {
      const tileKey = `toTile-${index}`;

      return (
        <MatchCardTile<T>
          key={tileKey}
          tileKey={tileKey}
          option={option}
          renderOption={renderOption}
          isFrom={false}
          isSelected={selectedTo === option}
          onSelect={() => onSelectTo(tileKey, option)}
          isMatched={matchedSets.has(option)}
          isShaking={shakingTiles.has(tileKey)}
        />
      );
    });

    for (let i = 0; i < options.length; i++) {
      tiles.push(fromElements[i]);
      tiles.push(toElements[i]);
    }

    return tiles;
  };

  useEffect(() => {
    if (shakingTiles.size > 0) {
      setTimeout(() => {
        setShakingTiles(new Set());
      }, 200);
    }
  }, [shakingTiles.size]);

  return (
    <QuizCard>
      <QuizCardHeader
        icon={faWandMagicSparkles}
        title={cardTitle ? cardTitle : "Match the Cards"}
      >
        <div className="flex flex-row space-x-2 items-center">
          {options.map((option, index) => {
            if (index >= matchedSets.size) {
              return (
                <FontAwesomeIcon
                  key={`completion-indicator-${index}`}
                  icon={faCircle}
                  size="2xs"
                  className="w-4 opacity-50"
                />
              );
            } else {
              return (
                <FontAwesomeIcon
                  key={`completion-indicator-${index}`}
                  icon={faCheck}
                  size="sm"
                  className="w-4 text-emerald-500"
                />
              );
            }
          })}
        </div>
      </QuizCardHeader>
      <QuizCardBody>
        <div className="grid grid-cols-2 gap-4">{renderOptions()}</div>
      </QuizCardBody>
    </QuizCard>
  );
}
