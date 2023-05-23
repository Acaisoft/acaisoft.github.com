import clsx from "clsx";
import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

export type ButtonProps = {
  variant: "transparent" | "dark" | "light" | "outlined";
  endIcon?: ReactNode;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, endIcon, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type="button"
        {...props}
        className={clsx(
          "relative grid h-12 place-items-center rounded-full px-14 text-center text-xs font-bold uppercase transition-colors duration-200",
          variant === "light" &&
            "bg-white text-blue-950 hover:bg-blue-950 hover:text-white",
          variant === "dark" &&
            "border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-blue-950",
          variant === "transparent" &&
            "border border-white text-white hover:bg-white hover:text-blue-950",
          variant === "outlined" &&
            "border border-blue-950 bg-white text-blue-950 hover:bg-blue-950 hover:text-white",
          className
        )}
      >
        <Slottable>{children}</Slottable>
        {endIcon && (
          <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-xl">
            {endIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
