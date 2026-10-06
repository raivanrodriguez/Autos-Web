import TextPinting from "../TextPinting";

// Cierre: el texto se pinta de gris a negro con el scroll
function VehicleClosing({ text }) {
  return (
    <section className="container vh-closing">
      <TextPinting text={text} from="#c9c9c9" to="#000000" className="vh-closing-text cond" />
    </section>
  );
}

export default VehicleClosing;
