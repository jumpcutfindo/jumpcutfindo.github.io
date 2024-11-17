import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardWrapperProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
}

export function CardWrapper({ icon, title, children }: CardWrapperProps) {
  return (
    <div className="flex flex-col flex-1 rounded-lg m-2 px-2 py-2 space-y-4">
      <div className="w-full flex flex-row items-start space-x-2">
        <FontAwesomeIcon icon={icon} size="sm" className="my-auto" />
        <h1 className="my-auto text-sm font-bold">{title.toUpperCase()}</h1>
      </div>
      <div className="w-full flex flex-col flex-1 space-y-4">{children}</div>
    </div>
  );
}
