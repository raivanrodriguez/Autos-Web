import TextPinting from "../TextPinting";

// Párrafo grande que se pinta de gris a blanco con el scroll
function GleStatement({ text }) {
  return (
    <section className="container gs">
      <TextPinting text={text} from="#3a3a3a" to="#ffffff" className="gs-text cond" />
    </section>
  );
}

export default GleStatement;
