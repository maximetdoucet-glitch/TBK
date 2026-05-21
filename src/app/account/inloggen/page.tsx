import Link from "next/link";
import { getServerDict } from "@/i18n/server";

export const metadata = {
  title: "Inloggen OneConnect Lightshop",
  description: "Log in op je OneConnect Lightshop account.",
};

export default async function InloggenPage() {
  const dict = await getServerDict();
  const t = dict.accountLogin;
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        {t.heading}
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-md">
        {t.intro}
      </p>

      <form className="max-w-md space-y-5" aria-disabled="true">
        <div>
          <label htmlFor="email" className="block text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-2">
            {t.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51]">
              {t.passwordLabel}
            </label>
            <Link href="#" className="text-[11px] text-gray-400 hover:text-[#f5a623] transition-colors">
              {t.forgot}
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="size-4 accent-[#f5a623]" />
          <span className="text-[12px] text-gray-500">{t.remember}</span>
        </label>

        <button
          type="submit"
          disabled
          className="w-full py-3 bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {t.submit}
        </button>

        <p className="text-[12px] text-gray-500 text-center pt-2">
          {t.noAccount}{" "}
          <Link href="/account/registreren" className="font-bold text-[#2b3e51] hover:text-[#f5a623] transition-colors">
            {t.registerHere}
          </Link>
        </p>
      </form>
    </article>
  );
}
