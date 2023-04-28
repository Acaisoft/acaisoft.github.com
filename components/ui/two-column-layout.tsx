import clsx from "clsx";
import React, { ReactNode } from "react";

export interface TwoColumnLayoutProps {
  className?: string;
  children?: ReactNode;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-2 gap-y-10 lg:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
};
