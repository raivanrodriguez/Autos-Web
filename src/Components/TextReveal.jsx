import { useEffect, useMemo, useRef } from "react";

// Revela palabra por palabra al montar (para el hero, sin scroll)
function TextReveal({ text, className = "", as: Tag = "h1", delay = 300 }) {
  const ref = useRef();
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".word");
    const timers = [...elements].map((el, i) =>
      setTimeout(() => el.classList.add("visible"), delay + i * 90)
    );
    return () => timers.forEach(clearTimeout);
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word-wrapper">
          <span className="word">{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}

export default TextReveal;
