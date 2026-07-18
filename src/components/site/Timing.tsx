import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const HOURS = [
  { day: "Monday – Friday", time: "6:00 AM – 11:00 PM" },
  { day: "Saturday", time: "7:00 AM – 10:00 PM" },
  { day: "Sunday", time: "8:00 AM – 8:00 PM" },
];

export function Timing() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow="Timings"
          title={<>Open when <span className="text-gradient">you are</span></>}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {HOURS.map((h, i) => (
            <motion.div
              key={h.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Clock className="mx-auto mb-3 h-6 w-6 text-primary" />
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{h.day}</div>
              <div className="mt-1 text-lg font-semibold">{h.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
