"use client";

import React, { useMemo, useState } from "react";
import { Star, Pencil, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleContext";
import { getReviewsForProduct, type Review } from "@/lib/reviews";

const VISIBLE_COUNT = 4;

function StarRow({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={cn(
            "fill-current",
            i < Math.round(rating) ? "text-[#f5a623]" : "text-gray-200"
          )}
        />
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  const display = hover || value;
  return (
    <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHover(n)}
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          className="p-0.5"
        >
          <Star
            className={cn(
              "size-6 fill-current transition-colors",
              n <= display ? "text-[#f5a623]" : "text-gray-200 hover:text-[#f5a623]/40"
            )}
          />
        </button>
      ))}
    </div>
  );
}

function formatDate(iso: string, locale: string) {
  const map: Record<string, string> = { NL: "nl-NL", EN: "en-GB", DE: "de-DE", FR: "fr-FR" };
  try {
    return new Date(iso).toLocaleDateString(map[locale] ?? "nl-NL", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function ProductReviews({
  productId,
  rating,
  reviewCount,
}: {
  productId: number;
  rating: number;
  reviewCount: number;
}) {
  const { t, locale } = useLocale();
  const [expanded, setExpanded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [stars, setStars] = useState(5);

  const reviews: Review[] = useMemo(
    () => getReviewsForProduct(productId, reviewCount, rating),
    [productId, reviewCount, rating]
  );

  const visible = expanded ? reviews : reviews.slice(0, VISIBLE_COUNT);
  const hasMore = reviews.length > VISIBLE_COUNT;

  const summaryTpl = reviewCount === 1 ? t("reviews.summaryOne") : t("reviews.summary");
  const summaryText = summaryTpl
    .replace("{rating}", rating.toFixed(rating % 1 === 0 ? 1 : 2))
    .replace("{count}", String(reviewCount));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormOpen(false);
      setSubmitted(false);
      setName("");
      setBody("");
      setStars(5);
    }, 2200);
  }

  return (
    <section className="mt-12 lg:mt-20 pt-10 lg:pt-12 border-t border-gray-100">
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-1.5">
          {t("reviews.eyebrow")}
        </p>
        <h2 className="font-montserrat text-2xl sm:text-3xl font-black text-[#2b3e51] tracking-tighter">
          {t("reviews.heading")}
        </h2>
      </div>

      {/* Summary row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 sm:mb-10 p-5 sm:p-6 bg-[#f8f9fb] border border-gray-200 rounded-2xl">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Rating badge */}
          <div className="shrink-0 size-20 sm:size-24 rounded-full bg-[#2b3e51] flex flex-col items-center justify-center text-white shadow-sm">
            <span className="font-montserrat text-xl sm:text-2xl font-black leading-none tracking-tight">
              {rating.toFixed(rating % 1 === 0 ? 1 : 2)}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mt-1">
              {t("reviews.outOf")}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <StarRow rating={rating} size={18} />
            <p className="text-[13px] sm:text-sm text-gray-500 leading-snug">
              {summaryText}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setFormOpen((o) => !o)}
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-white border border-gray-200 hover:border-[#f5a623] hover:bg-[#f5a623]/5 text-[#2b3e51] hover:text-[#f5a623] text-[12px] font-bold uppercase tracking-widest transition-all duration-200 shrink-0"
        >
          <Pencil className="size-3.5" />
          {t("reviews.addReview")}
        </button>
      </div>

      {/* Form */}
      {formOpen && (
        <div className="mb-8 p-5 sm:p-6 bg-white border border-gray-200 rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-montserrat text-lg font-black text-[#2b3e51] tracking-tight">
              {t("reviews.form.title")}
            </h3>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              aria-label={t("reviews.form.cancel")}
              className="size-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#2b3e51] transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          {submitted ? (
            <div className="flex items-start gap-3 py-2">
              <div className="size-9 rounded-full bg-[#f5a623]/15 flex items-center justify-center shrink-0">
                <Check className="size-4 text-[#f5a623]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2b3e51]">{t("reviews.form.thanks")}</p>
                <p className="text-[13px] text-gray-500 mt-0.5">{t("reviews.form.thanksBody")}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/60 mb-2">
                  {t("reviews.form.ratingLabel")}
                </label>
                <StarPicker value={stars} onChange={setStars} />
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label htmlFor="rev-name" className="block text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/60 mb-2">
                    {t("reviews.form.nameLabel")}
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("reviews.form.namePlaceholder")}
                    className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#2b3e51] placeholder:text-gray-400 outline-none focus:border-[#f5a623] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="rev-body" className="block text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/60 mb-2">
                    {t("reviews.form.reviewLabel")}
                  </label>
                  <textarea
                    id="rev-body"
                    required
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder={t("reviews.form.reviewPlaceholder")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#2b3e51] placeholder:text-gray-400 outline-none focus:border-[#f5a623] focus:bg-white transition-colors resize-y"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="h-11 px-5 rounded-lg border border-gray-200 text-[#2b3e51]/60 hover:text-[#2b3e51] hover:border-[#2b3e51]/30 text-[12px] font-bold uppercase tracking-widest transition-colors"
                >
                  {t("reviews.form.cancel")}
                </button>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-lg bg-[#f5a623] hover:bg-[#e09415] text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
                >
                  {t("reviews.form.submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Review list */}
      {reviews.length === 0 ? (
        <p className="text-sm text-gray-400 italic">{t("reviews.empty")}</p>
      ) : (
        <ul className="flex flex-col gap-3 sm:gap-4">
          {visible.map((r, i) => (
            <li
              key={i}
              className="p-5 sm:p-6 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <StarRow rating={r.rating} />
                <span className="font-bold text-[14px] text-[#2b3e51]">{r.name}</span>
              </div>
              <p className="text-[12px] text-gray-400 mb-3">
                {t("reviews.postedOn")} {formatDate(r.date, locale)}
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Show more / less */}
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 hover:border-[#f5a623] hover:bg-[#f5a623]/5 text-[#2b3e51]/70 hover:text-[#f5a623] text-[12px] font-bold uppercase tracking-widest transition-all duration-200"
          >
            {expanded ? t("reviews.showLess") : t("reviews.showMore")}
          </button>
        </div>
      )}
    </section>
  );
}
