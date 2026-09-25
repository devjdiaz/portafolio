import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site-data";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selección de trabajos recientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Landing pages y sitios en producción para clientes en la región.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.05} className="lg:row-span-2">
            <ProjectCard project={featured} large />
          </Reveal>
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={0.1 + i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-brand/30"
    >
      <div
        className={`relative overflow-hidden ${
          large ? "min-h-[260px] flex-1" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`Captura del sitio ${project.name}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-brand">
          Ver sitio
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
