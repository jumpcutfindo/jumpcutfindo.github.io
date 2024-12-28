import dayjs from "dayjs";

import { QuizCardStat } from "../../api/stats";

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

  const getHeatMapIcon = (date: string) => {
    const questionCountOnDate = questionsByDay[date]?.length;
    const className = ["w-3", "h-3", "rounded-sm"];

    if (!questionCountOnDate) {
      className.push("bg-gray-600");
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
  };

  console.log(heatMapDates, questionsByDay);

  return (
    <div className="max-w-max overflow-auto pb-4">
      <div className="grid grid-rows-7 grid-flow-col gap-2">
        {heatMapDates.map((date) => getHeatMapIcon(date))}
      </div>
    </div>
  );
}
