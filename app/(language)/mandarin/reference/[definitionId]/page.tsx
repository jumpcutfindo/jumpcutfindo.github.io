import chineseJson from "../../api/chinese.json";
import { MandarinDefinition } from "../../api/mandarin";
import MandarinDefinitionComponent from "./definition";

// Create a page for each definition
export async function generateStaticParams() {
  const chinese = chineseJson as MandarinDefinition[];

  return chinese.map((chinese, index) => ({
    definitionId: index.toString(),
  }));
}

export default function MandarinDefinitionPage({
  params,
}: {
  params: { definitionId: string };
}) {
  const definitionId = parseInt(params.definitionId);

  return (
    <MandarinDefinitionComponent
      index={definitionId}
      definition={chineseJson[definitionId] as MandarinDefinition}
    />
  );
}
