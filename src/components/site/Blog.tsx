import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const POSTS = [
  { cat: "Nutrition", title: "The Only 5 Foods You Need to Build Muscle", excerpt: "A no-BS guide to the highest-quality protein, carb and fat sources for lean gains.", date: "Jul 10, 2026", read: "6 min" },
  { cat: "Weight Loss", title: "Why You're Not Losing Fat (Even When You Diet)", excerpt: "The 4 hidden mistakes that stall fat loss — and the fixes our coaches use daily.", date: "Jul 04, 2026", read: "8 min" },
  { cat: "Workout Plans", title: "Push · Pull · Legs — Complete Beginner Program", excerpt: "A full 6-week PPL routine with sets, reps and progression built in.", date: "Jun 26, 2026", read: "10 min" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Trending Blog"
          title={<>Fitness knowledge <span className="text-gradient">worth reading</span></>}
          subtitle="Practical tips, workout plans and nutrition guides — written by our head coaches."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/30 via-primary/5 to-accent/20">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-6xl font-bold text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {p.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">
            See all articles <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
