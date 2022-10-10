import { useEffect } from "react"
import { useState } from "react"
import { Container } from "./styles"

 
export function Startbar(){

   const [time, setTime] = useState ( 60 * 60)
   
   
   const minuto = Math.floor(time / 60)
   const seconds = time % 60

   useEffect(() => {
  
    setTimeout(() => {
         setTime(time - 1) 

         if(time <= 0){
            
         }
      }, 1000)
   }, [time])
    return(
                 
        
        < Container >
         <main>
            <a href="#start">
          <img  src="/logo.svg" alt="Logo holder+" />
           </a>
          <div >
          <span> 01</span> D :
          <span> 05</span> H :
          <span> {minuto.toString().padStart(2, "0")}</span> M :
          <span> {seconds.toString().padStart(2, "0")}</span> S 
          </div> 

          <a href="#containercards" className="button">ASSINE AGORA</a> 

          
        </main>
       </Container>
    )

 }
 