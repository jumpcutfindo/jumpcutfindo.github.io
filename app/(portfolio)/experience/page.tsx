import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type Experience from "../types/experience";
import ExperienceComponent from "./_components/experience";
import experienceJson from "./api/experience.json";

export default function Experiences() {
  const experience = experienceJson as Experience[];

  return (
    <main className="flex lg:py-24 md:py-12 py-6 w-screen">
      <div className="flex flex-col space-y-4">
        <div className="flex md:mx-12 mx-6">
          <a
            className="text-sm font-semibold hover:cursor-pointer group"
            href="/"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mx-2 group-hover:-translate-x-1/2 group-hover:text-blue-400"
            />

            <span className="group-hover:text-blue-400">Daniel Hoe</span>
          </a>
        </div>

        <div className="md:mx-12 mx-6">
          <h1 className="text-5xl font-semibold text-blue-500">Experience</h1>
        </div>
        <div className="space-y-8">
          {experience.map((exp, index) => {
            return <ExperienceComponent key={index} experience={exp} />;
          })}
        </div>
      </div>
    </main>
  );
}
