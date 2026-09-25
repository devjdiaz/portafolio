export const site = {
  name: "Juan Esteban Díaz",
  role: "Desarrollador web freelance",
  logo: "jed.dev",
  whatsappNumber: "50236284589",
  email: "dev.jdiaz@gmail.com",
  github: "https://github.com/devjdiaz",
  linkedin:
    "https://www.linkedin.com/in/juan-esteban-diaz-benavides-493aaa307/",
};

function waLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;
}

export const links = {
  whatsappHero: waLink(
    "Hola Juan Esteban, te escribo desde tu portafolio. Me interesa hablar contigo sobre un proyecto web para mi negocio."
  ),
  whatsappNav: waLink("Hola Juan Esteban, te escribo desde tu portafolio."),
  whatsappContact: waLink(
    "Hola Juan Esteban, te contacto por tu sitio web. Quiero conversar sobre una landing o presencia web para mi negocio."
  ),
};

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export const stack = ["HTML", "CSS", "JavaScript", "React"];

export const facts = [
  { label: "Ubicación", value: "Colombia y Guatemala, remoto" },
  { label: "Enfoque", value: "Negocios locales" },
];

export type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Autoventas Triple B",
    description:
      "Importadora de vehículos usados desde Estados Unidos hacia Guatemala. Formulario de cotización conectado a WhatsApp para capturar leads en el momento.",
    url: "https://autoventas-triple-b.vercel.app",
    image: "/projects/autoventas-triple-b.png",
    featured: true,
  },
  {
    name: "SILITECH S.A.",
    description:
      "Empresa agrícola guatemalteca. Rediseño con identidad de marca propia y catálogo de producto orientado a asesores comerciales.",
    url: "https://silitech-redesign.vercel.app",
    image: "/projects/silitech.png",
  },
  {
    name: "Residencial El Maestro",
    description:
      "Habitaciones en alquiler en Zona 15. Disponibilidad, precios y reserva por WhatsApp desde una sola página.",
    url: "https://residencial-zona15.vercel.app",
    image: "/projects/residencial-el-maestro.png",
  },
];

export type Service = {
  index: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    name: "Landing pages",
    description:
      "Páginas de una sola oferta, con un formulario o botón de WhatsApp como único objetivo. Pensadas para convertir, no para adornar.",
  },
  {
    index: "02",
    name: "Rediseño de sitios",
    description:
      "Tomo un sitio que ya existe y lo reconstruyo: mejor estructura, mejor velocidad y una identidad que coincide con la marca real del negocio.",
  },
  {
    index: "03",
    name: "Optimización móvil",
    description:
      "La mayoría de tus clientes te van a encontrar desde el celular. Reviso y ajusto cada sitio para que se sienta rápido y claro ahí primero.",
  },
];
