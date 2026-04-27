import Link from "next/link";
import { Lock, type LucideIcon } from "lucide-react";

export default function LockedState({
  title,
  body,
  illustration: Icon,
}: {
  title: string;
  body: string;
  illustration: LucideIcon;
}) {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-10 max-w-2xl">{body}</p>

      <div className="border border-gray-100 rounded-sm p-10 text-center bg-[#f8f9fa]">
        <div className="relative inline-flex items-center justify-center mb-5">
          <Icon className="size-14 text-gray-300" strokeWidth={1.25} />
          <span className="absolute -bottom-1 -right-1 size-7 rounded-full bg-[#2b3e51] flex items-center justify-center">
            <Lock className="size-3.5 text-white" />
          </span>
        </div>
        <p className="font-montserrat text-base font-black text-[#2b3e51] mb-2">
          Log in om verder te gaan
        </p>
        <p className="text-[12px] text-gray-500 max-w-xs mx-auto leading-relaxed mb-6">
          Deze pagina is alleen beschikbaar voor ingelogde klanten. Maak een account of
          log in om toegang te krijgen.
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Link
            href="/account/inloggen"
            className="px-6 py-2.5 bg-[#2b3e51] hover:bg-[#f5a623] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors"
          >
            Inloggen
          </Link>
          <Link
            href="/account/registreren"
            className="px-6 py-2.5 border border-[#2b3e51] bg-white text-[#2b3e51] hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-sm transition-colors"
          >
            Registreren
          </Link>
        </div>
      </div>
    </article>
  );
}
