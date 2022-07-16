import logocon from '../Imagens/vector60-6907-01.jpg'
import Logoinv from '../Imagens/8432.jpg';
import {GiFullPizza} from 'react-icons/Gi';

import './style.css'

function Pages(){
    return(
        <div className='conteiner' >
           <div>
            <h2>Funsionalidade Holder+ PREMIUM</h2>
           </div> 
           
         <nav className="serviços">
            <article>
               <div><img src={logocon} alt="Controle" /></div>

               <h2>PREMIUM</h2>

               <p>Diversos gráficos para lhe auxiliar no acompanhamento e gerenciamento da sua carteira patrimonial!</p>
            </article>
            <article>
               <div><img src={Logoinv} alt="" /></div>

               <h2>PATRIMÔNIO CONSOLIDADO</h2>

               <p>Tenha todod seus investimentos consolidado em uma só carteira. somos a plataforma que oferece o maio leque de aplicação finaceira de mercado!</p>
            </article>

            <article>
               <div><img src="/pizza2-1447860.svg" alt="" /></div>

               <h2>REBALANCIAMENTO</h2>

               <p>Ferramenta inédita para não deixar as emoções do mercado abalarem sua estratégia de investimento com rebalanciamento voçê poderá atribuir uma nota ou porcetagem ideal cada classe e ativo.</p>
            </article>
        </nav>
           
        </div>
    )

}
export default Pages