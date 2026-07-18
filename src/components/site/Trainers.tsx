import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const TRAINERS = [
  { img: t1, name: "Marcus Vale", role: "Head Coach — Strength", exp: "9+ yrs", spec: "Powerlifting · Hypertrophy", certs: "NSCA · CSCS" },
  { img: t2, name: "Sofia Reyes", role: "Yoga & Mobility Lead", exp: "7+ yrs", spec: "Vinyasa · Prenatal · Mobility", certs: "RYT-500" },
  { img: t3, name: "David Nasser", role: "Bodybuilding Coach", exp: "11+ yrs", spec: "Contest Prep · Nutrition", certs: "ISSA · Pro Card" },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Meet the Team"
          title={<>Coaches who <span className="text-gradient">actually coach</span></>}
          subtitle="Certified. Experienced. Obsessed with getting you results — not selling upsells."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/5 bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name} — ${t.role}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  <Award className="h-3 w-3" /> {t.exp}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-0.5 text-sm text-primary">{t.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.spec}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground/70">Certified: {t.certs}</p>

                <div className="mt-5 flex gap-2">
                  {[Instagram, Facebook, Twitter].map((Icon, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label="Social link"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
