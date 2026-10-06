import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextUpScroll from "../TextUpScroll";
import { useTelonReveal } from "../../Hooks/UseTelonReveal";

gsap.registerPlugin(ScrollTrigger);

function Feature({ title, text, img }) {
  return (
    <div className="vh-feature vh-reveal">
      <div className="vh-feature-img reveal-mask">
        <img src={img} alt="" loading="lazy" />
      </div>
      <h3 className="vh-feature-title cond">{title}</h3>
      <p className="vh-feature-text">{text}</p>
    </div>
  );
}

// Encabezado + tarjetas escalonadas; la columna derecha se mueve a otra velocidad (parallax)
function VehicleFeatures({ title, text, items }) {
  const ref = useRef();
  useTelonReveal(".vh-reveal");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".vh-features-right", { y: 120 }, {
        y: -120,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const [a, b, c, d] = items;

  return (
    <section ref={ref} className="container vh-features">
      <div className="vh-features-left">
        <div className="vh-features-head">
          <TextUpScroll className="vh-features-title cond" text={title} />
          <p className="vh-features-text">{text}</p>
        </div>
        {b && <Feature {...b} />}
        {d && <Feature {...d} />}
      </div>
      <div className="vh-features-right">
        {a && <Feature {...a} />}
        {c && <Feature {...c} />}
      </div>
    </section>
  );
}

export default VehicleFeatures;
