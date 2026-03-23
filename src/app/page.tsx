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

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
        <WhatIsWaaS />
        <Benefits />
        <RolesWeCover />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
