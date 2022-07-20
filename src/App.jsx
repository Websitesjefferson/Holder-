import Barra from "./component/Barra-inicial"
import Page from "./component/funcionalidade"
import Pages from "./component/serviços"
import Coment from "./component/comentario"
import Foote from "./component/Barra-final"

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
      <Barra acao={ativacor}/>
      <Page  />
      <Pages />
      <Coment />
      <Foote onscroll={ativascroll}/>
    </div>
  )
}

export default App
