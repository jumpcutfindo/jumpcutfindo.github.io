import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandarin Quiz",
  description: "The mandarin quiz!",
};

export default function MandarinQuiz() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[480px] min-h-screen bg-slate-900 space-y-4">
        <FontAwesomeIcon icon="language" size="8x" />
        <h1 className="text-4xl">The Mandarin Quiz</h1>
        <button className="w-64 rounded-full bg-slate-200 text-slate-900 px-1 py-2 hover:bg-slate-100 transition-all">
          Start
        </button>
      </div>
    </div>
  );
}
