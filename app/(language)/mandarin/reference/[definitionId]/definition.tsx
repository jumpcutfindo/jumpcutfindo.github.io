"use client";

import { useRouter } from "next/navigation";

import {
  LanguageBody,
  LanguageHeader,
  LanguageLayout,
} from "@/app/(language)/language-layout";
import { faArrowLeft, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MandarinDefinition } from "../../api/mandarin";
import { MandarinMetadataComponent } from "../../metadata";

interface MandarinDefinitionComponent {
  index: number;
  definition: MandarinDefinition;
}

export default function MandarinDefinitionComponent({
  index,
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
        {index} {definition.word}
      </LanguageBody>
    </LanguageLayout>
  );
}
