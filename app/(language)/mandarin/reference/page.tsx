"use client";

import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import { LanguageBody, LanguageLayout } from "../../language-layout";
import chineseJson from "../api/chinese.json";
import { MandarinDefinition } from "../api/mandarin";
import { MandarinLayoutHeader } from "../mandarin-header";
import { MandarinReferenceList } from "./reference-list";

export default function MandarinReference() {
  const chinese = chineseJson as MandarinDefinition[];

  return (
    <LanguageLayout>
      <MandarinLayoutHeader
        headerIcon={faBookBookmark}
        headerTitle="词语资料库"
      />
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
