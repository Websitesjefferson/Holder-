import Barra from "./component/Barra-inicial"
import Page from "./component/funcionalidade"
import Pages from "./component/serviços"
import Coment from "./component/comentario"
import Foote from "./component/faq"

function App() {
  

  return (
    <div className="App">
      <Barra />
      <Page />
      <Pages />
      <Coment />
      <Foote />
    </div>
  )
}

export default App
