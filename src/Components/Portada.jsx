import TextReveal from "./TextReveal";




function Portada(){
  
    return(
        <section className="hero-image">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" className="hero-img" />
        <div className="hero-overlay" />
        
      <h1 className="hero-title">
        
          
            <TextReveal text="The New Porshe GT3"/>
          
        
      </h1>
    
      </section>
    )
}
export default Portada;