import dayjs from "dayjs";
import Image from "next/image";

import { Signika } from "next/font/google";

import styles from "./countdown.module.css";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalCountdown() {
  const now = dayjs();
  const endDate = dayjs("2025-01-01");

  const days = endDate.diff(now, "day");

  return (
    <main className="flex lg:px-48 md:px-24 px-12 w-screen">
      <div className="w-full flex relative items-center">
        <div className="absolute w-full z-0">
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
        <div className="w-full relative flex flex-row justify-between mx-12 text-black z-2">
          <div className="flex flex-col text-center">
            <span className={`${signika.className} text-5xl`}>100</span>
            <span className="text-base font-semibold">DAYS</span>
          </div>
          <div className="flex flex-col text-center">
            <span className={`${signika.className} text-5xl`}>100</span>
            <span className="text-base font-semibold">HOURS</span>
          </div>

          <div className="flex flex-col text-center">
            <span className={`${signika.className} text-5xl`}>100</span>
            <span className="text-base font-semibold">MINS</span>
          </div>
          <div className="flex flex-col text-center">
            <span className={`${signika.className} text-5xl`}>100</span>
            <span className="text-base font-semibold">SECS</span>
          </div>
        </div>
      </div>
    </main>
  );
}
