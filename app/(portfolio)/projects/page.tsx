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
    <main className="flex lg:py-24 md:py-12 py-6 w-screen">
      <div className="flex flex-col">
        <div className="flex md:mx-12 mx-6 mb-4">
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
          <h1 className="text-5xl font-semibold text-blue-500 md:mx-12 mx-6">
            Projects
          </h1>
          <div className="space-y-8">
            {Object.keys(projectsByYear)
              .reverse()
              .map((year, index) => {
                return (
                  <div key={index}>
                    <p className="md:px-12 px-6 py-4 text-gray-400 text-sm font-medium lg:relative sticky top-0 bg-portfolio-background">
                      {year}
                    </p>
                    <div className="space-y-12">
                      {projectsByYear[year].map(
                        (proj: Project, index: number) => {
                          return (
                            <ProjectComponent key={index} project={proj} />
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
