import { forwardRef, SVGProps } from "react";

export const Crosshair = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm8.94 3A8.994 8.994 0 0 0 12 2.06V0h-2v2.06A8.994 8.994 0 0 0 2.06 10H0v2h2.06A8.994 8.994 0 0 0 10 19.94V22h2v-2.06A8.994 8.994 0 0 0 19.94 12H22v-2h-2.06ZM11 18c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
      />
    </svg>
  )
);

Crosshair.displayName = "Crosshair";
