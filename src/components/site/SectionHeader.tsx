import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-balance text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
