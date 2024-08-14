import Image from "next/image";

export default function IntentionalConversations() {
  return (
    <main className="flex 2xl:max-w-[35%] lg:max-w-[50%] sm:max-w-[75%] lg:py-16 md:py-12 py-8 px-4 w-screen">
      <div className="h-screen w-screen flex flex-col space-y-4">
        <div className="flex flex-col gap-8">
          <Image
            src="/intentional/conversations/intentional-conversations-logo.png"
            width="0"
            height="0"
            alt="Intentional Conversations logo"
            className="w-full invert"
          ></Image>
          <p className="text-center">
            A short documentary on a group of choristers who've stuck through
            thick and thin over the past decade.
          </p>
        </div>
      </div>
    </main>
  );
}
