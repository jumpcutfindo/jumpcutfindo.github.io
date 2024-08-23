import StyledMarkdown from "@/app/shared-components/styled-markdown";
import TagList from "@/app/shared-components/tag-list";
import dayjs from "dayjs";
import Experience from "../../types/experience";

interface ExperienceComponentProps {
  experience: Experience;
}

export default function ExperienceComponent(props: ExperienceComponentProps) {
  const { start, end, title, company, id, longDescription, pointers, tags } =
    props.experience;

  const startFormatted = dayjs(start).format("MMM YYYY").toUpperCase();
  const endFormatted = end
    ? dayjs(end).format("MMM YYYY").toUpperCase()
    : undefined;

  return (
    <section id={id} className="flex flex-col lg:flex-row">
      <div className="flex flex-col min-w-[25%] space-y-1">
        <p className="text-gray-400 text-sm  md:px-12 px-6">
          {startFormatted} {endFormatted ? `- ${endFormatted}` : "- PRESENT"}
        </p>
        <div className="lg:flex hidden lg:flex-col flex-row md:px-12 px-6">
          <h6 className="font-semibold lg:text-xl text-xl">{title}</h6>
          <p className="font-light lg:text-lg text-xl">{company}</p>
        </div>
      </div>
      <div className="lg:hidden flex flex-row md:px-12 px-6 py-4 sticky top-0 bg-[#24272e]">
        <p className="text-base">
          <span className="font-semibold">{title.toUpperCase()}</span>
          <span className="mx-2">·</span>
          <span className="font-light">{company.toUpperCase()}</span>
        </p>
      </div>
      <div className="flex flex-col min-w-[75%] -mt-1 md:px-12 px-6">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
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

          <TagList tags={tags} />
        </div>
      </div>
    </section>
  );
}
