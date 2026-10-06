import { Link } from "react-router-dom";

const columns = [
  { title: "Experiencia", links: ["Museo", "Estudios", "Pistas de manejo", "Eventos", "Reservar prueba de manejo"] },
  { title: "Compra", links: ["Autos", "Servicio y repuestos", "Accesorios", "Ventas a flotas"] },
  { title: "Cuenta", links: ["Comunidad", "Club privado", "Mi perfil"] },
  { title: "Aprender", links: ["Empresa", "Trabaja con nosotros", "Prensa", "Concesionarios"] }
];

const legal = ["Proveedor", "Aviso legal", "Configuración", "Privacidad", "Accesibilidad", "Contacto"];

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-top">
          <span className="footer-wordmark cond">Autos Web</span>
          {columns.map((c) => (
            <nav key={c.title} className="footer-col" aria-label={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => <li key={l}><Link to="/">{l}</Link></li>)}
              </ul>
            </nav>
          ))}
        </div>

        <p className="footer-note">
          Proyecto con fines educativos. Las imágenes de ejemplo provienen de Unsplash y de videos públicos.
        </p>

        <ul className="footer-legal">
          {legal.map((l) => <li key={l}><Link to="/">{l}</Link></li>)}
        </ul>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Autos Web.</span>
          <button className="to-top" aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12l6-6 6 6M6 18l6-6 6 6" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
