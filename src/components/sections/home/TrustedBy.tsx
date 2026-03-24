"use client";

import { motion } from "framer-motion";
import Container from "../../layout/Container";
import { fadeUp, viewportConfig } from "../../animation/variants";

export default function TrustedBy() {
  return (
    <section className="bg-white py-10 md:py-14 border-b border-neutral-400/20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <p className="font-body font-medium text-sm uppercase tracking-wider text-neutral-500">
            Trusted by leading warehouse &amp; logistics operators across Australia
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
