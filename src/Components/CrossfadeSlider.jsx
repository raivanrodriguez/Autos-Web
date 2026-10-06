import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TextUpScroll from "./TextUpScroll";

const KNOB = 70; // diámetro del círculo que se arrastra (px), igual que en el CSS
const clamp = (v) => Math.min(1, Math.max(0, v));

// Dos imágenes superpuestas: al arrastrar el círculo, la segunda aparece en fundido.
// a / b: { label, img }. Funciona con mouse, touch y teclado (flechas, Inicio, Fin).
function CrossfadeSlider({ title, a, b, hint = "Arrastra para interactuar" }) {
  const [value, setValue] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef();
  const tween = useRef();
  const proxy = useRef({ v: 0 });

  useEffect(() => () => tween.current?.kill(), []);

  const set = (v) => {
    tween.current?.kill();
    proxy.current.v = clamp(v);
    setValue(proxy.current.v);
  };

  // Animación suave al hacer click en una versión o al pulsar Inicio/Fin
  const animateTo = (target) => {
    tween.current?.kill();
    tween.current = gsap.to(proxy.current, {
      v: target,
      duration: 0.9,
      ease: "power2.inOut",
      onUpdate: () => setValue(proxy.current.v)
    });
  };

  const valueFromPointer = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    return (clientX - r.left - KNOB / 2) / (r.width - KNOB);
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    set(valueFromPointer(e.clientX));
  };
  const onPointerMove = (e) => dragging && set(valueFromPointer(e.clientX));
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (e) => {
    const keys = { ArrowRight: value + 0.1, ArrowUp: value + 0.1, ArrowLeft: value - 0.1, ArrowDown: value - 0.1 };
    if (e.key in keys) { e.preventDefault(); set(keys[e.key]); }
    if (e.key === "Home") { e.preventDefault(); animateTo(0); }
    if (e.key === "End") { e.preventDefault(); animateTo(1); }
  };

  return (
    <section className="xf" style={{ "--v": value }}>
      <div className="xf-media">
        <img src={a.img} alt={a.label} />
        <img src={b.img} alt={b.label} style={{ opacity: value }} />
      </div>
      <div className="xf-shade" />

      <div className="container xf-overlay">
        <TextUpScroll className="xf-title cond" text={title} />

        <div className="xf-controls">
          <div
            ref={trackRef}
            className={`xf-track ${dragging ? "is-dragging" : ""}`}
            role="slider"
            tabIndex={0}
            aria-label={`Cambiar entre ${a.label} y ${b.label}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value * 100)}
            aria-valuetext={value < 0.5 ? a.label : b.label}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKeyDown}
          >
            <span className="xf-dots" />
            <span className="xf-fill" />
            <span className="xf-end" />
            <span className="xf-knob" />
          </div>

          <div className="xf-labels">
            <button className={value < 0.5 ? "is-active" : ""} onClick={() => animateTo(0)}>{a.label}</button>
            <button className={value >= 0.5 ? "is-active" : ""} onClick={() => animateTo(1)}>{b.label}</button>
          </div>
          <p className="xf-hint">{hint}</p>
        </div>
      </div>
    </section>
  );
}

export default CrossfadeSlider;
