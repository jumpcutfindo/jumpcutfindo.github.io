import {
  Icon,
  IconDefinition,
  IconProp,
} from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface QuizCardProps {
  children: React.ReactNode;
}

function QuizCard({ children }: QuizCardProps) {
  return <div className="w-full flex flex-col flex-1">{children}</div>;
}

interface QuizCardHeaderProps {
  icon: IconDefinition;
  title: string;
}

function QuizCardHeader({ icon, title }: QuizCardHeaderProps) {
  return (
    <div className="w-full flex flex-row items-start space-x-2 p-4">
      <FontAwesomeIcon icon={icon} size="sm" className="my-auto" />
      <h1 className="my-auto text-sm font-bold">{title.toUpperCase()}</h1>
    </div>
  );
}

interface QuizCardBodyProps {
  children: React.ReactNode;
}

function QuizCardBody({ children }: QuizCardBodyProps) {
  return (
    <div className="w-full flex flex-col flex-1 px-4 space-y-4">{children}</div>
  );
}

interface QuizCardResultProps {
  isCorrect: boolean;
  children: React.ReactNode;
}

function QuizCardResult({ isCorrect, children }: QuizCardResultProps) {
  return (
    <div
      className={`flex flex-col p-4 space-y-4 ${
        isCorrect ? "bg-emerald-700" : "bg-red-700"
      }`}
    >
      <div className="flex flex-row space-x-4">
        <FontAwesomeIcon
          icon={isCorrect ? faCheck : faTimes}
          size="lg"
          className="my-auto"
        />
        <p className="text-lg my-auto">
          {isCorrect ? "Correct!" : "Incorrect!"}
        </p>
      </div>
      {children}
    </div>
  );
}

export { QuizCard, QuizCardHeader, QuizCardBody, QuizCardResult };
