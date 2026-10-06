// sections/SectionMercedes.jsx
// Sección editorial blanca: dos columnas escalonadas, título que sube y foto con telón.
// Cada tarjeta abre la página del vehículo (/vehiculos/:slug)
import { Link } from "react-router-dom";
import TextUpScroll from "../Components/TextUpScroll";
import { useTelonReveal } from "../Hooks/UseTelonReveal";
import { vehicles } from "../data/vehicles";

function Story({ slug, kicker, teaser, img }) {
  return (
    <Link to={`/vehiculos/${slug}`} className="story reveal-card">
      <p className="story-kicker">{kicker}</p>
      <TextUpScroll as="h3" className="story-title cond" text={teaser} />
      <div className="story-img reveal-mask">
        <img src={img} alt="" loading="lazy" />
      </div>
    </Link>
  );
}

function SectionMercedes() {
  useTelonReveal(".reveal-card");

  const stories = vehicles.slice(0, 6);
  const left = stories.filter((_, i) => i % 2 === 0);
  const right = stories.filter((_, i) => i % 2 === 1);

  return (
    <section id="mercedes" className="story-section white-b">
      <div className="row">
        <div className="col left">
          {left.map((v) => <Story key={v.slug} {...v} />)}
        </div>
        <div className="col right offset">
          {right.map((v) => <Story key={v.slug} {...v} />)}
        </div>
      </div>
    </section>
  );
}

export default SectionMercedes;
