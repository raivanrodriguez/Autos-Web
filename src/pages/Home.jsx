import Hero from "../Components/Hero";
import Video from "../Components/Video";
import CanvasSequence from "../Components/CanvaSequence";
import SectionMercedes from "../Sections/SectionMercedes";
import SectionPainting from "../Sections/SectionPainting";
import SectionZoom from "../Sections/SectionZoom";

function Home() {
  return (
    <>
      <Hero />
      <SectionMercedes />
      <SectionZoom />
      <Video />
      <SectionPainting />
      <CanvasSequence
        framePath="/Auto/porshe/frame_"
        frameCount={19}
        eyebrow="Porsche Taycan Cross Turismo"
        title="Sin límites de terreno."
        text="Tracción integral eléctrica para llevar el rendimiento más allá del asfalto."
      />
      <CanvasSequence
        framePath="/Auto/bugati/spoiler 1/frame_"
        frameCount={17}
        eyebrow="Bugatti Chiron"
        title="Aerodinámica activa."
        text="El alerón trasero se despliega en milisegundos para mantener el auto pegado al asfalto."
      />
      <CanvasSequence
        framePath="/Auto/bugati/spoiler 2/frame_"
        frameCount={22}
        eyebrow="Modo Top Speed"
        title="Freno de aire."
        text="Al frenar, el alerón se inclina y actúa como un paracaídas a más de 400 km/h."
        align="right"
      />
    </>
  );
}

export default Home;
