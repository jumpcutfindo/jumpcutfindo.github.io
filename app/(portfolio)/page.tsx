"use client";

import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import experienceJson from "./experience/api/experience.json";
import projectsJson from "./projects/api/projects.json";
import Experience from "./types/experience";
import {
  faArrowRight,
  faCamera,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import Project from "./types/project";
import HomeExperienceComponent from "./_components/home-experience";
import HomeProjectComponent from "./_components/home-project";
import StyledMarkdown from "../shared-components/styled-markdown";

export default function Home() {
  const experience = experienceJson as Experience[];
  const projects = projectsJson as Project[];

  return (
    <main className="flex lg:flex-row flex-col justify-between xl:space-x-12 lg:space-x-0 xl:mx-24 lg:mx-16 lg:py-0 md:py-16 py-6 lg:space-y-0 space-y-12">
      <div className="flex flex-col xl:min-w-[30%] lg:min-w-[30%] lg:min-h-screen lg:sticky top-0 h-fit space-y-6 lg:py-24 mx-6 md:mx-12 lg:mx-0">
        <div className="flex flex-col space-y-1">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg font-light text-gray-200">@jumpcutfindo</p>
          <p className="text-lg font-medium text-gray-200">
            Software Engineer at ASUS
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-lg text-gray-300 font-light">
            I develop applications and other interactive experiences for users
            worldwide.
          </p>
          <a
            className="hover:text-blue-500 transition-all"
            href="/resume.pdf"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileLines} className="me-2" />
            View résumé
          </a>
        </div>
        <div className="flex flex-row space-x-6">
          <a
            href="https://github.com/jumpcutfindo/"
            target="_blank"
            className="hover:text-blue-500 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-h-8892a3199"
            target="_blank"
            className="hover:text-blue-500 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/@jumpcutfindo"
            target="_blank"
            className="hover:text-blue-500 transition-all"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
      <div className="flex flex-col xl:min-w-[70%] lg:min-w-[70%] space-y-8 lg:py-24">
        <section className="flex flex-col">
          <div className="sticky top-0 lg:relative py-4 mb-4 min-w-max md:px-12 px-6 bg-[#24272e]">
            <p className="text-sm font-semibold text-gray-400">ABOUT ME</p>
          </div>
          <div className="text-lg space-y-4 text-gray-300 text-base md:px-12 px-6">
            <StyledMarkdown>
              Hi there! Welcome to my portfolio site, which documents my various
              work experiences and projects I&apos;ve undertaken over the past
              few years.
            </StyledMarkdown>
            <StyledMarkdown>
              I started exploring the world of application development back in
              2010, creating scripts for games and joining my school&apos;s
              computing club for app design competitions in secondary school.
            </StyledMarkdown>
            <StyledMarkdown>
              Since then, I&apos;ve built a [website for my
              choir](https://vjchoir.github.io/), created [an app for listening
              to music with
              friends](https://github.com/jumpcutfindo/sync-along), as well as
              created [game modifications for
              Minecraft](https://github.com/search?q=owner%3Ajumpcutfindo%20topic%3Aminecraft&type=repositories).
            </StyledMarkdown>

            <p></p>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="sticky top-0 lg:relative py-4 min-w-max md:px-12 px-6 bg-[#24272e]">
            <p className="text-sm font-semibold text-gray-400">EXPERIENCES</p>
          </div>
          <div className="flex flex-col">
            {experience.slice(0, 3).map((exp, index) => {
              return <HomeExperienceComponent key={index} experience={exp} />;
            })}
          </div>
          <div className="flex md:mx-12 mx-6 mt-4">
            <a
              className="text-sm font-semibold hover:cursor-pointer group"
              href="/experience"
            >
              <span className="group-hover:text-blue-400 transition-all">
                See more
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mx-2 group-hover:translate-x-1/2 group-hover:text-blue-400 transition-all"
              />
            </a>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="sticky top-0 lg:relative py-4 min-w-max md:px-12 px-6 bg-[#24272e]">
            <p className="text-sm font-semibold text-gray-400">
              FEATURED PROJECTS
            </p>
          </div>
          <div className="flex flex-col">
            {projects
              .filter((proj) => proj.featured)
              .sort((a, b) => (a.featured as number) - (b.featured as number))
              .map((proj, index) => {
                return <HomeProjectComponent key={index} project={proj} />;
              })}
          </div>
          <div className="flex md:mx-12 mx-6">
            <a
              className="text-sm font-semibold hover:cursor-pointer group mt-4"
              href="/projects"
            >
              <span className="group-hover:text-blue-400 transition-all">
                See more
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mx-2 group-hover:translate-x-1/2 group-hover:text-blue-400 transition-all"
              />
            </a>
          </div>
        </section>

        <section className="flex flex-col text-center text-gray-500 space-y-2">
          <p className="text-sm md:px-32 px-8">
            This site was built with{" "}
            <a href="https://nextjs.org/" target="_blank">
              <b>Next.js</b>
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              <b>TailwindCSS</b>
            </a>
            , deployed on{" "}
            <a href="https://pages.github.com/" target="_blank">
              <b>GitHub Pages</b>
            </a>{" "}
            using GitHub Actions.
          </p>

          <div className="flex flex-row flex-grow justify-center space-x-4">
            <a
              href="https://github.com/jumpcutfindo/jumpcutfindo.github.io"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="/photography"
              className="hover:text-blue-500 hover:scale-125 hover: transition"
            >
              <FontAwesomeIcon icon={faCamera} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
