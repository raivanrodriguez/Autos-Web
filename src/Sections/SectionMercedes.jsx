// sections/SectionMercedes.jsx
import TextUpScroll from "../Components/TextUpScroll";
import RevealImage from "../Components/RevealImage";
import { useTelonRevealUp } from "../Hooks/UseTelonRevealUp";
import { useTelonRevealDown } from "../Hooks/UseTelonrevealDown";

function SectionMercedes() {

  useTelonRevealUp(".reveal-up");
  useTelonRevealDown(".reveal-down");

  return (
 <section className="story-section white-b">

  {/* FILA 1 */}
  <div className="row">
    
    <div className="col left">
      <TextUpScroll  className="texto-up-b" text="Texto debajo izquierda..." />
      <div className="card reveal-card">
        <div className="reveal-mask">
          <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d" />
        </div>
      </div>

      
    </div>

    <div className="col right offset">
      <TextUpScroll className="texto-up-b"  text="The New GLS Copué." />
      <div className="card reveal-card">
        <div className="reveal-mask">
          <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d" />
          
          
        </div>
          
      </div>
      <div className="col">
        
      
      </div>
      
    </div>

  </div>
 

</section>
  );
}

export default SectionMercedes;