"use client";

import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  LanguageHeader,
  LanguageHeaderContent,
  LanguageLayout,
} from "../../language-layout";
import { MandarinMetadataComponent } from "../metadata";

export default function MandarinReference() {
  return (
    <LanguageLayout>
      <LanguageHeader icon={faBookBookmark} title="词语资料库">
        <LanguageHeaderContent>
          <MandarinMetadataComponent />
        </LanguageHeaderContent>
      </LanguageHeader>
    </LanguageLayout>
  );
}
