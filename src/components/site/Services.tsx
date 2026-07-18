import { motion } from "motion/react";
import {
  Dumbbell, HeartPulse, Flame, Zap, Music2, Timer,
  Trophy, Weight, Activity, User2, Salad, Laptop,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const SERVICES = [
  { icon: Weight, title: "Weight Training", desc: "Build strength, size and posture." },
  { icon: HeartPulse, title: "Cardio", desc: "Improve endurance and heart health." },
  { icon: Flame, title: "CrossFit", desc: "High-intensity functional workouts." },
  { icon: Activity, title: "Yoga", desc: "Flexibility, balance and mindfulness." },
  { icon: Music2, title: "Zumba", desc: "Dance-based cardio, huge fun." },
  { icon: Zap, title: "HIIT", desc: "Fast fat burn in short sessions." },
  { icon: Trophy, title: "Bodybuilding", desc: "Serious physique development." },
  { icon: Dumbbell, title: "Powerlifting", desc: "Squat, bench, deadlift mastery." },
  { icon: Timer, title: "Functional", desc: "Everyday-life athleticism." },
  { icon: User2, title: "Personal Training", desc: "1-on-1 dedicated coaching." },
  { icon: Salad, title: "Diet Plans", desc: "Custom meal plans that fit you." },
  { icon: Laptop, title: "Online Coaching", desc: "Train with us from anywhere." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Classes & Services"
          title={<>Train the way <span className="text-gradient">you love</span></>}
          subtitle="From strength and hypertrophy to yoga and HIIT — pick your discipline and let us handle the rest."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-primary/20" />
              <s.icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.6} />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
