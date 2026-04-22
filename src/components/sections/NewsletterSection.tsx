import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-[#5a6fa5] py-14 sm:py-20 text-white">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Contact CTA */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
               Wij staan graag voor je klaar!
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
               We helpen je graag en staan voor je klaar! Voor informatie omtrent producten of je order, neem contact op met de klantenservice.
            </p>
            <div>
               <Button className="bg-[#f9c76b] hover:bg-[#e67e22] text-white rounded-lg h-11 sm:h-14 px-8 sm:px-12 font-semibold text-sm transition-colors">
                  Neem contact op
               </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-5 lg:pl-16 lg:border-l border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
               Abonneer je op onze nieuwsbrief
            </h2>
            <p className="text-white/70 text-sm">
               Blijf op de hoogte over onze laatste acties
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
               <Input
                  placeholder="E-mailadres"
                  className="bg-white text-gray-900 h-11 sm:h-14 px-5 rounded-lg border-none text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
               />
               <Button className="bg-[#f9c76b] hover:bg-[#e67e22] text-white rounded-lg h-11 sm:h-14 px-8 font-semibold text-sm flex-shrink-0 transition-colors">
                  Abonneer
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
