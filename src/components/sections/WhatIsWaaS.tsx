"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Scale,
  CalendarClock,
  DollarSign,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import Container from "../layout/Container";
import {
  staggerContainer,
  staggerChild,
  customEase,
  viewportConfig,
} from "../animation/variants";

const replacementRows = [
  { icon: Users, fn: "Recruitment", replaces: ["Job Ads", "Internal Recruiter"] },
  { icon: UserCheck, fn: "Onboarding & HR Compliance", replaces: ["ATS / HRIS", "HR Manager"] },
  { icon: Scale, fn: "Fair Work Award Interpretation", replaces: ["Award Software", "Payroll Manager"] },
  { icon: CalendarClock, fn: "Rostering, Time & Attendance", replaces: ["T&A Software", "HR + Ops"] },
  { icon: DollarSign, fn: "Payroll", replaces: ["Payroll Software", "Payroll Manager"] },
  { icon: Shield, fn: "Legal & Compliance", replaces: ["Int./Ext. Lawyer"] },
];

export default function WhatIsWaaS() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            variants={staggerChild}
            className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-neutral-900 max-w-wide mx-auto"
          >
            What is Workforce-as-a-Service?
          </motion.h2>
          <motion.p
            variants={staggerChild}
            className="font-body text-lg leading-[30px] text-neutral-700 mt-6 max-w-medium mx-auto"
          >
            MyGig is the Employer of Record for all casual staff engaged
            through the platform &mdash; assuming full Fair Work compliance,
            payroll, tax, and super liability while managing recruitment,
            onboarding, vetting, time &amp; attendance, and workforce admin end
            to end.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={staggerChild}
            className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6 px-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-vivid" />
              <span className="font-body font-bold text-sm uppercase tracking-wider text-neutral-900">
                MyGig Covers
              </span>
            </div>
            <div className="w-10" />
            <div className="flex items-center gap-2 justify-end">
              <span className="font-body font-bold text-sm uppercase tracking-wider text-neutral-500">
                What It Replaces
              </span>
              <div className="w-3 h-3 rounded-full bg-neutral-400" />
            </div>
          </motion.div>

          <div className="space-y-3">
            {replacementRows.map((row, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: customEase, delay: i * 0.08 },
                  },
                }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center p-4 md:p-5 rounded-lg bg-neutral-300/50 hover:bg-neutral-300 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lavender border border-accent/20 flex items-center justify-center shrink-0">
                    <row.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <span className="font-body font-bold text-base text-neutral-900">
                      {row.fn}
                    </span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Check size={12} className="text-accent-vivid" />
                      <span className="font-body text-xs text-accent-vivid">Included</span>
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-accent-vivid/10 flex items-center justify-center">
                  <ArrowRight size={16} className="text-accent-vivid group-hover:translate-x-0.5 transition-transform" />
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  {row.replaces.map((item, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200 text-neutral-500 font-body text-sm line-through decoration-neutral-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={staggerChild}
            className="mt-8 p-5 rounded-lg bg-gradient-to-r from-accent-vivid/5 via-lavender/30 to-accent-vivid/5 border border-lavender text-center"
          >
            <p className="font-body font-bold text-base text-primary">
              One platform. One partner. Zero compliance risk.
            </p>
            <p className="font-body text-sm text-neutral-700 mt-1">
              MyGig replaces 6+ SaaS tools and multiple staff roles with a single Workforce-as-a-Service solution.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
