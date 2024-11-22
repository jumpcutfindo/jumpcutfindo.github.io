import { useState } from "react";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chineseJson from "./api/chinese.json";
import { MandarinDefinition } from "./api/mandarin";
import { MandarinMetadata } from "./api/metadata";
import metadataJson from "./api/metadata.json";

export function MandarinMetadataComponent() {
  const chinese: MandarinDefinition[] = chineseJson as MandarinDefinition[];
  const metadata: MandarinMetadata = {
    ...metadataJson,
    lastUpdated: new Date(metadataJson.lastUpdated),
    wordCount: chinese.length,
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDialog}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>

      {isDialogOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeDialog}
        >
          <div
            className="bg-language-background rounded-lg shadow-lg w-72 p-8 space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-center space-y-2">
              <h1 className="text-8xl font-bold">{metadata.title}</h1>
              <p>{metadata.description}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col text-center">
                <span className="text-sm font-bold">LAST UPDATED</span>
                <span>{metadata.lastUpdated.toLocaleDateString()}</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-sm font-bold">WORD COUNT</span>
                <span>{metadata.wordCount} words</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
