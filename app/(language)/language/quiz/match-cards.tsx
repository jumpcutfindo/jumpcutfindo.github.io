import { faCoffee, faWandMagic } from "@fortawesome/free-solid-svg-icons";
import renderResult from "next/dist/server/render-result";
import {
  QuizCard,
  QuizCardHeader,
  QuizCardBody,
  QuizCardResult,
} from "./quiz-card-wrapper";
import { QuizState } from "./types/quiz";
import { CardProps, MatchCardParams } from "./types/card";

type MatchCardProps<T> = CardProps & MatchCardParams<T>;

export function MatchCard<T>({ quizState, options }: MatchCardProps<T>) {
  return (
    <QuizCard>
      <QuizCardHeader icon={faWandMagic} title="Match the Cards" />
      <QuizCardBody>
        <span>Match cards body</span>
      </QuizCardBody>

      <QuizCardResult
        isVisible={quizState === QuizState.Review}
        isCorrect={true}
        onAcknowledgeResult={() => {}}
      >
        <span>Result example</span>
      </QuizCardResult>
    </QuizCard>
  );
}
