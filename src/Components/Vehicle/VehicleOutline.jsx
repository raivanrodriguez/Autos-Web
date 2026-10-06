import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1) Texto gigante solo con contorno que sube línea por línea mientras la sección queda fija
// 2) Imagen a pantalla completa con puntos que cambian el texto al hacer click
function VehicleOutline({ words, title, img, hotspots }) {
  const ref = useRef();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: ".vh-outline", start: "top top", end: "+=120%", scrub: 1, pin: true }
      })
        .fromTo(".vh-outline-line span", { yPercent: 110 }, { yPercent: 0, stagger: 0.35, ease: "power2.out" })
        .to(".vh-outline-line span", { yPercent: -110, stagger: 0.2, ease: "power2.in" }, "+=0.4");

      gsap.fromTo(".vh-interior img", { scale: 1.15 }, {
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: ".vh-interior", start: "top bottom", end: "top top", scrub: true }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const spot = hotspots[active];

  return (
    <div ref={ref}>
      <section className="vh-outline">
        <h2 className="vh-outline-text cond" aria-label={words.join(" ")}>
          {words.map((w) => (
            <span key={w} className="vh-outline-line" aria-hidden="true"><span>{w}</span></span>
          ))}
        </h2>
      </section>

      <section className="vh-interior">
        <img src={img} alt="" loading="lazy" />
        <div className="vh-interior-shade" />
        <div className="container vh-interior-copy">
          <h2 className="vh-interior-title cond">{title}</h2>
          <div className="vh-hotspots" role="tablist">
            {hotspots.map((h, i) => (
              <button
                key={h.label}
                role="tab"
                aria-selected={i === active}
                aria-label={h.label}
                className={`vh-hotspot ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div key={active} className="vh-hotspot-text">
            <p className="vh-hotspot-title">{spot.title}</p>
            <p>{spot.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VehicleOutline;
