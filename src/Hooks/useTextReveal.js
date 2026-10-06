import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useTextReveal(selector) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(selector,
        { y: "1.2em", opacity: 0 },
        {
          y: "0em",
          opacity: 1,
          stagger: 0.005,
          duration: 0.5,
          ease: "power0.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 85%",
          },
        }
      );

    });

    return () => ctx.revert();
  }, [selector]);
}