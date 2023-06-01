import { forwardRef, SVGProps } from "react";

export const Return = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="16"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23 1.33v5.34H5.44l4.77-4.79L8.33 0l-8 8 8 8 1.88-1.88-4.77-4.79h20.23v-8H23Z"
      />
    </svg>
  )
);

Return.displayName = "Return";
