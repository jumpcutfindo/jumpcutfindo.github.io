import {
  faEllipsisVertical,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { LanguageDropdown } from "../language-dropdown";
import { LanguageHeader, LanguageHeaderContent } from "../language-layout";
import chineseJson from "./api/chinese.json";
import { MandarinDefinition } from "./api/mandarin";
import { MandarinMetadata } from "./api/metadata";
import metadataJson from "./api/metadata.json";
import { MANDARIN_MENU_ITEMS } from "./constants";

interface MandarinLayoutHeaderProps {
  headerIcon: IconDefinition;
  headerTitle: string;
  children?: React.ReactNode;
}

function MandarinLayoutHeader({
  headerIcon,
  headerTitle,
  children,
}: MandarinLayoutHeaderProps) {
  const chinese: MandarinDefinition[] = chineseJson as MandarinDefinition[];
  const metadata: MandarinMetadata = {
    ...metadataJson,
    lastUpdated: new Date(metadataJson.lastUpdated),
    wordCount: chinese.length,
  };

  return (
    <LanguageHeader icon={headerIcon} title={headerTitle}>
      <LanguageHeaderContent>
        {children}
        <LanguageDropdown
          menuButtonIcon={faEllipsisVertical}
          menuItems={MANDARIN_MENU_ITEMS}
          menuFooter={
            <div className="flex flex-row justify-between px-2 py-1 opacity-50">
              <span className="text-xs">
                {metadata.lastUpdated.toLocaleDateString()}
              </span>
              <span className="text-xs">{metadata.wordCount} words</span>
            </div>
          }
        />
      </LanguageHeaderContent>
    </LanguageHeader>
  );
}

export { MandarinLayoutHeader };
