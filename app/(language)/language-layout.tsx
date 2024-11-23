import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LanguageHeaderProps {
  icon: IconDefinition;
  title: string;
  isDynamic?: boolean;
  children?: React.ReactNode;
}

function LanguageHeader({
  icon,
  title,
  isDynamic,
  children,
}: LanguageHeaderProps) {
  return (
    <div className="w-full flex flex-row p-4 bg-white/5">
      {isDynamic && (
        <div className="flex flex-row">
          <FontAwesomeIcon icon={icon} size="xl" />
          <h1 className="ms-2">{title}</h1>
        </div>
      )}
      {children}
    </div>
  );
}

interface LanguageHeaderContentProps {
  children?: React.ReactNode;
}

function LanguageHeaderContent({ children }: LanguageHeaderContentProps) {
  return <div className="ms-auto flex flex-row space-x-4">{children}</div>;
}

function LanguageBody({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex flex-col flex-1">{children}</div>;
}

function LanguageLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col flex-1 w-full">{children}</div>;
}

export { LanguageHeader, LanguageHeaderContent, LanguageBody, LanguageLayout };
