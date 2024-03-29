
import { Container } from './styles';
import { MdNavigateBefore } from 'react-icons/Md';
import { MdNavigateNext } from 'react-icons/Md';
import { useState } from "react";
import { Button } from "../../componets/Button";

export function Comments() {
    const [scrollx, setScrollx] = useState(0)

    const liste = [1, 2, 3, 4, 5, 6, 7,]
    function arrowleft() {
        let x = scrollx + 280
        if (x > 20) {
            x = 0
        }
        setScrollx(x)


    }
    function arrowright() {
        let x = scrollx - 280
        let lest = liste.length * 330;
        if ((window.innerWidth - lest) > x) {
            x = (window.innerWidth - lest)
        }
        setScrollx(x)
    }

    return (

        <Container id='container' >
            <main>
                <h1>Veja o que as pessoas falam da Holder+</h1>

                <div className="columncomments">
                 
                 <div className='containerh3'>
                    <h3>
                        Veja o que os usuários da Holder+ acham da plataforma!
                        Experimente você também!
                    </h3>
                </div>
                    <div className="row-left" onClick={arrowleft} >
                        <MdNavigateBefore />
                    </div>
                    <div className="row-right" onClick={arrowright}>
                        <MdNavigateNext />
                    </div>

                    <div className="comments" style={{ marginLeft: scrollx }}>

                        <div className="cards" >
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Sebastião David
                            </h4>
                            <h6>
                                Cadastrei um ativo, porém não encontrei a forma de exclui-lo,
                                como posso executar este procedimento? Obrigado.

                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Pietro Hummel
                            </h4>
                            <h6>
                                Estou adorando! Principalmente a possibilidade de
                                cadastrar produtos internacionais na minha carteira
                                e a área de rebalanceamento... Ainda existem alguns bugs,
                                normal para versão beta, mas mesmo assim a plataforma está
                                excelente! Obs.: Na área da carteira as rentabilidades dos ativos,
                                quando negativas estão erradas, ao invés de aparecer -5% aparece
                                -0,05% e também na área de cadastro de ativos quando você edita uma
                                ação, por exemplo, ela apaga e some

                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Ana Gabriela Rosler

                            </h4>
                            <h6>


                                Mesmo em uma versão BETA, é uma plataforma muito boa com recursos que quase não encontramos em outros sites!



                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Giuliana Giordani Braun
                            </h4>
                            <h6>
                                Plataforma super completa, amei, pena que faltam alguns ativos
                                e a renda fixa
                            </h6>




                        </div>

                        <div className="cards" >
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Sebastião David
                            </h4>
                            <h6>
                                Cadastrei um ativo, porém não encontrei a forma de exclui-lo,
                                como posso executar este procedimento? Obrigado.

                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Pietro Hummel
                            </h4>
                            <h6>
                                Estou adorando! Principalmente a possibilidade de
                                cadastrar produtos internacionais na minha carteira
                                e a área de rebalanceamento... Ainda existem alguns bugs,
                                normal para versão beta, mas mesmo assim a plataforma está
                                excelente! Obs.: Na área da carteira as rentabilidades dos ativos,
                                quando negativas estão erradas, ao invés de aparecer -5% aparece
                                -0,05% e também na área de cadastro de ativos quando você edita uma
                                ação, por exemplo, ela apaga e some

                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Ana Gabriela Rosler

                            </h4>
                            <h6>


                                Mesmo em uma versão BETA, é uma plataforma muito boa com recursos que quase não encontramos em outros sites!



                            </h6>


                        </div>

                        <div className="cards">
                            <p><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
                            <h4>
                                Giuliana Giordani Braun
                            </h4>
                            <h6>
                                Plataforma super completa, amei, pena que faltam alguns ativos
                                e a renda fixa
                            </h6>




                        </div>


                    </div>


                </div>



                <div className="link"> <Button title="ACESSE JÁ" /> </div>

            </main>

        </Container>


    )
}
