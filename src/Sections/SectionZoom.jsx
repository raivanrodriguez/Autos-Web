import TextUpScroll from "../Components/TextUpScroll";

// Banner dividido: imagen con zoom al pasar el mouse + texto
function SectionZoom() {
  return (
    <section className="section split">
      <div className="container split-inner">
        <div className="split-media hover-inner">
          <div className="mask">
            <img src="/Auto/Lambor/1.png" alt="Lamborghini Huracán STO en estudio" loading="lazy" />
          </div>
        </div>
        <div className="split-copy">
          <p className="eyebrow">Prueba de manejo</p>
          <TextUpScroll className="section-title" text="Siéntelo antes de decidir." />
          <p className="lead">
            Reserva una prueba de manejo en el concesionario más cercano. Te acompañamos en cada
            kilómetro para que descubras de qué es capaz tu próximo auto.
          </p>
          <div className="btn-row">
            <a href="#servicios" className="btn btn-primary">Reservar ahora</a>
            <a href="#modelos" className="btn btn-ghost">Ver modelos</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionZoom;
