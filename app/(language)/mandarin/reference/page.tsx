"use client";

import { useRouter } from "next/navigation";

import { faBookBookmark, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  LanguageBody,
  LanguageHeader,
  LanguageHeaderContent,
  LanguageLayout,
} from "../../language-layout";
import chineseJson from "../api/chinese.json";
import { MandarinDefinition } from "../api/mandarin";
import { MandarinMetadataComponent } from "../metadata";
import { MandarinReferenceList } from "./reference-list";

export default function MandarinReference() {
  const router = useRouter();

  const chinese = chineseJson as MandarinDefinition[];

  return (
    <LanguageLayout>
      <LanguageHeader icon={faBookBookmark} title="词语资料库">
        <LanguageHeaderContent>
          <button
            title="中文测验"
            onClick={() => router.push("/mandarin/quiz")}
          >
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <MandarinMetadataComponent />
        </LanguageHeaderContent>
      </LanguageHeader>
      <LanguageBody>
        <MandarinReferenceList
          chinese={chinese.map((definition, index) => ({
            ...definition,
            itemIndex: index,
          }))}
        />
      </LanguageBody>
    </LanguageLayout>
  );
}
