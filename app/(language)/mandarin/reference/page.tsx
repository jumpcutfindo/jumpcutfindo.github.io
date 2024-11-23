"use client";

import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

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
  const chinese = chineseJson as MandarinDefinition[];

  return (
    <LanguageLayout>
      <LanguageHeader icon={faBookBookmark} title="词语资料库">
        <LanguageHeaderContent>
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
