 import "./style.css"

 
 function Barra(){
    return(
        <header className="Barra-inicia">
        
        <div className="container">
         <img  src="/logo.svg" alt="" />
          
          <div className="timehora">
          <span> 01</span> D :
          <span> 05</span> H :
          <span> 28</span> M :
          <span> 40</span> S :
          </div> 

          <button>ASSINE AGORA</button>
     </div>   
     </header>
    )

 }
 export default Barra