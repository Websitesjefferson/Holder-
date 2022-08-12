 import styled from "styled-components"




 export const Container = styled.header`
 
    width: 100%;
    margin-top: 1rem;
    height: clamp(1.5rem, 2.5rem + 5vw, 6.0rem);
    background-color: rgb(86 34 147);
    color: #ffffff;
    
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    z-index: 99;
    padding-inline: 2rem;
   
> main {
   
    display: flex;
    align-items: center;
    gap: 20rem;
}

> main img {
    
    max-width: clamp(5rem, 8rem + 5vw, 35rem);
    background-color: aliceblue;
    border-radius: 10px;
    padding: .8rem;
}

>main div {

    font-size: clamp(0.7rem, .5rem + 1vw, 2.0rem);
    align-items: center;
    font-weight: 800;
   
}
> main a {
    text-decoration: none;
    border: none;
    padding: clamp(.1rem, .3rem + 1vw, 1.4rem);
    font-size: clamp(.5rem, .6rem + 1vw, 1.5rem);
    border-radius: .8rem;
    font-weight: 800;
    background-color: rgb(250 95 1);
    color: #ffffff;
    font-weight: 800;
    transition: 400ms;
    margin: auto;
    

:hover{
    background-color: rgb(243, 137, 72);
}
}


@media (max-width: 840px){
     >main{
        display: flex;
        gap: 10rem;
    } 
}
@media (max-width: 600px){
     >main{
        display: flex;
        gap: 5rem;
    } 
}
@media (max-width: 460px){
     >main{
        display: flex;
        gap: 0.7rem;
    } 
    
}
`