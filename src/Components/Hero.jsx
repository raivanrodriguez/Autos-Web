import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Enciende los faros: fundido entre las dos fotos
      gsap.to(".hero-img-on", { opacity: 1, duration: 1.4, delay: 1.2, ease: "power2.inOut" });

      gsap.from(".hero-fade", { y: 24, opacity: 0, duration: 1, stagger: 0.12, delay: 0.7, ease: "power3.out" });

      // Parallax suave al salir del hero
      gsap.to(".hero-media", {
        yPercent: 18,
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
        <TextReveal text="El nuevo Huracán STO." className="hero-title cond" />
        <p className="hero-sub hero-fade">Donde empieza la pista.</p>
        <div className="btn-row hero-fade">
          <Link to="/vehiculos/lamborghini-huracan-sto" className="btn-pill">Más información</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
