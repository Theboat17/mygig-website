"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Container from "../layout/Container";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportConfig,
} from "../animation/variants";

type CellValue = "yes" | "no" | "partial" | string;

interface ComparisonRow {
  feature: string;
  mygig: CellValue;
  labourHire: CellValue;
  diy: CellValue;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Shifts filled within 24 hours", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Scale up/down on demand", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Certified roles (forklift, etc.)", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Transparent pricing, no hidden fees", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Up to 70% cost reduction", mygig: "yes", labourHire: "no", diy: "no" },
  { feature: "Eliminate overtime blowouts", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Full Employer of Record (EOR)", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "AI-powered award interpretation", mygig: "yes", labourHire: "no", diy: "no" },
  { feature: "Payroll, tax & super handled", mygig: "yes", labourHire: "partial", diy: "You" },
  { feature: "Zero HR burden on your team", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "GPS-verified digital timesheets", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Same-day pay for workers", mygig: "yes", labourHire: "no", diy: "no" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") {
    return (
      <div className="w-6 h-6 rounded-full bg-lavender flex items-center justify-center">
        <Check size={12} className="text-accent-vivid" strokeWidth={3} />
      </div>
    );
  }
  if (value === "no") {
    return (
      <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center">
        <X size={12} className="text-neutral-400" strokeWidth={3} />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-lavender/50 flex items-center justify-center">
        <Minus size={12} className="text-accent/60" strokeWidth={3} />
      </div>
    );
  }
  return <span className="font-body text-xs text-neutral-500">{value}</span>;
}

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-300 py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-neutral-900 max-w-wide mx-auto">
            MyGig vs. the alternatives
          </h2>
          <p className="font-body text-base md:text-lg text-neutral-700 mt-3 max-w-medium mx-auto">
            See how Workforce-as-a-Service stacks up against traditional labour hire and DIY in-house management.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-[840px] mx-auto"
        >
          <div className="rounded-lg bg-white overflow-hidden shadow-md border border-neutral-400/20">
            {/* Header */}
            <div className="grid grid-cols-[1fr_80px_80px_80px] md:grid-cols-[1fr_110px_110px_110px] bg-primary text-white">
              <div className="px-4 py-3 md:px-5 md:py-3.5 font-body font-bold text-xs uppercase tracking-wider text-white/60" />
              <div className="px-2 py-3 md:px-3 md:py-3.5 text-center">
                <span className="inline-block px-2.5 py-1 rounded-full bg-accent-vivid/20 border border-accent-vivid/30 font-body font-bold text-xs text-accent-vivid">
                  MyGig
                </span>
              </div>
              <div className="px-2 py-3 md:px-3 md:py-3.5 text-center font-body font-medium text-xs text-white/60">
                Labour Hire
              </div>
              <div className="px-2 py-3 md:px-3 md:py-3.5 text-center font-body font-medium text-xs text-white/60">
                DIY
              </div>
            </div>

            {/* Rows */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  variants={staggerChild}
                  className={`grid grid-cols-[1fr_80px_80px_80px] md:grid-cols-[1fr_110px_110px_110px] ${
                    i % 2 === 0 ? "bg-white" : "bg-neutral-100/50"
                  } ${i > 0 ? "border-t border-neutral-400/10" : ""}`}
                >
                  <div className="px-4 py-2.5 md:px-5 md:py-3 font-body text-sm text-neutral-800">
                    {row.feature}
                  </div>
                  <div className="px-2 py-2.5 md:px-3 md:py-3 flex justify-center items-center">
                    <CellIcon value={row.mygig} />
                  </div>
                  <div className="px-2 py-2.5 md:px-3 md:py-3 flex justify-center items-center">
                    <CellIcon value={row.labourHire} />
                  </div>
                  <div className="px-2 py-2.5 md:px-3 md:py-3 flex justify-center items-center">
                    <CellIcon value={row.diy} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-lavender flex items-center justify-center">
                <Check size={8} className="text-accent-vivid" strokeWidth={3} />
              </div>
              <span className="font-body text-xs text-neutral-600">Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-lavender/50 flex items-center justify-center">
                <Minus size={8} className="text-accent/60" strokeWidth={3} />
              </div>
              <span className="font-body text-xs text-neutral-600">Partial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center">
                <X size={8} className="text-neutral-400" strokeWidth={3} />
              </div>
              <span className="font-body text-xs text-neutral-600">Not included</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
