import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-[#5a6fa5] py-20 text-white">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="font-montserrat text-4xl font-black uppercase tracking-tighter leading-none">
               Wij staan graag voor je klaar!
            </h2>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest max-w-md">
               We helpen je graag en staan voor je klaar! Voor informatie omtrent producten of je order, neem contact op met de klantenservice.
            </p>
            <div>
               <Button className="bg-[#f39c12] hover:bg-[#e67e22] text-white rounded-none h-14 px-12 font-bold uppercase tracking-widest text-xs">
                  Neem contact op
               </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-6 lg:pl-16 lg:border-l border-white/10">
            <h2 className="font-montserrat text-2xl font-black uppercase tracking-tighter leading-none">
               Abonneer je op onze nieuwsbrief
            </h2>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
               Blijf op de hoogte over onze laatste acties
            </p>
            <div className="flex gap-2">
               <Input 
                  placeholder="E-mailadres" 
                  className="bg-white text-gray-900 h-14 px-6 rounded-none border-none text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
               />
               <Button className="bg-[#f39c12] hover:bg-[#e67e22] text-white rounded-none h-14 px-10 font-bold uppercase tracking-widest text-xs flex-shrink-0">
                  Abonneer
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
