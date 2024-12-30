import { useEffect, useRef, useState } from "react";

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
  className?: string;
}

function TextTile(props: TextTileProps) {
  const { text, align, className } = props;

  const defaultClassName = [
    "flex",
    "h-3",
    "rounded-sm",
    "text-xs",
    "font-bold",
  ];

  if (align === "end") {
    defaultClassName.push("justify-end");
  } else {
    defaultClassName.push("justify-start");
  }

  return (
    <span className={`${defaultClassName.join(" ")} ${className}`}>{text}</span>
  );
}

interface HeatMapTileProps {
  date: string;
  items: QuizCardStat[];

  selected: boolean;
  setSelected: (date: string | null) => void;
}

function HeatMapTile(props: HeatMapTileProps) {
  const { date, items, selected, setSelected } = props;

  const questionCountOnDate = items.length;
  const className = ["w-3", "h-3", "rounded-sm", "cursor-pointer"];

  if (!questionCountOnDate) {
    className.push("bg-white bg-opacity-5");
  } else {
    className.push("bg-green-500");
  }

  if (questionCountOnDate >= 20) {
    className.push("bg-opacity-100");
  } else if (questionCountOnDate >= 15) {
    className.push("bg-opacity-80");
  } else if (questionCountOnDate >= 10) {
    className.push("bg-opacity-60");
  } else if (questionCountOnDate >= 5) {
    className.push("bg-opacity-40");
  } else if (questionCountOnDate >= 1) {
    className.push("bg-opacity-20");
  }

  if (selected) {
    className.push("border border-1");
    className.push("border-white");
  }

  return (
    <Popover
      isOpen={selected}
      positions={["top", "bottom", "left", "right"]} // preferred positions by priority
      padding={8}
      content={
        <div className="flex flex-col justify-left bg-language-background p-2 rounded-md border border-language-foreground/20">
          <span className="text-xs font-bold">{date}</span>
          <span className="text-xs">{items.length} question(s)</span>
        </div>
      }
    >
      <span
        className={className.join(" ")}
        onMouseEnter={() => setSelected(date)}
        onMouseLeave={() => setSelected(null)}
        onClick={() => setSelected(date)}
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

  const heatmapRef = useRef<HTMLDivElement>(null);

  const startDate = dayjs(sd);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const heatMapItems = getHeatMapItems(startDate.format(), dayjs().format());
  const namedMonths = new Set();

  const getTile = (item: string, index: number, array: string[]) => {
    if (item === "MONTH-NAME") {
      // Check if already named
      const monthString = dayjs(array[index + 1]).format("YYYY-MM");

      if (namedMonths.has(monthString)) {
        // Month was already named, we skip
        return <EmptyTile key={`empty-tile-${index}`} />;
      }

      namedMonths.add(monthString);

      return (
        <TextTile
          key={index}
          text={dayjs(array[index + 1]).format("MMM")}
          className="w-3"
        />
      );
    }

    return (
      <HeatMapTile
        key={index}
        date={item}
        items={questionsByDay[item] || []}
        selected={selectedDate === item}
        setSelected={setSelectedDate}
      />
    );
  };

  useEffect(() => {
    if (heatmapRef.current) {
      heatmapRef.current.scrollTo({
        left: heatmapRef.current.scrollWidth - heatmapRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="flex flex-row pb-4">
      <div className="grid grid-rows-8 grid-flow-col gap-1 pe-2">
        <EmptyTile />
        {DAYS_OF_WEEK.map((day) => (
          <TextTile key={day} text={day} align="end" />
        ))}
      </div>
      <div
        ref={heatmapRef}
        className="grid grid-rows-8 grid-flow-col gap-2 overflow-auto"
      >
        {heatMapItems.map((item, index, array) => getTile(item, index, array))}
      </div>
    </div>
  );
}
