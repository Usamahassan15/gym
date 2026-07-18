import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/gym-interior.jpg";
import men from "@/assets/men-training.jpg";
import women from "@/assets/women-training.jpg";
import t1 from "@/assets/trainer-1.jpg";
import t3 from "@/assets/trainer-3.jpg";

const IMAGES = [
  { src: interior, alt: "Cardio zone" , span: "lg:col-span-2 lg:row-span-2" },
  { src: men, alt: "Weight training" },
  { src: t1, alt: "Head coach" },
  { src: women, alt: "Women's studio" , span: "lg:row-span-2" },
  { src: hero, alt: "Athlete lifting" },
  { src: t3, alt: "Bodybuilding coach" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Inside <span className="text-gradient">Elite Fitness</span></>}
          subtitle="A glimpse of the space, energy and community you're about to join."
        />
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
