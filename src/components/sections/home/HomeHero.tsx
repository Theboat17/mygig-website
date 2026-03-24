"use client";

import { motion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { customEase } from "../../animation/variants";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: customEase } },
};

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Warehouse team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Decorative gradient orb */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-vivid/20 blur-[150px] z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 py-32 md:py-40">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          <motion.div variants={heroChild}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-vivid animate-pulse" />
              <span className="font-body font-medium text-sm text-accent-vivid">
                Workforce-as-a-Service
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={heroChild}
            className="font-display font-bold text-[40px] leading-[48px] md:text-[56px] md:leading-[66px] lg:text-[72px] lg:leading-[82px] tracking-[-0.02em] text-white"
          >
            Your workforce partner for casual staffing
          </motion.h1>

          <motion.p
            variants={heroChild}
            className="font-body text-lg md:text-xl leading-[32px] text-white/70 mt-6 max-w-[640px]"
          >
            We staff workers instantly, at scale and with care. MyGig is Australia&apos;s Employer of Record platform for casual workforce management.
          </motion.p>

          <motion.div variants={heroChild} className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="large" href="#demo">
              Book a demo
            </Button>
            <Button variant="secondary-dark" size="large" href="#platform">
              See how it works
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
