"use client";

import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { fadeUp, staggerContainer, staggerChild, viewportConfig, customEase } from "@/components/animation/variants";

const stats = [
  { value: "70,000+", label: "Hourly workers on the platform" },
  { value: "93%", label: "Business return rate" },
  { value: "126", label: "Modern awards managed" },
  { value: "100,000+", label: "Workers across Australia" },
];

const differentiators = [
  {
    title: "Vetting & Quality",
    description: "Workers undergo background checks, work history validation, and certification verification. Supervisors are sent for large shifts.",
  },
  {
    title: "Technology Focus",
    description: "We invest in AI and cutting-edge technologies to improve operations and deliver better outcomes for businesses and workers.",
  },
  {
    title: "Worker Retention",
    description: "Top-performing workers access our Top Workers program with additional shift opportunities and bonuses, keeping the best talent in your workforce.",
  },
];

export default function About() {
  return (
    <>
      <NavBar />
      <main className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pb-24">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-[800px]"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-8">
                <span className="font-body font-medium text-sm text-accent-vivid">About MyGig</span>
              </span>
              <h1 className="font-display font-bold text-[40px] md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.02em] text-primary mb-6">
                We shape the future of hourly work
              </h1>
              <p className="font-body text-lg md:text-xl leading-[32px] text-primary/70 max-w-[640px]">
                MyGig was founded in 2024 to efficiently connect Australian businesses with hourly workers. We&apos;re building the leading marketplace for hourly workers across the APAC region.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-neutral-300">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-[800px] mx-auto text-center"
            >
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary mb-6">Our Mission</h2>
              <p className="font-body text-lg md:text-xl leading-[32px] text-primary/70">
                We believe everyone deserves to thrive in their careers. Our mission is to create economic opportunities for local businesses and hourly workers globally, operating like a modern marketplace that connects supply with demand &mdash; instantly, compliantly, and at scale.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerChild} className="text-center">
                  <p className="font-display font-bold text-[40px] md:text-[54px] text-accent-vivid mb-2">{stat.value}</p>
                  <p className="font-body text-base text-primary/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Differentiators */}
        <section className="py-16 md:py-24 bg-primary">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-white mb-4">What sets us apart</h2>
              <p className="font-body text-lg text-white/60 max-w-[600px]">Built different from traditional staffing agencies.</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {differentiators.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerChild}
                  className="bg-white/5 border border-white/10 rounded-lg p-8"
                >
                  <h3 className="font-body font-bold text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-base leading-[26px] text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-[800px] mx-auto">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary mb-8 text-center">What we offer</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {["Workforce Transfer", "On-Demand Staffing", "Employee Onboarding", "Time & Attendance", "Award Interpretation", "Payroll Services"].map((service) => (
                  <motion.div
                    key={service}
                    variants={staggerChild}
                    className="bg-neutral-300 rounded-lg p-6 text-center"
                  >
                    <p className="font-body font-semibold text-primary">{service}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-24 bg-neutral-300">
          <Container>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center">
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-primary mb-4">Get in touch</h2>
              <p className="font-body text-lg text-primary/70 mb-2">
                <strong>Email:</strong> <a href="mailto:support@mygig.com.au" className="text-accent-vivid hover:underline">support@mygig.com.au</a>
              </p>
              <p className="font-body text-lg text-primary/70">
                <strong>Address:</strong> 81-83 Campbell Street, Surry Hills NSW 2010
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
