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
            <span className="text-sm mx-2 my-auto group-hover:text-blue-400 group-hover:text-lg transition-all">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </span>
          </h6>
        </div>

        <p className="text-gray-300 group-hover:text-white transition-all text-base">
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
