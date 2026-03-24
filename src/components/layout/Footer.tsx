import { Linkedin } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const footerColumns = [
  {
    title: "For Businesses",
    links: [
      { label: "Recruitment", href: "/product#recruitment" },
      { label: "Onboarding", href: "/product#onboarding" },
      { label: "Payroll", href: "/product#payroll" },
      { label: "Time & Attendance", href: "/product#time-attendance" },
      { label: "Award Interpretation", href: "/product#award-interpretation" },
      { label: "Compliance", href: "/product#compliance" },
    ],
  },
  {
    title: "For Workers",
    links: [
      { label: "Find Work", href: "/worker" },
      { label: "Download the App", href: "https://worker.mygig.com.au/signin" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Warehousing & Logistics", href: "/warehousing" },
      { label: "Retail", href: "/retail" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Contact", href: "/demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-16 md:py-20">
      <Container>
        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-bold text-xl text-white mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-lg text-neutral-600 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/mygig-logo-white.png"
              alt="MyGig"
              width={160}
              height={57}
              className="h-12 w-auto brightness-0 invert"
            />
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <a
                href="/privacy-policy"
                className="font-body text-sm text-neutral-600 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-neutral-600">|</span>
              <a
                href="/terms-of-use"
                className="font-body text-sm text-neutral-600 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/mygig-australia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Legal Copyright */}
        <div className="mt-6 text-center">
          <p className="font-body text-xs text-neutral-600/60">
            Copyright &copy; Workforce Technologies Pty Ltd &amp; MyGig Workforce Pty Ltd trading as MyGig
          </p>
        </div>
      </Container>
    </footer>
  );
}
