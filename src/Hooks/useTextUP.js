import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTextUP = () => {
  const ref = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.utils.toArray(".video-text").forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};