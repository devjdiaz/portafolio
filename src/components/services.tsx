import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="servicios" className="border-t border-border bg-surface py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Qué puedo hacer por tu negocio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Servicios pensados para pequeñas y medianas empresas que quieren
            crecer en línea.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[80px_1fr_2fr] sm:items-baseline sm:gap-8">
                <span className="font-mono text-sm text-dim">
                  {service.index}
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="max-w-xl text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
