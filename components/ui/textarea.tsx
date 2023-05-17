import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef, useId } from "react";

export type TextareaProps = {
  label: string;
} & ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const autoId = useId();
    const id = props.id || autoId;

    return (
      <div className={clsx("relative", props.className)}>
        <textarea
          ref={ref}
          id={id}
          rows={4}
          {...props}
          placeholder=" "
          className="peer block min-h-[44px] w-full appearance-none rounded-lg border border-transparent bg-blue-900/5 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none"
        />
        <label
          htmlFor={id}
          className={clsx(
            "absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-grey-500 duration-300",
            "peer-placeholder-shown:top-5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0",
            "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2",
            "peer-required:after:content-['*']"
          )}
        >
          {props.label}
        </label>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
