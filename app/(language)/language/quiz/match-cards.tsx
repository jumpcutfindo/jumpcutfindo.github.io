import { faWandMagic } from "@fortawesome/free-solid-svg-icons";
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
import { useEffect, useState } from "react";

interface MatchCardTileProps<T> {
  option: T;
  renderOption: (option: T, isFrom: boolean) => JSX.Element;
  isFrom: boolean;
  isSelected: boolean;
  onSelect: () => void;
  isMatched: boolean;
}

function MatchCardTile<T>({
  option,
  renderOption,
  isFrom,
  isSelected,
  onSelect,
  isMatched,
}: MatchCardTileProps<T>) {
  const getClassName = () => {
    let classNames = [
      "flex flex-col justify-center items-center p-2 rounded-lg h-32 border hover:bg-white/5 disabled:opacity-30",
    ];

    if (isSelected) {
      classNames.push("bg-white/5");
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
  quizState,
  options,
  renderOption,
}: MatchCardProps<T>) {
  const [matchedSets, setMatchedSets] = useState<Set<T>>(new Set());

  const [fromOptions, setFromOptions] = useState<T[]>(shuffle([...options]));
  const [toOptions, setToOptions] = useState<T[]>(shuffle([...options]));

  const [selectedFrom, setSelectedFrom] = useState<T | null>(null);
  const [selectedTo, setSelectedTo] = useState<T | null>(null);

  const onSelectTo = (option: T) => {
    setSelectedTo(option);
  };

  const onSelectFrom = (option: T) => {
    setSelectedFrom(option);
  };

  const renderOptions = () => {
    const tiles: JSX.Element[] = [];

    const fromElements = fromOptions.map((option) => {
      return (
        <MatchCardTile<T>
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={true}
          isSelected={selectedFrom === option}
          onSelect={() => onSelectFrom(option)}
          isMatched={matchedSets.has(option)}
        />
      );
    });

    const toElements = toOptions.map((option) => {
      return (
        <MatchCardTile<T>
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={false}
          isSelected={selectedTo === option}
          onSelect={() => onSelectTo(option)}
          isMatched={matchedSets.has(option)}
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
    // Check if a "from" and a "to" are selected
    if (selectedFrom && selectedTo) {
      // If they are the same item, then it is correct
      if (selectedFrom === selectedTo) {
        setMatchedSets((prevSet) => {
          prevSet.add(selectedFrom);
          return prevSet;
        });
      }

      // Reset selection
      setSelectedFrom(null);
      setSelectedTo(null);
    }
  }, [matchedSets, setMatchedSets, selectedFrom, selectedTo]);

  return (
    <QuizCard>
      <QuizCardHeader icon={faWandMagic} title="Match the Cards" />
      <QuizCardBody>
        <div className="grid grid-cols-2 gap-4">{renderOptions()}</div>
      </QuizCardBody>

      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={true}
        onAcknowledgeResult={() => {}}
      >
        Example result
      </QuizCardResult>
    </QuizCard>
  );
}
