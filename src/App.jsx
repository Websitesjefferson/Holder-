import {Startbar} from "./pages/Startbar"
import {Functionality} from "./pages/Functionality"
import {Services} from "./pages/services"
import {Comments} from "./pages/Comments"
import {Finalslash} from "./pages/finalslash"

import { useState, useEffect } from "react"
 

function App() {
  
  const [ativacor, setAtivacor] = useState(false)
  const [ativascroll, setAtivascroll] = useState(false)
  const scroll = window.scrollY

    useEffect(()=> {

      function posicaoScroll(){
        
          if(window.scrollY > 10){
              setAtivacor(true)
         }else{
             setAtivacor(false)
          }
       }
        
      window.addEventListener("scroll", posicaoScroll)

         
         function positionScroll(){
        
          if(window.scrollY > 1600){
              setAtivascroll(true)
              
          }else{ 
             setAtivascroll(false)
             
          }
       }
      
       window.addEventListener("scroll", positionScroll)
     
         
         
    },[])

  return (
    <div className="App">
      <Startbar />
      <Functionality  />
      <Services />
      <Comments />
      <Finalslash onscroll={ativascroll}/>
    </div>
  )
}

export default App
