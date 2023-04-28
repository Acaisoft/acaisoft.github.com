import React, { ReactNode } from "react";
import { Quote } from "../icons/quote";
import clsx from "clsx";

export interface BlockquoteProps {
  variant?: "dark" | "light";
  className?: string;
  children?: ReactNode;
  responsive?: boolean;
}

export const Blockquote: React.FC<BlockquoteProps> = ({
  variant = "dark",
  className,
  children,
  responsive = true,
}) => {
  const dark = variant === "dark";

  return (
    <div
      className={clsx(
        "flex max-w-xl flex-col gap-4 ",
        dark ? "text-grey-700" : "text-white",
        responsive && "lg:flex-row lg:px-16",
        className
      )}
    >
      <Quote className={clsx(dark && "text-grey-600")} />
      <blockquote className="flex-1 text-xl italic lg:text-2xl">
        {children}
      </blockquote>
    </div>
  );
};
