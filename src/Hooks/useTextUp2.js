import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextUP2(ref) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const words = ref.current.querySelectorAll(".word");

      ScrollTrigger.create({

        trigger: ref.current,

        start: "top 85%",

        onEnter: () => {

          words.forEach((el, i) => {

            setTimeout(() => {

              el.classList.add("visible");

            }, i * 25);

          });

        }

      });

    }, ref);

    return () => ctx.revert();

  }, [ref]);

}