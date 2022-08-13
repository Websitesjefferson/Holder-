

import { Button } from "../../componets/Button";
import { Container } from "./styles";

export function Functionality() {


    return (
        <Container>
            <div id="start" className="column-1" >
                <div>
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
            
            <div className="column-2">


                <div className="col-3">
                    <h2>Chega de planilhas e métodos antigos.</h2>
                    <p>Faça como grandes investidores de sucesso, tenha acesso as melhores ferramentas do mercado!</p>
                </div>

                <div className="col-4">


                <iframe width="560" height="315" src="https://www.youtube.com/embed/ehCADrnG71w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    
                </iframe>
                    

                </div>

            </div>
            
            
            <div className="link"><Button title="ASSINE JÁ" /></div>   

            


        </Container>
    )
}
