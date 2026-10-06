import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Las palabras entran y salen una tras otra mientras el video queda fijo
export const useTextUP = () => {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".video-text");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 1 }
      });

      items.forEach((el, i) => {
        tl.fromTo(el, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 });
        if (i < items.length - 1) {
          tl.to(el, { yPercent: -60, opacity: 0, duration: 1 }, "+=0.6");
        }
      });
      tl.to({}, { duration: 0.6 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};
