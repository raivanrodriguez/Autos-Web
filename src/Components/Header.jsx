import { useEffect, useState } from "react";
import { models } from "../data/models";

const links = [
  { label: "Modelos", href: "#modelos", mega: true },
  { label: "Eléctricos", href: "#modelos" },
  { label: "Experiencias", href: "#destacados" },
  { label: "Servicios", href: "#servicios" },
  { label: "Concesionarios", href: "#servicios" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fondo sólido al bajar del hero y se oculta al hacer scroll hacia abajo
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 400);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeAll = () => {
    setMegaOpen(false);
    setMenuOpen(false);
  };

  const classes = [
    "header",
    scrolled && "is-solid",
    hidden && !megaOpen && !menuOpen && "is-hidden",
    megaOpen && "is-mega",
    menuOpen && "is-menu"
  ].filter(Boolean).join(" ");

  return (
    <header className={classes} onMouseLeave={() => setMegaOpen(false)}>
      <div className="header-bar">
        <a href="#top" className="brand" onClick={closeAll} aria-label="Autos Web, inicio">
          <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 4 L23 20 L20 36 L17 20 Z M4 20 L20 17 L36 20 L20 23 Z" fill="currentColor" opacity=".9" />
          </svg>
          <span className="brand-name">Autos&nbsp;Web</span>
        </a>

        <nav className="nav" aria-label="Principal">
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`nav-link ${l.mega && megaOpen ? "is-active" : ""}`}
                  onMouseEnter={() => setMegaOpen(!!l.mega)}
                  onFocus={() => setMegaOpen(!!l.mega)}
                  onClick={closeAll}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#servicios" className="icon-btn" aria-label="Buscar concesionario">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          </a>
          <a href="#contacto" className="icon-btn" aria-label="Mi cuenta">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
          </a>
          <button
            className="burger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {/* Mega menú de modelos (escritorio) */}
      <div className="mega" aria-hidden={!megaOpen}>
        <div className="mega-inner">
          {models.map((m, i) => (
            <a
              key={m.id}
              href="#modelos"
              className="mega-card"
              style={{ "--i": i }}
              onClick={closeAll}
              tabIndex={megaOpen ? 0 : -1}
            >
              <div className={`mega-img ${m.letterbox ? "is-letterbox" : ""}`}><img src={m.img} alt="" loading="lazy" /></div>
              <span className="mega-brand">{m.brand}</span>
              <span className="mega-name">{m.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Menú pantalla completa (móvil) con efecto telón por palabra */}
      <div className="mobile-menu" aria-hidden={!menuOpen}>
        <ul>
          {links.map((l, i) => (
            <li key={l.label} className="word3-wrapper">
              <a
                href={l.href}
                className="word3"
                style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.06}s` : "0s" }}
                onClick={closeAll}
                tabIndex={menuOpen ? 0 : -1}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
