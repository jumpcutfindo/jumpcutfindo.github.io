import StyledMarkdown from "@/app/shared-components/styled-markdown";
import Project from "@/app/types/project";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectComponentProps {
  project: Project;
}

export default function ProjectComponent(props: ProjectComponentProps) {
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
