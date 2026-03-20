type Props = {
  children: string;
  variant?: "light" | "dark";
};

export default function SectionLabel({ children, variant = "light" }: Props) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.15em] ${
        variant === "dark" ? "text-ink-dim" : "text-ink-muted"
      }`}
    >
      <span className="text-accent">//</span> {children}
    </p>
  );
}
