import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "./SectionHeader";

function categorize(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-accent" };
  if (bmi < 25) return { label: "Healthy", color: "text-primary" };
  if (bmi < 30) return { label: "Overweight", color: "text-accent" };
  return { label: "Obese", color: "text-destructive" };
}

export function BmiCalculator() {
  const [height, setHeight] = useState(""); // cm
  const [weight, setWeight] = useState(""); // kg
  const [result, setResult] = useState<number | null>(null);

  const category = useMemo(() => (result ? categorize(result) : null), [result]);

  const calc = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    setResult(Number((w / (h * h)).toFixed(1)));
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          eyebrow="Health Check"
          title={<>Quick <span className="text-gradient">BMI Calculator</span></>}
          subtitle="Know your starting point in seconds. Our coaches will design a plan based on your goal."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 sm:p-10"
        >
          <form onSubmit={calc} className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="h">Height (cm)</Label>
              <Input
                id="h"
                inputMode="numeric"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="w">Weight (kg)</Label>
              <Input
                id="w"
                inputMode="numeric"
                placeholder="72"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="w-full shadow-neon">
                Calculate BMI
              </Button>
            </div>
          </form>

          {result !== null && category && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-background/50 p-5"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Your BMI</div>
                <div className="text-4xl font-bold">{result}</div>
              </div>
              <div className={`text-lg font-semibold ${category.color}`}>{category.label}</div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
