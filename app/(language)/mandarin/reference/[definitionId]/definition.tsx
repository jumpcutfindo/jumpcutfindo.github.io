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
      <LanguageHeader icon={faBookBookmark} title="词语资料库">
        <div className="flex flex-row flex-1">
          <button onClick={() => router.back()} className="rounded-full">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
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
