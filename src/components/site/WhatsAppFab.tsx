import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "923175817400";

export function WhatsAppFab() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Hi Elite Fitness! I'd like to know more about your memberships."
      )}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-neon"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/60 animate-pulse-neon blur-md" />
      <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </motion.a>
  );
}
