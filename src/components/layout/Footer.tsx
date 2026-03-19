import { Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const footerColumns = [
  {
    title: "For Businesses",
    links: [
      "Recruitment",
      "Onboarding",
      "Payroll",
      "Time & Attendance",
      "Award Interpretation",
      "Compliance",
      "Pricing",
    ],
  },
  {
    title: "For Workers",
    links: ["Find Work", "Download the App", "How It Works", "FAQs"],
  },
  {
    title: "Industries",
    links: [
      "Warehousing",
      "Logistics",
      "Retail",
      "Construction",
      "Hospitality",
      "Events",
      "Agriculture",
      "Manufacturing",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact", "ISO 27001"],
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
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-lg text-neutral-600 hover:text-white transition-colors duration-200"
                    >
                      {link}
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
            <p className="font-body text-sm text-neutral-600">
              &copy; 2026 MyGig. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-body text-sm text-neutral-600 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-neutral-600">|</span>
              <a
                href="#"
                className="font-body text-sm text-neutral-600 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-neutral-600 hover:text-white transition-colors duration-200"
                aria-label={Icon.displayName}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
