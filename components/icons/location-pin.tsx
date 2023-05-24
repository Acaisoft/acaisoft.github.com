import { forwardRef, SVGProps } from "react";

export const LocationPin = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="25"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.48.63a8.4 8.4 0 0 0-8.4 8.4c0 6.3 8.4 15.6 8.4 15.6s8.4-9.3 8.4-15.6a8.4 8.4 0 0 0-8.4-8.4Zm-6 8.4a6 6 0 0 1 12 0c0 3.45-3.45 8.62-6 11.85-2.5-3.2-6-8.43-6-11.85Z"
      />
      <path fill="currentColor" d="M8.48 12.03a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
);

LocationPin.displayName = "LocationPin";
