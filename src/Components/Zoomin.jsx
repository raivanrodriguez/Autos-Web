// components/HoverZoom.jsx

function Zoomin({ img, className = "" }) {
  return (
    <div className={`hover-inner ${className}`}>
      <div className="mask">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Zoomin;