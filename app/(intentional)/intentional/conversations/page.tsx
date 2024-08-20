"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./conversations.module.css";
import TaglineComponent from "./_components/tagline-component";
import IndividualCast from "./_components/individual-cast";
import { Nunito } from "next/font/google";
import Episodes from "./_components/episodes";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export default function IntentionalConversations() {
  return (
    <main className="bg-black flex flex-col">
      <div className="flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4">
        <div className="flex flex-col gap-8 justify-center">
          <img
            src="/intentional/conversations/intentional-conversations-logo.svg"
            className={`w-full invert ${styles.intentional_conversations_logo}`}
          />
          <p className="text-center">
            A 9-episode documentary depicting the experiences of a bunch of
            choristers that crossed paths a decade ago.
          </p>
        </div>
        <div className="flex flex-row justify-between space-x-4">
          <button className="bg-white rounded-full py-2 px-4 flex flex-row flex-grow justify-center items-center">
            <FontAwesomeIcon
              icon={faPlay}
              size="sm"
              className="text-black me-2"
            />
            <span className="text-black text-sm font-bold my-auto">
              WATCH THE TRAILER
            </span>
          </button>
          <button className="outline outline-white outline-1 rounded-full py-2 px-4 flex flex-row flex-grow justify-center items-center">
            <a
              className="text-white text-sm font-bold my-auto"
              href="#overview"
            >
              SEE DETAILS
            </a>
          </button>
        </div>
      </div>
      <div id="taglines">
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-01-white.svg"
          backgroundAccentImage="/intentional/conversations/background-01-accent.svg"
          taglineImage="/intentional/conversations/marcus-still.png"
          tagline="You Don't Need A Villa For A Swim"
          taglineDescription="Take a deep dive into the hearts and minds of those you know as
              friends and family."
          isDark={false}
        />
        <TaglineComponent
          taglineImage="/intentional/conversations/gloria-still.png"
          tagline="Feed Your FOMO"
          taglineDescription="Find out what you've been missing on about your choir mates the
              past decade."
          isDark={true}
        />
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-02-white.svg"
          backgroundAccentImage="/intentional/conversations/background-02-accent.svg"
          taglineImage="/intentional/conversations/wyn-still.png"
          tagline="Perspective, Perspective"
          taglineDescription="Reminisce on better or worse days that have long since faded to
              time."
          isDark={false}
        />
      </div>
      <div
        id="overview"
        className="overview flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4"
      >
        <div className="w-full flex flex-col relative justify-center space-y-4">
          <p className="text-center">
            10 years ago, these young individuals crossed paths in a junior
            college choir. Unbeknownst to them, a decade later, one of their
            choir mates would coax them all into a documentary on their life
            then and now.
          </p>
          <p className="text-center">
            Join us as we explore the minds of this group of 19 friends, and
            learn more about what they thought and think about times past.
          </p>
          <p className="text-center">
            <i>Intentional Conversations</i> is a <b>9-episode</b> mini-series
            that airs weekly.
          </p>
        </div>
      </div>
      <div
        id="cast"
        className="cast w-full flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4"
      >
        <h1 className={`${nunito.className} text-4xl text-center font-bold`}>
          Cast
        </h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-8">
            <IndividualCast name="Calista Loh" tag="Choir Secretary" />
            <IndividualCast name="Caleb Low" tag="Welfare Member" />
            <IndividualCast name="Daniel Hoe" tag="Welfare Member" />
            <IndividualCast name="David Lee" tag="Member" />
            <IndividualCast name="Denise Ho" tag="Member" />
            <IndividualCast
              name="Gloria Ho"
              tag="Assistant Student Conductor"
            />
            <IndividualCast name="Joel Casey Tay" tag="Student Conductor" />
            <IndividualCast name="Justin Wong" tag="Tenor SL" />
            <IndividualCast name="Kevin Tay" tag="Choir President" />
            <IndividualCast name="Koh Bei Yi" tag="Alto SL" />
          </div>
          <div className="flex flex-col space-y-8">
            <IndividualCast name="Lorraine Kong" tag="Member" />
            <IndividualCast name="Lynn Chan" tag="Welfare Member" />
            <IndividualCast name="Marcus Tan" tag="Choir Vice-President" />
            <IndividualCast name="Melvyn Ng" tag="Member" />
            <IndividualCast name="Rebecca Seah" tag="Choir GAM" />
            <IndividualCast name="Ryan Yip" tag="Welfare Member" />
            <IndividualCast name="Stephanie Ng" tag="Member" />
            <IndividualCast name="Vanessa Kee" tag="Soprano SL" />
            <IndividualCast name="Wyn Lim" tag="Choir Treasurer" />
          </div>
        </div>
      </div>
      <div
        id="episodes"
        className="episodes flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4"
      >
        <h1 className={`${nunito.className} text-4xl text-center font-bold`}>
          Episodes
        </h1>
        <Episodes />
      </div>
      <div className="footer w-full flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4 opacity-50">
        <img
          src="/intentional/conversations/intentional-conversations-logo-head.svg"
          className="max-w-[64px] invert mx-auto"
        />
        <p className="text-center text-xs">
          <i>Intentional Conversations</i>, created by{" "}
          <a href="/">
            <u>jumpcutfindo</u>
          </a>
        </p>
      </div>
    </main>
  );
}
