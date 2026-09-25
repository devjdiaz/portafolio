import { Reveal } from "@/components/reveal";
import { facts, stack } from "@/lib/site-data";

export function About() {
  return (
    <section id="sobre-mi" className="border-t border-border bg-surface py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Desarrollo web orientado a resultados de negocio
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Diseño y construyo páginas que no solo se ven bien, sino que
            generan clientes: claridad, velocidad y mensajes que convierten.
            Trabajo con equipos y emprendedores que necesitan una presencia
            profesional en línea sin complicaciones técnicas, partiendo
            siempre de los objetivos comerciales y del perfil de su
            audiencia local.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
