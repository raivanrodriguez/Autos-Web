const columns = [
  { title: "Modelos", links: ["Deportivos", "Hypercars", "Eléctricos", "Clásicos", "Ofertas"] },
  { title: "Compra", links: ["Configurador", "Prueba de manejo", "Financiación", "Autos usados"] },
  { title: "Servicio", links: ["Concesionarios", "Mantenimiento", "Repuestos", "Asistencia 24 h"] },
  { title: "Empresa", links: ["Sobre nosotros", "Noticias", "Trabaja con nosotros", "Contacto"] }
];

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-name">Autos&nbsp;Web</span>
            <p>Deportivos, hypercars y eléctricos que emocionan.</p>
          </div>
          {columns.map((c) => (
            <nav key={c.title} className="footer-col" aria-label={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Autos Web. Proyecto con fines educativos.</span>
          <ul>
            <li><a href="#top">Aviso legal</a></li>
            <li><a href="#top">Privacidad</a></li>
            <li><a href="#top">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
