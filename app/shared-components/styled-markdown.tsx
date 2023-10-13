import Markdown, { Options } from "react-markdown";

export default function StyledMarkdown(props: Readonly<Options>) {
  const { children, className } = props;
  return (
    <Markdown
      components={{
        a(props) {
          const { children, className, node, href, ...rest } = props;
          return (
            <a
              href={href}
              target="_blank"
              className="text-blue-300 group hover:cursor-pointer"
            >
              <span className="group-hover:text-blue-400 transition-all underline underline-offset-4">
                {children}
              </span>
            </a>
          );
        },
      }}
      className={`text-gray-300 ${className}`}
    >
      {children}
    </Markdown>
  );
}
