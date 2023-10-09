import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex justify-between gap-4 px-72">
      <div className="flex flex-col min-w-[40%] max-w-[40%] py-32 sticky top-0 h-fit">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg my-2 font-medium">Software Engineer at Visa</p>
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
        <div className="flex flex-col space-y-4">
          <p className="text-sm font-semibold opacity-50">ABOUT ME</p>
          <p>
            I started exploring the world of development and application
            development back in 2010, creating scripts for games and joining my
            school's computing club in secondary school.
          </p>
          <p>
            Since then, I've built a website for my choir, created a full stack
            application that syncs music, as well as created game modifications
            for Minecraft.
          </p>
          <p>
            As a Software Engineer in Visa, I am improving production
            environment processes by building applications that contribute to
            toil reduction.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-sm font-semibold opacity-50">EXPERIENCE</p>
          <div className="bg-red-600 min-h-[800px]"></div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-sm font-semibold opacity-50">PROJECTS</p>
        </div>
      </div>
    </main>
  );
}
