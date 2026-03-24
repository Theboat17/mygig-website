"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Award, Shield, ArrowRight, Download } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerChild, viewportConfig, customEase } from "@/components/animation/variants";

const steps = [
  { num: "01", title: "Businesses post shifts", desc: "Companies post shifts for positions they need filled — from warehouse pickers to event staff." },
  { num: "02", title: "You secure shifts", desc: "Browse available shifts that fit your schedule, skills, and location. Accept the ones you want." },
  { num: "03", title: "Work flexibly", desc: "Work from a few hours to a few weeks or months. You choose the commitment level." },
  { num: "04", title: "Get paid fast", desc: "Get paid quickly after completing eligible shifts. No chasing invoices, no delays." },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Earn more",
    items: [
      "We pass along all your earnings — no hidden cuts",
      "Higher rates for urgent and peak-period requests",
      "Fast payment after eligible shifts",
    ],
    highlight: "$30.13",
    highlightLabel: "Minimum rate per hour",
    image: "/images/mobile-worker-1.jpg",
    imageAlt: "Shift completion and instant payout screen",
  },
  {
    icon: Clock,
    title: "Work when you want",
    items: [
      "Work and earn on your own schedule",
      "Book shifts in advance or pick up last-minute",
      "Durations from a few hours to months",
    ],
    highlight: "24/7",
    highlightLabel: "Shifts available around the clock",
    image: "/images/mobile-worker-app-2.jpg",
    imageAlt: "Open shifts and scheduling screen",
  },
  {
    icon: Award,
    title: "Unlock rewards",
    items: [
      "Earn Top Worker status with bonuses",
      "More shift access the more active you are",
      "MyGig Trainings coming soon",
    ],
    highlight: "Top",
    highlightLabel: "Worker program for top performers",
    image: "/images/mobile-worker-2.jpg",
    imageAlt: "Gold rewards and Top Worker bonus screen",
  },
  {
    icon: Shield,
    title: "We\u2019ve got your back",
    items: [
      "Detailed shift instructions before you arrive",
      "Workers Comp & Public Liability included",
      "In-app support and Safety Center",
    ],
    highlight: "100%",
    highlightLabel: "Covered by insurance",
    image: "/images/mobile-worker-3.jpg",
    imageAlt: "Shift details and support chat screen",
  },
];

const industries = [
  {
    title: "Retail",
    desc: "Sales assistants, stock teams, visual merchandisers, and customer service roles.",
    img: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    title: "Warehousing & Logistics",
    desc: "Pick packers, forklift operators, sorters, and warehouse assistants.",
    img: "https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    title: "Events",
    desc: "Event crew, hospitality staff, brand ambassadors, and bump in/out teams.",
    img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
];

const faqs = [
  { q: "How do I get verified?", a: "Download the MyGig app and complete your profile. We verify your identity, work rights, and any certifications. The process is quick and straightforward." },
  { q: "Are there any upfront fees?", a: "No. MyGig is completely free for workers. You never pay anything to access shifts or get paid." },
  { q: "What does the pre-screening involve?", a: "We check 30+ data points including identity verification, right to work, qualifications, and references to ensure you're matched with the right shifts." },
  { q: "Where does MyGig operate?", a: "We're currently active in NSW, WA, TAS, and NT. QLD, VIC, SA, and ACT are in progress — join the waitlist to be notified." },
  { q: "Am I covered by insurance?", a: "Yes. All MyGig workers are covered by Workers Compensation and Public Liability insurance while on shift. We comply with all Fair Work, taxation, and WHS requirements." },
];

export default function WorkerPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-20 md:pb-28 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: customEase }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent-vivid animate-pulse" />
                  <span className="font-body font-medium text-sm text-accent-vivid">For Workers</span>
                </span>
                <h1 className="font-display font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] tracking-[-0.02em] text-primary">
                  Work where and when you want
                </h1>
                <p className="font-body text-lg md:text-xl leading-[32px] text-primary/70 mt-6 max-w-[540px]">
                  From one-off shifts to months-long commitments, find your next opportunity on MyGig.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button variant="primary" size="large" href="https://worker.mygig.com.au/">
                    Get started
                  </Button>
                  <Button variant="secondary" size="large" href="https://worker.mygig.com.au/signin">
                    <Download size={18} className="mr-2" />
                    Download the app
                  </Button>
                </div>
                <p className="font-body text-sm text-primary/40 mt-6">
                  Hourly rates depend on the position and the applicable Modern Award.
                </p>
              </motion.div>

              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: customEase, delay: 0.3 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mobile-worker-app.jpg"
                  alt="MyGig worker app - payments and shift booking"
                  className="w-full max-w-[480px] h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="bg-neutral-300 py-20 md:py-28">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary">How it works</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {steps.map((step) => (
                <motion.div key={step.num} variants={staggerChild} className="relative">
                  <span className="font-display font-bold text-[48px] text-accent-vivid/20 leading-none">{step.num}</span>
                  <h3 className="font-body font-bold text-xl text-primary mt-2 mb-3">{step.title}</h3>
                  <p className="font-body text-base text-primary/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Benefits — alternating rows */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary">Why workers choose MyGig</h2>
            </motion.div>
            <div className="space-y-16 md:space-y-24">
              {benefits.map((benefit, idx) => {
                const isReversed = idx % 2 === 1;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.7, ease: customEase }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${isReversed ? "md:[direction:rtl]" : ""}`}
                  >
                    {/* Text */}
                    <div className={isReversed ? "md:[direction:ltr]" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-accent-vivid/10 flex items-center justify-center">
                          <benefit.icon size={24} className="text-accent-vivid" />
                        </div>
                        <h3 className="font-body font-bold text-2xl text-primary">{benefit.title}</h3>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {benefit.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight size={16} className="text-accent-vivid mt-1 flex-shrink-0" />
                            <span className="font-body text-lg text-primary/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-primary/10 pt-4">
                        <span className="font-display font-bold text-[40px] text-accent-vivid">{benefit.highlight}</span>
                        <span className="font-body text-sm text-primary/50 ml-3">{benefit.highlightLabel}</span>
                      </div>
                    </div>
                    {/* Image */}
                    <div className={`flex justify-center ${isReversed ? "md:[direction:ltr]" : ""}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        className="w-full max-w-[380px] h-auto rounded-xl"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Industries */}
        <section className="bg-primary py-20 md:py-28">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-white">Industries we cover</h2>
              <p className="font-body text-lg text-white/60 mt-4">Find shifts across these growing industries.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {industries.map((ind) => (
                <motion.div
                  key={ind.title}
                  variants={staggerChild}
                  className="group rounded-lg overflow-hidden bg-white/5 border border-white/10"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-body font-bold text-xl text-white mb-2">{ind.title}</h3>
                    <p className="font-body text-base text-white/60">{ind.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-300 py-20 md:py-28">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary">Frequently asked questions</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-[800px] mx-auto space-y-4"
            >
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  variants={staggerChild}
                  className="group bg-white rounded-lg"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-body font-semibold text-lg text-primary list-none">
                    {faq.q}
                    <span className="text-accent-vivid ml-4 group-open:rotate-45 transition-transform duration-200 text-2xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-6 font-body text-base text-primary/70 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-accent-vivid py-20 md:py-28">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-left">
                {/* Left — App image */}
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mobile-worker-app.jpg"
                    alt="MyGig worker app"
                    className="w-full max-w-[360px] rounded-2xl"
                  />
                </div>
                {/* Right — Text + CTAs */}
                <div>
                  <h2 className="font-display font-bold text-[32px] md:text-[42px] text-white mb-4">
                    Ready to work your first shift?
                  </h2>
                  <p className="font-body text-lg text-white/80 mb-10">
                    Join thousands of workers across Australia finding flexible shifts on MyGig.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://worker.mygig.com.au/"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-accent-vivid font-body font-semibold text-lg hover:bg-white/90 transition-colors"
                    >
                      Get started <ArrowRight size={18} />
                    </a>
                    <a
                      href="https://worker.mygig.com.au/signin"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-body font-semibold text-lg hover:bg-white/10 transition-colors"
                    >
                      <Download size={18} /> Download the app
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
