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
    <main className="flex justify-between space-x-4 ps-96 pe-80">
      <div className="flex flex-col min-w-[40%] max-w-[40%] py-32 sticky top-0 h-fit space-y-6">
        <div className="flex flex-col space-y-1">
          <h1 className="text-5xl font-semibold text-blue-500">Daniel Hoe</h1>
          <p className="text-lg font-medium text-gray-200">@jumpcutfindo</p>
          <p className="text-lg font-medium text-gray-200">
            Software Engineer at Visa
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-lg me-32 text-gray-300 font-light">
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
      <div className="flex flex-col min-w-[60%] space-y-12 py-32">
        <section className="flex flex-col px-12">
          <p className="text-sm font-semibold text-gray-500 mb-4">ABOUT ME</p>
          <div className="text-lg space-y-4 text-gray-300">
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
          <p className="text-sm font-semibold text-gray-500 px-12">
            EXPERIENCE
          </p>
          <div className="flex flex-col">
            {experience.map((exp) => {
              return <HomeExperienceComponent experience={exp} />;
            })}
          </div>
          <div className="flex mx-12">
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
          <p className="text-sm font-semibold text-gray-500 px-12">PROJECTS</p>
          <div className="flex flex-col">
            {projects
              .filter((proj) => proj.featured)
              .sort((a, b) => (a.featured as number) - (b.featured as number))
              .map((proj) => {
                return <HomeProjectComponent project={proj} />;
              })}
          </div>
          <div className="flex mx-12">
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
      </div>
    </main>
  );
}
