import { useRef } from "react";
import { useCanvasAnimation } from "../Hooks/UseCanvas";

function CanvasSequence({
  width = 1920,
  height = 1080,
  framePath,
  frameCount = 30,
  className = "",
}) {

  const canvasRef = useRef();
  const triggerRef = useRef();

  useCanvasAnimation({
    canvasRef,
    triggerRef,
    framePath,
    frameCount,
  });

  return (

    <section
      ref={triggerRef}
      
      className={`frames ${className}`}
      className={className}
      
    >

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />

    </section>

  );
}

export default CanvasSequence;