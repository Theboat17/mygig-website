"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import AccordionItem from "../ui/AccordionItem";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "../animation/variants";
import type { FaqItem } from "@/lib/industries";

const defaultFaqs: FaqItem[] = [
  { question: "What is Workforce-as-a-Service?", answer: "Workforce-as-a-Service means MyGig handles everything \u2014 recruitment, onboarding, payroll, compliance, rostering, and time & attendance \u2014 for your casual workforce. We\u2019re the Employer of Record, so all Fair Work liability sits with us, not you." },
  { question: "How quickly can you fill shifts?", answer: "Most shifts are filled within 24 hours, including specialist roles like forklift drivers. For urgent last-minute cover, we can often respond within hours." },
  { question: "What does it cost?", answer: "For new workers supplied by MyGig, we charge a transparent service fee on gross wages. For transitioning your existing casuals onto our platform, our EOR model is designed to reduce your total non-wage OPEX by 20\u201325% or more." },
  { question: "Do workers have to use the MyGig app?", answer: "Yes \u2014 the app handles shift acceptance, GPS-verified clock-in/out, timesheets, and pay. It\u2019s designed to be simple and intuitive." },
  { question: "What awards do you cover?", answer: "Our AI-powered compliance engine covers all major awards relevant to warehousing and logistics, including the Storage Services Award, the General Retail Industry Award, and the Road Transport Award." },
  { question: "How does the Employer of Record model work?", answer: "When you engage workers through MyGig, we become their legal employer. That means payroll, tax, superannuation, workers\u2019 comp, and Fair Work compliance are all our responsibility. You direct the work \u2014 we handle everything else." },
];

interface FAQProps {
  faqs?: FaqItem[];
}

export default function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-neutral-300 py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <SectionHeading heading="Frequently asked questions" />
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-[800px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={staggerChild}>
              <AccordionItem question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
