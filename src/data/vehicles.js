// Catálogo de vehículos. Cada uno alimenta la página /vehiculos/:slug.
// Solo hace falta definir lo propio de cada auto; lo que falte se completa
// con textos e imágenes por defecto en buildVehicle().

import { asset } from "../utils/asset";

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
  sunset: unsplash("1494905998402-395d579af36f"),
  interior: unsplash("1610647752706-3bb12232b3ab"),
  taillights: unsplash("1493238792000-8113da705763"),
  night: unsplash("1536700503339-1e4b06520771"),
  gt2: unsplash("1580274455191-1c62238fa333"),
  rs7: unsplash("1616422285623-13ff0162193c"),
  r8: unsplash("1603584173870-7f23fdae1b7a"),
  camaro: unsplash("1492144534655-ae79c964c9d7")
};

// Contenido de la plantilla "gle" (inspirada en la página del Mercedes-Benz GLE)
function buildGle(v) {
  const [a, b] = v.variants ?? [
    { label: v.name, img: v.img },
    { label: `${v.name} Edition`, img: v.gallery?.[0] ?? pool.silver }
  ];
  const short = v.short ?? v.name;
  return {
    eyebrow: "Bienvenido a casa.",
    title: `El nuevo ${v.brand} ${v.name}.`,
    video: asset("/Videos/video.mp4"),
    statement: `Un ${v.name} con una apariencia sofisticada, un espacio generoso y detalles elegantes que mejoran cada viaje. Combina un diseño clásico con elementos modernos, en la forma y con la propulsión que elijas. Bienvenido a casa.`,
    crossfade: { title: `El ${short} llega como ${a.label} y ${b.label}.`, a, b },
    chapters: [
      {
        word: short,
        slides: [v.gallery?.[1] ?? pool.road, pool.interior, pool.sunset],
        features: {
          title: "Un tiempo de llegada a tu medida.",
          text: `El tiempo vuela dentro del nuevo ${v.name}. La combinación de diseño, artesanía y confort juega a tu favor.`,
          items: [
            { title: "Frontal iluminado.", text: "Un estilo sofisticado con parrilla de diseño propio y faros que no pasan desapercibidos.", img: pool.headlight },
            { title: "Pantalla panorámica.", text: "Tres pantallas integradas en un solo panel para información, navegación y entretenimiento.", img: pool.steering },
            { title: "Asientos multicontorno.", text: "Masaje, calefacción y ventilación para llegar descansado a cualquier destino.", img: pool.studio },
            { title: "Experiencia de conducción.", text: "Asistentes de última generación y una suspensión que se adapta a cada camino.", img: pool.camaro }
          ]
        }
      },
      {
        word: short,
        fill: b.label,
        slides: [b.img, pool.night],
        features: {
          title: "Presencia en movimiento.",
          text: `El ${b.label} combina un diseño expresivo y elegante con funciones innovadoras que llaman la atención allí donde va.`,
          items: [
            { title: "Diseño deportivo.", text: "Curvas marcadas y una silueta que transmite movimiento incluso detenido.", img: pool.r8 },
            { title: "Nueva zaga.", text: "Pilotos traseros rediseñados que subrayan su carácter deportivo.", img: pool.taillights },
            { title: "Interior confortable.", text: "Un habitáculo amplio con pantallas de pilar a pilar y materiales nobles.", img: pool.interior },
            { title: "Techo panorámico.", text: "Luz natural y aire fresco para una sensación de amplitud y ligereza.", img: pool.rs7 }
          ]
        }
      }
    ],
    pairs: [
      [pool.headlight, pool.gt2],
      [pool.steering, pool.interior],
      [pool.taillights, pool.star]
    ],
    tabs: {
      title: "El punto justo entre trabajo y hogar.",
      items: [
        { icon: "comfort", title: "Confort energizante.", text: "Siete programas de bienestar que combinan clima, masaje, luz ambiental y música.", img: pool.interior },
        { icon: "office", title: "Oficina móvil.", text: "Videollamadas, agenda y correo integrados para aprovechar cada trayecto.", img: pool.steering },
        { icon: "nav", title: "Navegación inteligente.", text: "Rutas en tiempo real con realidad aumentada y estaciones de carga en el mapa.", img: pool.night }
      ]
    },
    hybrid: {
      title: `El nuevo ${v.name}: también híbrido enchufable.`,
      img: v.gallery?.[1] ?? pool.road,
      text: `El ${v.name} está disponible como híbrido enchufable y, con la red pública de carga, tendrás acceso a miles de puntos para recargar donde estés.`
    },
    explore: {
      title: `Descubre más sobre el nuevo ${v.name} y su equipamiento.`,
      img: v.img
    }
  };
}

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
    gle: buildGle(v),
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
    short: "G",
    img: unsplash("1520031441872-265e4ff70366"),
    variants: [
      { label: "G 500", img: unsplash("1520031441872-265e4ff70366") },
      { label: "AMG G 63", img: unsplash("1590362891991-f776e747a588") }
    ],
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
    short: "GT",
    img: unsplash("1617814076367-b759c7d7e738"),
    variants: [
      { label: "Coupé", img: unsplash("1617814076367-b759c7d7e738") },
      { label: "Black Series", img: unsplash("1583267746897-2cf415887172") }
    ],
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
    short: "GT",
    img: unsplash("1605559424843-9e4c228bf1c2"),
    variants: [
      { label: "GT S", img: unsplash("1605559424843-9e4c228bf1c2") },
      { label: "GT R", img: unsplash("1618843479313-40f8afb4b4d8") }
    ],
    gallery: [unsplash("1616788494672-ec7ca25fdda9"), unsplash("1503736334956-4c8f8e92946d")]
  }),
  buildVehicle({
    slug: "lamborghini-huracan-sto",
    brand: "Lamborghini",
    name: "Huracán STO",
    kicker: "Deportivos",
    teaser: "Precisión de pista, alma de calle.",
    claim: "Donde empieza la pista.",
    img: asset("/Auto/Lambor/2.png"),
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
    img: asset("/Auto/bugati/spoiler 2/frame_011.png"),
    variants: [
      { label: "Chiron", img: unsplash("1544636331-e26879cd4d9b") },
      { label: "Chiron Sport", img: unsplash("1600712242805-5f78671b24da") }
    ],
    gallery: [unsplash("1544636331-e26879cd4d9b"), unsplash("1600712242805-5f78671b24da")]
  }),
  buildVehicle({
    slug: "porsche-taycan",
    brand: "Porsche",
    name: "Taycan Cross Turismo",
    kicker: "Eléctricos",
    teaser: "Eléctrico, versátil y listo para cualquier terreno.",
    claim: "Sin límites de terreno.",
    img: asset("/Auto/porshe/frame_010.png"),
    gallery: [unsplash("1503376780353-7e6692767b70"), unsplash("1614162692292-7ac56d7f7f1e")]
  })
];

// Las plantillas se alternan: posiciones pares → "maybach", impares → "gle".
// Para forzar una, define template: "maybach" | "gle" en el vehículo.
vehicles.forEach((v, i) => { v.template ??= i % 2 === 0 ? "maybach" : "gle"; });

export const getVehicle = (slug) => vehicles.find((v) => v.slug === slug);
