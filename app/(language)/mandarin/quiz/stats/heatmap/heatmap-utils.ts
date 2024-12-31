import dayjs from "dayjs";

export function getHeatMapItems(startDate: string, endDate: string) {
  const heatMapDates = ["MONTH-NAME"];
  const endDateObj = dayjs(endDate);

  // Add buffers to align dates
  for (let i = dayjs(startDate).day(); i > 0; i--) {
    heatMapDates.push(dayjs(startDate).subtract(i, "day").format("YYYY-MM-DD"));
  }

  let currDate = dayjs(startDate);
  while (!currDate.isAfter(endDateObj)) {
    if (heatMapDates.length % 8 === 0) {
      heatMapDates.push("MONTH-NAME");
    }

    heatMapDates.push(currDate.format("YYYY-MM-DD"));
    currDate = currDate.add(1, "day");
  }

  return heatMapDates;
}
