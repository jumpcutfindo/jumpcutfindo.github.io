import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experience from "../types/experience";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import experienceJson from "./api/experience.json";
import dayjs from "dayjs";

interface ExperienceComponentProps {
  experience: Experience;
}

function ExperienceComponent(props: ExperienceComponentProps) {
  const { start, end, title, company, url, longDescription, pointers, tags } =
    props.experience;

  const startFormatted = dayjs(start).format("MMM YYYY").toUpperCase();
  const endFormatted = end
    ? dayjs(end).format("MMM YYYY").toUpperCase()
    : undefined;

  return (
    <section className="flex flex-row hover:bg-opacity-5 p-8 mx-4">
      <div className="flex flex-col min-w-[25%]">
        <p className="opacity-75 text-sm">
          {startFormatted} {endFormatted ? `- ${endFormatted}` : "- PRESENT"}
        </p>
      </div>
      <div className="flex flex-col min-w-[75%] -mt-1">
        <div className="flex flex-col opacity-90 space-y-6">
          <div className="space-y-2">
            <h6 className="font-medium text-2xl">
              {title} · {company}
            </h6>
            <p className="opacity-90">{longDescription}</p>
          </div>
          <ul className="space-y-2">
            {pointers.map((pointer) => {
              return (
                <li>
                  <div className="flex flex-row">
                    <span className="ms-2 me-3">·</span>
                    <p>{pointer}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-row space-x-4">
            {tags.map((tag) => {
              return (
                <button className="bg-blue-600/70 py-1 px-2 text-sm text-blue-100">
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Experience() {
  const experience = experienceJson as Experience[];

  return (
    <main className="flex justify-between space-x-4 ps-72 pe-64">
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
