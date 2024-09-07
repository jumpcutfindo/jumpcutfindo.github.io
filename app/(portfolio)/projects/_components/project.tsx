import StyledMarkdown from "@/app/shared-components/styled-markdown";
import TagList from "@/app/shared-components/tag-list";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Project from "../../types/project";

interface ProjectComponentProps {
  project: Project;
}

export default function ProjectComponent(props: ProjectComponentProps) {
  const { title, longDescription, pointers, tags, image, links } =
    props.project;

  return (
    <section className="flex lg:flex-row flex-col md:px-8 md:mx-4 px-6">
      <div className="flex flex-col min-w-[25%]">
        <Image
          src={image}
          className="object-cover lg:max-w-[75%] lg:mb-0 mb-4"
          alt={`${title} main image`}
          width={500}
          height={250}
        />
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
          <TagList tags={tags} />
        </div>
      </div>
    </section>
  );
}
