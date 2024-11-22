import { useState } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
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
  children?: React.ReactNode;
}

function QuizCardHeader({ icon, title, children }: QuizCardHeaderProps) {
  return (
    <div className="w-full flex flex-row items-start space-x-2 p-4">
      <FontAwesomeIcon icon={icon} size="sm" className="my-auto" />
      <h1 className="my-auto text-sm font-bold">{title.toUpperCase()}</h1>
      {children && (
        <div className="flex flex-1 h-full justify-end">{children}</div>
      )}
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
  isVisible: boolean;
  isCorrect: boolean;
  children: React.ReactNode;
  onAcknowledgeResult: () => void;
}

function QuizCardResult({
  isVisible,
  isCorrect,
  children,
  onAcknowledgeResult,
}: QuizCardResultProps) {
  const [isExpanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  const getClassName = () => {
    let classNames = [
      "fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col p-4 space-y-4 w-screen max-w-[480px] transform transition-transform duration-200 ease-in-out z-50",
    ];

    if (isVisible) {
      if (isExpanded) {
        classNames.push("translate-y-0");
      } else {
        classNames.push("translate-y-[calc(100%-4rem)]");
      }
    } else {
      classNames.push("translate-y-full");
    }

    if (isCorrect) {
      classNames.push("border-t border-t-emerald-400 bg-emerald-700");
    } else {
      classNames.push("border-t border-t-red-400 bg-red-700");
    }

    return classNames.join(" ");
  };

  return (
    <div className={getClassName()}>
      <div
        className="flex flex-row space-x-4 w-full h-8 cursor-pointer"
        onClick={toggleExpanded}
      >
        <FontAwesomeIcon
          icon={isCorrect ? faCheck : faTimes}
          size="lg"
          className="my-auto"
        />
        <p className="text-lg my-auto flex-1">
          {isCorrect ? "Correct!" : "Incorrect!"}
        </p>

        <span className="my-auto px-2">
          <FontAwesomeIcon icon={isExpanded ? faCaretDown : faCaretUp} />
        </span>
      </div>
      {children}
      <button
        className="p-2 rounded-lg bg-white/20 hover:bg-white/30"
        onClick={onAcknowledgeResult}
      >
        OK
      </button>
    </div>
  );
}

export { QuizCard, QuizCardHeader, QuizCardBody, QuizCardResult };
