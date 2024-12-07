import {
  faBookBookmark,
  faChartColumn,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

import { MandarinWordType } from "./api/mandarin";

export const MANDARIN_MENU_ITEMS = [
  {
    title: "词语资料库",
    href: "/mandarin/reference",
    icon: faBookBookmark,
  },
  {
    title: "中文测验",
    href: "/mandarin/quiz",
    icon: faLanguage,
  },
  {
    title: "测验统计",
    href: "/mandarin/quiz/stats",
    icon: faChartColumn,
  },
];

export const WORD_TYPE_CLASS_MAP: Record<MandarinWordType, string> = {
  noun: "text-sky-400",
  verb: "text-emerald-400",
  idiom: "text-rose-400",
  adjective: "text-amber-400",
  adverb: "text-pink-400",
  conjunction: "text-pink-400",
};
