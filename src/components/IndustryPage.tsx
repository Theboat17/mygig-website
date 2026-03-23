"use client";

import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import SolutionOverview from "@/components/sections/SolutionOverview";
import WhatIsWaaS from "@/components/sections/WhatIsWaaS";
import Benefits from "@/components/sections/Benefits";
import RolesWeCover from "@/components/sections/RolesWeCover";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import type { IndustryConfig } from "@/lib/industries";

export default function IndustryPage({ config }: { config: IndustryConfig }) {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <Hero
          badge={config.badge}
          headline={config.heroHeadline}
          subtitle={config.heroSubtitle}
          images={config.heroImages}
        />
        <ProblemStatement
          headline={config.problemHeadline}
          painCards={config.painCards}
        />
        <SolutionOverview
          headline={config.solutionHeadline}
          capabilities={config.capabilities}
          stats={config.stats}
        />
        <WhatIsWaaS />
        <Benefits />
        <RolesWeCover
          headline={config.rolesHeadline}
          subtitle={config.rolesSubtitle}
          roles={config.roles}
        />
        <FAQ faqs={config.faqs} />
        <FinalCTA
          headline={config.ctaHeadline}
          subtitle={config.ctaSubtitle}
        />
      </main>
      <Footer />
    </>
  );
}
