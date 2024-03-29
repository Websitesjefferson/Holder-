import styled from "styled-components"

export const Container = styled.footer`

   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   

.column-1{
  background-color: black;   
  width: clamp(15rem, 20rem + 30vw, 50rem); 
  padding-block: 2rem;
  margin-bottom: 10rem;
}

>.column-1 h1 {
    font-size: clamp(2rem, 2.5rem + 1vw, 5rem);
    color: rgb(250 95 1);
    padding-inline: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
}

>.column-1 h4 {
    margin-top: 2rem;
    font-size: clamp(1rem, 1.2rem + 2vw, 2.5rem);
    color: #ffffff;
    padding-inline: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
}

>.column-1 p {
    margin-top: 1rem;
    font-size: 1.9rem;
    color: #ffffff;
    padding-inline: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
}

>h1 {
    
    margin-block: 1rem;
    font-size: 6rem;
    font-family: 'Roboto Condensed', sans-serif;
}

.conteinerinput {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 2rem;
    margin-block: 10rem;
}
.column{
    margin-bottom: 10rem;
}

.column .a {
    font-family: 'Roboto Condensed', sans-serif;
    width: clamp(15rem, 19rem + 30vw, 80rem);
    height: 3rem;
    display: flex;
    align-items: center;
    border: none;
    margin-top: 0.7rem;
    text-decoration: none;
    

    color: #ffffff;
    background-color: rgb(250 95 1);
    padding-inline: 1rem;
    font-size: clamp(.6rem, .7rem + 1vw, 1.5rem);
    font-weight: normal;
    border-radius: 1rem 0 0 0;
    transition: 400ms;
    
}
.conteinerinput .a:hover{
    background-color: rgb(243, 137, 72);
}

`
