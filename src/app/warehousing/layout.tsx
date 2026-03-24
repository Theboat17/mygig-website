import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyGig for Warehousing | Workforce-as-a-Service",
  description: "Scale your warehouse workforce on demand. Pick packers, forklift operators, sorters, and warehouse assistants with full Fair Work compliance.",
};

export default function WarehousingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
