import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import men from "@/assets/men-training.jpg";
import women from "@/assets/women-training.jpg";

const SECTIONS = [
  {
    img: men,
    title: "Men's Training",
    tag: "Strength · Size · Performance",
    features: ["Powerlifting racks & platforms", "Advanced hypertrophy programs", "Sport-specific conditioning", "Male-focused nutrition plans"],
  },
  {
    img: women,
    title: "Women's Training",
    tag: "Tone · Strength · Confidence",
    features: ["Women-only training hours", "Female certified coaches", "Postpartum & prenatal programs", "Toning + fat loss protocols"],
  },
];

export function MenWomen() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Built for everyone"
          title={<>Programs tailored to <span className="text-gradient">you</span></>}
          subtitle="Dedicated programming, spaces and coaching for men and women — because one-size-fits-all doesn't get results."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5"
            >
              <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-2 text-xs uppercase tracking-wider text-primary">{s.tag}</div>
                <h3 className="text-3xl font-bold">{s.title}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="mt-6">
                  <a href="#contact">
                    Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
