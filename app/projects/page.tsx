import {
  IconName,
  IconPrefix,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsJSON from "./api/projects.json";
import Project from "../types/project";
import StyledMarkdown from "../shared-components/styled-markdown";

interface ProjectComponentProps {
  project: Project;
}

function ProjectComponent(props: ProjectComponentProps) {
  const { title, longDescription, pointers, tags, image, links } =
    props.project;

  return (
    <section className="flex flex-row p-8 mx-4">
      <div className="flex flex-col min-w-[25%]">
        <img src={image} className="object-cover max-w-[75%]" />
      </div>
      <div className="flex flex-col min-w-[75%] -mt-1">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <div className="flex flex-row space-x-3">
              <h6 className="font-medium text-2xl">{title}</h6>
              {links &&
                links.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      className="my-auto hover:text-blue-400"
                    >
                      <FontAwesomeIcon
                        icon={link.icon.split(" ") as [IconPrefix, IconName]}
                        size="lg"
                      />
                    </a>
                  );
                })}
            </div>
            <StyledMarkdown>{longDescription}</StyledMarkdown>
          </div>
          <ul className="space-y-2 text-gray-300">
            {pointers.map((pointer, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-row">
                    <span className="ms-2 me-3">·</span>
                    <StyledMarkdown>{pointer}</StyledMarkdown>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row space-x-4">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="bg-blue-600/70 py-1 px-2 text-sm text-blue-100"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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
