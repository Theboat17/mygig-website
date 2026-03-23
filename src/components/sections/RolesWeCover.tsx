"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, Package, Layers } from "lucide-react";
import Container from "../layout/Container";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "../animation/variants";
import type { Role } from "@/lib/industries";

const defaultRoles: Role[] = [
  { icon: ShoppingCart, title: "Warehouse Assistant", image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
  { icon: Truck, title: "Forklift Operator", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
  { icon: Package, title: "Pick Packers", image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
  { icon: Layers, title: "Sorter", image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=2&fit=crop" },
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
