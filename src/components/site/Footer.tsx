import { useState } from "react";
import { Dumbbell, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Subscribed! Watch your inbox for our next workout plan.");
    setEmail("");
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary neon-border">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="text-lg tracking-tight">
                ELITE<span className="text-primary">.</span>FITNESS
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium training, certified coaches, real transformations. Since 2015.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Classes", "#services"],
                ["Trainers", "#trainers"],
                ["Gallery", "#gallery"],
                ["Blog", "#blog"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-muted-foreground hover:text-primary">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Opening Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 6 AM – 11 PM</li>
              <li>Saturday: 7 AM – 10 PM</li>
              <li>Sunday: 8 AM – 8 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">Get weekly workout plans and nutrition tips.</p>
            <form onSubmit={subscribe} className="mt-3 flex gap-2">
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <Button type="submit" size="sm">Join</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Elite Fitness Gym. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:border-primary/40 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
