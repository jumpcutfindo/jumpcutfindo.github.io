"use client";

import dayjs from "dayjs";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

interface EpisodeItemProps {
  episodeNum: number;
  title: string;
  description: string;
  url: string;
  startDate: Date;
}

const calculateRemaining = (date: dayjs.Dayjs) => {
  const now = dayjs();

  return {
    days: Math.max(date.diff(now, "day"), 0),
    hours: Math.max(date.diff(now, "hour") % 24, 0),
    mins: Math.max(date.diff(now, "minute") % 60, 0),
    secs: Math.max(date.diff(now, "second") % 60, 0),
  };
};

function EpisodeItem(props: EpisodeItemProps) {
  const { episodeNum, title, description, url, startDate } = props;

  const premiereWeeksAfter = episodeNum - 1;
  const premiereDate = dayjs(startDate).add(premiereWeeksAfter, "week");

  const [remaining, setRemaining] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  const updateRemainingString = () => {
    const values = calculateRemaining(premiereDate);

    setRemaining({
      days: String(values.days).padStart(2, "0"),
      hours: String(values.hours).padStart(2, "0"),
      mins: String(values.mins).padStart(2, "0"),
      secs: String(values.secs).padStart(2, "0"),
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      updateRemainingString();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  if (dayjs().isBefore(premiereDate)) {
    return (
      <div className="flex flex-col space-y-4 justify-center text-center">
        <div className="flex flex-col space-y-0">
          <h2 className={`${nunito.className} text-2xl font-bold`}>
            Episode #{episodeNum}: ???
          </h2>
          <p>
            Premieres in{" "}
            <b>
              {remaining.days}d {remaining.hours}h {remaining.mins}m{" "}
              {remaining.secs}s
            </b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 justify-center text-center">
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-[200px]"
      />
      <div className="flex flex-col space-y-0">
        <h2 className={`${nunito.className} text-2xl font-bold`}>
          Episode #{episodeNum}: {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Episodes() {
  const date = dayjs("2024-08-20T22:00:00").toDate();

  return (
    <div className="flex flex-col space-y-12">
      <EpisodeItem
        episodeNum={1}
        title="Meet and Greet"
        description="The crew introduce themselves and talk a bit about where they're at."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={2}
        title="Good Old Times"
        description="The crew look back on their choir days and talk about happy memories."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={3}
        title="Reminiscences of Vietnam"
        description="The crew reflect on the rocky past of their last competition in VJChoir."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={4}
        title="Sing, Sang, Sung"
        description="The crew take a trip down memory lane through all the performances they gave together."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={5}
        title="After Action Review"
        description="The crew talk about their takeaways from choir and how it helped them."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={6}
        title="Time Passages"
        description="The crew ponder on the years past since the end of their VJChoir journey."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={7}
        title="Complimentary"
        description="The crew talk about their fellow choirmates."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={8}
        title="Complimentary"
        description="The crew consider a what-if that was posed to them."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />

      <EpisodeItem
        episodeNum={9}
        title="To Our Future Selves"
        description="The crew leave a message for next time."
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
      />
    </div>
  );
}
