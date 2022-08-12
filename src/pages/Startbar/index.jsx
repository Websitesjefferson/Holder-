import { useEffect } from "react"
import { useState } from "react"
import { Container } from "./styles"

 
export function Startbar({acao}){

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
                 
        
        < Container >
         <main>
          <img  src="/logo.svg" alt="Logo holder+" />
          
          <div >
          <span> 01</span> D :
          <span> 05</span> H :
          <span> {minuto.toString().padStart(2, "0")}</span> M :
          <span> {seconds.toString().padStart(2, "0")}</span> S 
          </div> 

          <a href="#containercards">ASSINE AGORA</a> 

          
        </main>
       </Container>
    )

 }
 