import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// La foto se recoge hacia arriba y debajo aparece el texto pintándose palabra por palabra
function GleHybrid({ title, img, text }) {
  const ref = useRef();
  const words = useMemo(() => text.split(" "), [text]);

  useLayoutEffect(() => {
    const root = ref.current;
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: root, start: "top top", end: "+=200%", scrub: 1, pin: true }
      })
        .fromTo(".ghy-media", { clipPath: "inset(0% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 50% 0%)", ease: "power2.inOut", duration: 1 })
        .fromTo(".ghy-media img", { scale: 1.15 }, { scale: 1, duration: 1 }, 0)
        .to(".ghy-title", { yPercent: -70, ease: "power2.inOut", duration: 1 }, 0)
        .fromTo(".ghy-text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.6)
        .fromTo(root.querySelectorAll(".ghy-text span"), { color: "#3a3a3a" }, { color: "#ffffff", stagger: 0.04, duration: 0.3 }, 0.8);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="ghy">
      <div className="ghy-media">
        <img src={img} alt="" loading="lazy" />
        <div className="ghy-shade" />
      </div>
      <div className="container ghy-copy">
        <h2 className="ghy-title cond">{title}</h2>
        <p className="ghy-text cond">
          {words.map((w, i) => <span key={i}>{w} </span>)}
        </p>
      </div>
    </section>
  );
}

export default GleHybrid;
