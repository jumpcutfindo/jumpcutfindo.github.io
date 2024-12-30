import dayjs from "dayjs";

import { QuizCardStat } from "../../api/stats";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface HeatMapTileProps {
  date: string;
  index: number;
  items: QuizCardStat[];
}

function HeatMapTile(props: HeatMapTileProps) {
  const { date, index, items } = props;

  if (index % 7 === 0) {
    return (
      <span className="w-3 h-3 rounded-sm text-xs font-bold">
        {dayjs(date).format("MMM")}
      </span>
    );
  }

  const questionCountOnDate = items.length;
  const className = ["w-3", "h-3", "rounded-sm"];

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

  return <span className={className.join(" ")}></span>;
}

interface HeatMapProps {
  startDate: Date;
  questionsByDay: Record<string, QuizCardStat[]>;
}

export function HeatMap(props: HeatMapProps) {
  const { startDate: sd, questionsByDay } = props;

  const startDate = dayjs(sd);

  const heatMapDates = [];
  let currDate = dayjs(startDate);
  while (!currDate.isAfter(dayjs())) {
    heatMapDates.push(currDate.format("YYYY-MM-DD"));
    currDate = currDate.add(1, "day");
  }

  return (
    <div className="max-w-max overflow-auto pb-4">
      <div className="grid grid-rows-7 grid-flow-col gap-2">
        {heatMapDates.map((date, index) => (
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
