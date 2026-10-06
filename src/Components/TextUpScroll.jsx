import { useMemo, useRef } from "react";
import { useTextUP2 } from "../Hooks/useTextUp2";

// Igual que TextReveal, pero se dispara al entrar en pantalla
function TextUpScroll({ text, className = "", as: Tag = "h2" }) {
  const ref = useRef();
  const words = useMemo(() => text.split(" "), [text]);

  useTextUP2(ref);

  return (
    <Tag className={className} ref={ref}>
      {words.map((word, i) => (
        <span key={i} className="word-wrapper">
          <span className="word">{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}

export default TextUpScroll;
