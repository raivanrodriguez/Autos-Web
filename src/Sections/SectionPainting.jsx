import TextPinting from "../components/TextPinting";
import TextUpScroll from "../Components/TextUpScroll";

function SectionPainting() {
  return (
    <section className="painting-section">

      <div className="painting-row">

        {/* 🔥 IMAGEN */}
        <div className="painting-img">
          <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d" />
        </div>

        {/* 🔥 TEXTO CON EFECTO */}
        <div >
          <TextUpScroll className="texto-up" text="El Mercedes AMG combina potencia, diseño y tecnología en una experiencia única." />
        </div>
        

      </div>
      <div className="painting-text">
          <TextPinting text="El Mercedes AMG combina potencia, diseño y tecnología en una experiencia única.El nuevo Mercedes-AMG SL forma parte de un mito automovilístico y es, por tanto, un claro alegato en favor de las altas prestaciones, de un confort exclusivo y, por supuesto, de un diseño irresistible. Abre la capota de lona y lánzate a descubrir lugares fascinantes y a vivir momentos inolvidables. Regálate tiempo de calidad, tiempo para ti mismo." />
        </div>
         <div className="painting-row">

        {/* 🔥 IMAGEN */}
        <div className="painting-img-izq">
          <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d" />
           <TextPinting text="El Mercedes AMG combina potencia, diseño y tecnología en una experiencia única.El nuevo Mercedes-AMG SL forma parte de un mito automovilístico y es, por tanto, un claro alegato en favor de las altas prestaciones." />
        </div>

        {/* 🔥 TEXTO CON EFECTO */}
        <div className="painting-text">
            <div className="painting-img-der">
          <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d" />
          
        </div>
         
          <TextPinting text="El Mercedes AMG combina potencia, diseño y tecnología en una experiencia única.El nuevo Mercedes-AMG SL forma parte de un mito automovilístico y es, por tanto, un claro alegato en favor de las altas prestaciones." />
        
        </div>
        

      </div>
      
    
    </section>
  );
}

export default SectionPainting;