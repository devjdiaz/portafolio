import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = "https://devjdiaz-portafolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juan Esteban Díaz, desarrollador web freelance",
    template: "%s · Juan Esteban Díaz",
  },
  description:
    "Desarrollador web freelance en Colombia y Guatemala. Landing pages y sitios a medida para negocios locales, construidos con HTML, CSS, JavaScript y React.",
  keywords: [
    "desarrollador web freelance",
    "landing pages Guatemala",
    "diseño web Colombia",
    "páginas web para negocios",
    "desarrollador React freelance",
  ],
  authors: [{ name: "Juan Esteban Díaz" }],
  creator: "Juan Esteban Díaz",
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: siteUrl,
    title: "Juan Esteban Díaz, desarrollador web freelance",
    description:
      "Landing pages y sitios a medida para negocios locales en Colombia y Guatemala.",
    siteName: "Juan Esteban Díaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Esteban Díaz, desarrollador web freelance",
    description:
      "Landing pages y sitios a medida para negocios locales en Colombia y Guatemala.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} dark h-full`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
