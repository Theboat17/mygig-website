"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Container from "../layout/Container";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  customEase,
  viewportConfig,
} from "../animation/variants";

type CellValue = "yes" | "no" | "partial" | string;

interface ComparisonRow {
  feature: string;
  category?: boolean;
  mygig: CellValue;
  labourHire: CellValue;
  diy: CellValue;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Speed & Flexibility", category: true, mygig: "", labourHire: "", diy: "" },
  { feature: "Shifts filled within 24 hours", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Scale up/down on demand", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Certified roles (forklift, etc.)", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Real-time labour mix optimisation", mygig: "yes", labourHire: "no", diy: "no" },

  { feature: "Cost", category: true, mygig: "", labourHire: "", diy: "" },
  { feature: "Transparent, no-hidden-fee pricing", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Up to 70% cost reduction", mygig: "yes", labourHire: "no", diy: "no" },
  { feature: "Eliminate overtime blowouts", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Same-day pay for workers", mygig: "yes", labourHire: "no", diy: "no" },

  { feature: "Compliance & Risk", category: true, mygig: "", labourHire: "", diy: "" },
  { feature: "Full Employer of Record (EOR)", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "AI-powered award interpretation", mygig: "yes", labourHire: "no", diy: "no" },
  { feature: "Payroll, tax & super handled", mygig: "yes", labourHire: "partial", diy: "You do it" },
  { feature: "Audit-ready documentation", mygig: "yes", labourHire: "partial", diy: "no" },

  { feature: "Admin & Operations", category: true, mygig: "", labourHire: "", diy: "" },
  { feature: "Zero HR burden on your team", mygig: "yes", labourHire: "partial", diy: "no" },
  { feature: "Digital timesheets (GPS-verified)", mygig: "yes", labourHire: "no", diy: "partial" },
  { feature: "Single source of truth", mygig: "yes", labourHire: "no", diy: "no" },
  { feature: "Worker app for self-service", mygig: "yes", labourHire: "no", diy: "no" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") {
    return (
      <div className="w-7 h-7 rounded-full bg-lavender flex items-center justify-center">
        <Check size={14} className="text-accent-vivid" strokeWidth={3} />
      </div>
    );
  }
  if (value === "no") {
    return (
      <div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
        <X size={14} className="text-neutral-400" strokeWidth={3} />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-7 h-7 rounded-full bg-lavender/50 flex items-center justify-center">
        <Minus size={14} className="text-accent/60" strokeWidth={3} />
      </div>
    );
  }
  return <span className="font-body text-xs text-neutral-500">{value}</span>;
}

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-300 py-24 md:py-32 lg:py-40">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-neutral-900 max-w-wide mx-auto">
            MyGig vs. the alternatives
          </h2>
          <p className="font-body text-lg text-neutral-700 mt-4 max-w-medium mx-auto">
            See how Workforce-as-a-Service compares to traditional labour hire
            and DIY in-house management.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-[960px] mx-auto"
        >
          <div className="rounded-lg bg-white overflow-hidden shadow-lg border border-neutral-400/20">
            <div className="grid grid-cols-[1fr_120px_120px_120px] md:grid-cols-[1fr_140px_140px_140px] bg-primary text-white">
              <div className="p-4 md:p-5 font-body font-bold text-sm uppercase tracking-wider">
                Capability
              </div>
              <div className="p-4 md:p-5 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-vivid/20 border border-accent-vivid/30">
                  <span className="font-body font-bold text-sm text-accent-vivid">MyGig</span>
                </div>
              </div>
              <div className="p-4 md:p-5 text-center font-body font-medium text-sm text-white/70">
                Labour Hire
              </div>
              <div className="p-4 md:p-5 text-center font-body font-medium text-sm text-white/70">
                DIY In-House
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {comparisonData.map((row, i) => {
                if (row.category) {
                  return (
                    <motion.div
                      key={i}
                      variants={staggerChild}
                      className="grid grid-cols-[1fr_120px_120px_120px] md:grid-cols-[1fr_140px_140px_140px] bg-neutral-200/80 border-t border-neutral-400/20"
                    >
                      <div className="p-3 md:p-4 col-span-4">
                        <span className="font-body font-bold text-sm text-accent uppercase tracking-wider">
                          {row.feature}
                        </span>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={i}
                    variants={staggerChild}
                    className="grid grid-cols-[1fr_120px_120px_120px] md:grid-cols-[1fr_140px_140px_140px] border-t border-neutral-400/10 hover:bg-accent-vivid/[0.02] transition-colors duration-200"
                  >
                    <div className="p-3 md:p-4 font-body text-sm text-neutral-800">
                      {row.feature}
                    </div>
                    <div className="p-3 md:p-4 flex justify-center items-center">
                      <CellIcon value={row.mygig} />
                    </div>
                    <div className="p-3 md:p-4 flex justify-center items-center">
                      <CellIcon value={row.labourHire} />
                    </div>
                    <div className="p-3 md:p-4 flex justify-center items-center">
                      <CellIcon value={row.diy} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-lavender flex items-center justify-center">
                <Check size={10} className="text-accent-vivid" strokeWidth={3} />
              </div>
              <span className="font-body text-sm text-neutral-600">Included</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-lavender/50 flex items-center justify-center">
                <Minus size={10} className="text-accent/60" strokeWidth={3} />
              </div>
              <span className="font-body text-sm text-neutral-600">Partial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center">
                <X size={10} className="text-neutral-400" strokeWidth={3} />
              </div>
              <span className="font-body text-sm text-neutral-600">Not included</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
