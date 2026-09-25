import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
