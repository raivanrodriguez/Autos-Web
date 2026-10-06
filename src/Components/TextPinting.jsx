import { useTextPinting } from "../Hooks/useTextPinting";
const TextPinting = ({ text }) => {
  const ref = useTextPinting();

  return (
    <p ref={ref} className="text-pinting">
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </p>
  );
};

export default TextPinting;