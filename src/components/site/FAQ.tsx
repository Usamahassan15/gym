import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  { q: "How do I sign up for a membership?", a: "You can sign up online through our pricing section, or drop by the gym and our team will set you up in under 5 minutes." },
  { q: "Are there any hidden fees?", a: "No. The price you see is the price you pay. Every plan includes access to all zones, group classes, and locker rooms." },
  { q: "Do you offer a free trial?", a: "Yes — first-time visitors get a free 1-day trial including a full facility tour and one group class." },
  { q: "Can I freeze my membership?", a: "Quarterly and above plans can be frozen for up to 30 days per year for travel, illness or work." },
  { q: "Do you have certified trainers?", a: "All of our coaches hold internationally recognized certifications (NSCA, ISSA, ACE, RYT-500) and have 5-10+ years of experience." },
  { q: "What payment methods do you accept?", a: "Card, bank transfer, cash, JazzCash and Easypaisa. Auto-renewals are available on all monthly plans." },
  { q: "What are your gym timings?", a: "Mon-Fri: 6 AM – 11 PM · Sat: 7 AM – 10 PM · Sun: 8 AM – 8 PM." },
  { q: "Do you have women-only hours?", a: "Yes. We have dedicated women-only training hours and female coaches available throughout the week." },
];

export function FAQ() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Frequently <span className="text-gradient">asked</span></>}
          subtitle="Can't find what you're looking for? Message us on WhatsApp — we reply within minutes."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-2 sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="px-4 text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
