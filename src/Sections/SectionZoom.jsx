import TextUpScroll from "../Components/TextUpScroll";

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`;

// Bloque negro estilo "Milestones": titular grande + imagen con zoom al pasar el mouse
function SectionZoom() {
  return (
    <section id="hitos" className="milestone">
      <div className="container milestone-inner">
        <div className="milestone-copy">
          <p className="eyebrow">Hitos</p>
          <TextUpScroll className="milestone-title cond" text="Recorre con nosotros 140 años de historia." />
          <p className="milestone-kicker">140 años. 140 lugares.</p>
          <a href="#modelos" className="btn-pill">Explorar más</a>
        </div>
        <div className="milestone-media hover-inner hover-card">
          <div className="mask">
            <img src={unsplash("1544636331-e26879cd4d9b")} alt="Bugatti Chiron plateado de frente" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionZoom;
