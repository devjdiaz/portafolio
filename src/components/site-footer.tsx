export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} Juan Esteban Díaz. Hecho con enfoque en
          negocio.
        </p>
      </div>
    </footer>
  );
}
