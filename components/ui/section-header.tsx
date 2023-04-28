import clsx from "clsx";
import React, { ReactNode } from "react";

export interface SectionHeaderProps {
  children?: ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <h2 className={clsx("mb-10 text-4xl font-bold sm:text-5xl", className)}>
      {children}
    </h2>
  );
};
