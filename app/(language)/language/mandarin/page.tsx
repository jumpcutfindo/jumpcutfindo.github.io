"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chineseJson from "./api/chinese.json";
import { MandarinDefinition } from "./types/mandarin";
import FillBlankMandarinCard from "./cards/fill-in-the-blank";
import { generateFillBlank } from "./utils/generate-fill-blank";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function MandarinQuiz() {
  const chinese = chineseJson as MandarinDefinition[];

  const fillBlankExample = generateFillBlank(chinese, 4);

  const onCorrect = () => {
    console.log("Answer was correct");
  };

  const onIncorrect = () => {
    console.log("Answer was incorrect");
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center w-[480px] flex-1 bg-slate-900">
        <div className="w-full flex flex-row items-start p-4 space-x-2 bg-white/5">
          <FontAwesomeIcon icon={faLanguage} size="xl" />
          <h1>中文测验</h1>
        </div>
        <div className="w-full flex flex-col flex-1">
          <FillBlankMandarinCard
            answer={fillBlankExample.answer}
            options={fillBlankExample.options}
            example={fillBlankExample.example}
            blankedSentence={fillBlankExample.blankedSentence}
            onCorrect={onCorrect}
            onIncorrect={onIncorrect}
          />
        </div>
      </div>
    </div>
  );
}
