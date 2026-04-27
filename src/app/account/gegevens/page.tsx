import { User } from "lucide-react";
import LockedState from "../_components/LockedState";

export const metadata = { title: "Persoonlijke gegevens — OneConnect Lightshop" };

export default function GegevensPage() {
  return (
    <LockedState
      title="Persoonlijke gegevens"
      body="Beheer je adressen, telefoonnummer, voorkeuren voor verzending en marketingcommunicatie op één plek."
      illustration={User}
    />
  );
}
