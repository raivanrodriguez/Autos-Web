
import { useEffect, useMemo, useRef } from "react";

function TextUp({ text }) {
  const ref = useRef();

  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".word");

    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 100); // 🔥 velocidad entre palabras
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

export default TextUp;