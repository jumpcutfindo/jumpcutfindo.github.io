"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import experienceJson from "./experience/api/experience.json";
import projectsJson from "./projects/api/projects.json";
import Experience from "./types/experience";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Project from "./types/project";
import HomeExperienceComponent from "./_components/home-experience";
import HomeProjectComponent from "./_components/home-project";

export default function Home() {
  const experience = experienceJson as Experience[];
  const projects = projectsJson as Project[];

  return (
    <main className="flex lg:flex-row flex-col justify-between xl:space-x-12 lg:space-x-0 xl:mx-24 lg:mx-16 lg:py-0 md:py-16 py-6 lg:space-y-0 space-y-12">
      <div className="flex flex-col xl:min-w-[30%] lg:min-w-[30%] lg:min-h-screen lg:sticky top-0 h-fit space-y-6 lg:py-24 mx-6 md:mx-12 lg:mx-0">
        <div className="flex flex-col space-y-1">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg font-medium text-gray-200">@jumpcutfindo</p>
          <p className="text-lg font-medium text-gray-200">
            Software Engineer at Visa
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-lg text-gray-300 font-light">
            I develop applications and other interactive experiences for users
            worldwide.
          </p>
        </div>
        <div className="flex flex-row space-x-6">
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
      <div className="flex flex-col xl:min-w-[70%] lg:min-w-[70%] space-y-8 lg:py-24">
        <section className="flex flex-col">
          <div className="sticky top-0 lg:relative py-4 mb-4 min-w-max bg-inherit md:px-12 px-6 backdrop-blur-lg">
            <p className="text-sm font-semibold text-gray-400">ABOUT ME</p>
          </div>
          <div className="text-lg space-y-4 text-gray-300 text-base md:px-12 px-6">
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
          <div className="sticky top-0 lg:relative py-4 min-w-max bg-inherit md:px-12 px-6 backdrop-blur-lg">
            <p className="text-sm font-semibold text-gray-400">EXPERIENCES</p>
          </div>
          <div className="flex flex-col">
            {experience.map((exp, index) => {
              return <HomeExperienceComponent key={index} experience={exp} />;
            })}
          </div>
          <div className="flex md:mx-12 mx-6">
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
          <div className="sticky top-0 lg:relative py-4 min-w-max bg-inherit md:px-12 px-6 backdrop-blur-lg">
            <p className="text-sm font-semibold text-gray-400">PROJECTS</p>
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
              className="text-sm font-semibold hover:cursor-pointer group"
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
          <a
            href="https://github.com/jumpcutfindo/jumpcutfindo.github.io"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
    </main>
  );
}
