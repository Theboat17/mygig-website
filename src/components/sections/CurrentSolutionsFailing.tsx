"use client";

import { motion } from "framer-motion";
import { Clock, BarChart3, ShieldAlert, ArrowDown } from "lucide-react";
import Container from "../layout/Container";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "../animation/variants";

const failureCards = [
  {
    icon: Clock,
    title: "Labour hire is too slow for fulfilment",
    bullets: [
      "Slow, manual processes",
      "Days to respond, not hours",
      "By the time workers arrive, DIFOT is already missed",
    ],
    accent: "border-t-accent",
    iconColor: "bg-lavender text-accent",
  },
  {
    icon: BarChart3,
    title: "No way to optimise the labour mix in real time",
    bullets: [
      "No forecast modelling of skills, shift lengths, or start times",
      "Evening penalty rates hit when one long shift replaces two short ones",
      "You overpay on every spike because you\u2019re flying blind",
    ],
    accent: "border-t-accent-vivid",
    iconColor: "bg-lavender text-accent-vivid",
  },
  {
    icon: ShieldAlert,
    title: "Admin and compliance cost is too high to DIY",
    bullets: [
      "Recruitment, onboarding, payroll, award interpretation",
      "Fair Work compliance sits on already-stretched ops teams",
      "Overhead kills any cost advantage before it starts",
    ],
    accent: "border-t-accent",
    iconColor: "bg-lavender text-accent",
  },
];

export default function CurrentSolutionsFailing() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/10 to-transparent" />

      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-neutral-900 max-w-wide mx-auto">
            Current solutions can&rsquo;t keep up with the pace of your operation
          </h2>
          <p className="font-body text-lg text-neutral-700 mt-4 max-w-medium mx-auto">
            Whether it&rsquo;s labour hire, DIY compliance, or manual rostering &mdash; the tools you have today weren&rsquo;t built for the speed and complexity of modern fulfilment.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {failureCards.map((card, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`group relative rounded-lg bg-white border border-neutral-400/20 border-t-4 ${card.accent} p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300`}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className={`w-14 h-14 rounded-xl ${card.iconColor} flex items-center justify-center mb-6`}>
                <card.icon size={26} />
              </div>
              <h3 className="font-body font-bold text-[22px] leading-[30px] text-neutral-900 mb-5">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-base text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-accent-vivid/10 border border-accent-vivid/20 flex items-center justify-center"
          >
            <ArrowDown size={20} className="text-accent-vivid" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
