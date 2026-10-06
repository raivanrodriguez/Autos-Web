import { useMemo } from "react";
import { useTextPinting } from "../Hooks/useTextPinting";

// Se divide por palabras (no por letras) para no generar cientos de spans.
// from/to: colores inicial y final (por defecto gris oscuro → blanco, para fondo negro)
const TextPinting = ({ text, from = "#3a3a3a", to = "#ffffff", className = "" }) => {
  const ref = useTextPinting(from, to);
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <p ref={ref} className={`text-pinting ${className}`}>
      {words.map((word, i) => (
        <span key={i} style={{ color: from }}>{word} </span>
      ))}
    </p>
  );
};

export default TextPinting;
