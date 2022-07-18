import logocon from '../Imagens/vector60-6907-01.jpg'
import Logoinv from '../Imagens/8432.jpg';
import { RiAlertLine } from 'react-icons/Ri';

import { useEffect } from "react"
import { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import './cards.css'
import 'swiper/css';
import 'swiper/css/navigation';


function Pages() {

   const [totaltimes, setTotaltimes] = useState(60 * 60)


   const minutos = Math.floor(totaltimes / 60)
   const secondss = totaltimes % 60

   useEffect(() => {
      setTimeout(() => {
         setTotaltimes(totaltimes - 1)

         if (totaltimes <= 0) {

         }
      }, 1000)
   }, [totaltimes])
   return (
      <div>
         <header className='conteiner' >
            <div className='h2'>
               <h2>Funsionalidade Holder+ PREMIUM</h2>
            </div>
             
             <main className='swiper'>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={3}
            slidesPerView={[3] [1]}
            navigation>

               <SwiperSlide>
                  <div className='swipercards'>
                    <img src={logocon} alt="Controle" />

                     <h2>PREMIUM</h2>

                     <p>Diversos gráficos para lhe auxiliar no acompanhamento e gerenciamento da sua carteira patrimonial!</p>
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className='swipercards'>
                     <img src={Logoinv} alt="Controle de investimento" />

                     <h2>PATRIMÔNIO CONSOLIDADO</h2>

                     <p>Tenha todos seus investimentos consolidado em uma só carteira. somos a plataforma que oferece o maio leque de aplicação financeira de mercado!</p>
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className='swipercards'>
                     <img src="/pizza2-1447860.svg" alt="Rebalanciamento" />

                     <h2>REBALANCIAMENTO</h2>

                     <p> Ferramenta inédita para não deixar as emoções do 
                     mercado abalarem sua estratégia de investimento com rebalanceamento
                      você poderá atribuir uma nota ou porcentagem ideal cada classe e ativo.</p>
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className='swipercards'>
                    <img src={logocon} alt="Controle" />

                     <h2>PREMIUM</h2>

                     <p>Diversos gráficos para lhe auxiliar no acompanhamento e gerenciamento da sua carteira patrimonial!</p>
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className='swipercards'>
                     <img src={Logoinv} alt="Controle de investimento" />

                     <h2>PATRIMÔNIO CONSOLIDADO</h2>

                     <p>Tenha todos seus investimentos consolidado em uma só carteira. somos a plataforma que oferece o maio leque de aplicação financeira de mercado!</p>
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className='swipercards'>
                     <img src="/pizza2-1447860.svg" alt="Rebalanciamento" />

                     <h2>REBALANCIAMENTO</h2>

                     <p> Ferramenta inédita para não deixar as emoções do 
                     mercado abalarem sua estratégia de investimento com rebalanceamento
                      você poderá atribuir uma nota ou porcentagem ideal cada classe e ativo.</p>
                  </div>
               </SwiperSlide>


               
            </Swiper>
            </main>

            <section id='conteine'>
             <div className='texto-topo'>  <h2 >VALOR DO INVESTIMENTO</h2></div>

               <div id="cards">

                  <nav className='card'>
                     <h6></h6>

                     <button ><span> 20 % OFF</span> </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>9</strong>.78</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton'> QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='texto'><RiAlertLine /> Esse valor vai ate 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minutos.toString().padStart(2, "0")}</span> M :
                        <span> {secondss.toString().padStart(2, "0")}</span> S
                     </ul>

                  </nav>

                  <nav className='card'>
                     <h6></h6>

                     <button className='cardbutton'><span> 20 % OFF |</span>   <p>MELHOR <br />  OFERTA</p>  </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>16</strong>.72</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton' >QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='texto'><RiAlertLine /> Esse valor vai ate 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minutos.toString().padStart(2, "0")}</span> M :
                        <span>{secondss.toString().padStart(2, "0")}</span> S
                     </ul>

                  </nav>

                  <nav className='card'>
                     <h6></h6>

                     <button ><span>20 % OFF</span> </button>

                     <p>De <strong>R$143.80</strong> por 12x de</p>

                     <span className='span'><dl>R$</dl>   <strong>9</strong>.78</span>

                     <p>ou R$114,24 a vista</p>

                     <button className='cardsbutton'>QUERO MEU PLANO AGORA</button>

                     <h5></h5>

                     <p className='texto'><RiAlertLine />Esse valor vai ate 15/07 23:59</p>

                     <ul className="timehora">
                        <span> 01</span> D :
                        <span> 05</span> H :
                        <span> {minutos.toString().padStart(2, "0")}</span> M :
                        <span> {secondss.toString().padStart(2, "0")}</span> S
                     </ul>

                  </nav>

               </div>
            </section>
         </header>

      </div>
   )

}
export default Pages