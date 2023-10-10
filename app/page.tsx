import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeExperienceComponent() {
  return (
    <div className="flex flex-row outline-1 hover:outline hover:outline-offset-16 hover:cursor-pointer">
      <p className="opacity-75 text-xs min-w-[20%]">2022 - PRESENT</p>
      <div className="flex flex-col min-w-[80%] opacity-90">
        <h6 className="font-medium text-xl -mt-1 mb-2">
          Software Engineer · Visa
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis
          imperdiet velit, a sagittis neque ullamcorper ut. Suspendisse varius,
          purus id vestibulum suscipit, nibh nibh volutpat nisl, sed congue elit
          risus quis ante. Vivamus commodo, massa at fermentum elementum, nulla
          nisl viverra nisl, ac consequat lectus lorem ut orci. Integer aliquet
          pulvinar eros eget euismod.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex justify-between gap-4 px-96">
      <div className="flex flex-col min-w-[40%] max-w-[40%] py-32 sticky top-0 h-fit">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg my-2 font-medium opacity-90">
            Software Engineer at Visa
          </p>
          <p className="text-lg my-4 me-32 opacity-70 font-light">
            I develop applications and other interactive experiences for users
            worldwide.
          </p>
        </div>
        <div className="flex flex-row space-x-6 my-4">
          <a
            href="https://github.com/jumpcutfindo/"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-h-8892a3199"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className="flex flex-col min-w-[60%] space-y-12 py-32">
        <section className="flex flex-col">
          <p className="text-sm font-semibold opacity-50 mb-8">ABOUT ME</p>
          <div className="text-lg space-y-4 opacity-90">
            <p>
              Hi there! Welcome to my portfolio site, which documents my various
              work experiences and projects I have undertaken over the past few
              years.
            </p>
            <p>
              I started exploring the world of application development back in
              2010, creating scripts for games and joining my school's computing
              club for app design competitions in secondary school.
            </p>
            <p>
              Since then, I've built a website for my choir, created an app for
              listening to music with friends, as well as created game
              modifications for Minecraft.
            </p>
            <p></p>
          </div>
        </section>

        <section className="flex flex-col">
          <p className="text-sm font-semibold opacity-50 mb-8">EXPERIENCE</p>
          <div className="flex flex-col space-y-16">
            <HomeExperienceComponent />
            <HomeExperienceComponent />
            <HomeExperienceComponent />
          </div>
        </section>

        <section className="flex flex-col">
          <p className="text-sm font-semibold opacity-50 mb-8">PROJECTS</p>
        </section>
      </div>
    </main>
  );
}
