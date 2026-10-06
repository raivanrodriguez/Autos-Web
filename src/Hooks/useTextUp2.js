import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextUP2(ref) {
  useLayoutEffect(() => {
    const timers = [];

    const ctx = gsap.context(() => {
      const words = ref.current.querySelectorAll(".word");

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          words.forEach((el, i) => {
            timers.push(setTimeout(() => el.classList.add("visible"), i * 40));
          });
        }
      });
    }, ref);

    return () => {
      timers.forEach(clearTimeout);
      ctx.revert();
    };
  }, [ref]);
}
