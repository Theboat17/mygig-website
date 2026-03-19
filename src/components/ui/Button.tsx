"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href = "#",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-body font-bold transition-all duration-200 cursor-pointer";

  const sizeStyles =
    size === "small"
      ? "px-5 py-2.5 text-sm"
      : "px-[38px] py-[26px] text-lg";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white border border-primary"
      : "bg-transparent text-neutral-700 border border-neutral-700 font-normal";

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      whileHover={{
        y: -2,
        opacity: variant === "primary" ? 0.9 : 1,
        backgroundColor:
          variant === "secondary" ? "var(--color-neutral-200)" : undefined,
        borderColor:
          variant === "secondary" ? "var(--color-neutral-800)" : undefined,
        color:
          variant === "secondary" ? "var(--color-neutral-900)" : undefined,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
      {variant === "primary" && <ArrowRight size={16} />}
    </motion.a>
  );
}
