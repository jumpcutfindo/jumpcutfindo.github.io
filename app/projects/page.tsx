import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsJSON from "./api/projects.json";
import Project from "../types/project";
import ProjectComponent from "./_components/project";

export default function Projects() {
  const projects = projectsJSON as Project[];
  const years = projects
    .map((proj) => proj.year)
    .filter((year, index, array) => array.indexOf(year) === index)
    .sort();

  const projectsByYear: any = {};
  years.forEach((year) => {
    projectsByYear[year] = projects.filter((proj) => proj.year === year);
  });

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

        <div className="space-y-4">
          <h1 className="text-5xl font-semibold text-blue-500 mx-12">
            Projects
          </h1>
          <div className="space-y-8">
            {Object.keys(projectsByYear)
              .reverse()
              .map((year, index) => {
                return (
                  <div key={index}>
                    <p className="mx-12 text-gray-400 text-sm font-medium">
                      {year}
                    </p>
                    {projectsByYear[year].map(
                      (proj: Project, index: number) => {
                        return <ProjectComponent key={index} project={proj} />;
                      }
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
