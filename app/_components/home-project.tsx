import Project from "../types/project";

interface HomeProjectComponentProps {
  project: Project;
}

export default function HomeProjectComponent(props: HomeProjectComponentProps) {
  const { title, shortDescription, tags, image } = props.project;

  return (
    <div className="flex flex-row hover:cursor-pointer group p-6 ms-6 hover:bg-white/5 transition-all">
      <div className="min-w-[30%] pe-12">
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col min-w-[70%] space-y-4 -mt-1">
        <div className="flex flex-row">
          <h6 className="font-medium text-xl group-hover:text-blue-400 transition-all">
            {title}
          </h6>
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
