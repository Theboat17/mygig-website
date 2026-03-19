"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import ButtonPair from "../ui/ButtonPair";
import { slideLeft, slideRight, viewportConfig, customEase } from "../animation/variants";

export default function FinalCTA() {
  return (
    <section id="demo" className="bg-lavender py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockups */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center relative"
          >
            {/* Phone 1 */}
            <motion.div
              className="w-[220px] md:w-[260px] rounded-[24px] bg-white shadow-xl overflow-hidden z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="bg-primary px-5 pt-8 pb-3">
                <p className="text-white font-body font-bold text-sm">
                  Today&apos;s Shifts
                </p>
              </div>
              <div className="px-4 py-3 space-y-2">
                {["Warehouse Picker", "Forklift Operator", "Pack & Ship"].map(
                  (role, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-neutral-400/30 p-2.5"
                    >
                      <p className="font-body font-bold text-xs text-neutral-900">
                        {role}
                      </p>
                      <p className="font-body text-[10px] text-neutral-600">
                        8:00 AM - 4:00 PM
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Phone 2 - offset */}
            <motion.div
              className="hidden md:block w-[220px] md:w-[260px] rounded-[24px] bg-white shadow-xl overflow-hidden absolute right-[10%] lg:right-[5%] top-[40px] -rotate-6 z-0"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="bg-accent px-5 pt-8 pb-3">
                <p className="text-white font-body font-bold text-sm">
                  Earnings
                </p>
              </div>
              <div className="px-4 py-3">
                <p className="font-body font-bold text-2xl text-neutral-900">
                  $1,248.00
                </p>
                <p className="font-body text-xs text-neutral-600 mt-1">
                  This week
                </p>
                <div className="mt-4 h-[80px] rounded-lg bg-neutral-200 flex items-end px-2 pb-2 gap-1">
                  {[40, 60, 80, 55, 70, 90, 45].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/30 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text + CTA */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] text-neutral-900 mb-6">
              Ready to transform how you staff your warehouse?
            </h2>
            <p className="font-body text-lg leading-[30px] text-neutral-800 mb-8">
              See how MyGig can reduce your workforce costs, eliminate compliance
              risk, and give you the flexibility to scale on demand.
            </p>
            <ButtonPair
              primaryText="Book a demo"
              secondaryText="Talk to our team"
              primaryHref="#demo"
              secondaryHref="#contact"
              align="left"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
