import logocon from '../images/vector60-6907-01.jpg'
import Logoinv from '../images/8432.jpg';
import { RiAlertLine } from 'react-icons/Ri';
import { Container } from './styles';
import { useEffect, useState } from "react"

import useEmblaCarousel from 'embla-carousel-react'

export function Services() {
   const [emblaRef] = useEmblaCarousel()
   const [time, setTime] = useState(60 * 60)


   const minuto = Math.floor(time / 60)
   const seconds = time % 60

   useEffect(() => {
      setTimeout(() => {
         setTime(time - 1)

         if (time <= 0) {

         }
      }, 1000)
   }, [time])
   return (
     
         <Container >
             
           
               <h2>Funcionalidade Holder+ PREMIUM</h2>
           
             
             <div className='columncards-1'>
           
             <div className="embla" ref={emblaRef} >

             <div className="embla__container">

               <div className="embla__slide">
               
                  <div className='swipercards'>
                    <img src={logocon} alt="Controle" />

                     <h2>PREMIUM</h2>

                     <p>Diversos gráficos para lhe auxiliar no acompanhamento e gerenciamento da sua carteira patrimonial!</p>
                  </div>
               </div>

               <div className="embla__slide">
                  <div className='swipercards'>
                     <img src={Logoinv} alt="Controle de investimento" />

                     <h2>PATRIMÔNIO CONSOLIDADO</h2>

                     <p>Tenha todos seus investimentos consolidado em uma só carteira. somos a plataforma que oferece o maio leque de aplicação financeira de mercado!</p>
                  </div>
               </div>

               <div className="embla__slide">
                  <div className='swipercards'>
                     <img src="/pizza2-1447860.svg" alt="Rebalanciamento" />

                     <h2>REBALANCEAMENTO</h2>

                     <p> Ferramenta inédita para não deixar as emoções do 
                     mercado abalarem sua estratégia de investimento com rebalanceamento
                      você poderá atribuir uma nota ou porcentagem ideal cada classe e ativo.</p>
                  </div>
               </div>

               <div className="embla__slide">
                   <div className='swipercards'>
                    <img src={logocon} alt="Controle" />

                     <h2>PREMIUM</h2>

                     <p>Diversos gráficos para lhe auxiliar no acompanhamento e gerenciamento da sua carteira patrimonial!</p>
                  </div>
               </div>
                 
           
                 
                  
                  
                  </div>
                 </div>
            </div>

            <div id='containercards'>
               <h2 >VALOR DO INVESTIMENTO</h2>

               <div id="columncards-2">

                  <div className='cards'>
                     <h6></h6>

                     <button ><span> 20 % OFF</span> </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>9</strong>.78</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton'> QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='text'><RiAlertLine /> Esse valor vai até: 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minuto.toString().padStart(2, "0")}</span> M :
                        <span> {seconds.toString().padStart(2, "0")}</span> S
                     </ul>

                  </div>

                  <div className='cards'>
                     <h6></h6>

                     <button className='cardbutton'><span> 20 % OFF |</span>   <p>MELHOR <br />  OFERTA</p>  </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>16</strong>.72</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton' >QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='text'><RiAlertLine /> Esse valor vai até: 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minuto.toString().padStart(2, "0")}</span> M :
                        <span>{seconds.toString().padStart(2, "0")}</span> S
                     </ul>

                  </div>

                  <div className='cards'>
                     <h6></h6>

                     <button ><span>20 % OFF</span> </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>9</strong>.78</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton'>QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='text'><RiAlertLine />Esse valor vai até: 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minuto.toString().padStart(2, "0")}</span> M :
                        <span> {seconds.toString().padStart(2, "0")}</span> S
                     </ul>

                  </div>

               </div>
            </div>
         
         </Container>

      
   )

}
