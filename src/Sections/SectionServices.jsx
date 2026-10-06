const services = [
  {
    title: "Configurador",
    text: "Elige color, llantas y equipamiento a tu medida.",
    icon: <path d="M4 17h16M6 17l1.5-5h9L18 17M8 12l1-3h6l1 3M7 20a1.5 1.5 0 1 0 0-.01M17 20a1.5 1.5 0 1 0 0-.01" />
  },
  {
    title: "Concesionarios",
    text: "Encuentra el punto de venta y servicio más cercano.",
    icon: <><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>
  },
  {
    title: "Financiación",
    text: "Planes flexibles de crédito y leasing.",
    icon: <><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18M7 15h4" /></>
  },
  {
    title: "Servicio técnico",
    text: "Mantenimiento oficial con repuestos originales.",
    icon: <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-3-1-1-3Z" />
  }
];

function SectionServices() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <p className="eyebrow">Servicios</p>
        <h2 className="section-title">Todo lo que necesitas, en un solo lugar.</h2>
        <div className="services-grid">
          {services.map((s) => (
            <a key={s.title} href="#contacto" className="service">
              <svg viewBox="0 0 24 24" className="service-icon" aria-hidden="true">{s.icon}</svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="link-arrow">Más información</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
