import { forwardRef, SVGProps } from "react";

export const Chat = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 4v14l4.8-3.6A2 2 0 0 1 8 14h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm2 10V4h12v8H7.3a2 2 0 0 0-1.2.4L4 14Z"
      />
      <path
        fill="currentColor"
        d="M22 22V9a2 2 0 0 0-2-2v11l-2.1-1.6a2 2 0 0 0-1.2-.4H7c0 1.1.9 2 2 2h7c.4 0 .9.1 1.2.4L22 22Z"
      />
    </svg>
  )
);

Chat.displayName = "Chat";
