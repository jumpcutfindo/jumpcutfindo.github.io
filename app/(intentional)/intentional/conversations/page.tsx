import { Signika } from "next/font/google";
import Image from "next/image";

const signika = Signika({ subsets: ["latin"] });

export default function IntentionalConversations() {
  return (
    <main>
      <div className="flex flex-col 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 py-8 px-4 mx-auto">
        <div className="flex flex-col gap-8">
          <Image
            src="/intentional/conversations/intentional-conversations-logo.png"
            width="0"
            height="0"
            alt="Intentional Conversations logo"
            className="w-full invert"
          ></Image>
          <p className="text-center text-sm">
            A 9-episode documentary depicting the experiences of a bunch of
            choristers that crossed paths a decade ago.
          </p>
        </div>
      </div>
      <section
        className="flex flex-col"
        style={{
          backgroundImage:
            "url(/intentional/conversations/conversations-background-01.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
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
      <section
        className="flex flex-col"
        style={{
          backgroundImage:
            "url(/intentional/conversations/conversations-background-02.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
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
