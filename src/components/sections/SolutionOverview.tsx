"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, Zap, Brain, Clock, Shield } from "lucide-react";
import Container from "../layout/Container";
import {
  staggerContainer,
  staggerChild,
  customEase,
  viewportConfig,
} from "../animation/variants";

const capabilities = [
  {
    icon: Zap,
    bold: "Scale casual headcount up and down",
    rest: " to match demand \u2014 without overtime as the default",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    icon: Brain,
    bold: "Real-time scenario modelling",
    rest: " of skills, shift lengths, and start times to optimise cost-per-unit",
    color: "bg-accent-vivid/10 text-accent-vivid border-accent-vivid/20",
  },
  {
    icon: Clock,
    bold: "Fill shifts within hours",
    rest: " \u2014 including certified roles like forklift drivers",
    color: "bg-lavender/30 text-accent border-lavender",
  },
  {
    icon: Shield,
    bold: "Outsource all Fair Work risk and compliance",
    rest: " to MyGig as the Employer of Record (EOR)",
    color: "bg-accent-vivid/10 text-accent-vivid border-accent-vivid/20",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SolutionOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="solution" ref={sectionRef} className="bg-primary py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div variants={staggerChild} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-vivid" />
            <span className="font-body font-medium text-sm text-accent-vivid uppercase tracking-wider">
              The Solution
            </span>
          </motion.div>
          <motion.h2
            variants={staggerChild}
            className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-white max-w-wide mx-auto"
          >
            MyGig is the operational backbone for warehouse fulfilment
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: customEase, delay: i * 0.1 },
                  },
                }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group flex items-start gap-4 p-5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 rounded-lg ${cap.color} border flex items-center justify-center shrink-0`}>
                  <cap.icon size={18} />
                </div>
                <p className="font-body text-lg text-white/90 leading-relaxed">
                  <strong className="font-bold text-white">{cap.bold}</strong>
                  {cap.rest}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={staggerChild}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: 70, suffix: "%", label: "Cost reduction" },
                { value: 24, suffix: "hr", label: "Shift fill time" },
                { value: 100, suffix: "%", label: "Fair Work compliant" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-bold text-2xl md:text-3xl text-accent-vivid">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-body text-sm text-neutral-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: phoneY }} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                transition: { duration: 0.8, ease: customEase, delay: 0.3 },
              }}
              viewport={viewportConfig}
              className="w-[280px] md:w-[320px] rounded-[28px] bg-gradient-to-b from-white to-neutral-100 shadow-2xl overflow-hidden border border-neutral-400/20"
            >
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
                  { day: "Tue, Apr 23", role: "Warehouse Picker / Packer", time: "8:00 AM - 5:00 PM", pay: "$144.00", filled: "3 of 3", full: true },
                  { day: "Wed, Apr 24", role: "Forklift Operator", time: "6:00 AM - 2:00 PM", pay: "$192.00", filled: "2 of 4", full: false },
                  { day: "Thu, Apr 25", role: "Warehouse Picker / Packer", time: "10:00 AM - 6:00 PM", pay: "$144.00", filled: "5 of 5", full: true },
                ].map((shift, i) => (
                  <div key={i} className="rounded-lg border border-neutral-400/30 p-3.5 hover:border-accent/30 transition-colors">
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
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
