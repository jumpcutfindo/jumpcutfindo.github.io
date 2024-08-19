import { Signika } from "next/font/google";
import styles from "./tagline-component.module.css";

const signika = Signika({ subsets: ["latin"] });

interface TaglineComponentProps {
  backgroundImage?: string;
  backgroundAccentImage?: string;
  taglineImage: string;
  tagline: string;
  taglineDescription: string;
  isDark: boolean;
}

export default function TaglineComponent(props: TaglineComponentProps) {
  const {
    backgroundImage,
    backgroundAccentImage,
    taglineImage,
    tagline,
    taglineDescription,
    isDark,
  } = props;

  return (
    <section className="tagline w-full flex relative items-center">
      {backgroundAccentImage && (
        <div className={`absolute w-full z-0 ${styles.tagline_accent}`}>
          <img
            src={backgroundAccentImage}
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[40vh]"
          />
        </div>
      )}
      {backgroundImage && (
        <div className={`absolute w-full z-1 ${styles.tagline}`}>
          <img
            src={backgroundImage}
            className="w-full object-cover lg:h-[100%] md:h-[60vh] h-[40vh]"
          />
        </div>
      )}
      <div className="w-full relative flex lg:flex-row flex-col z-1 my-auto 2xl:max-w-[70%] lg:max-w-[80%] max-w-[100%] 2xl:py-32 xl:py-24 lg:py-16 md:py-24 py-16 px-4 mx-auto lg:gap-8 gap-4 lg:text-left text-center">
        <img
          src={taglineImage}
          className="w-auto lg:max-w-[50%] max-w-[80%] mx-auto"
        ></img>
        <div className="flex flex-col my-auto">
          <h1
            className={`${signika.className} md:text-3xl text-xl ${
              isDark ? "text-white" : "text-black"
            } font-bold`}
          >
            {tagline}
          </h1>
          <p
            className={`${
              isDark ? "text-white" : "text-black"
            } font-semibold md:text-xl text-md`}
          >
            {taglineDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
