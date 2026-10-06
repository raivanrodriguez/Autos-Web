import { useTextUP } from "../Hooks/useTextUP";

function Video() {
  const ref = useTextUP();

  return (
    <section ref={ref} className="video-hero">

      {/* 🎥 VIDEO */}
      <video
        className="video-bg"
        src="/Videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🧠 TEXTO */}
      <div className="video-overlay">
        <h1 className="video-text">Elegancia</h1>
        <h1 className="video-text">Velocidad</h1>
        <h1 className="video-text">Potencia</h1>
      </div>

    </section>
  );
}

export default Video;