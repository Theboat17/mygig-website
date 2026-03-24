"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { customEase } from "@/components/animation/variants";

const workerRanges = [
  "1–10 workers",
  "11–50 workers",
  "51–200 workers",
  "201–500 workers",
  "500+ workers",
];

const challenges = [
  "I want to hire casual workers",
  "I\u2019m not happy with my current staffing provider",
  "I\u2019m looking for a workforce solution",
  "My retention is too low",
  "I\u2019m having difficulty filling shifts",
  "Current solutions are too expensive",
  "Staff are too unreliable",
];

const industries = [
  "Warehousing & Logistics",
  "Retail",
  "Events",
  "Manufacturing",
  "Hospitality",
  "Other",
];

const benefits = [
  "Fill shifts within hours, not days",
  "We handle payroll, compliance & workers comp",
  "Reduce workforce OPEX by 20–25%",
  "AI-powered award interpretation",
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="bg-white pt-28 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: customEase }}
              className="pt-4"
            >
              <h1 className="font-display font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[54px] lg:leading-[62px] tracking-[-0.02em] text-primary mb-6">
                Book a demo
              </h1>
              <p className="font-body text-lg md:text-xl leading-[32px] text-primary/70 mb-10 max-w-[480px]">
                Let us show you how MyGig can transform your casual workforce management. Our team will walk you through the platform and answer any questions.
              </p>

              <div className="space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-accent-vivid mt-0.5 flex-shrink-0" />
                    <span className="font-body text-lg text-primary/80">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-neutral-300 rounded-lg">
                <p className="font-body text-base text-primary/60 leading-relaxed">
                  &ldquo;MyGig gave us the flexibility to match headcount to demand without defaulting to overtime. The savings were immediate.&rdquo;
                </p>
                <p className="font-body font-semibold text-sm text-primary mt-3">
                  Sarah M. — Operations Manager
                </p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: customEase, delay: 0.2 }}
            >
              {submitted ? (
                <div className="bg-neutral-300 rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-vivid/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-accent-vivid" />
                  </div>
                  <h2 className="font-display font-bold text-[28px] text-primary mb-3">
                    Thanks for your interest!
                  </h2>
                  <p className="font-body text-lg text-primary/70 max-w-[400px] mx-auto">
                    One of our team will be in touch within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-300 rounded-lg p-8 md:p-10 space-y-6">
                  <h2 className="font-body font-bold text-xl text-primary mb-2">Tell us about your business</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField label="First name" name="firstName" required />
                    <FormField label="Last name" name="lastName" required />
                  </div>

                  <FormField label="Work email" name="email" type="email" required />
                  <FormField label="Phone number" name="phone" type="tel" />
                  <FormField label="Company name" name="company" required />
                  <FormField label="Job title" name="jobTitle" />

                  <SelectField label="Industry" name="industry" options={industries} required />
                  <SelectField label="How many casual workers do you manage?" name="workers" options={workerRanges} required />

                  <CheckboxGroup label="What are your current staffing challenges?" options={challenges} />

                  <TextareaField label="Anything else you'd like us to know?" name="message" />

                  <p className="font-body text-xs text-primary/40 leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-accent-vivid hover:underline">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/terms-of-use" className="text-accent-vivid hover:underline">Terms of Use</a>.
                  </p>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-body font-semibold text-lg hover:bg-primary/90 transition-colors"
                  >
                    Book a demo <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function FormField({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-primary mb-1.5">
        {label} {required && <span className="text-accent-vivid">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-neutral-400/30 bg-white font-body text-base text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-accent-vivid/30 focus:border-accent-vivid transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-primary mb-1.5">
        {label} {required && <span className="text-accent-vivid">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full px-4 py-3 rounded-lg border border-neutral-400/30 bg-white font-body text-base text-primary focus:outline-none focus:ring-2 focus:ring-accent-vivid/30 focus:border-accent-vivid transition-colors appearance-none"
      >
        <option value="" disabled>Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function CheckboxGroup({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <p className="block font-body text-sm font-medium text-primary mb-3">
        {label}
      </p>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="challenges"
              value={opt}
              className="mt-0.5 w-5 h-5 rounded border-neutral-400/30 text-accent-vivid focus:ring-accent-vivid/30 accent-accent-vivid flex-shrink-0"
            />
            <span className="font-body text-sm text-primary/70 group-hover:text-primary transition-colors">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function TextareaField({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-primary mb-1.5">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-neutral-400/30 bg-white font-body text-base text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-accent-vivid/30 focus:border-accent-vivid transition-colors resize-none"
      />
    </div>
  );
}
