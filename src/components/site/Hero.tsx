import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString() + suffix);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          mv.set(value);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mv, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
  { value: 5000, suffix: "+", label: "Happy Members" },
  { value: 50, suffix: "+", label: "Pro Trainers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Athlete training in a premium gym"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="grid-bg absolute inset-0 opacity-30" />
      </div>

      {/* Floating decorations */}
      <div className="pointer-events-none absolute -left-10 top-1/3 hidden h-40 w-40 rounded-full bg-primary/20 blur-3xl md:block animate-float-slow" />
      <div className="pointer-events-none absolute right-10 top-24 hidden h-56 w-56 rounded-full bg-accent/15 blur-3xl md:block animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            #1 Premium Fitness Club
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Transform Your Body,
            <br />
            <span className="text-gradient">Transform Your Life</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            Professional trainers, world-class equipment and affordable memberships —
            crafted to help you become the strongest version of yourself.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="shadow-neon">
              <a href="#pricing">
                Join Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 backdrop-blur">
              <a href="#contact">Enquire Now</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="gap-2">
              <a href="#gallery">
                <Play className="h-4 w-4 fill-current" />
                Watch Video
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl px-5 py-6 text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
