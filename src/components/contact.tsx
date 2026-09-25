import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { site, links } from "@/lib/site-data";
import { WhatsAppIcon, GitHubIcon, LinkedInIcon } from "@/components/brand-icons";

export function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respuesta por WhatsApp o correo. Cuéntame de tu negocio y qué
            necesitas en la web.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-brand"
              >
                <EnvelopeSimple className="size-5 text-dim" />
                {site.email}
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-white/20"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-white/20"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <a
              href={links.whatsappContact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground shadow-[0_16px_40px_-12px_rgba(31,174,102,0.55)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <WhatsAppIcon className="size-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
