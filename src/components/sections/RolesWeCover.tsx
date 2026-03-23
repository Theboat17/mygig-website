"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, Package, Layers } from "lucide-react";
import Container from "../layout/Container";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "../animation/variants";
import type { Role } from "@/lib/industries";

const defaultRoles: Role[] = [
  { icon: ShoppingCart, title: "Warehouse Assistant", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop&crop=faces" },
  { icon: Truck, title: "Forklift Operator", image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&h=500&fit=crop&crop=faces" },
  { icon: Package, title: "Pick Packers", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=500&fit=crop&crop=faces" },
  { icon: Layers, title: "Sorter", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=faces" },
];

interface RolesWeCoverProps {
  headline?: string;
  subtitle?: string;
  roles?: Role[];
}

export default function RolesWeCover({
  headline = "From a single pick packer for one shift to staffing your entire 24/7 distribution centre, we\u2019ve got your roster covered.",
  subtitle = "Our network includes experienced, RF scanner-proficient warehouse staff and licensed high-reach operators to ensure your operations run at maximum efficiency.",
  roles = defaultRoles,
}: RolesWeCoverProps) {
  return (
    <section className="bg-neutral-200 py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-10 md:mb-14">
          <h2 className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-neutral-900 max-w-wide mx-auto">
            {headline}
          </h2>
          <p className="font-body text-base md:text-lg text-neutral-700 mt-4 max-w-medium mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {roles.map((role, i) => (
            <motion.div key={i} variants={staggerChild} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={role.image} alt={role.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent-vivid/20 border border-accent-vivid/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <role.icon size={22} className="text-accent-vivid" />
                </div>
                <h3 className="font-body font-bold text-base md:text-lg text-white">{role.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
