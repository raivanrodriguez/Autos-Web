import { useRef } from "react";
import { useCanvasAnimation } from "../Hooks/UseCanvas";

// Secuencia de frames controlada por scroll, a pantalla completa, con texto superpuesto
function CanvasSequence({ framePath, frameCount = 30, eyebrow, title, text, align = "left" }) {
  const canvasRef = useRef();
  const triggerRef = useRef();

  useCanvasAnimation({ canvasRef, triggerRef, framePath, frameCount });

  return (
    <section ref={triggerRef} className={`sequence sequence-${align}`}>
      <canvas ref={canvasRef} className="sequence-canvas" />
      <div className="sequence-shade" />
      {title && (
        <div className="sequence-copy container">
          <div className="sequence-copy-inner">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="sequence-title cond">{title}</h2>
            {text && <p className="sequence-text">{text}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

export default CanvasSequence;
