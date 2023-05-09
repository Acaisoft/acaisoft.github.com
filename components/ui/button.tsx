import clsx from "clsx";
import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

export type ButtonProps = {
  variant: "transparent" | "dark" | "light";
  endIcon?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, endIcon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={clsx(
          "relative h-12 rounded-full px-14 text-xs font-bold uppercase transition-colors duration-200",
          variant === "light" &&
            "bg-white text-blue-950 hover:bg-blue-950 hover:text-white",
          variant === "dark" &&
            "border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-blue-950",
          variant === "transparent" &&
            "border border-white text-white hover:bg-white hover:text-blue-950",
          className
        )}
      >
        {children}
        {endIcon && (
          <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-xl">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
