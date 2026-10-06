import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTextPinting = () => {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll("span"),
        { color: "#3a3a3a" },
        {
          color: "#ffffff",
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};
