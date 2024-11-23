"use client";

import { useRouter } from "next/navigation";

import {
  LanguageBody,
  LanguageHeader,
  LanguageLayout,
} from "@/app/(language)/language-layout";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";

import { MandarinDefinition } from "../../api/mandarin";
import { WORD_TYPE_CLASS_MAP } from "../../constants";
import { MandarinMetadataComponent } from "../../metadata";

interface MandarinDefinitionComponent {
  definition: MandarinDefinition;
}

export default function MandarinDefinitionComponent({
  definition,
}: MandarinDefinitionComponent) {
  const router = useRouter();

  return (
    <LanguageLayout>
      <LanguageHeader isDynamic icon={faBookBookmark} title="词典">
        <div className="flex flex-row flex-1">
          <button onClick={() => router.back()} className="rounded-full">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="ms-2">词典：{definition.word}</span>
        </div>
        <div>
          <MandarinMetadataComponent />
        </div>
      </LanguageHeader>
      <LanguageBody>
        <div className="flex flex-col p-4 space-y-4">
          <span className="text-sm font-bold">DEFINITION</span>
          <div>
            <table className="border border-collapse">
              <tbody>
                <tr className="text-center border">
                  {definition.word.split("").map((char, index) => (
                    <td
                      key={`${char}-${index}`}
                      className="text-6xl border p-2"
                    >
                      {char}
                    </td>
                  ))}
                </tr>
                <tr className="text-center border">
                  {definition.pinyin.split(" ").map((char, index) => (
                    <td
                      key={`${char}-${index}`}
                      className="text-2xl text-white/60 border p-2"
                    >
                      {char}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span
                className={`font-bold ${WORD_TYPE_CLASS_MAP[definition.wordType]}`}
              >
                {definition.wordType.toLocaleUpperCase()}
              </span>
              <span className="text-xl">{definition.definition}</span>
            </div>
            <div>
              <button
                className="border rounded-lg px-4 py-2 hover:bg-white/5"
                onClick={() =>
                  window.open(
                    `https://www.youdao.com/result?word=${definition.word}&lang=en`,
                    "_blank",
                  )
                }
              >
                <FontAwesomeIcon icon={faBookBookmark} />
                <span className="ms-2">有道词典</span>
              </button>
            </div>
          </div>
          <span className="outline outline-1 outline-white/30"></span>
          <div className="flex flex-col space-y-4">
            <span className="text-sm font-bold">EXAMPLES</span>
            <div className="flex flex-col space-y-4">
              {definition.examples.map((example, index) => (
                <div key={index} className="flex flex-col">
                  <span className="flex flex-row text-2xl">
                    <Markdown>
                      {`${index + 1}. ${example.sentence.replace(definition.word, `**${definition.word}**`)}`}
                    </Markdown>
                  </span>
                  <span className="text-lg">{example.englishTranslation}</span>
                </div>
              ))}
            </div>
            <div>
              <button
                className="border rounded-lg px-4 py-2 hover:bg-white/5"
                onClick={() =>
                  window.open(
                    `https://www.youdao.com/result?word=lj%3A${definition.word}&lang=en`,
                    "_blank",
                  )
                }
              >
                <FontAwesomeIcon icon={faCommentDots} />
                <span className="ms-2">更多例子</span>
              </button>
            </div>
          </div>
        </div>
      </LanguageBody>
    </LanguageLayout>
  );
}
