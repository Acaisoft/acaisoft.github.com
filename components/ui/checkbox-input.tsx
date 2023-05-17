import clsx from "clsx";
import { ReactNode, forwardRef } from "react";
import { Checkbox, CheckboxProps } from "./checkbox";

export type CheckboxInputProps = CheckboxProps & {
  label: ReactNode;
  error?: boolean;
};

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      // Outer div is here to prevent label from going full width
      <div className={clsx("inline-flex", className)}>
        <label className="inline-flex gap-3">
          <Checkbox ref={ref} {...props} />
          <span className="-mt-1 flex-1">{label}</span>
        </label>
      </div>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";
