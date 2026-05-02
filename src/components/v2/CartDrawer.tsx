"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/cart/CartContext";
import { useLocale } from "@/i18n/LocaleContext";

const FREE_SHIPPING_THRESHOLD_NL = 80;

export default function CartDrawer() {
  const { items, subtotal, drawerOpen, closeDrawer, setQty, remove } = useCart();
  const { t } = useLocale();

  const itemsTpl = items.length === 1 ? t("cart.itemsOne") : t("cart.itemsMany");
  const itemsLabel = itemsTpl.replace("{count}", String(items.reduce((s, i) => s + i.quantity, 0)));

  const shippingFree = subtotal >= FREE_SHIPPING_THRESHOLD_NL || subtotal === 0;
  const shippingCost = shippingFree ? 0 : 4.95;
  const total = subtotal + shippingCost;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[300] transition-opacity duration-300",
        drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!drawerOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "absolute right-0 top-0 bottom-0 w-[92%] max-w-[440px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label={t("cart.title")}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5 text-[#2b3e51]" />
            <div className="flex flex-col leading-none">
              <span className="font-montserrat text-lg font-black text-[#2b3e51] tracking-tight">
                {t("cart.title")}
              </span>
              {items.length > 0 && (
                <span className="text-[11px] text-gray-400 mt-1">{itemsLabel}</span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label={t("cart.close")}
            className="size-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#2b3e51] transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-4">
            <div className="size-16 rounded-full bg-gray-50 flex items-center justify-center">
              <ShoppingBag className="size-7 text-gray-300" />
            </div>
            <p className="text-sm text-gray-500">{t("cart.empty")}</p>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
            >
              {t("cart.emptyCta")}
            </button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 flex flex-col gap-4">
            {items.map((item) => {
              const lineTotal = item.price * item.quantity;
              return (
                <li
                  key={`${item.id}-${item.variant ?? ""}`}
                  className="flex gap-3 sm:gap-4 pb-4 border-b border-gray-50 last:border-0"
                >
                  {/* Thumb */}
                  <div className="relative size-20 sm:size-24 shrink-0 rounded-lg bg-[#f4f5f6] overflow-hidden border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                      style={{ mixBlendMode: "multiply" }}
                      unoptimized
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 min-w-0 gap-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2b3e51]/40 truncate">
                      {item.brand}
                    </p>
                    <Link
                      href={`/product/${item.id}`}
                      onClick={closeDrawer}
                      className="font-montserrat text-[13px] font-black text-[#2b3e51] leading-snug line-clamp-2 hover:text-[#f5a623] transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.variant && (
                      <p className="text-[11px] text-gray-400 truncate">{item.variant}</p>
                    )}

                    <div className="flex items-center justify-between mt-1.5">
                      {/* Quantity */}
                      <div className="inline-flex items-center border border-gray-200 rounded-md">
                        <button
                          type="button"
                          aria-label="-"
                          onClick={() => setQty(item.id, item.quantity - 1, item.variant)}
                          disabled={item.quantity <= 1}
                          className="size-7 flex items-center justify-center text-[#2b3e51]/70 hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-transparent transition-colors"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-7 text-center text-[12px] font-bold text-[#2b3e51] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="+"
                          onClick={() => setQty(item.id, item.quantity + 1, item.variant)}
                          className="size-7 flex items-center justify-center text-[#2b3e51]/70 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="font-montserrat text-[14px] font-black text-[#2b3e51] tabular-nums">
                        € {lineTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => remove(item.id, item.variant)}
                    aria-label={t("cart.remove")}
                    className="self-start size-7 rounded-full text-gray-300 hover:bg-red-50 hover:text-red-500 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50 px-5 sm:px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-gray-500">{t("cart.subtotal")}</span>
                <span className="font-bold text-[#2b3e51] tabular-nums">€ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t("cart.shipping")}</span>
                <span className="font-bold text-[#2b3e51] tabular-nums">
                  {shippingFree ? <span className="text-emerald-600">{t("cart.shippingFree")}</span> : `€ ${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 mt-1 border-t border-gray-200">
                <span className="font-montserrat font-black text-[#2b3e51]">{t("cart.total")}</span>
                <span className="font-montserrat font-black text-[#2b3e51] text-lg tabular-nums">€ {total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#f5a623] hover:bg-[#e09415] text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
            >
              {t("cart.checkout")}
              <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={closeDrawer}
              className="text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#2b3e51] transition-colors"
            >
              {t("cart.continueShopping")}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
