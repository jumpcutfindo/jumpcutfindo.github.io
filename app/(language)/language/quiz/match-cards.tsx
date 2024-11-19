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

interface MatchCardTileProps<T> {
  option: T;
  renderOption: (option: T, isFrom: boolean) => JSX.Element;
  isFrom: boolean;
}

function MatchCardTile<T>({
  option,
  renderOption,
  isFrom,
}: MatchCardTileProps<T>) {
  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-lg h-32 border">
      {renderOption(option, isFrom)}
    </div>
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
  const fromOptions: JSX.Element[] = shuffle(
    options.map((option) => {
      return (
        <MatchCardTile
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={true}
        />
      );
    })
  );

  const toOptions: JSX.Element[] = shuffle(
    options.map((option) => {
      return (
        <MatchCardTile
          key={uuidv4()}
          option={option}
          renderOption={renderOption}
          isFrom={false}
        />
      );
    })
  );

  const renderOptions = () => {
    const tiles: JSX.Element[] = [];

    for (let i = 0; i < fromOptions.length; i++) {
      tiles.push(fromOptions[i]);
      tiles.push(toOptions[i]);
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
