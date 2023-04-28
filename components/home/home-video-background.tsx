import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import homeBg from "../../public/images/home-background.webp";

export interface HomeVideoBackgroundProps {}

export const HomeVideoBackground: React.FC<HomeVideoBackgroundProps> = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const matches = useMediaQuery("(min-width: 1024px)"); // `lg` breakpoint
  const isClient = useIsClient();

  const canPlay = isClient && matches;

  useEffect(() => {
    if (canPlay) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [canPlay]);

  return (
    <>
      {/* Make video darker */}
      <div className="absolute inset-0 hidden bg-black/30 lg:block" />

      <video
        ref={ref}
        className="hidden h-full w-full object-cover lg:block"
        loop
        muted
        playsInline
        style={{ backgroundImage: 'url("videos/home-poster.webp")' }}
        poster="videos/home-poster.webp"
      >
        <source src="videos/home.mp4" />
        <source src="videos/home.webm" />
      </video>

      {/* Alternate image for mobile */}
      <Image
        className="h-full w-full object-cover lg:hidden"
        src={homeBg}
        alt=""
        priority
      />
    </>
  );
};
