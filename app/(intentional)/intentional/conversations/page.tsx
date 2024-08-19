import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Signika } from "next/font/google";
import Image from "next/image";
import TaglineComponent from "./_components/tagline-component";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalConversations() {
  return (
    <main className="bg-black">
      <div className="flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-8 px-8 mx-auto space-y-4">
        <div className="flex flex-col gap-8">
          <img
            src="/intentional/conversations/intentional-conversations-logo.png"
            className="w-full invert"
          />
          <p className="text-center md:text-lg text-sm">
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
            <span className="text-white text-sm font-bold my-auto">
              SEE DETAILS
            </span>
          </button>
        </div>
      </div>
      <div className="taglines">
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-01-white.svg"
          backgroundAccentImage="/intentional/conversations/background-01-accent.svg"
          taglineImage="/intentional/conversations/placeholder.png"
          tagline="You Don't Need A Villa For A Swim"
          taglineDescription="Take a deep dive into the hearts and minds of those you know as
              friends and family."
          isDark={false}
        />
        <TaglineComponent
          taglineImage="/intentional/conversations/placeholder.png"
          tagline="Feed Your FOMO"
          taglineDescription="Find out what you've been missing on about your choir mates the
              past decade."
          isDark={true}
        />
        <TaglineComponent
          backgroundImage="/intentional/conversations/background-02-white.svg"
          backgroundAccentImage="/intentional/conversations/background-02-accent.svg"
          taglineImage="/intentional/conversations/placeholder.png"
          tagline="Perspective, Perspective"
          taglineDescription="Reminisce on better or worse days that have long since faded to
              time."
          isDark={false}
        />
      </div>
    </main>
  );
}
