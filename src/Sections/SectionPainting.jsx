import TextPinting from "../Components/TextPinting";
import TextUpScroll from "../Components/TextUpScroll";

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`;

// Imagen + título que sube, texto que se pinta con el scroll e imágenes escalonadas
function SectionPainting() {
  return (
    <section id="filosofia" className="painting-section">
      <div className="painting-row">
        <div className="painting-img hover-inner">
          <div className="mask">
            <img src={unsplash("1583267746897-2cf415887172")} alt="Mercedes-AMG GT negro de frente" loading="lazy" />
          </div>
        </div>
        <div className="painting-head">
          <p className="eyebrow">Mercedes-AMG</p>
          <TextUpScroll className="section-title cond" text="Potencia, diseño y tecnología en una experiencia única." />
        </div>
      </div>

      <div className="painting-text">
        <TextPinting text="El nuevo Mercedes-AMG SL forma parte de un mito automovilístico y es, por tanto, un claro alegato en favor de las altas prestaciones, de un confort exclusivo y, por supuesto, de un diseño irresistible. Abre la capota y lánzate a descubrir lugares fascinantes. Regálate tiempo de calidad, tiempo para ti mismo." />
      </div>

      <div className="painting-row painting-stagger">
        <div className="painting-img-izq">
          <div className="hover-inner"><div className="mask">
            <img src={unsplash("1617531653332-bd46c24f2068")} alt="BMW M4 rojo" loading="lazy" />
          </div></div>
          <TextPinting text="Cada línea de la carrocería existe por una razón: cortar el aire y guiar la mirada." />
        </div>
        <div className="painting-img-der">
          <div className="hover-inner"><div className="mask">
            <img src={unsplash("1614162692292-7ac56d7f7f1e")} alt="Porsche 911 GT3 blanco en la nieve" loading="lazy" />
          </div></div>
          <TextPinting text="Rendimiento que se siente en cada curva, en cualquier estación del año." />
        </div>
      </div>
    </section>
  );
}

export default SectionPainting;
