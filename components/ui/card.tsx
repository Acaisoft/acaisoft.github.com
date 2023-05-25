import clsx from "clsx";
import React, { ReactNode } from "react";

export interface CardProps {
  className?: string;
  overline: string;
  title: string;
  content: string;
  icon: ReactNode;
  iconColor?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  overline,
  title,
  content,
  icon,
  iconColor,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col rounded-lg border border-grey-300 p-5 sm:p-8",
        className
      )}
    >
      <div className="mb-2 text-sm text-grey-500">{overline}</div>
      <h4 className="mb-4 text-lg font-bold text-grey-600 lg:text-2xl">
        {title}
      </h4>
      <div className="mb-6 text-sm leading-relaxed text-grey-500 lg:text-base [&>strong]:text-slate-900">
        {content}
      </div>
      <div
        className="mt-auto grid h-10 w-10 place-items-center rounded-lg bg-blue-800 text-xl text-white"
        style={{ backgroundColor: iconColor }}
      >
        {icon}
      </div>
    </div>
  );
};
