"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Container from "../../layout/Container";
import { staggerContainer, staggerChild, viewportConfig } from "../../animation/variants";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { value: 95, suffix: "%", label: "Fill rate" },
  { value: 5, prefix: "<", suffix: "%", label: "Turnover rate" },
  { value: 2, suffix: " hours", label: "Average fill time" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="font-body font-medium text-sm uppercase tracking-wider text-white/40 text-center mb-10"
        >
          Our performance speaks for itself
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={staggerChild} className="text-center">
              <p className="font-display font-bold text-[48px] md:text-[56px] leading-none text-accent-vivid mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </p>
              <p className="font-body text-lg text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
