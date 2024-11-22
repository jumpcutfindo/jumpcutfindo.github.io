"use client";

import dayjs from "dayjs";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";

import { lynnTextify as lt, lynnTextify } from "../_utils/lynn-textify";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

interface EpisodeItemProps {
  episodeNum: number;
  title: string;
  description: string;
  url: string;
  startDate: Date;
  isLynnText: boolean;
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
  const { episodeNum, title, description, url, startDate, isLynnText } = props;

  const lynnTextify = (text: string) => lt(isLynnText, text);

  const premiereWeeksAfter = episodeNum - 1;
  const premiereDate = dayjs(startDate).add(premiereWeeksAfter, "week");

  const [remaining, setRemaining] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  const getQuestionMarks = (num: number) => {
    return "?".repeat(num);
  };

  useEffect(() => {
    const updateRemainingString = () => {
      const values = calculateRemaining(premiereDate);

      setRemaining({
        days: String(values.days).padStart(2, "0"),
        hours: String(values.hours).padStart(2, "0"),
        mins: String(values.mins).padStart(2, "0"),
        secs: String(values.secs).padStart(2, "0"),
      });
    };

    const id = setInterval(() => {
      updateRemainingString();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  if (dayjs().isBefore(premiereDate)) {
    return (
      <div className="flex flex-col space-y-4 justify-center text-center">
        <div className="flex flex-col space-y-0">
          <h2 className={`${nunito.className} text-2xl font-bold`}>
            {lynnTextify(
              `Episode #${episodeNum}: ${getQuestionMarks(episodeNum)}`,
            )}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: lynnTextify(
                `Premieres in <b>${remaining.days}d ${remaining.hours}h ${remaining.mins}m ${remaining.secs}s</b>`,
              ),
            }}
          ></p>
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
        className="md:h-[250px] h-[200px]"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="flex flex-col space-y-0">
        <h2 className={`${nunito.className} text-2xl font-bold`}>
          {lynnTextify(`Episode #${episodeNum}: `)}
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

interface EpisodesProps {
  isLynnText: boolean;
}

export default function Episodes(props: EpisodesProps) {
  const { isLynnText } = props;

  const lynnTextify = (text: string) => lt(isLynnText, text);

  const date = dayjs("2024-08-20T22:00:00").toDate();

  return (
    <div className="flex flex-col space-y-12">
      <EpisodeItem
        episodeNum={1}
        title={lynnTextify("Meet and Greet")}
        description={lynnTextify(
          "The crew introduce themselves and talk a bit about where they're at.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={2}
        title={lynnTextify("Good Old Times")}
        description={lynnTextify(
          "The crew look back on their choir days and talk about happy memories.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={3}
        title={lynnTextify("Reminiscences of Vietnam")}
        description={lynnTextify(
          "The crew reflect on the rocky past of their last competition in VJChoir.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={4}
        title={lynnTextify("Sing, Sang, Sung")}
        description={lynnTextify(
          "The crew take a trip down memory lane through all the performances they gave together.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={5}
        title={lynnTextify("After Action Review")}
        description={lynnTextify(
          "The crew talk about their takeaways from choir and how it helped them.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={6}
        title={lynnTextify("Time Passages")}
        description={lynnTextify(
          "The crew ponder on the years past since the end of their VJChoir journey.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={7}
        title={lynnTextify("Complimentary")}
        description={lynnTextify(
          "The crew talk about their fellow choirmates.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={8}
        title={lynnTextify("Complimentary")}
        description={lynnTextify(
          "The crew consider a what-if that was posed to them.",
        )}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />

      <EpisodeItem
        episodeNum={9}
        title={lynnTextify("To Our Future Selves")}
        description={lynnTextify("The crew leave a message for next time.")}
        url="https://www.youtube.com/embed/ebM90xmXtlI?si=q-6bzTPpxaaaNtsu"
        startDate={date}
        isLynnText={isLynnText}
      />
    </div>
  );
}
