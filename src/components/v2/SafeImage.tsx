"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

type Props = Omit<ImageProps, "onError" | "onLoad"> & {
  fallbackLabel?: string;
};

const MAX_RETRIES = 2;

export default function SafeImage({ fallbackLabel, alt, className, src, ...rest }: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);

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

  // Append cache-busting attempt counter so retries actually re-fetch
  const finalSrc =
    typeof src === "string" && attempt > 0
      ? `${src}${src.includes("?") ? "&" : "?"}_r=${attempt}`
      : src;

  return (
    <Image
      {...rest}
      key={attempt}
      src={finalSrc as ImageProps["src"]}
      alt={alt}
      className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      onError={() => {
        if (attempt < MAX_RETRIES) {
          // Wait briefly, then retry — handles cold-cache stalls on the optimizer
          setTimeout(() => setAttempt((a) => a + 1), 600 * (attempt + 1));
        } else {
          setErrored(true);
        }
      }}
      onLoad={() => setLoaded(true)}
    />
  );
}
