import Portada from "./Components/Portada";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextReveal from "./Components/TextReveal"
import Video from "./Components/Video";
import SectionZoom from "./Sections/SectionZoom";
import SectionMercedes from "./Sections/SectionMercedes";
import SectionPainting from "./Sections/SectionPainting";
import CanvasSequence from "./Components/CanvaSequence";



function App(){
    return (
        <div>
            <section>
                <NavBar/>
             </section>
             <Portada/>
             <div className="spacer"></div>
             <Video/>
            
            <section >
                < SectionMercedes/>
              <SectionPainting/>
            
            </section>
            <CanvasSequence
            className="canvas-section"
            width={1920}
            height={800}
            framePath="/Auto/porshe/frame_"
            frameCount={19}
                 />
            <spacer/>
                       <CanvasSequence
                       className="frames"
              width={1920}
              height={1080}
              
              framePath="/Auto/bugati/spoiler 1/frame_"
              frameCount={17}
/>          <spacer/>
                     <CanvasSequence
                     className="frames"
              width={1920}
              height={1080}
              framePath="/Auto/bugati/spoiler 2/frame_"
              frameCount={22}
/>

            <section>
             <SectionZoom text="lorem ashdghasgdgadad"/>
            </section>
        </div>
      
)
}

export default App