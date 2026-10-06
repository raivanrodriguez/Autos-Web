import { useEffect, useRef, useState } from "react";
import TextUpScroll from "../Components/TextUpScroll";
import { categories, models } from "../data/models";

function SectionModels() {
  const [active, setActive] = useState("all");
  const [edges, setEdges] = useState({ start: true, end: false });
  const trackRef = useRef();

  const visible = active === "all" ? models : models.filter((m) => m.category === active);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    });
  };

  useEffect(() => {
    trackRef.current.scrollTo({ left: 0 });
    updateEdges();
  }, [active]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    const card = el.querySelector(".model-card");
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 24 : el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="modelos" className="section models">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Gama de modelos</p>
            <TextUpScroll className="section-title" text="Encuentra tu próximo auto." />
          </div>
          <div className="carousel-arrows">
            <button className="arrow" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label="Anterior">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button className="arrow" onClick={() => scrollBy(1)} disabled={edges.end} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="tabs" role="tablist" aria-label="Categorías">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`tab ${active === c.id ? "is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="carousel" ref={trackRef} onScroll={updateEdges}>
        {visible.map((m) => (
          <article key={m.id} className="model-card">
            <div className={`model-img ${m.letterbox ? "is-letterbox" : ""}`}>
              <img src={m.img} alt={`${m.brand} ${m.name}`} loading="lazy" />
            </div>
            <div className="model-body">
              <p className="model-brand">{m.brand}</p>
              <h3 className="model-name">{m.name}</h3>
              <p className="model-tagline">{m.tagline}</p>
              <dl className="model-specs">
                {m.specs.map(([value, label]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="btn-row">
                <a href="#destacados" className="btn btn-primary btn-sm">Descubrir</a>
                <a href="#servicios" className="link-arrow">Configurar</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SectionModels;
