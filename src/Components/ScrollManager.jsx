import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Al cambiar de ruta: vuelve arriba, o baja hasta el #ancla si la URL trae una.
// Después recalcula los ScrollTrigger porque la página nueva tiene otra altura.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      const target = hash && document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 120);

    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
