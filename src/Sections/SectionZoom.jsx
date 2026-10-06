
import Zoomin from "../Components/Zoomin";
import TextUpScroll from "../Components/TextUpScroll";
import TextUp from "../Components/TextUP";


function SectionZoom() {
  return (
   <section >
        
           
        <div className="cardiz">
        <div className="hover-inner">
            <Zoomin img="https://images.unsplash.com/photo-1553440569-bcc63803a83d"/>
            
              <TextUpScroll className="texto-up" text="El Mercedes AMG redefine el rendimiento moderno afsdfas afsdfsf sfsfs sdfsfsf sfsfsd sdfsdf fsfsdvvvfdva vfdvfsvsdvff" />
            
       
        </div></div>
        <div className="carder">
              <TextUpScroll className="texto-up" text="El Mercedes AMG redefine el rendimiento moderno afsdfas afsdfsf sfsfs sdfsfsf sfsfsd sdfsdf fsfsd  vsdfvsvsdvff" />
              
            </div>
            <div className="carder hover-card">
           
          <img src="https://images.unsplash.com/photo-1583267746897-2cf415887172" />
          
        </div>
        
      </section>
  );
}

export default SectionZoom;