import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useCanvasAnimation({
  canvasRef,
  triggerRef,
  framePath,
  frameCount,
}) {
  useLayoutEffect(() => {
    if (!canvasRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const images = [];

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${framePath}${String(i).padStart(3, "0")}.png`;
        images.push(img);
      }

      const render = (frame) => {
        const img = images[frame];
        if (!img || !img.complete) return;

        // 🔥 mantener proporción
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight;

        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = img.width * (canvas.height / img.height);
        } else {
          drawWidth = canvas.width;
          drawHeight = img.height * (canvas.width / img.width);
        }

        const x = (canvas.width - drawWidth) / 2;
        const y = (canvas.height - drawHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, drawWidth, drawHeight);
      };

      let obj = { frame: 0 };

      gsap.to(obj, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=250",
          scrub: 1,
          pin: true,
        },
        onUpdate: () => render(Math.floor(obj.frame)),
      });

      images[0].onload = () => render(0);

    }, triggerRef);

    return () => ctx.revert();
  }, [canvasRef, triggerRef, framePath, frameCount]);
}