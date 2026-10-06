import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Video from "./Components/Video";
import CanvasSequence from "./Components/CanvaSequence";
import Footer from "./Components/Footer";
import SectionModels from "./Sections/SectionModels";
import SectionPainting from "./Sections/SectionPainting";
import SectionHighlights from "./Sections/SectionHighlights";
import SectionZoom from "./Sections/SectionZoom";
import SectionServices from "./Sections/SectionServices";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionModels />
        <SectionPainting />
        <Video />
        <CanvasSequence
          framePath="/Auto/bugati/spoiler 1/frame_"
          frameCount={17}
          eyebrow="Bugatti Chiron"
          title="Aerodinámica activa."
          text="El alerón trasero se despliega en milisegundos para mantener el auto pegado al asfalto."
        />
        <SectionHighlights />
        <CanvasSequence
          framePath="/Auto/porshe/frame_"
          frameCount={19}
          eyebrow="Porsche Taycan Cross Turismo"
          title="Sin límites de terreno."
          text="Tracción integral eléctrica para llevar el rendimiento más allá del asfalto."
          align="right"
        />
        <SectionZoom />
        <SectionServices />
      </main>
      <Footer />
    </>
  );
}

export default App;
