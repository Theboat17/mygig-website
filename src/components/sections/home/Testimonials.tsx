"use client";

import { motion } from "framer-motion";
import Container from "../../layout/Container";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "../../animation/variants";

const testimonials = [
  {
    quote: "\u201CWe cut our overtime spend by 40% in the first quarter.\u201D",
    body: "MyGig gave us the flexibility to match headcount to demand without defaulting to overtime. The savings were immediate.",
    name: "Sarah M.",
    role: "Operations Manager",
  },
  {
    quote: "\u201CFilling shifts used to take days. Now it takes hours.\u201D",
    body: "We needed forklift drivers for a Monday morning spike. By Friday afternoon, MyGig had them confirmed.",
    name: "James T.",
    role: "Warehouse Manager",
  },
  {
    quote: "\u201CThe compliance piece alone was worth the switch.\u201D",
    body: "Having MyGig as the Employer of Record means Fair Work compliance isn\u2019t our problem anymore. That peace of mind is invaluable.",
    name: "Michelle L.",
    role: "CFO",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-200 py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-neutral-900">
            What our clients say
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerChild}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="font-body font-bold text-lg leading-[28px] text-neutral-900 mb-3">
                {t.quote}
              </h3>
              <p className="font-body text-base text-neutral-600 leading-relaxed mb-6">
                {t.body}
              </p>
              <div className="border-t border-neutral-400/20 pt-4">
                <p className="font-body font-bold text-sm text-neutral-900">{t.name}</p>
                <p className="font-body text-sm text-neutral-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
