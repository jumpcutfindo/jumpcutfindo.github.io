import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import Experience from "../types/experience";
import TagList from "../shared-components/tag-list";

interface HomeExperienceComponentProps {
  experience: Experience;
}

export default function HomeExperienceComponent(
  props: HomeExperienceComponentProps
) {
  const { start, end, title, company, id, shortDescription, tags } =
    props.experience;

  const startFormatted = dayjs(start).format("MMM YYYY").toUpperCase();
  const endFormatted = end
    ? dayjs(end).format("MMM YYYY").toUpperCase()
    : undefined;

  const onClickComponent = () => {
    open(`/experience#${id}`, "_self");
  };

  return (
    <div
      className="flex flex-col md:flex-row hover:cursor-pointer group md:p-6 md:mx-6 p-6 hover:bg-white/5 transition-all"
      onClick={onClickComponent}
    >
      <div className="min-w-[30%]">
        <p className="text-gray-400 text-xs md:mb-0 mb-2">
          {startFormatted} {endFormatted ? `- ${endFormatted}` : "- PRESENT"}
        </p>
      </div>
      <div className="flex flex-col min-w-[70%] space-y-4 -mt-1">
        <div className="flex flex-row">
          <h6 className="font-medium text-xl group-hover:text-blue-400 transition-all">
            <span>
              {title} · {company}
            </span>
            <span className="text-sm mx-2 my-auto">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="sm"
                className="my-auto"
              />
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
