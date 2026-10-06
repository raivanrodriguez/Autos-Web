import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fondo negro con patrón de estrellas; un video sube desde abajo y crece hasta llenar la pantalla
function GleVideoExpand({ video, poster }) {
  const ref = useRef();
  const videoRef = useRef();
  // Se sincroniza con los eventos del video (el navegador puede bloquear el autoplay)
  const [playing, setPlaying] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=170%", scrub: 1, pin: true }
      })
        .fromTo(".gv-media", { clipPath: "inset(82% 31% 0% 31%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut", duration: 1 })
        .fromTo(".gv-media video", { scale: 1.3 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
        .fromTo(".gv-toggle", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.8)
        .to({}, { duration: 0.3 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (v.paused) v.play(); else v.pause();
  };

  return (
    <section ref={ref} className="gv">
      <div className="gv-pattern" aria-hidden="true" />
      <div className="gv-media">
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button className="gv-toggle" onClick={toggle} aria-label={playing ? "Pausar video" : "Reproducir video"}>
          {playing
            ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z" /></svg>
            : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" /></svg>}
        </button>
      </div>
    </section>
  );
}

export default GleVideoExpand;
