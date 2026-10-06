import { useState } from "react";
import TextUpScroll from "../TextUpScroll";

const icons = {
  comfort: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  office: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  nav: <path d="M12 3l7 18-7-4-7 4z" />
};

// Imagen a pantalla completa con botones redondos que cambian la foto y el texto
function GleTabs({ title, items }) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section className="gt">
      {items.map((it, i) => (
        <img key={it.img} src={it.img} alt="" loading="lazy" className={`gt-img ${i === active ? "is-active" : ""}`} />
      ))}
      <div className="gt-shade" />
      <div className="container gt-copy">
        <TextUpScroll className="gt-title cond" text={title} />
        <div className="gt-buttons" role="tablist" aria-label={title}>
          {items.map((it, i) => (
            <button
              key={it.title}
              role="tab"
              aria-selected={i === active}
              aria-label={it.title}
              className={`gt-btn ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">{icons[it.icon] ?? icons.comfort}</svg>
            </button>
          ))}
        </div>
        <div key={active} className="gt-text" role="tabpanel">
          <p className="gt-text-title">{item.title}</p>
          <p>{item.text}</p>
        </div>
      </div>
    </section>
  );
}

export default GleTabs;
