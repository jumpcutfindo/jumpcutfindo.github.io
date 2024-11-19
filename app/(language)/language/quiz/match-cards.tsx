import {
  faCheck,
  faCheckCircle,
  faCircle,
  faCircleDot,
  faDotCircle,
  faWandMagic,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import {
  QuizCard,
  QuizCardHeader,
  QuizCardBody,
  QuizCardResult,
} from "./quiz-card-wrapper";
import { QuizState } from "./types/quiz";
import { CardProps, MatchCardParams } from "./types/card";
import { shuffle } from "./utils/shuffle";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { on } from "events";

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
  tileKey,
  option,
  renderOption,
  isFrom,
  isSelected,
  onSelect,
  isMatched,
  isShaking,
}: MatchCardTileProps<T>) {
  const getClassName = () => {
    let classNames = [
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
  onAnswered,
  onCorrect,
  onNext,
  quizState,
  options,
  renderOption,
}: MatchCardProps<T>) {
  const fromOptions = useMemo(() => shuffle([...options]), [options]);
  const toOptions = useMemo(() => shuffle([...options]), [options]);

  const [matchedSets, setMatchedSets] = useState<Set<T>>(new Set());

  const [shakingTiles, setShakingTiles] = useState<Set<String>>(new Set());

  const [selectedFrom, setSelectedFrom] = useState<T | null>(null);
  const [selectedFromKey, setSelectedFromKey] = useState<string | null>(null);
  const [selectedTo, setSelectedTo] = useState<T | null>(null);
  const [selectedToKey, setSelectedToKey] = useState<string | null>(null);

  const onSelectTo = (key: string, option: T) => {
    setSelectedFromKey(key);
    setSelectedTo(option);
  };

  const onSelectFrom = (key: string, option: T) => {
    setSelectedToKey(key);
    setSelectedFrom(option);
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

  const onAcknowledgeResult = () => {
    matchedSets.clear();
    onNext();
  };

  useEffect(() => {
    // Check if a "from" and a "to" are selected
    if (selectedFrom && selectedTo) {
      if (selectedFrom === selectedTo) {
        // If they are the same item, then it is correct
        setMatchedSets((prevSet) => {
          prevSet.add(selectedFrom);
          return prevSet;
        });
      } else {
        // If they are the wrong item, then it is incorrect
        // Shake them!
        setShakingTiles((prevSet) => {
          prevSet.add(selectedFromKey!);
          prevSet.add(selectedToKey!);
          return prevSet;
        });

        // Remove them after shaking is completed
        setTimeout(() => {
          setShakingTiles((prevSet) => {
            prevSet.delete(selectedFromKey!);
            prevSet.delete(selectedToKey!);
            return prevSet;
          });
        }, 200);
      }

      // Reset selection
      setSelectedFrom(null);
      setSelectedTo(null);
    }
  }, [
    matchedSets,
    setMatchedSets,
    selectedFrom,
    selectedFromKey,
    selectedTo,
    selectedToKey,
  ]);

  useEffect(() => {
    if (matchedSets.size === options.length) {
      onAnswered();
      onCorrect();
    }
  }, [options, matchedSets.size]);

  return (
    <QuizCard>
      <QuizCardHeader icon={faWandMagic} title="Match the Cards">
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

      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={true} // Always true for match cards
        onAcknowledgeResult={onAcknowledgeResult}
      >
        <span>Successfully matched all pairs! Good job!</span>
      </QuizCardResult>
    </QuizCard>
  );
}
