import chineseJson from "./api/chinese.json";
import metadataJson from "./api/metadata.json";
import { MandarinDefinition } from "./api/mandarin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export function MandarinMetadata() {
  const chinese: MandarinDefinition[] = chineseJson as MandarinDefinition[];
  const metadata: MandarinMetadata = {
    ...metadataJson,
    lastUpdated: new Date(metadataJson.lastUpdated),
    wordCount: chinese.length,
  };

  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
    </div>
  );
}
