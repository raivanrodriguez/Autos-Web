import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Video from "./Components/Video";
import CanvasSequence from "./Components/CanvaSequence";
import Footer from "./Components/Footer";
import SectionMercedes from "./Sections/SectionMercedes";
import SectionModels from "./Sections/SectionModels";
import SectionPainting from "./Sections/SectionPainting";
import SectionZoom from "./Sections/SectionZoom";
import SectionFollow from "./Sections/SectionFollow";

function App() {
  return (
    <>
      <Header />
      <main>
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
        <SectionModels />
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
      </main>
      <SectionFollow />
      <Footer />
    </>
  );
}

export default App;
