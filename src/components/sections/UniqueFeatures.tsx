"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportConfig,
} from "../animation/variants";

const features = [
  {
    badge: "Same Day Pay",
    description:
      "Workers get paid the day they work. Improves retention and reduces no-shows.",
    span: "lg:col-span-7",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=300&fit=crop&crop=faces",
    imageAlt: "Warehouse worker checking their phone after a shift",
  },
  {
    badge: "AI-Powered Compliance",
    description:
      "Automatic award interpretation ensures every shift is compliant with the correct rates, penalties, and allowances.",
    span: "lg:col-span-5",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop&crop=center",
    imageAlt: "Team reviewing compliance data on screen",
  },
  {
    badge: "Automated Timesheets",
    description:
      "Workers clock in and out via the app. GPS-verified. Zero manual timesheets.",
    span: "lg:col-span-12",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=300&fit=crop&crop=faces",
    imageAlt: "Worker using handheld device to clock in at warehouse",
  },
  {
    badge: "Employ Now, Pay Later",
    description:
      "Flexible payment terms \u2014 7, 14, 30, or 60 days. Cash flow when you need it.",
    span: "lg:col-span-5",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=300&fit=crop&crop=faces",
    imageAlt: "Operations manager reviewing financials",
  },
  {
    badge: "Easy-to-Use Worker App",
    description:
      "Workers manage their shifts, get directions, and track pay \u2014 all from one app.",
    span: "lg:col-span-7",
    image: "https://images.unsplash.com/photo-1616401784845-180882c3f7c5?w=600&h=300&fit=crop&crop=faces",
    imageAlt: "Warehouse worker using mobile app on shift",
  },
];

export default function UniqueFeatures() {
  return (
    <section id="features" className="bg-primary py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionHeading
            heading="Built different"
            subtitle="Features designed specifically for the realities of warehouse workforce management."
            dark
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={staggerChild}
              className={`${feature.span} rounded-lg border border-white/10 bg-white/[0.03] p-8 md:p-10 group hover:bg-white/[0.06] transition-colors duration-300`}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <span className="inline-block px-3 py-1.5 rounded-full bg-lavender/20 text-lavender font-body font-bold text-sm mb-5">
                {feature.badge}
              </span>
              <div className="h-[120px] md:h-[160px] rounded-lg overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-base text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
