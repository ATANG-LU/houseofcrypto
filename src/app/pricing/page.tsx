import { redirect } from "next/navigation";

// The old Pricing page now lives at /trading.
export default function Pricing() {
  redirect("/trading");
}
