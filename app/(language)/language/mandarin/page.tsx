import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandarin Quiz",
  description: "The mandarin quiz!",
};

export default function MandarinQuiz() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center w-[480px] flex-1 bg-slate-900">
        <div className="w-full flex flex-row items-start p-4 space-x-2 bg-white/5">
          <FontAwesomeIcon icon="language" size="xl" />
          <h1>中文测验</h1>
        </div>
      </div>
    </div>
  );
}
