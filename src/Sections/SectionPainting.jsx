import TextPinting from "../Components/TextPinting";

// Manifiesto: el texto se "pinta" de gris a blanco con el scroll
function SectionPainting() {
  return (
    <section className="section statement">
      <div className="container statement-inner">
        <p className="eyebrow">Nuestra filosofía</p>
        <TextPinting text="Creemos que un auto es más que un medio de transporte. Es diseño que se siente, potencia que se escucha y tecnología que desaparece cuando conduces. Cada modelo de esta colección fue elegido por una razón: emocionar." />
      </div>
    </section>
  );
}

export default SectionPainting;
