import clsx from "clsx";
import React, { ReactNode } from "react";
import { StatementMark } from "./statement-mark";

export interface StatementProps {
  variant?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}

export const Statement: React.FC<StatementProps> = ({
  variant = "dark",
  className,
  children,
}) => {
  const dark = variant === "dark";

  return (
    <div
      className={clsx(
        dark
          ? "text-grey-500 [&>strong]:text-slate-900"
          : "text-grey-300 [&>strong]:text-white",
        className
      )}
    >
      <StatementMark className={clsx("mb-5", dark && "text-grey-700")} />
      {children}
    </div>
  );
};
