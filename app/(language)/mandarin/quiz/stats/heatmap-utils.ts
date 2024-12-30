import dayjs from "dayjs";

export function getHeatMapItems(startDate: string, endDate: string) {
  const heatMapDates = [];
  let currDate = dayjs(startDate);

  while (!currDate.isAfter(dayjs())) {
    heatMapDates.push(currDate.format("YYYY-MM-DD"));
  }

  return heatMapDates;
}
