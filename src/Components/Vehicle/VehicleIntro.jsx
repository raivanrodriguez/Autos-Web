import TextUpScroll from "../TextUpScroll";

// Párrafo de entrada grande, palabra por palabra
function VehicleIntro({ text }) {
  return (
    <section className="container vh-intro">
      <TextUpScroll as="p" className="vh-intro-text cond" text={text} />
    </section>
  );
}

export default VehicleIntro;
