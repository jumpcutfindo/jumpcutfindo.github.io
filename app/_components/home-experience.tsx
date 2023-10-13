import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import Experience from "../types/experience";

interface HomeExperienceComponentProps {
  experience: Experience;
}

export default function HomeExperienceComponent(
  props: HomeExperienceComponentProps
) {
  const { start, end, title, company, url, shortDescription, tags } =
    props.experience;

  const startFormatted = dayjs(start).format("MMM YYYY").toUpperCase();
  const endFormatted = end
    ? dayjs(end).format("MMM YYYY").toUpperCase()
    : undefined;

  const onClickComponent = () => {
    open(url, "_blank");
  };

  return (
    <div
      className="flex flex-row hover:cursor-pointer group p-6 ms-6 hover:bg-white/5 transition-all"
      onClick={onClickComponent}
    >
      <p className="text-gray-400 text-xs min-w-[30%]">
        {startFormatted} {endFormatted ? `- ${endFormatted}` : "- PRESENT"}
      </p>
      <div className="flex flex-col min-w-[70%] space-y-4 -mt-1">
        <div className="flex flex-row">
          <h6 className="font-medium text-xl group-hover:text-blue-400 transition-all">
            {title} · {company}
          </h6>
          <span className="text-sm mx-2 my-auto group-hover:text-blue-400 group-hover:text-lg transition-all">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </span>
        </div>

        <p className="text-gray-300 group-hover:text-white transition-all">
          {shortDescription}
        </p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="bg-blue-600/70 py-1 px-2 text-sm text-blue-100 me-3 mb-3"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
