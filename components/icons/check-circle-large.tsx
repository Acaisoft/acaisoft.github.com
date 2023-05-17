import { forwardRef, SVGProps } from "react";

export const CheckCircleLarge = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="91"
    height="91"
    fill="none"
    {...props}
  >
    <path stroke="#16C080" strokeWidth="3" d="M26 49.362 37.426 60 63 35" />
    <circle cx="45.5" cy="45.5" r="44.5" stroke="#16C080" strokeWidth="2" />
    <circle cx="45.5" cy="45.5" r="45.5" fill="#16C080" opacity=".06" />
  </svg>
));

CheckCircleLarge.displayName = "CheckCircleLarge";
