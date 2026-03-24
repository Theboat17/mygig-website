"use client";

import { motion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { fadeUp, viewportConfig } from "../../animation/variants";

export default function MidCTA() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-[700px] mx-auto"
        >
          <h2 className="font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[48px] lg:leading-[58px] tracking-[-0.01em] text-white mb-6">
            Ready to build a better workforce?
          </h2>
          <p className="font-body text-lg text-white/60 mb-8">
            Join companies across Australia using MyGig to scale their casual workforce with confidence.
          </p>
          <Button variant="primary" size="large" href="/demo">
            Book a demo
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
