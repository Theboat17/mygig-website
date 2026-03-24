"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-dark";
  size?: "default" | "small" | "medium" | "large";
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

  const sizeMap: Record<string, string> = {
    small: "px-5 py-2.5 text-sm",
    medium: "px-6 py-3 text-base",
    default: "px-[38px] py-[26px] text-lg",
    large: "px-10 py-4 text-lg",
  };
  const sizeStyles = sizeMap[size] || sizeMap.default;

  const variantMap: Record<string, string> = {
    primary: "bg-primary text-white border border-primary",
    secondary: "bg-transparent text-neutral-700 border border-neutral-700 font-normal",
    "secondary-dark": "bg-transparent text-white border border-white/30 font-normal",
  };
  const variantStyles = variantMap[variant] || variantMap.primary;

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      whileHover={{
        y: -2,
        opacity: variant === "primary" ? 0.9 : 1,
        backgroundColor:
          variant === "secondary" ? "var(--color-neutral-200)" :
          variant === "secondary-dark" ? "rgba(255,255,255,0.1)" : undefined,
        borderColor:
          variant === "secondary" ? "var(--color-neutral-800)" :
          variant === "secondary-dark" ? "rgba(255,255,255,0.5)" : undefined,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
      {variant === "primary" && <ArrowRight size={16} />}
    </motion.a>
  );
}
