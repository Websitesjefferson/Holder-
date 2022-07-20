

import Logomode from "../Imagens/img.png"
import "./style.css"

function Page() {


    return (
        <main id="backtopbutton">
            <div className="main">
                <div className="container">
                    <div className="col-1">
                        <img src="/COMPRIMIDO.svg" alt="Computado com gráfico de investimento." />
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
            </div>
            
            <div className="section">


                <div className="col-3">
                    <h2>Chega de planilhas e métodos antigos.</h2>
                    <p>Faça como grandes investidores de sucesso, tenha acesso as melhores ferramentas do mercado!</p>
                </div>

                <div className="col-4">


                    <img className="img" src={Logomode} alt="Foto de rebalanceamento." />
                </div>

            </div>
            <div className="button">

                <a className="input" href="#conteine">ASSINE JÁ</a>

            </div>


        </main>
    )
}
export default Page;