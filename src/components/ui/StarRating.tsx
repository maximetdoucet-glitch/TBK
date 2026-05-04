import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Partial-fill star row: renders a gray base of 5 stars and overlays an
// amber copy clipped to (rating / 5) * 100%. So 4.75 visually shows
// 4 full + 1 ~3/4-filled, matching the haddocks-style display.
export default function StarRating({
  rating,
  size = 14,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(5, rating)) / 5 * 100;
  const stars = [0, 1, 2, 3, 4];
  return (
    <span className={cn("relative inline-flex", className)} aria-label={`${rating.toFixed(1)} / 5`}>
      {/* Gray base */}
      <span className="flex gap-0.5">
        {stars.map((i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className="fill-current text-gray-200"
            aria-hidden
          />
        ))}
      </span>
      {/* Amber overlay clipped to rating percentage */}
      <span
        className="absolute inset-0 overflow-hidden flex gap-0.5 pointer-events-none"
        style={{ width: `${pct}%` }}
        aria-hidden
      >
        {stars.map((i) => (
          <Star
            key={i}
            style={{ width: size, height: size, minWidth: size }}
            className="fill-current text-[#f5a623]"
          />
        ))}
      </span>
    </span>
  );
}
