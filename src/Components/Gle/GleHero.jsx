import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../TextReveal";

gsap.registerPlugin(ScrollTrigger);

// Imagen a pantalla completa con degradé oscuro y titular abajo a la izquierda
function GleHero({ eyebrow, title, img, letterbox }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gh-media img", { scale: 1.15 }, { scale: 1, duration: 2.4, ease: "power3.out" });
      gsap.from(".gh-eyebrow", { y: 16, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.to(".gh-media", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(".gh-copy", {
        yPercent: -40,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "60% top", scrub: true }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={ref} className="gh">
      <div className={`gh-media ${letterbox ? "is-letterbox" : ""}`}>
        <img src={img} alt="" />
      </div>
      <div className="gh-shade" />
      <div className="container gh-copy">
        <p className="gh-eyebrow">{eyebrow}</p>
        <TextReveal as="h1" className="gh-title cond" text={title} delay={400} />
      </div>
    </section>
  );
}

export default GleHero;
