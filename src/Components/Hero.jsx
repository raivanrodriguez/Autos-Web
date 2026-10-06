import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Enciende los faros: fundido entre las dos fotos
      gsap.to(".hero-img-on", { opacity: 1, duration: 1.4, delay: 1.2, ease: "power2.inOut" });

      gsap.from(".hero-fade", { y: 24, opacity: 0, duration: 1, stagger: 0.12, delay: 0.6, ease: "power3.out" });

      // Parallax suave al salir del hero
      gsap.to(".hero-media", {
        yPercent: 18,
        scale: 1.05,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={ref} className="hero">
      <div className="hero-media">
        <img src="/Auto/Lambor/1.png" className="hero-img" alt="Lamborghini Huracán STO de frente en un estudio" />
        <img src="/Auto/Lambor/2.png" className="hero-img hero-img-on" alt="" aria-hidden="true" />
      </div>
      <div className="hero-shade" />

      <div className="hero-content container">
        <p className="eyebrow hero-fade">Lamborghini Huracán STO</p>
        <TextReveal text="Precisión de pista. Alma de calle." className="hero-title" />
        <p className="hero-sub hero-fade">640 CV, aerodinámica de competición y un diseño que no pide permiso.</p>
        <div className="btn-row hero-fade">
          <a href="#modelos" className="btn btn-primary">Descubrir modelos</a>
          <a href="#servicios" className="btn btn-ghost">Reservar prueba de manejo</a>
        </div>
      </div>

      <a href="#modelos" className="scroll-cue" aria-label="Bajar a modelos">
        <span />
      </a>
    </section>
  );
}

export default Hero;
