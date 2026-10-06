import { Link } from "react-router-dom";
import TextUpScroll from "../TextUpScroll";

// Imagen final con tarjetas de vidrio: siguiente vehículo y volver al listado
function VehicleExplore({ title, img, next }) {
  return (
    <section className="vh-explore">
      <img src={img} alt="" loading="lazy" />
      <div className="vh-explore-shade" />
      <div className="container vh-explore-copy">
        <TextUpScroll className="vh-explore-title cond" text={title} />
        <div className="vh-explore-cards">
          <Link to={`/vehiculos/${next.slug}`} className="glass-card">
            <span>Siguiente: {next.brand} {next.name}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </Link>
          <Link to="/#mercedes" className="glass-card">
            <span>Ver todos los vehículos</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default VehicleExplore;
