import { motion } from "motion/react";
import { Star, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

const REVIEWS = [
  { name: "Ayesha K.", role: "Verified Member · 2 yrs", rating: 5, text: "Lost 18 kg in 6 months. Coaches are unreal — they push you but never break you. Best decision I made." },
  { name: "Bilal R.", role: "Verified Member · 1 yr", rating: 5, text: "The equipment is genuinely top-tier and the strength floor is never crowded. Feels like a boutique gym at a normal price." },
  { name: "Sana M.", role: "Verified Member · 8 mo", rating: 5, text: "The women-only hours changed everything for me. Comfortable, professional, and I've actually gotten stronger." },
  { name: "Omar S.", role: "Verified Member · 3 yrs", rating: 5, text: "Been in 5 gyms across 3 countries. This one wins on hygiene, staff and programming. Highly recommend." },
  { name: "Fatima A.", role: "Verified Member · 6 mo", rating: 5, text: "Nutrition plan alone was worth the membership. Down 12 kg and still eating normal food." },
  { name: "Hassan D.", role: "Verified Member · 1 yr", rating: 4, text: "Great community and PT sessions. Would love a bigger stretching area, but honestly nitpicking." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Reviews"
          title={<>Loved by <span className="text-gradient">5,000+ members</span></>}
          subtitle="Real reviews from real members — not paid actors."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 font-semibold text-foreground">4.9 / 5</span>
            <span>from 2,300+ reviews</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-white/5 bg-card p-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(r.rating)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    {r.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">See more reviews</Button>
        </div>
      </div>
    </section>
  );
}
