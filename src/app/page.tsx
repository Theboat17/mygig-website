"use client";

import NavBar from "@/components/layout/NavBar";
import HomeHero from "@/components/sections/home/HomeHero";
import TrustedBy from "@/components/sections/home/TrustedBy";
import CapabilityRows from "@/components/sections/home/CapabilityRows";
import MidCTA from "@/components/sections/home/MidCTA";
import PlatformSection from "@/components/sections/home/PlatformSection";
import IndustriesServed from "@/components/sections/home/IndustriesServed";
import StatsBar from "@/components/sections/home/StatsBar";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HomeHero />
        <TrustedBy />
        <CapabilityRows />
        <MidCTA />
        <PlatformSection />
        <IndustriesServed />
        <StatsBar />
        <Testimonials />
        <FAQ />
        <FinalCTA
          headline="Ready to build a better workforce?"
          subtitle="See how MyGig can reduce your workforce costs, eliminate compliance risk, and give you the flexibility to scale on demand."
        />
      </main>
      <Footer />
    </>
  );
}
