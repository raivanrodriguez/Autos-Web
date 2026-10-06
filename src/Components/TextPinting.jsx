import { useMemo } from "react";
import { useTextPinting } from "../Hooks/useTextPinting";

// Se divide por palabras (no por letras) para no generar cientos de spans
const TextPinting = ({ text }) => {
  const ref = useTextPinting();
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <p ref={ref} className="text-pinting">
      {words.map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </p>
  );
};

export default TextPinting;
