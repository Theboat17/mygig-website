"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, CalendarClock, Wallet, Clock, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerChild, viewportConfig, customEase } from "@/components/animation/variants";

const productModules = [
  {
    id: "recruitment",
    icon: Users,
    label: "Recruitment",
    headline: "Source vetted workers in hours, not days",
    description: "MyGig manages your casual workforce recruitment on your behalf. We source workers through our network of 70,000+ vetted professionals, or you can invite your own existing casuals onto the platform.",
    features: [
      "Access a pool of 70,000+ pre-vetted workers across Australia",
      "Workers screened across 30+ data points including work history, references, and certifications",
      "Skilled roles require interviews and qualification verification",
      "Over 90% fill rate vs. 65% industry average",
      "Workers rated by businesses to maintain quality standards",
    ],
    stat: "90%",
    statLabel: "Fill rate",
    image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&crop=faces",
  },
  {
    id: "onboarding",
    icon: UserCheck,
    label: "Onboarding",
    headline: "Seamless onboarding, zero admin burden",
    description: "Every worker on MyGig is fully onboarded before they arrive at your site. Identity verification, right-to-work checks, certifications, and inductions are all handled through our platform.",
    features: [
      "Automated identity and right-to-work verification",
      "Digital collection of tax, super, and banking details",
      "Certification and licence validation (e.g. forklift, white card)",
      "Site-specific induction delivery via the worker app",
      "No interviews required — workers matched by skills and ratings",
    ],
    stat: "0",
    statLabel: "Admin hours for you",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&crop=faces",
  },
  {
    id: "workforce-planning",
    icon: CalendarClock,
    label: "Workforce Planning",
    headline: "Plan, post, and fill shifts with precision",
    description: "Post shifts with detailed requirements and let our AI match the right workers to your needs. Manage rosters, track availability, and scale your workforce up or down in real time.",
    features: [
      "Post shifts with specific position, location, and qualification requirements",
      "AI-powered worker matching based on skills, ratings, and proximity",
      "Multi-day and recurring shift scheduling",
      "Worker pool management — favourite top performers, block poor ones",
      "Real-time dashboard showing fill status across all your sites",
    ],
    stat: "2%",
    statLabel: "No-show rate",
    image: "/images/platform-screenshot.jpg",
  },
  {
    id: "payroll",
    icon: Wallet,
    label: "Payroll",
    headline: "Payroll processed automatically, every shift",
    description: "MyGig runs payroll on your behalf as the Employer of Record. We handle payslips, tax, superannuation, and workers compensation — removing complexity from your operations entirely.",
    features: [
      "Automated payroll processing after every shift",
      "Payslips generated and delivered to workers automatically",
      "Tax, superannuation, and workers comp all handled",
      "Employ Now, Pay Later\u2122 — flexible payment options for businesses",
      "Transparent billing with no hidden fees",
    ],
    stat: "24hr",
    statLabel: "Payroll turnaround",
    image: "/images/mobile-worker-1.jpg",
  },
  {
    id: "time-attendance",
    icon: Clock,
    label: "Time & Attendance",
    headline: "GPS-verified timesheets, zero disputes",
    description: "Workers clock in and out through the MyGig app with GPS geofencing verification. You get real-time visibility of who is on site, when they arrived, and when they left.",
    features: [
      "GPS geofenced clock-in and clock-out via the worker app",
      "Real-time worker location tracking across your sites",
      "Automated timesheet generation — no manual entry",
      "Dispute resolution handled through the platform",
      "Live attendance dashboard for operations managers",
    ],
    stat: "GPS",
    statLabel: "Verified timesheets",
    image: "/images/mobile-worker-app-2.jpg",
  },
  {
    id: "award-interpretation",
    icon: Scale,
    label: "Award Interpretation",
    headline: "AI-powered award compliance, built in",
    description: "Our proprietary NextGen Award Interpretation engine automatically calculates the correct pay rates for every shift based on the applicable Modern Award, including penalties, loadings, and overtime.",
    features: [
      "Covers 126+ Modern Awards across all major industries",
      "Automatic calculation of base rates, penalties, and loadings",
      "Weekend, public holiday, and overtime rates applied correctly",
      "Hourly rates shown upfront before you book — no surprises",
      "Continuously updated as Fair Work changes award conditions",
    ],
    stat: "126+",
    statLabel: "Awards covered",
    image: "https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&crop=faces",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    label: "Compliance",
    headline: "Full Fair Work compliance — our liability, not yours",
    description: "As the Employer of Record, MyGig takes on full legal employment responsibility. Fair Work compliance, WHS obligations, workers compensation, and public liability are all our responsibility.",
    features: [
      "MyGig is the legal employer — all Fair Work liability sits with us",
      "Workers compensation and public liability insurance included",
      "WHS compliance built into every shift",
      "Licensed and authorised in NSW, WA, TAS, and NT",
      "Pending licence applications for QLD, VIC, SA, and ACT",
    ],
    stat: "100%",
    statLabel: "Compliance coverage",
    image: "/images/mobile-worker-3.jpg",
  },
];

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-16 md:pb-24 overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: customEase }}
              className="text-center max-w-[800px] mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-vivid/30 bg-accent-vivid/10 mb-8">
                <span className="font-body font-medium text-sm text-accent-vivid">Our Platform</span>
              </span>
              <h1 className="font-display font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[68px] tracking-[-0.02em] text-primary mb-6">
                Everything you need to manage casual workers
              </h1>
              <p className="font-body text-lg md:text-xl leading-[32px] text-primary/70 max-w-[600px] mx-auto">
                One platform that handles recruitment, onboarding, payroll, compliance, and everything in between.
              </p>
            </motion.div>

            {/* Product module buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: customEase, delay: 0.3 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {productModules.map((mod) => (
                <a
                  key={mod.id}
                  href={`#${mod.id}`}
                  className="group flex items-center gap-2.5 px-5 py-3 rounded-lg bg-neutral-300 hover:bg-accent-vivid hover:text-white text-primary transition-all duration-200 border border-transparent hover:border-accent-vivid"
                >
                  <mod.icon size={18} className="text-accent-vivid group-hover:text-white transition-colors" />
                  <span className="font-body font-medium text-sm">{mod.label}</span>
                </a>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Product Modules — alternating layout */}
        {productModules.map((mod, idx) => {
          const isReversed = idx % 2 === 1;
          const isDark = idx % 2 === 1;
          return (
            <section
              key={mod.id}
              id={mod.id}
              className={`py-20 md:py-28 ${isDark ? "bg-primary" : "bg-white"} scroll-mt-20`}
            >
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.7, ease: customEase }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${isReversed ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Text */}
                  <div className={isReversed ? "md:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? "bg-accent-vivid/20" : "bg-accent-vivid/10"}`}>
                        <mod.icon size={20} className="text-accent-vivid" />
                      </div>
                      <span className={`font-body font-semibold text-sm uppercase tracking-wider ${isDark ? "text-accent-vivid" : "text-accent-vivid"}`}>
                        {mod.label}
                      </span>
                    </div>
                    <h2 className={`font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-[-0.02em] mb-4 ${isDark ? "text-white" : "text-primary"}`}>
                      {mod.headline}
                    </h2>
                    <p className={`font-body text-lg leading-[30px] mb-8 ${isDark ? "text-white/70" : "text-primary/70"}`}>
                      {mod.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {mod.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight size={16} className="text-accent-vivid mt-1 flex-shrink-0" />
                          <span className={`font-body text-base ${isDark ? "text-white/60" : "text-primary/60"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`inline-flex items-baseline gap-2 px-5 py-3 rounded-lg ${isDark ? "bg-white/5" : "bg-neutral-300"}`}>
                      <span className="font-display font-bold text-[32px] text-accent-vivid">{mod.stat}</span>
                      <span className={`font-body text-sm ${isDark ? "text-white/50" : "text-primary/50"}`}>{mod.statLabel}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`flex justify-center ${isReversed ? "md:[direction:ltr]" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mod.image}
                      alt={mod.headline}
                      className="w-full max-w-[480px] h-auto rounded-xl"
                    />
                  </div>
                </motion.div>
              </Container>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="bg-accent-vivid py-20 md:py-28">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <h2 className="font-display font-bold text-[32px] md:text-[42px] text-white mb-4">
                Ready to see the platform in action?
              </h2>
              <p className="font-body text-lg text-white/80 mb-10 max-w-[500px] mx-auto">
                Book a demo and we&apos;ll walk you through how MyGig can transform your workforce operations.
              </p>
              <Button variant="secondary-dark" size="large" href="/demo">
                Book a demo
              </Button>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
