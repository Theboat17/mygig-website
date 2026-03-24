"use client";

import { motion } from "framer-motion";
import { Warehouse, Store, PartyPopper, ArrowRight } from "lucide-react";
import Container from "../../layout/Container";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "../../animation/variants";

const industries = [
  {
    icon: Warehouse,
    title: "Warehousing & Logistics",
    description: "Pick packers, forklift operators, sorters, and warehouse assistants \u2014 scaled on demand.",
    href: "/warehousing",
    image: "https://images.pexels.com/photos/4484043/pexels-photo-4484043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Sales assistants, stock teams, visual merchandisers, and customer service staff for peak trading.",
    href: "/retail",
    image: "https://images.pexels.com/photos/5418891/pexels-photo-5418891.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: PartyPopper,
    title: "Events",
    description: "Event crews, hospitality staff, brand ambassadors, and bump in/out teams assembled fast.",
    href: "/events",
    image: "https://images.pexels.com/photos/6817133/pexels-photo-6817133.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-neutral-900">
            Industries we serve
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {industries.map((ind, i) => (
            <motion.a
              key={i}
              href={ind.href}
              variants={staggerChild}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group rounded-lg overflow-hidden bg-white border border-neutral-400/20 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-vivid/20 border border-accent-vivid/30 flex items-center justify-center backdrop-blur-sm">
                    <ind.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-body font-bold text-xl text-neutral-900 mb-2 flex items-center gap-2">
                  {ind.title}
                  <ArrowRight size={16} className="text-accent-vivid opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
