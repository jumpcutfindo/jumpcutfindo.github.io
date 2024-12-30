import { useState } from "react";

import dayjs from "dayjs";
import { Popover } from "react-tiny-popover";

import { QuizCardStat } from "../../api/stats";
import { getHeatMapItems } from "./heatmap-utils";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function EmptyTile() {
  return <span className="w-3 h-3" />;
}

interface TextTileProps {
  text: string;
  align?: "start" | "end";
}

function TextTile(props: TextTileProps) {
  const { text, align } = props;

  let className = ["flex", "h-3", "rounded-sm", "text-xs", "font-bold"];

  if (align === "end") {
    className.push("justify-end");
  } else {
    className.push("justify-start");
  }

  return <span className={className.join(" ")}>{text}</span>;
}

interface HeatMapTileProps {
  date: string;
  index: number;
  items: QuizCardStat[];
}

function HeatMapTile(props: HeatMapTileProps) {
  const { date, index, items } = props;

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  if (index % 8 === 0) {
    return (
      <span className="w-3 h-3 rounded-sm text-xs font-bold">
        {dayjs(date).format("MMM")}
      </span>
    );
  }

  const questionCountOnDate = items.length;
  const className = ["w-3", "h-3", "rounded-sm", "cursor-pointer"];

  if (!questionCountOnDate) {
    className.push("bg-white opacity-5");
  } else {
    className.push("bg-green-500");
  }

  if (questionCountOnDate >= 20) {
    className.push("opacity-100");
  } else if (questionCountOnDate >= 15) {
    className.push("opacity-80");
  } else if (questionCountOnDate >= 10) {
    className.push("opacity-60");
  } else if (questionCountOnDate >= 5) {
    className.push("opacity-40");
  } else if (questionCountOnDate >= 1) {
    className.push("opacity-20");
  }

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["top", "bottom", "left", "right"]} // preferred positions by priority
      content={
        <div className="flex flex-col justify-left bg-language-background p-2 rounded-md border border-language-foreground/20">
          <span className="text-xs font-bold">{date}</span>
          <span className="text-xs">{items.length} question(s)</span>
        </div>
      }
    >
      <span
        className={className.join(" ")}
        onMouseEnter={() => setPopoverOpen(true)}
        onMouseLeave={() => setPopoverOpen(false)}
        onClick={() => setPopoverOpen(true)}
      ></span>
    </Popover>
  );
}

interface HeatMapProps {
  startDate: Date;
  questionsByDay: Record<string, QuizCardStat[]>;
}

export function HeatMap(props: HeatMapProps) {
  const { startDate: sd, questionsByDay } = props;

  const startDate = dayjs(sd);
  const heatMapItems = getHeatMapItems(startDate.format(), dayjs().format());

  return (
    <div className="flex flex-row pb-4">
      <div className="grid grid-rows-8 grid-flow-col gap-1 pe-2">
        <EmptyTile />
        {DAYS_OF_WEEK.map((day) => (
          <TextTile key={day} text={day} align="end" />
        ))}
      </div>
      <div className="grid grid-rows-8 grid-flow-col gap-2 overflow-auto">
        {heatMapItems.map((date, index) => (
          <HeatMapTile
            key={date}
            date={date}
            index={index}
            items={questionsByDay[date] || []}
          />
        ))}
      </div>
    </div>
  );
}
