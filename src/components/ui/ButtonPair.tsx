import Button from "./Button";

interface ButtonPairProps {
  primaryText: string;
  secondaryText: string;
  primaryHref?: string;
  secondaryHref?: string;
  align?: "center" | "left";
}

export default function ButtonPair({
  primaryText,
  secondaryText,
  primaryHref = "#",
  secondaryHref = "#",
  align = "center",
}: ButtonPairProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <Button variant="primary" href={primaryHref}>
        {primaryText}
      </Button>
      <Button variant="secondary" href={secondaryHref}>
        {secondaryText}
      </Button>
    </div>
  );
}
