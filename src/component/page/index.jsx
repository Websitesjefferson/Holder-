import Logo from "../Imagens/rentabilidade.png"
import Logoreba from "../Imagens/rebalanciamento.png"
import Logopatri from "../Imagens/patrimonio.png"
import Logomode from "../Imagens/modelagem.png"
import "./style.css"

function Page(){
    return(
        <div>
        <main>
            <div className="container">
            <div className="col-1">
                <img  src="/COMPRIMIDO.svg" alt="" />
            </div>

            <div className="col-2">
                <h2>
                    A melhor formar de acompanhar e gerenciar sua carteira de investimentos!
                </h2>

                <p>
                    Tenha acesso as melhores ferramentas do mercado: Rebalanciamento dos ativos, extratos completos das suas operações,
                    rentabilidade atualizada e MUITO mais!
                </p>
            </div>
            </div>
        </main>
        
        <section>
            
            
            <div className="col-3">
                <h2>Chega de planilhas e métodos antigos</h2>
                <p>Faça como grandes investidores de sucesso, tenha acesso as melhores ferramentas do mercado!</p>
             </div>
        
         <div className="col-4">
        
            <img src={Logo} alt="" />
            <img src={Logoreba} alt="" />
            <img src={Logopatri} alt="" />
            <img src={Logomode} alt="" />
         </div>
            
        </section>
          <div className="button">
          <input className="input" type="button" value="ASSINE JÁ" />
          </div>

          
    </div>
    )
}
export default Page;