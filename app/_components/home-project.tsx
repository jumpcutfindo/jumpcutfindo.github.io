import Image from "next/image";
import Project from "../types/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import TagList from "../shared-components/tag-list";

interface HomeProjectComponentProps {
  project: Project;
}

export default function HomeProjectComponent(props: HomeProjectComponentProps) {
  const { title, shortDescription, tags, url, image } = props.project;

  const onClickComponent = () => {
    open(url, "_blank");
  };

  return (
    <div
      className="flex md:flex-row flex-col hover:cursor-pointer group md:p-6 md:mx-6 p-6 hover:bg-white/5 transition-all"
      onClick={onClickComponent}
    >
      <div className="min-w-[30%] md:pe-12 md:pb-0 pb-4">
        <Image
          src={image}
          alt={`${title} thumbnail`}
          className="object-cover mx-auto"
          width={500}
          height={250}
        />
      </div>
      <div className="flex flex-col min-w-[70%] space-y-4 -mt-1">
        <div className="flex flex-row">
          <h6 className="font-medium text-xl group-hover:text-blue-400 transition-all">
            <span>{title}</span>
            <span className="text-sm mx-2 my-auto group-hover:text-blue-400 group-hover:text-lg transition-all">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </span>
          </h6>
        </div>

        <p className="text-gray-300 group-hover:text-white transition-all text-base">
          {shortDescription}
        </p>
        <TagList tags={tags} />
      </div>
    </div>
  );
}
