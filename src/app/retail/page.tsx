import IndustryPage from "@/components/IndustryPage";
import { retail } from "@/lib/industries";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MyGig for Retail | Workforce-as-a-Service for Stores",
  description: "Scale retail staff on demand for peak trading, seasonal surges, and new store openings. Full Fair Work compliance as your Employer of Record.",
};

export default function RetailPage() {
  return <IndustryPage config={retail} />;
}
