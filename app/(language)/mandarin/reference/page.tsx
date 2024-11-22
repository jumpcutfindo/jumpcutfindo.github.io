"use client";

import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  LanguageBody,
  LanguageHeader,
  LanguageHeaderContent,
  LanguageLayout,
} from "../../language-layout";
import { MandarinMetadataComponent } from "../metadata";
import { MandarinDefinition } from "../api/mandarin";
import chineseJson from "../api/chinese.json";
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
        <MandarinReferenceList chinese={chinese} />
      </LanguageBody>
    </LanguageLayout>
  );
}
