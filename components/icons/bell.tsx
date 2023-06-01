import { forwardRef, SVGProps } from "react";

export const Bell = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.9 23.32v-2.94h2.88v-8.6c0-1.92.55-3.65 1.65-5.2a7.2 7.2 0 0 1 4.45-2.94V2.9c0-.64.22-1.17.66-1.58.44-.41.98-.62 1.6-.62.61 0 1.14.2 1.59.62.44.41.66.94.66 1.58v.74a7.3 7.3 0 0 1 4.5 2.92 8.67 8.67 0 0 1 1.66 5.22v8.6h2.85v2.94H.9Zm11.27 3.81c-.75 0-1.4-.27-1.94-.8a2.6 2.6 0 0 1-.82-1.92h5.48c0 .76-.27 1.4-.8 1.93-.54.53-1.18.8-1.92.8Zm-5.48-6.75H17.6v-8.6c0-1.53-.52-2.83-1.58-3.9a5.2 5.2 0 0 0-3.86-1.6c-1.53 0-2.83.53-3.89 1.6a5.34 5.34 0 0 0-1.6 3.9v8.6Z"
      />
    </svg>
  )
);

Bell.displayName = "Bell";
