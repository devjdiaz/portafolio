import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/brand-icons";
import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-dim">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-brand" />
            </span>
            Disponible para nuevos proyectos
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Landing pages que consiguen clientes.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Diseño y desarrollo de landing pages para negocios locales en
            Colombia y Guatemala, con HTML, CSS, JavaScript y React.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={links.whatsappHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_16px_40px_-12px_rgba(31,174,102,0.55)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <WhatsAppIcon className="size-4" />
              Escribir por WhatsApp
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
            >
              Ver proyectos
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
