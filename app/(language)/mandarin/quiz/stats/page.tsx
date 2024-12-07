import { LanguageBody, LanguageLayout } from "@/app/(language)/language-layout";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

import { MandarinLayoutHeader } from "../../mandarin-header";

export default function QuizStats() {
  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faChartColumn} headerTitle="测验统计" />
      <LanguageBody>This is a body</LanguageBody>
    </LanguageLayout>
  );
}
