import Barra from "./component/Barra-inicial"
import Page from "./component/funcionalidade"
import Pages from "./component/serviços"
import Coment from "./component/comentario"
import Foote from "./component/faq"

import { useState, useEffect } from "react"


function App() {
  
  const [ativacor, setAtivacor] = useState(false)

    useEffect(function(){

        function posicaoScroll(){
        
            if(window.scrollY > 10){
                setAtivacor(true)
            }else{
               setAtivacor(false)
            }
         }
        
         window.addEventListener("scroll", posicaoScroll)
         
         
    },[])

  return (
    <div className="App">
      <Barra acao={ativacor}/>
      <Page />
      <Pages />
      <Coment />
      <Foote />
    </div>
  )
}

export default App
