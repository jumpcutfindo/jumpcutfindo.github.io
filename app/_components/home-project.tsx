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

        <p className="opacity-80 group-hover:opacity-90">{shortDescription}</p>
        <div className="flex flex-row space-x-4">
          {tags.map((tag) => {
            return (
              <button className="bg-blue-600/70 py-1 px-2 text-sm text-blue-100">
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
