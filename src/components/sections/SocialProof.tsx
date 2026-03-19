"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "../animation/variants";

const testimonials = [
  {
    quote: "\u201CWe cut our overtime spend by 40% in the first quarter\u201D",
    body: "MyGig gave us the flexibility to match headcount to demand without defaulting to overtime. The savings were immediate and significant.",
    name: "Sarah M.",
    role: "Operations Manager, Logistics Co",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote: "\u201CFilling shifts used to take days. Now it takes hours\u201D",
    body: "We needed forklift drivers for a Monday morning spike. By Friday afternoon, MyGig had them confirmed. That speed changed everything for us.",
    name: "James T.",
    role: "Warehouse Manager, Distribution Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote: "\u201CThe compliance piece alone was worth the switch\u201D",
    body: "Having MyGig as the Employer of Record means Fair Work compliance isn\u2019t our problem anymore. That peace of mind is invaluable.",
    name: "Michelle L.",
    role: "CFO, Fulfilment Co",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces",
  },
  {
    quote: "\u201COur team finally has time to focus on operations, not admin\u201D",
    body: "Payroll, onboarding, timesheets \u2014 it all disappeared from our plate. Our ops team can actually focus on throughput now.",
    name: "David K.",
    role: "COO, Supply Chain Co",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionHeading heading="Trusted by warehouse operators across Australia" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-neutral-300 rounded-lg p-10"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="font-body font-bold text-[22px] leading-[32px] text-neutral-900 mb-3">
                {t.quote}
              </h3>
              <p className="font-body text-base text-neutral-700 leading-relaxed mb-6">
                {t.body}
              </p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" loading="lazy" />
                <div>
                  <p className="font-body font-bold text-base text-neutral-900">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-neutral-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
