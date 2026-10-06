// hooks/useRevealUp.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTelonRevealDown(selector) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.utils.toArray(selector).forEach((el) => {
        const mask = el.querySelector(".reveal-mask");

        gsap.fromTo(mask,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, [selector]);
}