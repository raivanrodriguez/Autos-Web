// Catálogo central: lo usan el header (mega menú) y la sección de modelos.
export const categories = [
  { id: "all", label: "Todos" },
  { id: "sport", label: "Deportivos" },
  { id: "hyper", label: "Hypercars" },
  { id: "electric", label: "Eléctricos" },
  { id: "classic", label: "Clásicos" }
];

export const models = [
  {
    id: "huracan",
    name: "Huracán STO",
    brand: "Lamborghini",
    category: "sport",
    img: "/Auto/Lambor/2.png",
    letterbox: true, // la foto trae franjas negras arriba y abajo
    tagline: "Nacido en la pista, homologado para la calle.",
    specs: [["640 CV", "Potencia"], ["3,0 s", "0–100 km/h"], ["310 km/h", "Vel. máx."]]
  },
  {
    id: "chiron",
    name: "Chiron",
    brand: "Bugatti",
    category: "hyper",
    img: "/Auto/bugati/spoiler 2/frame_011.png",
    tagline: "1.500 CV de ingeniería sin concesiones.",
    specs: [["1.500 CV", "Potencia"], ["2,4 s", "0–100 km/h"], ["420 km/h", "Vel. máx."]]
  },
  {
    id: "taycan",
    name: "Taycan Cross Turismo",
    brand: "Porsche",
    category: "electric",
    img: "/Auto/porshe/frame_010.png",
    tagline: "Eléctrico, versátil y listo para cualquier terreno.",
    specs: [["625 CV", "Potencia"], ["2,9 s", "0–100 km/h"], ["490 km", "Autonomía"]]
  },
  {
    id: "amg-gt",
    name: "AMG GT XX",
    brand: "Mercedes-AMG",
    category: "electric",
    img: "/Auto/amg/frame_004.png",
    tagline: "El concepto eléctrico de más de 1.000 CV.",
    specs: [["1.000+ CV", "Potencia"], ["< 2,0 s", "0–100 km/h"], ["360 km/h", "Vel. máx."]]
  },
  {
    id: "skyline",
    name: "Skyline GT-R R34",
    brand: "Nissan",
    category: "classic",
    img: "/Auto/skyline/frame_018.png",
    tagline: "Un ícono de la cultura JDM.",
    specs: [["280 CV", "Potencia"], ["4,9 s", "0–100 km/h"], ["RB26DETT", "Motor"]]
  }
];
