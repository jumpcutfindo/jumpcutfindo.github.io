"use client";

import { useEffect, useState } from "react";

import { Signika } from "next/font/google";
import Image from "next/image";

import { faFilm, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

import styles from "./countdown.module.css";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalCountdown() {
  const launchDate = dayjs("2024-09-15T19:00:00+0800");

  const [remaining, setRemaining] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  const calculateRemaining = () => {
    const now = dayjs();

    return {
      days: Math.max(launchDate.diff(now, "day"), 0),
      hours: Math.max(launchDate.diff(now, "hour") % 24, 0),
      mins: Math.max(launchDate.diff(now, "minute") % 60, 0),
      secs: Math.max(launchDate.diff(now, "second") % 60, 0),
    };
  };

  const isCompleted = () => {
    return dayjs().isAfter(launchDate);
  };

  useEffect(() => {
    const updateRemainingString = () => {
      const values = calculateRemaining();

      setRemaining({
        days: String(values.days).padStart(2, "0"),
        hours: String(values.hours).padStart(2, "0"),
        mins: String(values.mins).padStart(2, "0"),
        secs: String(values.secs).padStart(2, "0"),
      });
    };

    const id = setInterval(() => updateRemainingString(), 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <main className="flex 2xl:px-[560px] xl:px-96 lg:px-56 md:px-24 sm:px-12 px-4 w-screen h-screen bg-black">
      <div
        className={`flex flex-col w-screen justify-center items-center 2xl:gap-32 gap-16 ${
          isCompleted() ? "" : "translate-y-[-5%]"
        }`}
      >
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
          <div
            className={`absolute w-full z-0 ${styles.countdown_maroon} sm:rotate-0 rotate-90`}
          >
            <Image
              src="/intentional/countdown/countdown-bg-maroon.svg"
              alt=""
              width="0"
              height="0"
              className="w-full"
            ></Image>
          </div>
          <div
            className={`absolute w-full z-1 ${styles.countdown_white} sm:rotate-0 rotate-90`}
          >
            <Image
              src="/intentional/countdown/countdown-bg.svg"
              alt=""
              width="0"
              height="0"
              className="w-full"
            ></Image>
          </div>
          <div className="w-full relative flex sm:flex-row flex-col justify-between 2xl:mx-24 sm:mx-16 mx-8 text-black z-2 sm:gap-0 gap-4">
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
        {isCompleted() && (
          <div className="flex flex-row gap-16">
            <a
              href="https://jumpcutfindo.com/intentional/conversations"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=E3Jjtx0ObP4"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilm} size="2x" />
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
