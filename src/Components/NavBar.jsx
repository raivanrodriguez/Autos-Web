
export default function Navbar() {
  const items = ["Modelos", "Electricos", "AMG", "Servicios", "Concesionarios", "Contacto"];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <ul>
          {items.map((text, i) => (
            <li key={i} className="word3-wrapper">
              
              
              <a href="" className="nav-link"><span className="word3">{text}</span></a>
              
              
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}