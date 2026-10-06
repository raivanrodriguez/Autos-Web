import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Un arco circular se abre desde abajo y descubre la foto a pantalla completa,
// mientras el texto (contorno + relleno) queda encima invirtiendo colores
function VehicleArch({ outline, fill, img }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=200%", scrub: 1, pin: true }
      })
        .fromTo(".vh-arch-fill", { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.3 })
        .fromTo(".vh-arch-media",
          { clipPath: "circle(0% at 70% 100%)" },
          { clipPath: "circle(150% at 70% 100%)", ease: "power1.in", duration: 1 }, 0.2)
        .fromTo(".vh-arch-media img", { scale: 1.3 }, { scale: 1, duration: 1 }, 0.2)
        .to(".vh-arch-words", { opacity: 0, duration: 0.25 }, 1.05);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="vh-arch">
      <div className="vh-arch-media">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="vh-arch-words">
        <p className="vh-arch-outline cond">{outline}</p>
        <p className="vh-arch-fill cond">{fill}</p>
      </div>
    </section>
  );
}

export default VehicleArch;
