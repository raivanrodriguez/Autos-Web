import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fotos a pantalla completa con parallax interno
function VehicleGallery({ images }) {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".vh-gallery-item").forEach((el) => {
        gsap.fromTo(el.querySelector("img"), { yPercent: -12 }, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="vh-gallery">
      {images.map((src) => (
        <div key={src} className="vh-gallery-item">
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </section>
  );
}

export default VehicleGallery;
