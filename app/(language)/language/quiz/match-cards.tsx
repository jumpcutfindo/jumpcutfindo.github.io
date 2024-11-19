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
import { useState } from "react";

interface MatchCardTileProps<T> {
  option: T;
  renderOption: (option: T, isFrom: boolean) => JSX.Element;
  isFrom: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

function MatchCardTile<T>({
  option,
  renderOption,
  isFrom,
  isSelected,
  onSelect,
}: MatchCardTileProps<T>) {
  const getClassName = () => {
    let classNames = [
      "flex flex-col justify-center items-center p-2 rounded-lg h-32 border hover:bg-white/5",
    ];

    if (isSelected) {
      classNames.push("bg-white/5");
    }

    return classNames.join(" ");
  };

  return (
    <button className={getClassName()} onClick={onSelect}>
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
  const [selectedFrom, setSelectedFrom] = useState<T | null>(null);
  const [selectedTo, setSelectedTo] = useState<T | null>(null);

  const fromOptions = shuffle([...options]);
  const toOptions = shuffle([...options]);

  const onSelectTo = (option: T) => {
    setSelectedTo(option);
  };

  const onSelectFrom = (option: T) => {
    setSelectedFrom(option);
  };

  const renderOptions = () => {
    const tiles: JSX.Element[] = [];

    const fromElements = options.map((option) => {
      return (
        <MatchCardTile<T>
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={true}
          isSelected={selectedFrom === option}
          onSelect={() => onSelectFrom(option)}
        />
      );
    });

    const toElements = options.map((option) => {
      return (
        <MatchCardTile<T>
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={false}
          isSelected={selectedTo === option}
          onSelect={() => onSelectTo(option)}
        />
      );
    });

    for (let i = 0; i < fromOptions.length; i++) {
      tiles.push(fromElements[i]);
      tiles.push(toElements[i]);
    }

    return tiles;
  };

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
