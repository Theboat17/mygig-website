"use client";

import { motion } from "framer-motion";
import { Users, Shield, BarChart3, Zap } from "lucide-react";
import Container from "../../layout/Container";
import { staggerContainer, staggerChild, customEase, viewportConfig } from "../../animation/variants";

const capabilities = [
  {
    icon: Users,
    title: "Instantly connect with reliable, vetted workers",
    description: "Take advantage of the most effective sourcing, screening and matching process. Combining proactive recruitment, advanced AI technology, and the perfect touch of human interaction to ensure peak efficiency and reliability.",
    image: "https://images.pexels.com/photos/4484043/pexels-photo-4484043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Shield,
    title: "Full compliance as your Employer of Record",
    description: "MyGig is the legal employer for all casual staff on the platform. Fair Work compliance, payroll, tax, super, and workers\u2019 comp are all handled \u2014 removing risk from your business entirely.",
    image: "https://images.pexels.com/photos/6170088/pexels-photo-6170088.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Simplify workforce planning and management",
    description: "Get full visibility over your sites with real-time attendance tracking and GPS-verified timesheets. Know exactly who shows up, on time, at each site to improve workforce management.",
    image: "https://images.pexels.com/photos/4487385/pexels-photo-4487385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Zap,
    title: "Optimise your HR strategy and maximise performance",
    description: "Get live, reliable data and analytics to make more informed decisions and optimise your casual staffing strategy. Easily share insights, charts and reports between teams to maximise overall performance.",
    image: "https://images.pexels.com/photos/4480797/pexels-photo-4480797.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
];

export default function CapabilityRows() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="space-y-24 md:space-y-32">
          {capabilities.map((cap, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={i}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Text */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? 40 : -40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: customEase } },
                  }}
                  className="lg:[direction:ltr]"
                >
                  <div className="w-14 h-14 rounded-lg bg-lavender border border-accent/20 flex items-center justify-center mb-6">
                    <cap.icon size={24} className="text-accent-vivid" />
                  </div>
                  <h2 className="font-display font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.01em] text-neutral-900 mb-4">
                    {cap.title}
                  </h2>
                  <p className="font-body text-lg leading-[30px] text-neutral-700">
                    {cap.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? -40 : 40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: customEase, delay: 0.15 } },
                  }}
                  className="lg:[direction:ltr]"
                >
                  <div className="rounded-lg overflow-hidden aspect-[3/2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
