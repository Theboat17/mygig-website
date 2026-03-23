import IndustryPage from "@/components/IndustryPage";
import { events } from "@/lib/industries";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MyGig for Events | Workforce-as-a-Service for Event Staffing",
  description: "Assemble reliable event crews on demand for festivals, conferences, exhibitions, and sporting events. Full Fair Work compliance as your Employer of Record.",
};

export default function EventsPage() {
  return <IndustryPage config={events} />;
}
