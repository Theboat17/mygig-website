"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";

const solutionsLinks = [
  { label: "Warehousing & Logistics", href: "/warehousing" },
  { label: "Retail", href: "/retail" },
  { label: "Events", href: "/events" },
];

const productLinks = [
  { label: "Coming soon", href: "#" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

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
            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="font-body text-sm text-neutral-900 hover:text-accent-vivid transition-colors duration-200 flex items-center gap-1">
                Solutions
                <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-neutral-400/20 overflow-hidden"
                  >
                    {solutionsLinks.map((link) => (
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

            {/* Product Dropdown */}
            <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              <button className="font-body text-sm text-neutral-900 hover:text-accent-vivid transition-colors duration-200 flex items-center gap-1">
                Product
                <ChevronDown size={14} className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-400/20 overflow-hidden"
                  >
                    {productLinks.map((link) => (
                      <span
                        key={link.label}
                        className="block px-4 py-2.5 font-body text-sm text-neutral-400 cursor-default"
                      >
                        {link.label}
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#faq" className="font-body text-sm text-neutral-900 hover:text-accent-vivid transition-colors duration-200">
              FAQ
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="small" href="/demo">
              Book a demo
            </Button>

            {/* Sign In Dropdown */}
            <div className="relative" onMouseEnter={() => setSignInOpen(true)} onMouseLeave={() => setSignInOpen(false)}>
              <button className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg font-body font-bold text-sm text-neutral-900 border border-neutral-400/30 hover:border-neutral-900 transition-colors duration-200">
                Sign in
                <ChevronDown size={14} className={`transition-transform duration-200 ${signInOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {signInOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-neutral-400/20 overflow-hidden"
                  >
                    <a
                      href="https://business.mygig.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 font-body text-sm text-neutral-900 hover:bg-lavender hover:text-accent-vivid transition-colors duration-150"
                    >
                      Business
                    </a>
                    <a
                      href="https://worker.mygig.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 font-body text-sm text-neutral-900 hover:bg-lavender hover:text-accent-vivid transition-colors duration-150"
                    >
                      Worker
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                <p className="font-body font-bold text-xs uppercase tracking-wider text-neutral-500 pt-2">Solutions</p>
                {solutionsLinks.map((link) => (
                  <a key={link.label} href={link.href} className="font-body text-lg text-neutral-900 py-1 pl-3" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-neutral-400/20 my-2" />
                <p className="font-body font-bold text-xs uppercase tracking-wider text-neutral-500">Product</p>
                <span className="font-body text-lg text-neutral-400 py-1 pl-3">Coming soon</span>
                <div className="border-t border-neutral-400/20 my-2" />
                <a href="#faq" className="font-body text-lg text-neutral-900 py-2" onClick={() => setMobileOpen(false)}>FAQ</a>
                <div className="border-t border-neutral-400/20 my-2" />
                <p className="font-body font-bold text-xs uppercase tracking-wider text-neutral-500">Sign in</p>
                <a href="https://business.mygig.com.au/" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-neutral-900 py-1 pl-3" onClick={() => setMobileOpen(false)}>Business</a>
                <a href="https://worker.mygig.com.au/" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-neutral-900 py-1 pl-3" onClick={() => setMobileOpen(false)}>Worker</a>
                <div className="pt-4">
                  <Button variant="primary" href="/demo" className="w-full">Book a demo</Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
