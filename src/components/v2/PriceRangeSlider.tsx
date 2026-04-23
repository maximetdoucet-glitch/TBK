"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export const PRICE_ABSOLUTE_MAX = 430;

function buildUrl(
  min: number,
  max: number,
  cat?: string,
  brand?: string,
  sort?: string
): string {
  const p = new URLSearchParams();
  if (cat) p.set("cat", cat);
  if (brand) p.set("brand", brand);
  if (sort && sort !== "recommended") p.set("sort", sort);
  if (min > 0) p.set("min_price", String(min));
  if (max < PRICE_ABSOLUTE_MAX) p.set("max_price", String(max));
  const qs = p.toString();
  return `/aanstekers${qs ? `?${qs}` : ""}`;
}

type Props = {
  initMin: number;
  initMax: number;
  cat?: string;
  brand?: string;
  sort?: string;
};

const THUMB =
  "absolute w-full h-0 appearance-none bg-transparent pointer-events-none " +
  "[&::-webkit-slider-thumb]:pointer-events-auto " +
  "[&::-webkit-slider-thumb]:appearance-none " +
  "[&::-webkit-slider-thumb]:w-[18px] " +
  "[&::-webkit-slider-thumb]:h-[18px] " +
  "[&::-webkit-slider-thumb]:rounded-full " +
  "[&::-webkit-slider-thumb]:bg-[#2b3e51] " +
  "[&::-webkit-slider-thumb]:border-[2px] " +
  "[&::-webkit-slider-thumb]:border-white " +
  "[&::-webkit-slider-thumb]:shadow-md " +
  "[&::-webkit-slider-thumb]:cursor-pointer " +
  "[&::-webkit-slider-thumb]:hover:bg-[#f5a623] " +
  "[&::-webkit-slider-thumb]:transition-colors " +
  "[&::-moz-range-thumb]:pointer-events-auto " +
  "[&::-moz-range-thumb]:w-[18px] " +
  "[&::-moz-range-thumb]:h-[18px] " +
  "[&::-moz-range-thumb]:rounded-full " +
  "[&::-moz-range-thumb]:bg-[#2b3e51] " +
  "[&::-moz-range-thumb]:border-[2px] " +
  "[&::-moz-range-thumb]:border-white " +
  "[&::-moz-range-thumb]:cursor-pointer " +
  "[&::-moz-range-thumb]:hover:bg-[#f5a623] " +
  "[&::-moz-range-track]:bg-transparent " +
  "[&::-moz-range-track]:border-none";

export default function PriceRangeSlider({
  initMin,
  initMax,
  cat,
  brand,
  sort,
}: Props) {
  const router = useRouter();
  const [min, setMin] = useState(initMin);
  const [max, setMax] = useState(initMax);

  const commit = useCallback(
    (lo: number, hi: number) => {
      router.push(buildUrl(lo, hi, cat, brand, sort));
    },
    [cat, brand, sort, router]
  );

  const minPct = (min / PRICE_ABSOLUTE_MAX) * 100;
  const maxPct = (max / PRICE_ABSOLUTE_MAX) * 100;

  return (
    <div className="select-none">
      {/* Live price labels */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-0.5 bg-gray-50 border border-gray-200 rounded px-2 py-1">
          <span className="text-[10px] text-gray-400">€</span>
          <span className="text-[12px] font-black text-[#2b3e51] tabular-nums min-w-[28px]">
            {min}
          </span>
        </div>
        <span className="text-gray-300 text-xs">—</span>
        <div className="flex items-center gap-0.5 bg-gray-50 border border-gray-200 rounded px-2 py-1">
          <span className="text-[10px] text-gray-400">€</span>
          <span className="text-[12px] font-black text-[#2b3e51] tabular-nums min-w-[28px] text-right">
            {max}
          </span>
        </div>
      </div>

      {/* Slider track + thumbs */}
      <div className="relative h-5 flex items-center mx-1">
        {/* Background track */}
        <div className="absolute w-full h-[4px] bg-gray-200 rounded-full" />

        {/* Selected range highlight */}
        <div
          className="absolute h-[4px] bg-[#f5a623] rounded-full"
          style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={0}
          max={PRICE_ABSOLUTE_MAX}
          step={1}
          value={min}
          onChange={(e) => {
            const v = Math.min(Number(e.target.value), max - 1);
            setMin(v);
          }}
          onMouseUp={() => commit(min, max)}
          onTouchEnd={() => commit(min, max)}
          className={THUMB}
          style={{ zIndex: min >= max - 30 ? 5 : 3 }}
          aria-label="Minimumprijs"
        />

        {/* Max thumb */}
        <input
          type="range"
          min={0}
          max={PRICE_ABSOLUTE_MAX}
          step={1}
          value={max}
          onChange={(e) => {
            const v = Math.max(Number(e.target.value), min + 1);
            setMax(v);
          }}
          onMouseUp={() => commit(min, max)}
          onTouchEnd={() => commit(min, max)}
          className={THUMB}
          style={{ zIndex: 4 }}
          aria-label="Maximumprijs"
        />
      </div>

      {/* Floor / ceiling labels */}
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-gray-400">€ 0</span>
        <span className="text-[10px] text-gray-400">€ {PRICE_ABSOLUTE_MAX}</span>
      </div>
    </div>
  );
}
