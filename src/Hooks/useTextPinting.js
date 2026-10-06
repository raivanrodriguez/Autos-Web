import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTextPinting = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const chars = el.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { color: "#444" }, // 🔥 oscuro inicial
      {
        color: "#fff", // 🔥 blanco final
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return ref;
};