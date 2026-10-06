import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dos columnas fijas: en cada paso la izquierda entra desde abajo y la derecha desde arriba
function GlePairs({ pairs }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const root = ref.current;
    const ctx = gsap.context(() => {
      const left = root.querySelectorAll(".gp-left .gp-slide");
      const right = root.querySelectorAll(".gp-right .gp-slide");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top top", end: `+=${pairs.length * 90}%`, scrub: 1, pin: true }
      });

      for (let i = 1; i < pairs.length; i++) {
        tl.fromTo(left[i], { yPercent: 100 }, { yPercent: 0, ease: "power2.inOut", duration: 1 })
          .fromTo(left[i].querySelector("img"), { yPercent: -40 }, { yPercent: 0, ease: "power2.inOut", duration: 1 }, "<")
          .fromTo(right[i], { yPercent: -100 }, { yPercent: 0, ease: "power2.inOut", duration: 1 }, "<")
          .fromTo(right[i].querySelector("img"), { yPercent: 40 }, { yPercent: 0, ease: "power2.inOut", duration: 1 }, "<")
          .to([left[i - 1].querySelector("img"), right[i - 1].querySelector("img")], { scale: 1.12, ease: "none", duration: 1 }, "<")
          .to({}, { duration: 0.3 });
      }
    }, ref);
    return () => ctx.revert();
  }, [pairs.length]);

  return (
    <section ref={ref} className="gp">
      <div className="gp-col gp-left">
        {pairs.map(([l]) => <div key={l} className="gp-slide"><img src={l} alt="" loading="lazy" /></div>)}
      </div>
      <div className="gp-col gp-right">
        {pairs.map(([, r]) => <div key={r} className="gp-slide"><img src={r} alt="" loading="lazy" /></div>)}
      </div>
    </section>
  );
}

export default GlePairs;
