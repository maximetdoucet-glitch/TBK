"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

type Props = Omit<ImageProps, "onError" | "onLoad"> & {
  fallbackLabel?: string;
};

export default function SafeImage({ fallbackLabel, alt, className, ...rest }: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#f4f5f6] text-[#9aa4b1] ${className ?? ""}`}
        role="img"
        aria-label={typeof alt === "string" ? alt : "Afbeelding niet beschikbaar"}
      >
        <ImageOff className="size-6 mb-1" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 text-center">
          {fallbackLabel ?? "Geen afbeelding"}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...rest}
      alt={alt}
      className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      onError={() => setErrored(true)}
      onLoad={() => setLoaded(true)}
    />
  );
}
