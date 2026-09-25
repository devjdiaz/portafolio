"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { navLinks, links, site } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/brand-icons";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (reduce) return;
    const goingDown = y > lastY.current;
    setHidden(goingDown && y > 96);
    lastY.current = y;
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-mono text-sm text-muted-foreground">
            {site.logo.replace(".", "")}
            <span className="text-brand">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={links.whatsappNav}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand/20"
            >
              <WhatsAppIcon className="size-4" />
              Escribir por WhatsApp
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="text-foreground lg:hidden"
          >
            <List size={24} />
          </button>
        </div>
      </motion.header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(320px,86vw)] flex-col gap-8 border-l border-border bg-surface px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-muted-foreground">
                {site.logo.replace(".", "")}
                <span className="text-brand">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="text-foreground"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={links.whatsappNav}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              <WhatsAppIcon className="size-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
