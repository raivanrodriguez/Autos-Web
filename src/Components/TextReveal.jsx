
import { useEffect, useMemo, useRef } from "react";

function TextReveal({ text }) {
  const ref = useRef();

  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".word");

    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 100); 
    });

  }, []);

  return (
    <h1 ref={ref} className="texto-up">
      {words.map((word, i) => (
        <span key={i} className="word">
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}

export default TextReveal;



















/*import { useMemo } from "react";
import { useTextReveal } from "../hooks/useTextReveal";

function TextReveal({ text }) {

  // 🔥 dividimos el texto en letras
  const letters = useMemo(() => text.split(""), [text]);

  // 🔥 activamos GSAP sobre los spans
  useTextReveal(".char");

  return (
    <div className="caja-iz">
      <h1 className="texto-iz">
        {letters.map((char, i) => (
          <span key={i} className="char-wrapper">
            <span className="char">
            {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}

export default TextReveal;+*/