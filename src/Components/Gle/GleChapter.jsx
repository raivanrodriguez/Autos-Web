import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Capítulo: palabra gigante de contorno (y opcionalmente una palabra rellena encima),
// después las fotos entran una sobre otra desde abajo mientras la sección queda fija
function GleChapter({ word, fill, slides }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const root = ref.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top top", end: `+=${(slides.length + 2) * 90}%`, scrub: 1, pin: true }
      });

      tl.fromTo(".gc-outline", { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
      if (fill) {
        tl.fromTo(".gc-fill", { scale: 1.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
          .to(".gc-outline", { opacity: 0.35, duration: 0.6 }, "<");
      }
      tl.to(".gc-words", { opacity: 0, scale: 0.92, duration: 0.6 }, "+=0.3");

      // La primera foto entra mientras la palabra se desvanece (sin pantalla negra en medio)
      root.querySelectorAll(".gc-slide").forEach((slide, i) => {
        tl.fromTo(slide, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut", duration: 1 }, i === 0 ? "<0.1" : ">")
          .fromTo(slide.querySelector("img"), { scale: 1.3, yPercent: 10 }, { scale: 1, yPercent: 0, ease: "power2.out", duration: 1 }, "<");
      });
      tl.to({}, { duration: 0.4 });
    }, ref);
    return () => ctx.revert();
  }, [fill, slides.length]);

  return (
    <section ref={ref} className="gc">
      <div className="gc-words">
        <p className="gc-outline cond">{word}</p>
        {fill && <p className="gc-fill cond">{fill}</p>}
      </div>
      {slides.map((src) => (
        <div key={src} className="gc-slide">
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </section>
  );
}

export default GleChapter;
