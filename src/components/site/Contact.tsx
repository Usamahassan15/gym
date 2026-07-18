import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "./SectionHeader";

const WA_NUMBER = "923175817400";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  goal: z.string().trim().min(2, "Tell us your goal").max(80),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const text =
      `New Enquiry — Elite Fitness Gym\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n` +
      `Goal: ${form.goal}\n\nMessage:\n${form.message || "-"}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! Redirecting you to WhatsApp — we'll reply within minutes.");
      setForm({ name: "", phone: "", email: "", goal: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Ready to <span className="text-gradient">get started?</span></>}
          subtitle="Fill the form and we'll continue the conversation on WhatsApp — usually within minutes."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold">Elite Fitness Gym</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                World-class training. Real results. Come see the space in person.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a href={`https://wa.me/${WA_NUMBER}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +92 317 5817400
                </a>
                <a href="mailto:hello@elitefitness.gym" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> hello@elitefitness.gym
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Main Blvd, Gulberg III, Lahore
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Elite Fitness Gym location"
                src="https://www.google.com/maps?q=Gulberg+Lahore&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass lg:col-span-3 space-y-4 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={set("name")} placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="03xx xxxxxxx" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="goal">Fitness goal</Label>
                <Input id="goal" value={form.goal} onChange={set("goal")} placeholder="Fat loss, muscle gain..." required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea id="message" rows={4} value={form.message} onChange={set("message")} placeholder="Anything else you'd like us to know..." />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full shadow-neon">
              {submitting ? "Sending..." : (<>Send to WhatsApp <Send className="ml-1 h-4 w-4" /></>)}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              We never share your info. Submitting opens WhatsApp with your enquiry pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
