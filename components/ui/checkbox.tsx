import React, { forwardRef } from "react";

export type CheckboxProps = React.ComponentPropsWithoutRef<"input">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className="form-checkbox rounded text-blue-900"
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
