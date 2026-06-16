import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f1b]/90 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-[#00aaff] font-bold text-lg tracking-tight">
          &lt;Gabriel.dev /&gt;
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-[#00aaff] transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#131a29] border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-[#00aaff] transition-colors text-sm font-medium block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
