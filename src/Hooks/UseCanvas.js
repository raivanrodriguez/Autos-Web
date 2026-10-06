import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCanvasAnimation({ canvasRef, triggerRef, framePath, frameCount }) {
  useLayoutEffect(() => {
    if (!canvasRef.current || !triggerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const state = { frame: 0 };

    const images = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = `${framePath}${String(i + 1).padStart(3, "0")}.png`;
      return img;
    });

    // Dibuja el frame cubriendo todo el canvas (como object-fit: cover)
    const render = () => {
      const img = images[Math.round(state.frame)];
      if (!img || !img.complete || !img.naturalWidth) return;

      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    // Ajusta la resolución interna al tamaño real en pantalla
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      render();
    };

    images[0].onload = render;
    resize();
    window.addEventListener("resize", resize);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 0.5,
          pin: true
        }
      });

      tl.to(state, { frame: frameCount - 1, ease: "none", duration: 1, onUpdate: render }, 0)
        .fromTo(".sequence-copy-inner", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.15);
    }, triggerRef);

    return () => {
      window.removeEventListener("resize", resize);
      ctx.revert();
    };
  }, [canvasRef, triggerRef, framePath, frameCount]);
}
