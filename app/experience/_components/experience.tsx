import StyledMarkdown from "@/app/shared-components/styled-markdown";
import Experience from "@/app/types/experience";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import Markdown from "react-markdown";

interface ExperienceComponentProps {
  experience: Experience;
}

export default function ExperienceComponent(props: ExperienceComponentProps) {
  const { start, end, title, company, url, longDescription, pointers, tags } =
    props.experience;

  const startFormatted = dayjs(start).format("MMM YYYY").toUpperCase();
  const endFormatted = end
    ? dayjs(end).format("MMM YYYY").toUpperCase()
    : undefined;

  return (
    <section className="flex flex-row p-8 mx-4">
      <div className="flex flex-col min-w-[25%]">
        <p className="text-gray-400 text-sm">
          {startFormatted} {endFormatted ? `- ${endFormatted}` : "- PRESENT"}
        </p>
      </div>
      <div className="flex flex-col min-w-[75%] -mt-1">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h6 className="font-medium text-2xl">
              {title} · {company}
            </h6>
            <StyledMarkdown>{longDescription}</StyledMarkdown>
          </div>
          <ul className="space-y-2 text-gray-300">
            {pointers.map((pointer, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-row">
                    <span className="ms-2 me-3">·</span>
                    <p>{pointer}</p>
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
