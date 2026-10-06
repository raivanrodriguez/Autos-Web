// components/RevealImage.jsx
function RevealImage({ src, direction = "up" }) {
  return (
    <div className={`reveal-card2 ${direction}`}>
      <div className="reveal-mask2">
        <img src={src} />
      </div>
    </div>
  );
}

export default RevealImage;