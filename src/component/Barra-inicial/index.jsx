 import { useEffect } from "react"
import { useState } from "react"
import "./style.css"

 
 function Barra({acao}){

   const [totaltime, setTotaltime] = useState ( 60 * 60)
   
   
   const minuto = Math.floor(totaltime / 60)
   const seconds = totaltime % 60

   useEffect(() => {
  
    setTimeout(() => {
         setTotaltime(totaltime - 1) 

         if(totaltime <= 0){
            
         }
      }, 1000)
   }, [totaltime])
    return(
                 
        
        <aside className={acao ? 'ativacor' : ''}>
         
        
        <div id="container">
        <a href="#backtopbutton"><img  src="/logo.svg" alt="Logo holder+" /></a> 
          
          <div className="timehora">
          <span> 01</span> D :
          <span> 05</span> H :
          <span> {minuto.toString().padStart(2, "0")}</span> M :
          <span> {seconds.toString().padStart(2, "0")}</span> S 
          </div> 

          <a className="a" href="#conteine">ASSINE AGORA</a> 
     </div>
       
    
   
     
    </aside>
    )

 }
 export default Barra