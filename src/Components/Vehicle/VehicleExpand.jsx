import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Titular centrado sobre un patrón; la imagen sube desde abajo y crece hasta llenar la pantalla
function VehicleExpand({ title, img }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=180%", scrub: 1, pin: true }
      });

      tl.fromTo(".vh-expand-media",
        { clipPath: "inset(78% 30% 0% 30%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut", duration: 1 }, 0)
        .fromTo(".vh-expand-media img", { scale: 1.35 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
        .to(".vh-expand-title", { yPercent: -60, opacity: 0, ease: "power1.in", duration: 0.6 }, 0.1)
        .to({}, { duration: 0.25 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="vh-expand">
      <div className="vh-pattern" aria-hidden="true" />
      <h2 className="vh-expand-title cond">{title}</h2>
      <div className="vh-expand-media">
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default VehicleExpand;
