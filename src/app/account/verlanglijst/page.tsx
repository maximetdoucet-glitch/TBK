import { Heart } from "lucide-react";
import LockedState from "../_components/LockedState";

export const metadata = { title: "Verlanglijst — OneConnect Lightshop" };

export default function VerlanglijstPage() {
  return (
    <LockedState
      title="Verlanglijst"
      body="Bewaar je favoriete Zippo's, asbakken en pijpen voor later — en krijg een seintje als ze in de aanbieding gaan."
      illustration={Heart}
    />
  );
}
