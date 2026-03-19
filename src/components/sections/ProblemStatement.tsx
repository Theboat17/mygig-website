"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, ShieldX } from "lucide-react";
import Container from "../layout/Container";
import {
  staggerContainer,
  staggerChild,
  customEase,
  viewportConfig,
} from "../animation/variants";

const painCards = [
  {
    icon: AlertTriangle,
    number: "01",
    title: "Unpredictable volumes put DIFOT at risk",
    body: "When a spike hits, your current casual workforce can\u2019t scale fast enough. Shifts go unfilled, picks get missed, DIFOT drops.",
    stat: "37%",
    statLabel: "of warehouses miss DIFOT during peaks",
  },
  {
    icon: TrendingDown,
    number: "02",
    title: "Overtime is the only lever \u2014 and it\u2019s bleeding margin",
    body: "When you can\u2019t flex headcount, overtime becomes the default. Penalty rates compound, cost-per-unit blows out, and you pay more to deliver less.",
    stat: "2.5\u00d7",
    statLabel: "penalty rate multiplier on overtime",
  },
  {
    icon: ShieldX,
    number: "03",
    title: "One bad peak puts a key account on notice",
    body: "Clients review performance at peaks. Repeated SLA breaches trigger reviews and put key accounts at risk.",
    stat: "68%",
    statLabel: "of contract reviews triggered at peak",
  },
];

export default function ProblemStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="bg-primary py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      {/* Floating accent orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={staggerChild} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-vivid" />
            <span className="font-body font-medium text-sm text-accent-vivid uppercase tracking-wider">
              The Problem
            </span>
          </motion.div>
          <motion.h2
            variants={staggerChild}
            className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-white max-w-wide mx-auto"
          >
            Inflexible workforces put key contracts at risk
          </motion.h2>
        </motion.div>

        {/* Pain Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    ease: customEase,
                    delay: i * 0.15,
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="relative rounded-lg bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 h-full backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-500">
                {/* Number watermark */}
                <span className="font-display font-light text-[80px] leading-none text-white/[0.03] absolute top-4 right-6 group-hover:text-white/[0.06] transition-colors duration-500 select-none">
                  {card.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent-vivid/10 border border-accent-vivid/20 flex items-center justify-center mb-6 group-hover:bg-accent-vivid/20 transition-colors duration-300">
                  <card.icon size={22} className="text-accent-vivid" />
                </div>

                {/* Content */}
                <h3 className="font-body font-bold text-xl text-white mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="font-body text-base text-neutral-500 leading-relaxed mb-8">
                  {card.body}
                </p>

                {/* Stat highlight */}
                <div className="mt-auto pt-6 border-t border-white/[0.06]">
                  <span className="font-display font-bold text-3xl text-accent-vivid">
                    {card.stat}
                  </span>
                  <p className="font-body text-sm text-neutral-600 mt-1">
                    {card.statLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
