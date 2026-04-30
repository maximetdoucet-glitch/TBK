"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Star, Pencil, Check, X, ShieldCheck, ThumbsUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleContext";
import { getReviewsForProduct, getRatingDistribution, type Review } from "@/lib/reviews";

const VISIBLE_COUNT = 4;

type SortKey = "newest" | "highest" | "lowest";

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
          className="p-0.5 transition-transform hover:scale-110"
        >
          <Star
            className={cn(
              "size-7 fill-current transition-colors",
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

function DistributionBar({
  stars,
  count,
  total,
  active,
  onClick,
}: {
  stars: number;
  count: number;
  total: number;
  active: boolean;
  onClick: () => void;
}) {
  const [width, setWidth] = useState(0);
  const target = total === 0 ? 0 : (count / total) * 100;

  // Animate the bar fill on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(target));
    return () => cancelAnimationFrame(id);
  }, [target]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group w-full flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-lg transition-colors",
        active ? "bg-[#f5a623]/10" : "hover:bg-gray-100"
      )}
    >
      <span className="flex items-center gap-1 text-[12px] font-bold text-[#2b3e51] w-8 shrink-0">
        {stars}
        <Star className="size-3 fill-current text-[#f5a623]" />
      </span>
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out",
            active ? "bg-[#f5a623]" : "bg-[#f5a623]/70 group-hover:bg-[#f5a623]"
          )}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-[11px] font-semibold text-gray-400 tabular-nums w-7 text-right shrink-0">
        {count}
      </span>
    </button>
  );
}

function ReviewCard({ review, locale, t, mountDelay }: { review: Review; locale: string; t: (k: string) => string; mountDelay: number }) {
  const [voted, setVoted] = useState(false);
  const [optimisticHelpful, setOptimisticHelpful] = useState(review.helpful);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), mountDelay);
    return () => clearTimeout(id);
  }, [mountDelay]);

  function handleVote() {
    if (voted) return;
    setVoted(true);
    setOptimisticHelpful((n) => n + 1);
  }

  return (
    <li
      className={cn(
        "p-5 sm:p-6 bg-white border border-gray-100 rounded-xl transition-all duration-500 ease-out",
        "hover:border-gray-200 hover:shadow-sm hover:-translate-y-0.5",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
    >
      <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
        <div className="flex items-center gap-3">
          <StarRow rating={review.rating} />
          <span className="font-bold text-[14px] text-[#2b3e51]">{review.name}</span>
          {review.verified && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="size-3" />
              {t("reviews.verified")}
            </span>
          )}
        </div>
      </div>

      <p className="text-[12px] text-gray-400 mb-3">
        {t("reviews.postedOn")} {formatDate(review.date, locale)}
      </p>

      <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
        {review.body}
      </p>

      <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
        <span className="text-[11px] text-gray-400">{voted ? t("reviews.helpfulMarked") : t("reviews.helpful")}</span>
        <button
          type="button"
          onClick={handleVote}
          disabled={voted}
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all duration-200",
            voted
              ? "border-[#f5a623] bg-[#f5a623]/10 text-[#f5a623] cursor-default"
              : "border-gray-200 text-gray-500 hover:border-[#f5a623] hover:text-[#f5a623] hover:bg-[#f5a623]/5"
          )}
        >
          <ThumbsUp className={cn("size-3 transition-transform", voted && "scale-110")} />
          <span className="tabular-nums">{optimisticHelpful}</span>
        </button>
      </div>
    </li>
  );
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
  const [filterStars, setFilterStars] = useState<number | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("newest");
  const [sortOpen, setSortOpen] = useState(false);

  const reviews: Review[] = useMemo(
    () => getReviewsForProduct(productId, reviewCount, rating),
    [productId, reviewCount, rating]
  );
  const distribution = useMemo(
    () => getRatingDistribution(productId, reviewCount, rating),
    [productId, reviewCount, rating]
  );

  const filtered = useMemo(() => {
    let out = filterStars == null ? reviews : reviews.filter((r) => r.rating === filterStars);
    out = [...out].sort((a, b) => {
      if (sortKey === "newest") return b.date.localeCompare(a.date);
      if (sortKey === "highest") return b.rating - a.rating;
      return a.rating - b.rating;
    });
    return out;
  }, [reviews, filterStars, sortKey]);

  const visible = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const hasMore = filtered.length > VISIBLE_COUNT;

  const summaryTpl = reviewCount === 1 ? t("reviews.summaryOne") : t("reviews.summary");
  const summaryText = summaryTpl
    .replace("{rating}", rating.toFixed(rating % 1 === 0 ? 1 : 2))
    .replace("{count}", String(reviewCount));

  const sortLabels: Record<SortKey, string> = {
    newest: t("reviews.sort.newest"),
    highest: t("reviews.sort.highest"),
    lowest: t("reviews.sort.lowest"),
  };

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

      {/* Summary card with distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-center mb-8 sm:mb-10 p-5 sm:p-7 bg-[#f8f9fb] border border-gray-200 rounded-2xl">
        {/* Badge + summary */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="shrink-0 size-20 sm:size-24 rounded-full bg-[#2b3e51] flex flex-col items-center justify-center text-white shadow-sm relative">
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

        {/* Distribution */}
        <div className="flex flex-col gap-1 lg:border-l lg:border-gray-200 lg:pl-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/40 mb-1">
            {t("reviews.distribution.title")}
          </p>
          {[5, 4, 3, 2, 1].map((s) => (
            <DistributionBar
              key={s}
              stars={s}
              count={distribution[s - 1]}
              total={reviews.length}
              active={filterStars === s}
              onClick={() => setFilterStars(filterStars === s ? null : s)}
            />
          ))}
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={() => setFormOpen((o) => !o)}
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-bold uppercase tracking-widest transition-all duration-200 shrink-0 lg:self-stretch lg:flex-col lg:py-6 lg:px-7 lg:gap-3"
        >
          <Pencil className="size-3.5 lg:size-5" />
          {t("reviews.addReview")}
        </button>
      </div>

      {/* Form */}
      {formOpen && (
        <div className="mb-8 p-5 sm:p-6 bg-white border border-gray-200 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
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

      {/* Filter chips + sort */}
      {reviews.length > 0 && (
        <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t("reviews.filterByStars")}>
            <button
              type="button"
              onClick={() => setFilterStars(null)}
              className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-colors",
                filterStars === null
                  ? "bg-[#2b3e51] border-[#2b3e51] text-white"
                  : "bg-white border-gray-200 text-[#2b3e51]/60 hover:border-[#2b3e51]/30 hover:text-[#2b3e51]"
              )}
            >
              {t("reviews.filterAll")}
            </button>
            {[5, 4, 3, 2, 1].map((s) => {
              const count = distribution[s - 1];
              if (count === 0) return null;
              const active = filterStars === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setFilterStars(active ? null : s)}
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-colors",
                    active
                      ? "bg-[#f5a623]/10 border-[#f5a623] text-[#f5a623]"
                      : "bg-white border-gray-200 text-[#2b3e51]/60 hover:border-[#f5a623]/40 hover:text-[#f5a623]"
                  )}
                >
                  {s}
                  <Star className="size-3 fill-current" />
                  <span className="text-gray-400 font-semibold ml-1">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              onBlur={() => setTimeout(() => setSortOpen(false), 120)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-gray-200 bg-white text-[#2b3e51]/70 hover:text-[#2b3e51] hover:border-[#2b3e51]/30 transition-colors"
            >
              <span className="text-gray-400 font-semibold normal-case tracking-normal">{t("reviews.sortLabel")}:</span>
              {sortLabels[sortKey]}
              <ChevronDown className={cn("size-3 transition-transform duration-200", sortOpen && "rotate-180")} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[180px] bg-white rounded-xl shadow-xl border border-gray-100 z-10 overflow-hidden p-1">
                {(["newest", "highest", "lowest"] as SortKey[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); setSortKey(k); setSortOpen(false); }}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-[12px] font-semibold transition-colors",
                      sortKey === k
                        ? "bg-[#f5a623]/10 text-[#f5a623]"
                        : "hover:bg-gray-50 text-[#2b3e51]"
                    )}
                  >
                    {sortLabels[k]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Review list */}
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400 italic py-8 text-center">{t(reviews.length === 0 ? "reviews.empty" : "reviews.noMatch")}</p>
      ) : (
        <ul className="flex flex-col gap-3 sm:gap-4">
          {visible.map((r, i) => (
            <ReviewCard key={`${r.name}-${r.date}-${i}`} review={r} locale={locale} t={t} mountDelay={i * 60} />
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
            <ChevronDown className={cn("size-3.5 transition-transform duration-200", expanded && "rotate-180")} />
          </button>
        </div>
      )}
    </section>
  );
}
