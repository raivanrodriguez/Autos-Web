import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Imagen fija a la izquierda; a la derecha un panel oscuro donde pasan las fotos con su texto
function VehicleSplit({ img, items }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".vh-split-item").forEach((el) => {
        gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 85%", end: "center center", scrub: 1 }
        })
          .fromTo(el.querySelector(".vh-split-card"), { clipPath: "inset(20% 20% 20% 20%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0)
          .fromTo(el.querySelector("img"), { scale: 1.3 }, { scale: 1, ease: "none" }, 0)
          .fromTo(el.querySelector("p"), { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: "none" }, 0.5);
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="vh-split">
      <div className="vh-split-sticky">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="vh-split-panel">
        {items.map((item) => (
          <div key={item.text} className="vh-split-item">
            <div className="vh-split-card">
              <img src={item.img} alt="" loading="lazy" />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VehicleSplit;
