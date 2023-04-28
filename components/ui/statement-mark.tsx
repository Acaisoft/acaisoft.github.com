import clsx from "clsx";
import React from "react";

export interface StatementMarkProps {
  className?: string;
}

export const StatementMark: React.FC<StatementMarkProps> = ({ className }) => {
  return <div className={clsx("h-1 w-16 bg-current", className)} />;
};
