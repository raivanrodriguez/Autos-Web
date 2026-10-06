import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Telón: la imagen se descubre de abajo hacia arriba al entrar en pantalla
export function useTelonReveal(selector) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((el) => {
        const mask = el.querySelector(".reveal-mask");
        const img = mask.querySelector("img");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 45%", scrub: 1 }
        });
        tl.fromTo(mask, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0)
          .fromTo(img, { scale: 1.25 }, { scale: 1, ease: "none" }, 0);
      });
    });

    return () => ctx.revert();
  }, [selector]);
}
