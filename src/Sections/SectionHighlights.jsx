import TextUpScroll from "../Components/TextUpScroll";
import { useTelonReveal } from "../Hooks/UseTelonReveal";

const stories = [
  {
    kicker: "Diseño",
    title: "La firma de luz del Chiron.",
    text: "Cuatro proyectores LED por lado que se han convertido en una seña de identidad.",
    img: "/Auto/bugati/luz 1/frame_003.png",
    size: "lg"
  },
  {
    kicker: "Tecnología",
    title: "Llantas aerodinámicas de carbono.",
    text: "Cada detalle del AMG GT XX está pensado para reducir la resistencia al aire.",
    img: "/Auto/amg/frame_004.png",
    size: "tall"
  },
  {
    kicker: "Leyenda",
    title: "El regreso del R34.",
    text: "Por qué el Skyline GT-R sigue siendo el sueño de toda una generación.",
    img: "/Auto/skyline/frame_001.png"
  },
  {
    kicker: "Ingeniería",
    title: "Un alerón que piensa.",
    text: "Cómo funciona el modo Top Speed del hypercar más famoso del mundo.",
    img: "/Auto/bugati/spoiler 2/frame_001.png"
  },
  {
    kicker: "Aventura",
    title: "Eléctrico en las dunas.",
    text: "El Taycan Cross Turismo puesto a prueba en el desierto.",
    img: "/Auto/porshe/frame_002.png"
  }
];

function StoryCard({ kicker, title, text, img, size }) {
  return (
    <a href="#modelos" className={`story ${size ? `story-${size}` : ""} reveal-card`}>
      <div className="story-img reveal-mask">
        <img src={img} alt="" loading="lazy" />
      </div>
      <p className="story-kicker">{kicker}</p>
      <h3 className="story-title">{title}</h3>
      <p className="story-text">{text}</p>
      <span className="link-arrow">Leer más</span>
    </a>
  );
}

function SectionHighlights() {
  useTelonReveal(".reveal-card");

  return (
    <section id="destacados" className="section highlights theme-light">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Destacados</p>
            <TextUpScroll className="section-title" text="Historias que se conducen." />
          </div>
        </div>

        <div className="stories-top">
          <StoryCard {...stories[0]} />
          <StoryCard {...stories[1]} />
        </div>
        <div className="stories-grid">
          {stories.slice(2).map((s) => <StoryCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

export default SectionHighlights;
