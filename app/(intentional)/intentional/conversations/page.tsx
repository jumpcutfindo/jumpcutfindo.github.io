import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Signika } from "next/font/google";
import Image from "next/image";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalConversations() {
  return (
    <main className="bg-black">
      <div className="flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 sm:py-8 py-4 px-4 mx-auto space-y-4">
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
            <FontAwesomeIcon
              icon={faPlay}
              size="sm"
              className="text-white me-2"
            />
            <span className="text-white text-sm font-bold my-auto">
              SEE MORE DETAILS
            </span>
          </button>
        </div>
      </div>
      <section className="w-full flex relative items-center">
        <div className="absolute w-full z-0">
          <img
            src="/intentional/conversations/background-01-accent.svg"
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[50vh]"
          />
        </div>
        <div className="absolute w-full z-1">
          <img
            src="/intentional/conversations/background-01-white.svg"
            alt=""
            width="0"
            height="0"
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[50vh]"
          />
        </div>
        <div className="w-full relative flex lg:flex-row flex-col z-1 my-auto 2xl:max-w-[70%] lg:max-w-[80%] max-w-[100%] 2xl:py-32 xl:py-24 lg:py-16 md:py-24 py-16 px-4 mx-auto lg:gap-8 gap-4 lg:text-left text-center">
          <Image
            src="/intentional/conversations/placeholder.png"
            alt="placeholder"
            width="0"
            height="0"
            className="w-auto lg:max-w-[50%] max-w-[80%] mx-auto"
          ></Image>
          <div className="flex flex-col my-auto">
            <h1
              className={`${signika.className} md:text-3xl text-xl text-black font-bold`}
            >
              You Don't Need A Villa For A Swim
            </h1>
            <p className="text-black font-semibold md:text-xl text-md">
              Take a deep dive into the hearts and minds of those you know as
              friends and family.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex lg:flex-row flex-col z-1 my-auto 2xl:max-w-[70%] lg:max-w-[80%] max-w-[100%] 2xl:py-32 xl:py-24 lg:py-16 md:py-24 py-16 px-4 mx-auto lg:gap-8 gap-4 lg:text-left text-center">
          <Image
            src="/intentional/conversations/placeholder.png"
            alt="placeholder"
            width="0"
            height="0"
            className="w-auto lg:max-w-[50%] max-w-[80%] mx-auto"
          ></Image>
          <div className="flex flex-col my-auto">
            <h1
              className={`${signika.className} md:text-3xl text-xl text-white font-bold`}
            >
              Feed Your FOMO
            </h1>
            <p className="text-white font-semibold md:text-xl text-md">
              Find out what you've been missing on about your choir mates the
              past decade.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex relative items-center">
        <div className="absolute w-full z-0">
          <img
            src="/intentional/conversations/background-02-accent.svg"
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[50vh]"
          />
        </div>
        <div className="absolute w-full z-1">
          <img
            src="/intentional/conversations/background-02-white.svg"
            alt=""
            width="0"
            height="0"
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[50vh]"
          />
        </div>
        <div className="w-full relative flex lg:flex-row flex-col z-1 my-auto 2xl:max-w-[70%] lg:max-w-[80%] max-w-[100%] 2xl:py-32 xl:py-24 lg:py-16 md:py-24 py-16 px-4 mx-auto lg:gap-8 gap-4 lg:text-left text-center">
          <Image
            src="/intentional/conversations/placeholder.png"
            alt="placeholder"
            width="0"
            height="0"
            className="w-auto lg:max-w-[50%] max-w-[80%] mx-auto"
          ></Image>
          <div className="flex flex-col my-auto">
            <h1
              className={`${signika.className} md:text-3xl text-xl text-black font-bold`}
            >
              Perspective, Perspective
            </h1>
            <p className="text-black font-semibold md:text-xl text-md">
              Reminisce on better or worse days that have long since faded to
              time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
