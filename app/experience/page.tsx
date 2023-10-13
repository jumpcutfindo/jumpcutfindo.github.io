import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experience from "../types/experience";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import experienceJson from "./api/experience.json";
import ExperienceComponent from "./_components/experience";

export default function Experience() {
  const experience = experienceJson as Experience[];

  return (
    <main className="flex justify-between space-x-4">
      <div className="flex flex-col flex-grow py-32 space-y-4">
        <div className="flex mx-12">
          <a
            className="text-sm font-semibold hover:cursor-pointer group transition-all"
            href="/"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mx-2 group-hover:-translate-x-1/2 group-hover:text-blue-400 transition-all"
            />

            <span className="group-hover:text-blue-400 transition-all">
              Daniel Hoe
            </span>
          </a>
        </div>

        <div>
          <h1 className="text-5xl font-semibold text-blue-500 mx-12">
            Experience
          </h1>
          <div>
            {experience.map((exp, index) => {
              return <ExperienceComponent key={index} experience={exp} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
