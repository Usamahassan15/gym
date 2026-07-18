import { motion } from "motion/react";
import {
  Dumbbell, Award, Salad, ParkingCircle, Lock, ShowerHead,
  Wind, Wallet, User, HeartPulse, Flame, Users,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FEATURES = [
  { icon: Dumbbell, title: "Premium Equipment", desc: "Latest strength & cardio machines from global brands." },
  { icon: Award, title: "Certified Trainers", desc: "Internationally certified coaches with 5-10+ years of experience." },
  { icon: Salad, title: "Nutrition Guidance", desc: "Personalized meal & supplement plans built around your goals." },
  { icon: ParkingCircle, title: "Free Parking", desc: "Ample, secure parking for members — no hassle before your workout." },
  { icon: Lock, title: "Locker Facility", desc: "Private lockers with keypad access to keep your gear safe." },
  { icon: ShowerHead, title: "Shower Rooms", desc: "Clean, modern shower rooms available anytime you're in." },
  { icon: Wind, title: "Air Conditioned", desc: "Fully climate-controlled floors so you train comfortably." },
  { icon: Wallet, title: "Affordable Plans", desc: "Flexible monthly, quarterly and annual memberships." },
  { icon: User, title: "Personal Coaching", desc: "1-on-1 sessions with dedicated accountability & tracking." },
  { icon: HeartPulse, title: "Cardio Zone", desc: "Treadmills, bikes, rowers and stair climbers in one zone." },
  { icon: Flame, title: "Strength Zone", desc: "Full free-weights area, racks, benches and plate-loaded stations." },
  { icon: Users, title: "Women Friendly", desc: "Dedicated women's space and female-only training hours." },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>Everything you need to <span className="text-gradient">win the day</span></>}
          subtitle="A complete fitness ecosystem designed for real results — not distractions."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6"
            >
              <div className="absolute inset-x-0 -top-24 h-40 bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
