"use client";

import { motion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { customEase } from "../../animation/variants";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: customEase } },
};

const workerImages = [
  { src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Worker in hard hat smiling" },
  { src: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Warehouse picker" },
  { src: "https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Forklift operator" },
  { src: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Warehouse team working" },
  { src: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Worker scanning packages" },
  { src: "https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Logistics worker with scanner" },
  { src: "https://images.pexels.com/photos/4484153/pexels-photo-4484153.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Warehouse supervisor" },
  { src: "https://images.pexels.com/photos/4483773/pexels-photo-4483773.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Pick packer at work" },
  { src: "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=faces", alt: "Warehouse sorter" },
];

export default function HomeHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#dde1ff" }}>
        <Container className="py-24 md:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-stretch">
            {/* Left — Text */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroChild}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-white mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent-vivid animate-pulse" />
                  <span className="font-body font-medium text-sm text-accent-vivid">
                    Workforce-as-a-Service
                  </span>
                </span>
              </motion.div>

              <motion.h1
                variants={heroChild}
                className="font-display font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] tracking-[-0.02em] text-primary"
              >
                Your workforce partner for casual staffing
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="font-body text-lg md:text-xl leading-[32px] text-primary/70 mt-6 max-w-[540px]"
              >
                We staff workers instantly, at scale and with care. MyGig is Australia&apos;s Employer of Record platform for casual workforce management.
              </motion.p>

              <motion.div variants={heroChild} className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" size="large" href="/demo">
                  Book a demo
                </Button>
                <Button variant="secondary" size="large" href="/worker">
                  Looking for work?
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — Platform screenshot, flat, slides in from right */}
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: customEase, delay: 0.4 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/platform-screenshot-edited.png"
                alt="MyGig Business platform - shift scheduling interface"
                className="w-full max-w-none lg:scale-[1.375] lg:origin-left h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Worker Photos Strip — overlapping hero and next section */}
      <div className="relative z-10 -mt-16 pb-0" style={{ marginBottom: "-60px" }}>
        <div className="flex gap-3 md:gap-4 px-4 items-end">
          {workerImages.map((img, i) => {
            // Alternate stagger pattern: odd items are taller and shifted up
            const isRaised = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="flex-1 min-w-0"
                style={{ marginTop: isRaised ? 0 : "40px", marginBottom: isRaised ? "40px" : 0 }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: customEase,
                  delay: i * 0.08,
                }}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[2/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle purple overlay on hover */}
                  <div className="absolute inset-0 bg-accent-vivid/0 hover:bg-accent-vivid/10 transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
