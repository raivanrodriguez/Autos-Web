// Catálogo de vehículos. Cada uno alimenta la página /vehiculos/:slug.
// Solo hace falta definir lo propio de cada auto; lo que falte se completa
// con textos e imágenes por defecto en buildVehicle().

// Imágenes de ejemplo de Unsplash: reemplázalas por las tuyas cuando quieras
export const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const pool = {
  headlight: unsplash("1554744512-d6c603f27c54"),
  steering: unsplash("1449965408869-eaa3f722e40d"),
  studio: unsplash("1485291571150-772bcfc10da5"),
  star: unsplash("1563694983011-6f4d90358083"),
  garage: unsplash("1590362891991-f776e747a588"),
  tunnel: unsplash("1533106418989-88406c7cc8ca"),
  silver: unsplash("1616788494672-ec7ca25fdda9"),
  darkFront: unsplash("1617654112368-307921291f42"),
  road: unsplash("1503736334956-4c8f8e92946d"),
  sunset: unsplash("1494905998402-395d579af36f")
};

function buildVehicle(v) {
  const full = `${v.brand} ${v.name}`;
  const img = v.img;
  return {
    hero: { subtitle: `El nuevo ${full}.`, title: v.claim, img },
    intro: `Bienvenido a un mundo de confort generoso y artesanía refinada. Con tecnología inteligente y una presencia imponente, cada viaje en el ${v.name} se convierte en una experiencia de calma y sofisticación.`,
    expand: { title: "Una nueva dimensión de refinamiento.", img: v.gallery?.[0] ?? img },
    features: {
      title: "Entra en un mundo de exclusividad artesanal.",
      text: `El ${full} abre un mundo donde la presencia se siente natural y el confort, completo. Espacio excepcional y una atención exquisita al detalle.`,
      items: [
        { title: "Faros con firma de luz.", text: "Una firma luminosa reconocible a cualquier distancia, de día y de noche.", img: pool.headlight },
        { title: "Un puesto de mando pensado para ti.", text: "Volante, pantallas y mandos se ordenan alrededor del conductor.", img: pool.steering },
        { title: "Una ceremonia de bienvenida.", text: "Antes de empezar el viaje, la luz marca el tono y te recibe con elegancia.", img: pool.studio },
        { title: "Un mundo interior más silencioso.", text: "Mayor aislamiento acústico para conversar, escuchar música o simplemente descansar.", img: pool.garage }
      ]
    },
    outline: {
      words: ["Más allá", "de todo."],
      title: "Primera clase, en cada asiento.",
      img: pool.darkFront,
      hotspots: [
        { label: "Bienestar", title: "Bienestar que restaura.", text: "Nuevas funciones de masaje y climatización llevan el confort de los asientos traseros a otro nivel." },
        { label: "Sonido", title: "Sonido envolvente.", text: "Un sistema de audio de alta fidelidad con altavoces distribuidos por todo el habitáculo." },
        { label: "Luz", title: "Luz ambiental.", text: "64 colores para adaptar el ambiente a cada momento del viaje." }
      ]
    },
    arch: { outline: "Un sentido", fill: "de ocasión.", img: v.gallery?.[1] ?? pool.silver },
    gallery: v.gallery ?? [pool.road, pool.sunset],
    split: {
      img: pool.star,
      items: [
        { img: pool.tunnel, text: "Diseño que se reconoce al primer vistazo." },
        { img: v.gallery?.[0] ?? pool.silver, text: "Entra en un mundo de exclusividad, donde la artesanía define cada detalle." },
        { img: pool.studio, text: "Materiales nobles y acabados hechos a mano." }
      ]
    },
    closing: `El ${full} une tres mundos: un exterior refinado, un interior artesanal y una experiencia de conducción excepcional. Una invitación a mirar más de cerca y a entrar en un cosmos propio.`,
    explore: { title: "Explora más allá.", img: v.gallery?.[1] ?? pool.road },
    ...v
  };
}

export const vehicles = [
  buildVehicle({
    slug: "mercedes-amg-gt",
    brand: "Mercedes-AMG",
    name: "GT R",
    kicker: "Vehículos",
    teaser: "Un cosmos propio: el nuevo Mercedes-AMG GT.",
    claim: "Un cosmos propio.",
    img: unsplash("1618843479313-40f8afb4b4d8"),
    gallery: [unsplash("1616788494672-ec7ca25fdda9"), unsplash("1583267746897-2cf415887172")]
  }),
  buildVehicle({
    slug: "mercedes-clase-g",
    brand: "Mercedes-Benz",
    name: "Clase G",
    kicker: "Vehículos",
    teaser: "El nuevo Clase G.",
    claim: "Hecho para cualquier camino.",
    img: unsplash("1520031441872-265e4ff70366"),
    gallery: [unsplash("1590362891991-f776e747a588"), unsplash("1533473359331-0135ef1b58bf")]
  }),
  buildVehicle({
    slug: "mercedes-amg-gt-rojo",
    brand: "Mercedes-AMG",
    name: "GT C",
    kicker: "Diseño",
    teaser: "Rojo intenso, alma AMG.",
    claim: "Rojo intenso, alma AMG.",
    img: unsplash("1553440569-bcc63803a83d"),
    gallery: [unsplash("1554744512-d6c603f27c54"), unsplash("1494905998402-395d579af36f")]
  }),
  buildVehicle({
    slug: "mercedes-amg-gt-monaco",
    brand: "Mercedes-AMG",
    name: "GT Black Series",
    kicker: "Vehículos",
    teaser: "AMG GT en Mónaco.",
    claim: "Noches en Mónaco.",
    img: unsplash("1617814076367-b759c7d7e738"),
    gallery: [unsplash("1485291571150-772bcfc10da5"), unsplash("1533106418989-88406c7cc8ca")]
  }),
  buildVehicle({
    slug: "mercedes-amg-c63",
    brand: "Mercedes-AMG",
    name: "C 63",
    kicker: "Innovación",
    teaser: "La parrilla Panamericana.",
    claim: "La parrilla que lo dice todo.",
    img: unsplash("1514316454349-750a7fd3da3a"),
    gallery: [unsplash("1563694983011-6f4d90358083"), unsplash("1590362891991-f776e747a588")]
  }),
  buildVehicle({
    slug: "mercedes-amg-gt-s",
    brand: "Mercedes-AMG",
    name: "GT S",
    kicker: "Vehículos",
    teaser: "Amarillo solar: AMG GT S.",
    claim: "Amarillo solar.",
    img: unsplash("1605559424843-9e4c228bf1c2"),
    gallery: [unsplash("1616788494672-ec7ca25fdda9"), unsplash("1503736334956-4c8f8e92946d")]
  }),
  buildVehicle({
    slug: "lamborghini-huracan-sto",
    brand: "Lamborghini",
    name: "Huracán STO",
    kicker: "Deportivos",
    teaser: "Precisión de pista, alma de calle.",
    claim: "Donde empieza la pista.",
    img: "/Auto/Lambor/2.png",
    letterbox: true, // la foto trae franjas negras arriba y abajo
    gallery: [unsplash("1580414057403-c5f451f30e1c"), unsplash("1532581140115-3e355d1ed1de")]
  }),
  buildVehicle({
    slug: "bugatti-chiron",
    brand: "Bugatti",
    name: "Chiron",
    kicker: "Hypercars",
    teaser: "1.500 CV de ingeniería sin concesiones.",
    claim: "Más allá del límite.",
    img: "/Auto/bugati/spoiler 2/frame_011.png",
    gallery: [unsplash("1544636331-e26879cd4d9b"), unsplash("1600712242805-5f78671b24da")]
  }),
  buildVehicle({
    slug: "porsche-taycan",
    brand: "Porsche",
    name: "Taycan Cross Turismo",
    kicker: "Eléctricos",
    teaser: "Eléctrico, versátil y listo para cualquier terreno.",
    claim: "Sin límites de terreno.",
    img: "/Auto/porshe/frame_010.png",
    gallery: [unsplash("1503376780353-7e6692767b70"), unsplash("1614162692292-7ac56d7f7f1e")]
  })
];

export const getVehicle = (slug) => vehicles.find((v) => v.slug === slug);
