"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./conversations.module.css";
import TaglineComponent from "./_components/tagline-component";
import IndividualCast from "./_components/individual-cast";
import { Nunito } from "next/font/google";
import Episodes from "./_components/episodes";
import { useState } from "react";
import { lynnTextify as lt } from "./_utils/lynn-textify";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export default function IntentionalConversations() {
  const [isLynnState, setLynnState] = useState(false);

  const lynnTextify = (text: string) => {
    if (!isLynnState) {
      return text;
    }

    return lt(isLynnState, text);
  };

  return (
    <main className="bg-black flex flex-col">
      <div className="flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4">
        <div className="flex flex-col gap-8 justify-center">
          <img
            src="/intentional/conversations/intentional-conversations-logo.svg"
            className={`w-full invert ${styles.intentional_conversations_logo}`}
          />
          <p className="text-center">
            {lynnTextify(
              "A 9-episode documentary depicting the experiences of a bunch of choristers that crossed paths a decade ago."
            )}
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
              {lynnTextify("WATCH THE TRAILER")}
            </span>
          </button>
          <button className="outline outline-white outline-1 rounded-full py-2 px-4 flex flex-row flex-grow justify-center items-center">
            <a
              className="text-white text-sm font-bold my-auto"
              href="#overview"
            >
              {lynnTextify("SEE DETAILS")}
            </a>
          </button>
        </div>
      </div>
      <div id="taglines">
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-01-white.svg"
          backgroundAccentImage="/intentional/conversations/background-01-accent.svg"
          taglineImage="/intentional/conversations/marcus-still.png"
          tagline={lynnTextify("You Don't Need A Villa For A Swim")}
          taglineDescription={lynnTextify(
            "Take a deep dive into the hearts and minds of those you know as friends and family."
          )}
          isDark={false}
        />
        <TaglineComponent
          taglineImage="/intentional/conversations/gloria-still.png"
          tagline={lynnTextify("Feed Your FOMO")}
          taglineDescription={lynnTextify(
            "Find out what you've been missing on about your choir mates the past decade."
          )}
          isDark={true}
        />
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-02-white.svg"
          backgroundAccentImage="/intentional/conversations/background-02-accent.svg"
          taglineImage="/intentional/conversations/wyn-still.png"
          tagline={lynnTextify("Perspective, Perspective")}
          taglineDescription={lynnTextify(
            "Reminisce on better or worse days that have long since faded to time."
          )}
          isDark={false}
        />
      </div>
      <div
        id="overview"
        className="overview flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4"
      >
        <div className="w-full flex flex-col relative justify-center space-y-4">
          <p className="text-center">
            {lynnTextify(
              "10 years ago, these young individuals crossed paths in a junior college choir. Unbeknownst to them, a decade later, one of their choir mates would coax them all into a documentary on their life then and now."
            )}
          </p>
          <p className="text-center">
            {lynnTextify(
              "Join us as we explore the minds of this group of 19 friends, and learn more about what they thought and think about times past."
            )}
          </p>
          <p
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: lynnTextify(
                "<i>Intentional Conversations</i> is a <b>9-episode</b> mini-series that airs weekly."
              ),
            }}
          ></p>
        </div>
      </div>
      <div
        id="cast"
        className="cast w-full flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4"
      >
        <h1 className={`${nunito.className} text-4xl text-center font-bold`}>
          {lynnTextify("Cast")}
        </h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-8">
            <IndividualCast
              id="calista-loh"
              name={lynnTextify("Calista Loh")}
              tag={lynnTextify("Choir Secretary")}
            />
            <IndividualCast
              id="caleb-low"
              name={lynnTextify("Caleb Low")}
              tag={lynnTextify("Welfare Member")}
            />
            <IndividualCast
              id="daniel-hoe"
              name={lynnTextify("Daniel Hoe")}
              tag={lynnTextify("Welfare Member")}
            />
            <IndividualCast
              id="david-lee"
              name={lynnTextify("David Lee")}
              tag={lynnTextify("Member")}
            />
            <IndividualCast
              id="denise-ho"
              name={lynnTextify("Denise Ho")}
              tag={lynnTextify("Member")}
            />
            <IndividualCast
              id="gloria-ho"
              name={lynnTextify("Gloria Ho")}
              tag={lynnTextify("Assistant Student Conductor")}
            />
            <IndividualCast
              id="joel-casey-tay"
              name={lynnTextify("Joel Casey Tay")}
              tag={lynnTextify("Student Conductor")}
            />
            <IndividualCast
              id="justin-wong"
              name={lynnTextify("Justin Wong")}
              tag={lynnTextify("Tenor SL")}
            />
            <IndividualCast
              id="kevin-tay"
              name={lynnTextify("Kevin Tay")}
              tag={lynnTextify("Choir President")}
            />
            <IndividualCast
              id="koh-bei-yi"
              name={lynnTextify("Koh Bei Yi")}
              tag={lynnTextify("Alto SL")}
            />
          </div>
          <div className="flex flex-col space-y-8">
            <IndividualCast
              id="lorraine-kong"
              name={lynnTextify("Lorraine Kong")}
              tag={lynnTextify("Member")}
            />
            <IndividualCast
              id="lynn-chan"
              name={lynnTextify("Lynn Chan")}
              tag={lynnTextify("Welfare Member")}
            />
            <IndividualCast
              id="marcus-tan"
              name={lynnTextify("Marcus Tan")}
              tag={lynnTextify("Choir Vice-President")}
            />
            <IndividualCast
              id="melvyn-ng"
              name={lynnTextify("Melvyn Ng")}
              tag={lynnTextify("Member")}
            />
            <IndividualCast
              id="rebecca-seah"
              name={lynnTextify("Rebecca Seah")}
              tag={lynnTextify("Choir GAM")}
            />
            <IndividualCast
              id="ryan-yip"
              name={lynnTextify("Ryan Yip")}
              tag={lynnTextify("Welfare Member")}
            />
            <IndividualCast
              id="stephanie-ng"
              name={lynnTextify("Stephanie Ng")}
              tag={lynnTextify("Member")}
            />
            <IndividualCast
              id="vanessa-kee"
              name={lynnTextify("Vanessa Kee")}
              tag={lynnTextify("Soprano SL")}
            />
            <IndividualCast
              id="wyn-lim"
              name={lynnTextify("Wyn Lim")}
              tag={lynnTextify("Choir Treasurer")}
            />
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
        <Episodes isLynnText={isLynnState} />
      </div>
      <div className="footer w-full flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4 opacity-50">
        <img
          src="/intentional/conversations/intentional-conversations-logo-head.svg"
          className="max-w-[64px] invert mx-auto"
        />
        <div className="flex flex-row gap-1 text-center text-xs mx-auto">
          <p
            dangerouslySetInnerHTML={{
              __html: lynnTextify(
                "<i>Intentional Conversations</i>, created by "
              ),
            }}
          ></p>
          <a
            href="/"
            dangerouslySetInnerHTML={{
              __html: lynnTextify("<u>jumpcutfindo</u>"),
            }}
          ></a>
        </div>
        <button
          className="group text-xs cursor-pointer"
          onClick={() => setLynnState(!isLynnState)}
        >
          <span className="group-hover:drop-shadow-[0px_1px_1px_rgba(255,255,255,1.0)]">
            {isLynnState
              ? lynnTextify("Lynn-style Text ON")
              : "Lynn-style Text OFF"}
          </span>
        </button>
      </div>
    </main>
  );
}
