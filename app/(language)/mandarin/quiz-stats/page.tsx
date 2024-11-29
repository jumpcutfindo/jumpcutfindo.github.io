import {
  faBookBookmark,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

import { LanguageBody, LanguageLayout } from "../../language-layout";
import { MandarinLayoutHeader } from "../mandarin-header";
import { MandarinReferenceList } from "../reference/reference-list";

export default function QuizStats() {
  return (
    <LanguageLayout>
      <MandarinLayoutHeader headerIcon={faChartColumn} headerTitle="测验统计" />
      <LanguageBody>This is a body</LanguageBody>
    </LanguageLayout>
  );
}
