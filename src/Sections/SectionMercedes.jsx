// sections/SectionMercedes.jsx
// Sección editorial blanca: dos columnas escalonadas, título que sube y foto con telón
import TextUpScroll from "../Components/TextUpScroll";
import { useTelonReveal } from "../Hooks/UseTelonReveal";

// Imágenes de Unsplash de ejemplo: cámbialas por las tuyas cuando quieras
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`;

const stories = [
  { kicker: "Vehículos", title: "Un cosmos propio: el nuevo Mercedes-AMG GT.", img: unsplash("1618843479313-40f8afb4b4d8") },
  { kicker: "Vehículos", title: "El nuevo Clase G.", img: unsplash("1520031441872-265e4ff70366") },
  { kicker: "Diseño", title: "Rojo intenso, alma AMG.", img: unsplash("1553440569-bcc63803a83d") },
  { kicker: "Vehículos", title: "AMG GT en Mónaco.", img: unsplash("1617814076367-b759c7d7e738") },
  { kicker: "Innovación", title: "La parrilla Panamericana.", img: unsplash("1514316454349-750a7fd3da3a") },
  { kicker: "Vehículos", title: "Amarillo solar: AMG GT S.", img: unsplash("1605559424843-9e4c228bf1c2") }
];

function Story({ kicker, title, img }) {
  return (
    <a href="#modelos" className="story reveal-card">
      <p className="story-kicker">{kicker}</p>
      <TextUpScroll as="h3" className="story-title cond" text={title} />
      <div className="story-img reveal-mask">
        <img src={img} alt="" loading="lazy" />
      </div>
    </a>
  );
}

function SectionMercedes() {
  useTelonReveal(".reveal-card");

  const left = stories.filter((_, i) => i % 2 === 0);
  const right = stories.filter((_, i) => i % 2 === 1);

  return (
    <section id="mercedes" className="story-section white-b">
      <div className="row">
        <div className="col left">
          {left.map((s) => <Story key={s.title} {...s} />)}
        </div>
        <div className="col right offset">
          {right.map((s) => <Story key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

export default SectionMercedes;
