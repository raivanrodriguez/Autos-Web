import { useTextUP } from "../Hooks/useTextUP";

const words = ["Elegancia", "Velocidad", "Potencia"];

function Video() {
  const ref = useTextUP();

  return (
    <section ref={ref} className="video-hero">
      <div className="video-sticky">
        <video className="video-bg" src="/Videos/video.mp4" autoPlay muted loop playsInline preload="metadata" />
        <div className="video-shade" />
        {words.map((w) => (
          <h2 key={w} className="video-text">{w}</h2>
        ))}
      </div>
    </section>
  );
}

export default Video;
