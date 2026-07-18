import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const PLANS = [
  {
    name: "Monthly",
    price: 49,
    period: "/month",
    features: ["Full gym access", "Group classes", "Locker & shower", "Free WiFi"],
  },
  {
    name: "Quarterly",
    price: 129,
    period: "/3 months",
    features: ["Everything in Monthly", "1 PT session / month", "Diet consultation", "10% partner discounts"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Half Year",
    price: 229,
    period: "/6 months",
    features: ["Everything in Quarterly", "3 PT sessions / month", "Body composition tests", "Guest passes x3"],
  },
  {
    name: "Yearly",
    price: 399,
    period: "/year",
    features: ["Everything in Half Year", "Unlimited classes", "Custom diet plan", "Free supplements starter kit"],
    savings: "Save 32%",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Membership"
          title={<>Plans that <span className="text-gradient">fit your goals</span></>}
          subtitle="No hidden fees. Cancel anytime. Every plan includes access to all zones and group classes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-7 ${
                p.highlight
                  ? "bg-gradient-to-b from-primary/20 to-card neon-border"
                  : "border border-white/5 bg-card"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-neon">
                  <Sparkles className="h-3 w-3" /> {p.badge}
                </div>
              )}
              {p.savings && (
                <div className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  {p.savings}
                </div>
              )}

              <h3 className="text-lg font-semibold text-muted-foreground">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">${p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-7 ${p.highlight ? "shadow-neon" : ""}`}
                variant={p.highlight ? "default" : "outline"}
              >
                <a href="#contact">Join Now</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
