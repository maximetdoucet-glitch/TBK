"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, ChevronDown, Menu, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Header: Logo, Search, Actions */}
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 md:gap-8">
        {/* Typographic Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="font-montserrat text-3xl font-black tracking-[0.1em] text-[#2b3e51] leading-none uppercase">
            TBK
          </span>
          <span className="font-montserrat text-[10px] font-bold tracking-[0.4em] text-[#2b3e51] mt-1 ml-1 opacity-80 uppercase">
            LIGHTSHOP
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-xl relative">
          <Input 
            placeholder="Zoeken.." 
            className="w-full h-11 pl-4 pr-12 rounded-full border-gray-200 focus:border-primary focus:ring-0 text-sm"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51] group cursor-pointer">
             <span>EUR</span>
             <span className="ml-1">🇳🇱</span>
          </div>
          <Link href="#" className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51] hover:text-primary transition-colors">
            <User className="size-5" />
            <span className="hidden xl:inline">Mijn account</span>
          </Link>
          <Link href="#" className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#2b3e51] hover:text-primary transition-colors">
            <Heart className="size-5" />
            <span className="hidden xl:inline">Verlanglijst</span>
          </Link>
          <Link href="#" className="relative p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-all group">
            <ShoppingCart className="size-6" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold size-5 rounded-full flex items-center justify-center border-2 border-white">
              0
            </span>
          </Link>
          
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger render={
                <Button variant="ghost" size="icon" className="p-0">
                  <Menu className="size-6" />
                </Button>
              } />
              <SheetContent side="left" className="w-[280px] flex flex-col">
                <SheetHeader>
                  <SheetTitle className="font-montserrat text-lg font-black tracking-widest text-[#2b3e51] uppercase text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col mt-6 divide-y divide-gray-100">
                  {[
                    { label: "Zippo aanstekers", href: "#" },
                    { label: "Aanstekers", href: "/aanstekers" },
                    { label: "Vloei", href: "#" },
                    { label: "Sigarenknippers", href: "#" },
                    { label: "Bekijk alles", href: "#" },
                    { label: "Sale", href: "#" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="py-4 text-sm font-medium text-[#2b3e51] hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <Link href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#2b3e51] transition-colors">
                    <User className="size-4" /> Mijn account
                  </Link>
                  <Link href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#2b3e51] transition-colors">
                    <Heart className="size-4" /> Verlanglijst
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full bg-[#2b3e51] text-white">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          <div className="flex items-center h-full">
            <Button className="bg-[#f5a623] hover:bg-[#e67e22] text-white rounded-none h-full px-6 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2">
              Assortiment <ChevronDown className="size-4" />
            </Button>
            <div className="hidden lg:flex items-center h-full ml-4">
               {[
                 { label: "Zippo aanstekers", href: "#" },
                 { label: "Aanstekers", href: "/aanstekers" },
                 { label: "Vloei", href: "#" },
                 { label: "Sigarenknippers", href: "#" },
                 { label: "Bekijk alles", href: "#" },
               ].map((item) => (
                 <Link
                   key={item.label}
                   href={item.href}
                   className="px-6 h-full flex items-center text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                 >
                   {item.label}
                 </Link>
               ))}
            </div>
          </div>
          
          {/* Ratings */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold">
            <div className="flex text-[#f5a623]">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <span className="tracking-widest capitalize">4.8 / 5 GOOGLE REVIEWS</span>
          </div>
        </div>
      </nav>

      {/* USP Bar */}
      <div className="w-full bg-[#f8f8f8] border-b border-gray-100 py-2.5 overflow-hidden">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Mobile: single scrollable row */}
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none md:justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 whitespace-nowrap">
            <div className="flex items-center gap-2 shrink-0">
              <Check className="size-3.5 text-primary shrink-0" />
              <span><span className="text-gray-900">Gratis verzending</span> vanaf € 80,-</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Check className="size-3.5 text-primary shrink-0" />
              <span><span className="text-gray-900">Voor 16:00 besteld</span>, dezelfde dag verstuurd</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Check className="size-3.5 text-primary shrink-0" />
              <span><span className="text-gray-900">Gratis retourneren</span> binnen Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
