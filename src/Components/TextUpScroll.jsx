import { useMemo,useRef } from "react";
import { useTextUP2 } from "../Hooks/useTextUp2";

function TextUpScroll({ text, className = ""  }) {
const ref = useRef();
  const words = useMemo(() => text.split(" "), [text]);

  useTextUP2(ref); // 🔥 igual que el otro hook

  return (
     <h1 className={className} ref={ref}>

  {words.map((word, i) => (

    <span key={i} className="word-wrapper">

      <span className="word">
        {word}&nbsp;
      </span>

    </span>

  ))}

</h1>
  );
}

export default TextUpScroll;