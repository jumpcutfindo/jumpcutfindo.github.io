import chineseJson from "./api/chinese.json";
import metadataJson from "./api/metadata.json";
import { MandarinDefinition } from "./api/mandarin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function MandarinMetadata() {
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

  return (
    <div>
      <button onClick={toggleDialog}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="p-6 bg-language-background rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Mandarin Metadata</h2>
            <ul className="space-y-2">
              <li>
                <strong>Last Updated:</strong>{" "}
                {metadata.lastUpdated.toLocaleDateString()}
              </li>
              <li>
                <strong>Word Count:</strong> {metadata.wordCount}
              </li>
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                onClick={toggleDialog}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
