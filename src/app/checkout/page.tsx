"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Truck, ArrowRight, Home, Store } from "lucide-react";
import Header from "@/components/v2/HeaderV2";
import Footer from "@/components/v2/FooterV2";
import { useCart } from "@/cart/CartContext";
import { useLocale } from "@/i18n/LocaleContext";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 80;

type PaymentKey = "ideal" | "card" | "klarna" | "paypal";
type DeliveryKey = "home" | "molenstraat" | "hezelstraat";

const PICKUP_LOCATIONS: Record<Exclude<DeliveryKey, "home">, { name: string; address: string }> = {
  molenstraat: {
    name: "Tabak Molenstraat",
    address: "Molenstraat 120, 6511 HG Nijmegen",
  },
  hezelstraat: {
    name: "Tabaksspeciaalzaak Lange Hezelstraat",
    address: "Lange Hezelstraat 26, 6511 CK Nijmegen",
  },
};

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const { t } = useLocale();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("Nederland");
  const [payment, setPayment] = useState<PaymentKey>("ideal");
  const [delivery, setDelivery] = useState<DeliveryKey>("home");

  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const isPickup = delivery !== "home";
  const shippingFree = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = isPickup ? 0 : shippingFree ? 0 : 4.95;
  const total = subtotal + shippingCost;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (placing || items.length === 0) return;
    setPlacing(true);
    // Simulate order placement
    setTimeout(() => {
      const id = "TBK-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      setOrderId(id);
      clear();
      setPlacing(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1100);
  }

  // ── Success state ──
  if (orderId) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white">
          <div className="container mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <div className="size-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                <Check className="size-7 text-emerald-600" />
              </div>
              <h1 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tight mb-3">
                {t("checkout.success.title")}
              </h1>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {t("checkout.success.body")}
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  {t("checkout.success.orderNumber")}
                </span>
                <span className="font-montserrat text-base font-black text-[#2b3e51] tabular-nums">
                  {orderId}
                </span>
              </div>
              <div>
                <Link
                  href="/preview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
                >
                  {t("checkout.success.backHome")}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Empty cart state ──
  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white">
          <div className="container mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h1 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tight mb-3">
              {t("checkout.title")}
            </h1>
            <p className="text-gray-500 mb-8">{t("checkout.emptyState")}</p>
            <Link
              href="/preview"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#f5a623] hover:bg-[#e09415] text-white text-[12px] font-bold uppercase tracking-widest transition-colors"
            >
              {t("checkout.emptyStateCta")}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Checkout form ──
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb]">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/preview" className="hover:text-[#2b3e51] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2b3e51]">{t("checkout.breadcrumb")}</span>
          </nav>

          <h1 className="font-montserrat text-3xl sm:text-4xl font-black text-[#2b3e51] tracking-tight mb-8">
            {t("checkout.title")}
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">

            {/* ── LEFT: form ── */}
            <div className="flex flex-col gap-8">

              {/* Contact */}
              <Section title={t("checkout.contact")} subtitle={t("checkout.contactNote")}>
                <Field id="email" type="email" label={t("checkout.email")} value={email} onChange={setEmail} required />
                <Field id="phone" type="tel" label={t("checkout.phone")} value={phone} onChange={setPhone} />
              </Section>

              {/* Delivery method */}
              <Section title="Bezorging of afhalen" subtitle="Kies waar je je bestelling wilt ontvangen">
                <div className="flex flex-col gap-2">
                  {([
                    { key: "home",        icon: Home,  title: "Thuisbezorgd",                       sub: "Via PostNL — 2–3 werkdagen" },
                    { key: "molenstraat", icon: Store, title: `Afhalen — ${PICKUP_LOCATIONS.molenstraat.name}`,  sub: PICKUP_LOCATIONS.molenstraat.address },
                    { key: "hezelstraat", icon: Store, title: `Afhalen — ${PICKUP_LOCATIONS.hezelstraat.name}`,  sub: PICKUP_LOCATIONS.hezelstraat.address },
                  ] as { key: DeliveryKey; icon: typeof Home; title: string; sub: string }[]).map(({ key, icon: Icon, title, sub }) => (
                    <label
                      key={key}
                      className={cn(
                        "flex items-start gap-3 px-4 py-3.5 bg-white border rounded-lg cursor-pointer transition-colors",
                        delivery === key
                          ? "border-[#f5a623] ring-1 ring-[#f5a623]/30"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={key}
                        checked={delivery === key}
                        onChange={() => setDelivery(key)}
                        className="accent-[#f5a623] mt-0.5"
                      />
                      <Icon className="size-5 text-[#f5a623] shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#2b3e51]">{title}</p>
                        <p className="text-[12px] text-gray-500 mt-0.5">{sub}</p>
                      </div>
                      {key !== "home" && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 shrink-0">
                          Gratis
                        </span>
                      )}
                    </label>
                  ))}
                </div>
                {isPickup && (
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Je ontvangt een mail zodra je bestelling klaarligt in <span className="font-semibold text-[#2b3e51]">{PICKUP_LOCATIONS[delivery as Exclude<DeliveryKey, "home">].name}</span>. Neem je orderbevestiging en een geldig ID mee.
                  </p>
                )}
              </Section>

              {/* Shipping / pickup contact */}
              <Section title={isPickup ? "Naam voor afhalen" : t("checkout.shippingAddress")}>
                <div className="grid grid-cols-2 gap-4">
                  <Field id="first" label={t("checkout.firstName")} value={firstName} onChange={setFirst} required />
                  <Field id="last" label={t("checkout.lastName")} value={lastName} onChange={setLast} required />
                </div>
                {!isPickup && (
                  <>
                    <Field id="addr" label={t("checkout.address")} value={address} onChange={setAddress} required />
                    <Field id="addr2" label={t("checkout.addressLine2")} value={address2} onChange={setAddress2} />
                    <div className="grid grid-cols-[1fr_1.5fr] gap-4">
                      <Field id="zip" label={t("checkout.postcode")} value={postcode} onChange={setPostcode} required />
                      <Field id="city" label={t("checkout.city")} value={city} onChange={setCity} required />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/60 mb-2">
                        {t("checkout.country")}
                      </label>
                      <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm text-[#2b3e51] outline-none focus:border-[#f5a623] transition-colors"
                      >
                        <option>Nederland</option>
                        <option>België</option>
                        <option>Deutschland</option>
                        <option>France</option>
                      </select>
                    </div>
                  </>
                )}
              </Section>

              {/* Payment */}
              <Section title={t("checkout.paymentMethod")} subtitle={t("checkout.paymentNote")}>
                <div className="flex flex-col gap-2">
                  {(["ideal", "card", "klarna", "paypal"] as PaymentKey[]).map((k) => (
                    <label
                      key={k}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3.5 bg-white border rounded-lg cursor-pointer transition-colors",
                        payment === k
                          ? "border-[#f5a623] ring-1 ring-[#f5a623]/30"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={k}
                        checked={payment === k}
                        onChange={() => setPayment(k)}
                        className="accent-[#f5a623]"
                      />
                      <span className="text-sm font-semibold text-[#2b3e51] flex-1">
                        {t(`checkout.methods.${k}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </Section>

              {/* Mobile place-order pinned to bottom of form */}
              <button
                type="submit"
                disabled={placing}
                className="lg:hidden w-full h-12 rounded-lg bg-[#f5a623] hover:bg-[#e09415] text-white font-bold uppercase tracking-widest text-[12px] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {placing ? t("checkout.placing") : (
                  <>
                    {t("checkout.placeOrder")}
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </div>

            {/* ── RIGHT: order summary ── */}
            <aside className="self-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-sm">
                <h2 className="font-montserrat text-base font-black text-[#2b3e51] tracking-tight">
                  {t("checkout.summary")}
                </h2>

                <ul className="flex flex-col gap-3 max-h-[260px] overflow-y-auto pr-1">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant ?? ""}`} className="flex gap-3">
                      <div className="relative size-14 shrink-0 rounded-md bg-[#f4f5f6] overflow-hidden border border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1.5"
                          style={{ mixBlendMode: "multiply" }}
                          unoptimized
                        />
                        <span className="absolute -top-1 -right-1 size-5 rounded-full bg-[#2b3e51] text-white text-[10px] font-black flex items-center justify-center tabular-nums">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-[#2b3e51] line-clamp-2 leading-tight">{item.name}</p>
                        {item.variant && <p className="text-[10px] text-gray-400 mt-0.5">{item.variant}</p>}
                      </div>
                      <span className="text-[12px] font-bold text-[#2b3e51] tabular-nums whitespace-nowrap">
                        € {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-1.5 text-[13px] pt-3 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{t("cart.subtotal")}</span>
                    <span className="font-bold text-[#2b3e51] tabular-nums">€ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isPickup ? "Afhalen in winkel" : t("cart.shipping")}</span>
                    <span className="font-bold text-[#2b3e51] tabular-nums">
                      {isPickup || shippingFree
                        ? <span className="text-emerald-600">{t("cart.shippingFree")}</span>
                        : `€ ${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 mt-1 border-t border-gray-100">
                    <span className="font-montserrat font-black text-[#2b3e51]">{t("cart.total")}</span>
                    <span className="font-montserrat font-black text-[#2b3e51] text-lg tabular-nums">€ {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={placing}
                  className="hidden lg:flex w-full h-12 rounded-lg bg-[#f5a623] hover:bg-[#e09415] text-white font-bold uppercase tracking-widest text-[12px] transition-colors items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {placing ? t("checkout.placing") : (
                    <>
                      {t("checkout.placeOrder")}
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>

                <div className="flex flex-col gap-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
                  <span className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-[#f5a623]" /> {t("header.usp.securePay")}</span>
                  <span className="flex items-center gap-2"><Truck className="size-3.5 text-[#f5a623]" /> {t("header.usp.freeShipping")}</span>
                </div>
              </div>

              <Link
                href="/preview"
                className="hidden lg:inline-block mt-4 text-center w-full text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/50 hover:text-[#2b3e51] transition-colors"
              >
                {t("cart.continueShopping")}
              </Link>
            </aside>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="font-montserrat text-base font-black text-[#2b3e51] tracking-tight">{title}</h2>
        {subtitle && <p className="text-[12px] text-gray-400 mt-1">{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-bold uppercase tracking-widest text-[#2b3e51]/60 mb-2">
        {label}{required && <span className="text-[#f5a623] ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm text-[#2b3e51] placeholder:text-gray-400 outline-none focus:border-[#f5a623] transition-colors"
      />
    </div>
  );
}
