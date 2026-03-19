interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = dark ? "text-white" : "text-neutral-900";
  const subtitleColor = dark ? "text-neutral-500" : "text-neutral-700";

  return (
    <div className={`${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="font-body font-medium text-sm uppercase tracking-[0.1em] text-accent-vivid mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-bold text-[30px] leading-[38px] md:text-[40px] md:leading-[50px] lg:text-[54px] lg:leading-[66px] tracking-[-0.01em] ${headingColor} max-w-wide ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg leading-[30px] ${subtitleColor} mt-4 max-w-medium ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
