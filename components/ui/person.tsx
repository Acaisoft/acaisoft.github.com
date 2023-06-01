import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

export interface PersonProps {
  variant?: "dark" | "light";
  photo?: StaticImageData;
  name: string;
  role: string;
  extra: ReactNode;
  className?: string;
}

export const Person: React.FC<PersonProps> = ({
  variant = "dark",
  photo,
  name,
  role,
  extra,
  className,
}) => {
  const dark = variant === "dark";

  return (
    <div
      data-dark={dark || undefined}
      className={clsx(
        "group flex items-center gap-5 pt-5 text-white",
        className
      )}
    >
      {photo && (
        <Image
          src={photo}
          alt={name}
          className="h-20 w-20 rounded-full object-cover shadow-[0_2px_4px_6px_rgba(0,0,0,.12)]"
        />
      )}
      <div className="text-sm">
        <div className="font-bold group-data-[dark]:text-slate-900">{name}</div>
        <div className="mb-0.5 group-data-[dark]:text-grey-600">{role}</div>
        <div className="group-data-[dark]:text-grey-500">{extra}</div>
      </div>
    </div>
  );
};
