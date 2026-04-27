import Link from "next/link";

export const metadata = {
  title: "Registreren — OneConnect Lightshop",
  description: "Maak een nieuw account aan bij OneConnect Lightshop.",
};

export default function RegistrerenPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Account aanmaken
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-md">
        Maak een account om sneller af te rekenen, bestellingen te volgen en je
        verlanglijst te bewaren.
      </p>

      <form className="max-w-md space-y-5" aria-disabled="true">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstname" className="block text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-2">
              Voornaam
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              autoComplete="given-name"
              className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-2">
              Achternaam
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              autoComplete="family-name"
              className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
            />
          </div>
        </div>

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
          <label htmlFor="password" className="block text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51] mb-2">
            Wachtwoord
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Minimaal 8 tekens"
            className="w-full px-4 py-3 text-[13px] border border-gray-200 rounded-sm focus:border-[#f5a623] focus:outline-none transition-colors"
          />
          <p className="text-[10px] text-gray-400 mt-2">
            Gebruik minimaal 8 tekens, met een mix van letters, cijfers en een symbool.
          </p>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="size-4 accent-[#f5a623] mt-0.5" />
          <span className="text-[12px] text-gray-500 leading-relaxed">
            Ik ben 18 jaar of ouder en ga akkoord met de{" "}
            <Link href="#" className="font-bold text-[#2b3e51] hover:text-[#f5a623] transition-colors">
              algemene voorwaarden
            </Link>{" "}
            en het{" "}
            <Link href="#" className="font-bold text-[#2b3e51] hover:text-[#f5a623] transition-colors">
              privacybeleid
            </Link>
            .
          </span>
        </label>

        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="size-4 accent-[#f5a623] mt-0.5" />
          <span className="text-[12px] text-gray-500 leading-relaxed">
            Stuur me af en toe een mail met nieuwe Zippo-collecties en aanbiedingen
            (max. 1× per maand, altijd uitschrijfbaar).
          </span>
        </label>

        <button
          type="submit"
          disabled
          className="w-full py-3 bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Account aanmaken
        </button>

        <p className="text-[12px] text-gray-500 text-center pt-2">
          Al een account?{" "}
          <Link href="/account/inloggen" className="font-bold text-[#2b3e51] hover:text-[#f5a623] transition-colors">
            Log hier in
          </Link>
        </p>
      </form>
    </article>
  );
}
