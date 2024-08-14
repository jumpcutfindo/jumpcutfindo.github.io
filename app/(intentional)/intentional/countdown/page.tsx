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
    <main className="flex lg:px-48 md:px-24 px-12 w-screen">
      <div className="flex flex-col w-screen justify-center items-center gap-12 translate-y-[-5%]">
        <div className="flex flex-row">
          <Image
            src="/intentional/vjchoir.png"
            alt=""
            width="0"
            height="0"
            className="w-48"
          ></Image>
          <p className={`my-auto text-semibold text-xl`}>INTERVIEWS</p>
        </div>
        <div className="w-full flex relative items-center translate-y-[-40%]">
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
          <div className="w-full relative flex flex-row justify-between mx-16 text-black z-2">
            <div className="flex flex-col text-center">
              <span className={`${signika.className} text-5xl`}>
                {remaining.days}
              </span>
              <span className="text-base font-semibold">DAYS</span>
            </div>
            <div className="flex flex-col text-center">
              <span className={`${signika.className} text-5xl`}>
                {remaining.hours}
              </span>
              <span className="text-base font-semibold">HOURS</span>
            </div>

            <div className="flex flex-col text-center">
              <span className={`${signika.className} text-5xl`}>
                {remaining.mins}
              </span>
              <span className="text-base font-semibold">MINS</span>
            </div>
            <div className="flex flex-col text-center">
              <span className={`${signika.className} text-5xl`}>
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
