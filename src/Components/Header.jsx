import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { vehicles } from "../data/vehicles";

const links = [
  { label: "Vehículos", href: "/#mercedes", mega: true },
  { label: "Eléctricos", href: "/vehiculos/porsche-taycan" },
  { label: "AMG", href: "/vehiculos/mercedes-amg-gt" },
  { label: "Diseño", href: "/#filosofia" },
  { label: "Innovación", href: "/#hitos" },
  { label: "Exclusivo", href: "/vehiculos/bugatti-chiron" }
];

function Logo({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 4 L23 20 L20 36 L17 20 Z M4 20 L20 17 L36 20 L20 23 Z" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const light = pathname.startsWith("/vehiculos");

  // Arriba del todo se ve la barra completa; al bajar queda solo el logo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  const expanded = !scrolled || hover || megaOpen;

  const classes = [
    "header",
    expanded && "is-expanded",
    scrolled && "is-scrolled",
    megaOpen && "is-mega",
    menuOpen && "is-menu",
    light && "is-light"
  ].filter(Boolean).join(" ");

  return (
    <header
      className={classes}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setMegaOpen(false); }}
    >
      <div className="header-top">
        <div className="lang">
          <button className="lang-btn is-active">ES</button>
          <button className="lang-btn">EN</button>
        </div>

        <Link to="/" className="logo" onClick={closeAll} aria-label="Autos Web, inicio">
          <Logo />
        </Link>

        <div className="header-right">
          <Link to="/#mercedes" className="search-link">Buscar</Link>
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

      {/* Segunda fila: se pliega al hacer scroll y vuelve con hover (efecto telón por palabra) */}
      <nav className="header-nav" aria-label="Principal">
        <ul>
          {links.map((l, i) => (
            <li key={l.label} className="word3-wrapper">
              <Link
                to={l.href}
                className={`nav-link word3 ${l.mega && megaOpen ? "is-active" : ""}`}
                style={{ transitionDelay: expanded ? `${i * 0.04}s` : "0s" }}
                onMouseEnter={() => setMegaOpen(!!l.mega)}
                onFocus={() => { setHover(true); setMegaOpen(!!l.mega); }}
                onClick={closeAll}
                tabIndex={expanded ? 0 : -1}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mega menú de modelos */}
      <div className="mega" aria-hidden={!megaOpen}>
        <div className="mega-inner">
          {vehicles.map((m, i) => (
            <Link
              key={m.slug}
              to={`/vehiculos/${m.slug}`}
              className="mega-card"
              style={{ "--i": i }}
              onClick={closeAll}
              tabIndex={megaOpen ? 0 : -1}
            >
              <div className={`mega-img ${m.letterbox ? "is-letterbox" : ""}`}>
                <img src={m.img} alt="" loading="lazy" />
              </div>
              <span className="mega-brand">{m.brand}</span>
              <span className="mega-name">{m.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Menú pantalla completa (móvil) */}
      <div className="mobile-menu" aria-hidden={!menuOpen}>
        <ul>
          {links.map((l, i) => (
            <li key={l.label} className="word3-wrapper">
              <Link
                to={l.href}
                className="word3"
                style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.06}s` : "0s" }}
                onClick={closeAll}
                tabIndex={menuOpen ? 0 : -1}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export { Logo };
