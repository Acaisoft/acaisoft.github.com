import clsx from "clsx";
import React, { forwardRef } from "react";

export type FilterSelectProps = {
  options: { label: string; value: string }[];
} & React.ComponentPropsWithoutRef<"select">;

export const FilterSelect = forwardRef<HTMLSelectElement, FilterSelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={clsx(
          "form-select h-12 rounded-full border border-grey-300 bg-none px-6 text-sm font-medium text-grey-700 shadow-[1px_1px_2px_#e7e7e7]",
          className
        )}
      >
        {options.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  }
);

FilterSelect.displayName = "FilterSelect";
