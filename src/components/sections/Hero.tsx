"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import ButtonPair from "../ui/ButtonPair";
import {
  staggerChild,
  customEase,
} from "../animation/variants";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

interface HeroProps {
  badge?: string;
  headline?: string;
  subtitle?: string;
  images?: { src: string; alt: string }[];
}

export default function Hero({
  badge = "Available now in Sydney.",
  headline = "The smarter way to staff your warehouse",
  subtitle = "MyGig is your Workforce-as-a-Service partner — scaling casual headcount on demand, optimising your labour mix, and handling all Fair Work compliance as your Employer of Record.",
  images,
}: HeroProps) {
  const heroImages = images || [
    { src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Forklift driver operating machinery in warehouse" },
    { src: "https://images.pexels.com/photos/6170088/pexels-photo-6170088.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Female warehouse supervisor with clipboard" },
    { src: "https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Warehouse team walking through storage aisle" },
    { src: "https://images.pexels.com/photos/4487385/pexels-photo-4487385.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Worker leaning on pallet jack in warehouse" },
    { src: "https://images.pexels.com/photos/4480797/pexels-photo-4480797.jpeg?auto=compress&cs=tinysrgb&w=600&h=1400&fit=crop", alt: "Pick packers carrying boxes in warehouse" },
  ];

  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28 lg:pb-32 overflow-hidden">
      <Container>
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Announcement Badge */}
          <motion.div variants={staggerChild} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender text-primary font-body font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-accent-vivid animate-pulse" />
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerChild}
            className="font-display font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[66px] lg:leading-[77px] tracking-[-0.02em] text-neutral-900 max-w-wide mx-auto"
          >
            {headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerChild}
            className="font-body text-base md:text-lg leading-[30px] text-neutral-700 mt-6 max-w-medium mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={staggerChild} className="mt-10">
            <ButtonPair
              primaryText="Book a demo"
              secondaryText="See how it works"
              primaryHref="/demo"
              secondaryHref="#solution"
            />
          </motion.div>

          {/* Hero Image Gallery */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: customEase, delay: 0.6 },
              },
            }}
            className="mt-16 flex justify-center gap-4 md:gap-6"
          >
            {heroImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden ${
                  i === 0 || i === 4
                    ? "hidden lg:block w-[140px]"
                    : i === 1 || i === 3
                    ? "hidden md:block w-[160px]"
                    : "w-[180px] md:w-[200px]"
                }`}
                style={{ aspectRatio: "3/7" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading={i === 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
