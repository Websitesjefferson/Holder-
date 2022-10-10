import styled from "styled-components"

export const Container = styled.section`


h2 {
    margin-top: 5rem;
    font-weight: bold;
    font-size: clamp(1.2rem, 1.2rem + 1vw, 4rem);
    font-family: 'Roboto Condensed', sans-serif;
    color: #000;
    text-align: center;
}
.columncards-1{
  display: flex;
  justify-content: center;
  margin-top: 7rem;

  
}   
.columncards-1 .swipercards{
    display: flex;
    flex-direction: column;
    width: 20rem;
    
    align-items: center;
    margin: auto;
}
.embla {
  overflow: hidden;
  width: 100%;
}
.embla__container {
  display: flex;
  
}
.embla__slide {
    flex: 0 0 30%;
    

}

.swipercards img{
    width: 10rem;
    height: 10rem;
}
.swipercards h2{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: clamp(1.0rem, 1.2rem + 10vw, 1.6rem);
    text-align: center;
    margin-top: 2rem;
    color: rgb(138, 136, 136);;
    
}
.swipercards p{
    width: 18rem;
    margin-top: 2rem;
    
    font-size: clamp(1.2rem, 1.4rem + 1vw, 1.4rem);
    color: rgb(170, 167, 167);;
    
}
h1{
    display: flex;
   
    
}
#containercards{
    height: 20rem;
    color: #fff;
    background-color: rgb(245, 196, 166);;
    margin-top: 7rem;
}
#containercards h2{
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-inline: 2rem;
    justify-content: center;
    color: rgb(223, 127, 68);
    font-size: clamp(1rem, 1.6rem + 1vw, 4rem);
    text-align: center;
}
#columncards-2{
    display: flex;
    justify-content: space-evenly;
    margin-top: 5rem;
    flex-wrap: wrap;
 
}
.cards{
    color: #000;
    width: clamp(15rem, 20rem + 20vw, 30rem);
    height: 37rem;
    background-color: #ffffff;
    text-align: center;
    border-radius: 2rem 2rem 0rem 0rem;
    transition: 300ms;
    border: 1px solid #000;
    
   
}
.cards h6{
    border-radius: 2rem 2rem 0rem 0rem;
    background-color: #000000;
    height: 7rem;
    
   
  
}
.cards button{
    font-family: Arial, Helvetica, sans-serif;
    margin: auto;
    display: block;
    border: none;
   background-color: rgb(250, 96, 0);
    margin-top: -1.5rem;
    margin-bottom: 1rem;
    font-size: 1.0rem;
    padding: .1rem 2rem;
    border-radius: 15rem;
    color: #ffffff;
}
.cards button span{
    font-size: 1.8rem;
    
}
.cards .cardbutton{
    background-color: #fff;
    color: rgb(223, 127, 68);
    padding: 0 1rem;
    display: flex;
    align-items: center;
    font-weight: 800;
    
    
}
.card .cardbutton span{
    font-size: 1.8rem;
    margin-right: 1rem;
}
.cards .span{
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-family:  'Roboto Condensed', sans-serif;
    
}
.cards dl{
    margin-top: 5rem;
}

.cards span{
    font-size: 2.5rem;
}    
.cards span strong{
    font-size: 8.5rem;
    font-family: Arial, Helvetica, sans-serif;
}
.cards .cardsbutton{
    margin-top: 1rem;
    padding: 1rem 5rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
    border: none;
    font-size: 1.2rem;
    background-color: rgb(236, 91, 0);
}
.cardsbutton:hover{
    background-color: rgb(250, 141, 73);
}
.cards h5{
    width: 7rem;
    margin: auto;
    border-top: .1rem solid  green;
}
.cards .text{
    margin-top: 2rem;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
}
.cards .text + .text{
    margin-left: 3rem;
   
}
.cards ul{
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(1.0rem, 1.0rem + 20vw,  1.8rem);
}
.cards ul span{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
}
.cards dl{
    margin-right: 1rem;
}
.cards:hover{
    transform: scale(1.1);
    background-color: aqua;
}
@media (max-width: 900px){
   .cards{
    margin-top: 5rem;
   
   }
}
`
