import { forwardRef, SVGProps } from "react";

export const Idea = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 20h4c0 1.1-.9 2-2 2s-2-.9-2-2Zm-2-1h8v-2H4v2Zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H4.27C3.16 15.36.5 13.32.5 9.5.5 5.36 3.86 2 8 2c4.14 0 7.5 3.36 7.5 7.5Zm-2 0C13.5 6.47 11.03 4 8 4a5.51 5.51 0 0 0-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5Zm6.87-2.13L19 8l1.37.63L21 10l.63-1.37L23 8l-1.37-.63L21 6l-.63 1.37ZM18 6l.94-2.06L21 3l-2.06-.94L18 0l-.94 2.06L15 3l2.06.94L18 6Z"
      />
    </svg>
  )
);

Idea.displayName = "Idea";
