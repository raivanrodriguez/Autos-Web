import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import TextReveal from "../TextReveal";

// Imagen a pantalla completa que se funde en blanco + titular grande abajo
function VehicleHero({ vehicle }) {
  const ref = useRef();
  const { hero, brand, letterbox } = vehicle;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".vh-hero-media img", { scale: 1.12 }, { scale: 1, duration: 2.2, ease: "power3.out" });
      gsap.from(".vh-hero-sub", { y: 20, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.to(".vh-hero-media", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="top" ref={ref} className="vh-hero">
        <div className={`vh-hero-media ${letterbox ? "is-letterbox" : ""}`}>
          <img src={hero.img} alt={`${brand} ${vehicle.name}`} />
        </div>
        <div className="vh-hero-fade" />
        <div className="container vh-hero-copy">
          <p className="vh-hero-sub">{hero.subtitle}</p>
          <TextReveal as="h1" className="vh-hero-title cond" text={hero.title} delay={400} />
        </div>
      </section>

      <nav className="container breadcrumb" aria-label="Ruta">
        <Link to="/#mercedes">Vehículos</Link>
        <span aria-hidden="true">›</span>
        <span>{brand}</span>
      </nav>
    </>
  );
}

export default VehicleHero;
