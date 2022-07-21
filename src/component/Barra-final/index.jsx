import "./index.css"
import { MdNavigation} from 'react-icons/Md';


function Foote({ onscroll }) {
    return (
        <footer>
            


            <div className="content">

                <h1>7 DIAS SEM COMPROMISSO</h1>

                <h4>
                    Adquirindo um dos nossos planos, você nos auxilia no crecimento
                    e desenvolvimento desta plataforma, além de receber vantagens exclusivas!
                </h4>

                <p>
                    Comprando seu primeiro plano você garante ate 7  dias para experimentar,
                    podendo nesse período cancelar e pedir seu reembolso diretamente na plataforma,
                    sem complicações!
                </p>

            </div>

            <div className="textoh1"> <h1>FAQ</h1></div>

            <div className="conteinerinput">
                <a className="a" href="">Por que cobramos pelos serviços? </a>
                <a className="a" href="">Por que deveria contratar o plano premium?</a>
                <a className="a" href="">Posso ter uma conta conjunta? [Duas ou mais pessoas acessando a mesma conta.] </a>
                <a className="a" href="">Cancelei meu plano premium antes do vencimenta, serei prejudicado?" </a>
                <a className="a" href="">Como faça para cancelar minha assinatura?"</a>
                <a className="a" href="">Qual a garantia do plano premium?" </a>

            </div>
        

                <a className="scrollstart" href="#backtopbutton" id={onscroll ? 'button-show' : ''}>
                   <MdNavigation/>
                </a>

            

        </footer>
    )
}
export default Foote