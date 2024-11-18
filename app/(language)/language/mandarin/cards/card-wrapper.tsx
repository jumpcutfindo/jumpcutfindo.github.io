import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
  isVisible: boolean;
  isCorrect: boolean;
  children: React.ReactNode;
}

function QuizCardResult({
  isVisible,
  isCorrect,
  children,
}: QuizCardResultProps) {
  const getClassName = () => {
    let classNames = [
      "fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col p-4 space-y-4 w-screen max-w-[480px] transform transition-transform duration-250 ease-in-out z-50",
    ];

    if (isVisible) {
      classNames.push("translate-y-0");
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
      <div className="flex flex-row space-x-4 w-full">
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
