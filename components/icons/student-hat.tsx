import { forwardRef, SVGProps } from "react";

export const StudentHat = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="21"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 0 .2 7l4.6 2.5v7L13 21l8.2-4.5v-7l2.3-1.2v8h2.3V7L13 0Zm8 7-8 4.3L5 7l8-4.3L21 7Zm-2.2 8.2L13 18.3l-5.8-3.1v-4.4L13 14l5.8-3.2v4.4Z"
      />
    </svg>
  )
);

StudentHat.displayName = "StudentHat";
