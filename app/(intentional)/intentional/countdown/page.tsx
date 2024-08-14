"use client";

import dayjs from "dayjs";
import Image from "next/image";

import { Signika } from "next/font/google";

import styles from "./countdown.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFilm, faGlobe } from "@fortawesome/free-solid-svg-icons";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalCountdown() {
  // TODO(intentional): Update to correct date and time
  const launchDate = dayjs("2025-01-01");

  const [remaining, setRemaining] = useState({
    days: "0",
    hours: "0",
    mins: "0",
    secs: "0",
  });

  const calculateRemaining = () => {
    const now = dayjs();

    setRemaining({
      days: String(launchDate.diff(now, "day")).padStart(2, "0"),
      hours: String(launchDate.diff(now, "hour") % 24).padStart(2, "0"),
      mins: String(launchDate.diff(now, "minute") % 60).padStart(2, "0"),
      secs: String(launchDate.diff(now, "second") % 60).padStart(2, "0"),
    });
  };

  useEffect(() => {
    const id = setInterval(() => calculateRemaining(), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <main className="flex 2xl:px-[560px] xl:px-96 lg:px-56 md:px-24 sm:px-12 px-4 w-screen">
      <div className="flex flex-col w-screen justify-center items-center 2xl:gap-32 sm:gap-16 gap-12">
        <div className="flex flex-row space-x-4">
          <Image
            src="/intentional/vjchoir.png"
            alt=""
            width="0"
            height="0"
            className="sm:w-48 w-40"
          ></Image>
          <p className={`my-auto text-semibold sm:text-xl text-xl`}>
            INTERVIEWS
          </p>
        </div>
        <div className="w-full flex relative items-center">
          <div className={`absolute w-full z-0 ${styles.countdown_maroon}`}>
            <Image
              src="/intentional/countdown/countdown-bg-maroon.svg"
              alt=""
              width="0"
              height="0"
              className="w-full"
            ></Image>
          </div>
          <div className="absolute w-full z-1">
            <Image
              src="/intentional/countdown/countdown-bg.svg"
              alt=""
              width="0"
              height="0"
              className="w-full"
            ></Image>
          </div>
          <div className="w-full relative flex flex-row justify-between 2xl:mx-24 sm:mx-16 mx-8 text-black z-2">
            <div className="flex flex-col text-center">
              <span
                className={`${signika.className} 2xl:text-6xl sm:text-5xl text-3xl`}
              >
                {remaining.days}
              </span>
              <span className="text-base font-semibold">DAYS</span>
            </div>
            <div className="flex flex-col text-center">
              <span
                className={`${signika.className} 2xl:text-6xl sm:text-5xl text-3xl`}
              >
                {remaining.hours}
              </span>
              <span className="text-base font-semibold">HOURS</span>
            </div>

            <div className="flex flex-col text-center">
              <span
                className={`${signika.className} 2xl:text-6xl sm:text-5xl text-3xl`}
              >
                {remaining.mins}
              </span>
              <span className="text-base font-semibold">MINS</span>
            </div>
            <div className="flex flex-col text-center">
              <span
                className={`${signika.className} 2xl:text-6xl sm:text-5xl text-3xl`}
              >
                {remaining.secs}
              </span>
              <span className="text-base font-semibold">SECS</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          {/* TODO(intentional): Update this to the trailer link */}
          <a href="https://www.youtube.com/@jumpcutfindo" target="_blank">
            <FontAwesomeIcon icon={faFilm} size="2x" />
          </a>
          {/* TODO(intentional): Update this to the playlist */}
          <a href="https://www.youtube.com/@jumpcutfindo" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          {/* TODO(intentional): Update this to the website homepage */}
          <a href="https://www.youtube.com/@jumpcutfindo" target="_blank">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
      </div>
    </main>
  );
}
