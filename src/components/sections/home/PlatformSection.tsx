"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, TrendingUp } from "lucide-react";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { staggerContainer, staggerChild, fadeUp, viewportConfig } from "../../animation/variants";

const features = [
  { icon: Brain, label: "AI-powered award interpretation" },
  { icon: Cpu, label: "Automated compliance engine" },
  { icon: TrendingUp, label: "Real-time workforce analytics" },
];

export default function PlatformSection() {
  return (
    <section id="platform" className="bg-neutral-200 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerChild}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-6">
                <span className="font-body font-medium text-sm text-accent-vivid uppercase tracking-wider">
                  Our Platform
                </span>
              </span>
            </motion.div>

            <motion.h2
              variants={staggerChild}
              className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-neutral-900 mb-6"
            >
              Harness the power of AI to supercharge your staffing
            </motion.h2>

            <motion.p
              variants={staggerChild}
              className="font-body text-lg leading-[30px] text-neutral-700 mb-8"
            >
              MyGig leverages the latest AI technology to provide powerful, effective staffing solutions. Our compliance engine automatically interprets awards, calculates rates, and ensures every shift is Fair Work compliant.
            </motion.p>

            <motion.div variants={staggerChild} className="space-y-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lavender border border-accent/20 flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-accent-vivid" />
                  </div>
                  <span className="font-body font-medium text-base text-neutral-900">{f.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerChild}>
              <Button variant="secondary" size="medium" href="/demo">
                Learn more
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — App Mockup */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center"
          >
            <div className="w-[300px] md:w-[340px] rounded-[28px] bg-gradient-to-b from-white to-neutral-100 shadow-2xl overflow-hidden border border-neutral-400/20">
              <div className="h-7 bg-primary flex justify-center items-end pb-1">
                <div className="w-20 h-1.5 rounded-full bg-white/20" />
              </div>
              <div className="bg-primary px-5 pt-3 pb-4">
                <p className="text-white font-body font-bold text-lg">Shift Dashboard</p>
                <div className="flex gap-2 mt-3">
                  {["Open Shifts", "Filled", "Completed"].map((tab, i) => (
                    <span key={tab} className={`px-3 py-1.5 rounded-full text-xs font-body font-medium ${i === 0 ? "bg-accent-vivid text-white" : "bg-white/10 text-white/60"}`}>
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-4 py-4 space-y-3">
                {[
                  { day: "Mon, Mar 24", role: "Warehouse Picker", time: "6:00 AM - 2:00 PM", pay: "$168.00", filled: "5 of 5", full: true },
                  { day: "Tue, Mar 25", role: "Forklift Operator", time: "8:00 AM - 4:00 PM", pay: "$208.00", filled: "3 of 4", full: false },
                  { day: "Wed, Mar 26", role: "Pack & Ship", time: "10:00 AM - 6:00 PM", pay: "$152.00", filled: "8 of 8", full: true },
                ].map((shift, i) => (
                  <div key={i} className="rounded-lg border border-neutral-400/30 p-3.5">
                    <div className="flex justify-between items-start">
                      <p className="font-body font-bold text-sm text-neutral-900">{shift.day}</p>
                      <span className={`text-[10px] font-body font-bold px-2 py-0.5 rounded-full ${shift.full ? "bg-lavender text-accent" : "bg-lavender-mid text-accent-vivid"}`}>
                        {shift.filled}
                      </span>
                    </div>
                    <p className="font-body text-xs text-neutral-600 mt-1">{shift.role}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-body text-xs text-neutral-500">{shift.time}</span>
                      <span className="font-body font-bold text-sm text-accent">{shift.pay}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-5 flex justify-center items-center">
                <div className="w-28 h-1 rounded-full bg-neutral-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
