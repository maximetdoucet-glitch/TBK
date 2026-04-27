import Link from "next/link";

export const metadata = {
  title: "Inloggen — OneConnect Lightshop",
  description: "Log in op je OneConnect Lightshop account.",
};

export default function InloggenPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Inloggen
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-md">
        Log in om je bestellingen, verlanglijst en persoonlijke gegevens in één plek terug te vinden.
      </p>

      <form className="max-w-md space-y-5" aria-disabled="true">
        <div>
          <label htmlFor="email" className="block text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-2">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="naam@voorbeeld.nl"
            className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51]">
              Wachtwoord
            </label>
            <Link href="#" className="text-[11px] text-gray-400 hover:text-[#f5a623] transition-colors">
              Vergeten?
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
          <span className="text-[12px] text-gray-500">Onthoud mij op dit apparaat</span>
        </label>

        <button
          type="submit"
          disabled
          className="w-full py-3 bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Inloggen
        </button>

        <p className="text-[12px] text-gray-500 text-center pt-2">
          Nog geen account?{" "}
          <Link href="/account/registreren" className="font-bold text-[#2b3e51] hover:text-[#f5a623] transition-colors">
            Registreer hier
          </Link>
        </p>
      </form>
    </article>
  );
}
