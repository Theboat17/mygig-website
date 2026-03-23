"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";

const industryLinks = [
  { label: "Warehousing", href: "/" },
  { label: "Retail", href: "/retail" },
  { label: "Events", href: "/events" },
];

const navLinks = [
  { label: "How It Works", href: "#solution" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-400/30">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mygig-logo-white.png"
              alt="MyGig"
              style={{ height: "32px", width: "auto" }}
              className="brightness-0"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => setIndustryOpen(true)} onMouseLeave={() => setIndustryOpen(false)}>
              <button className="font-body text-sm text-neutral-900 hover:text-accent-vivid transition-colors duration-200 flex items-center gap-1">
                Industries
                <ChevronDown size={14} className={`transition-transform duration-200 ${industryOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {industryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-neutral-400/20 overflow-hidden"
                  >
                    {industryLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2.5 font-body text-sm text-neutral-900 hover:bg-lavender hover:text-accent-vivid transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-neutral-900 hover:text-accent-vivid transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="small" href="#demo">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-neutral-400/30 overflow-hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-4">
                <p className="font-body font-bold text-xs uppercase tracking-wider text-neutral-500 pt-2">Industries</p>
                {industryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-lg text-neutral-900 py-1 pl-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-neutral-400/20 my-2" />
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-lg text-neutral-900 py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button variant="primary" href="#demo" className="w-full">
                    Book a demo
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
