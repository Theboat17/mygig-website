"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { customEase } from "../animation/variants";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="rounded-lg bg-white/50 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 md:px-10 py-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-body font-bold text-lg md:text-[22px] leading-[32px] text-neutral-900 pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: customEase }}
          className="shrink-0"
        >
          <Plus size={24} className="text-neutral-700" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-6">
              <p className="font-body text-base text-neutral-700 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
