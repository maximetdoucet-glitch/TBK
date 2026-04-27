import { Package } from "lucide-react";
import LockedState from "../_components/LockedState";

export const metadata = { title: "Bestelhistorie — OneConnect Lightshop" };

export default function BestelhistoriePage() {
  return (
    <LockedState
      title="Bestelhistorie"
      body="Hier zie je al je vorige bestellingen — met track & trace, factuur en de mogelijkheid om in één klik opnieuw te bestellen."
      illustration={Package}
    />
  );
}
