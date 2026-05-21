import React from "react";

type Props = {
  sameDay?: boolean;
  className?: string;
};

// Renders the same-day-delivery shipping line shown on every product card.
// Green when the product is eligible (default), red when sameDay === false.
export default function ShippingNote({ sameDay, className = "" }: Props) {
  const eligible = sameDay !== false;
  const color = eligible ? "text-green-600" : "text-red-600";
  const text = eligible
    ? "Voor 17:00 besteld = vandaag verzonden"
    : "Niet beschikbaar voor same-day verzending";
  return (
    <p className={`text-[10px] sm:text-[11px] font-semibold leading-tight ${color} ${className}`}>
      {text}
    </p>
  );
}
