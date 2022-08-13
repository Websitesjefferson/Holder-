import styled from "styled-components"


export const Container = styled.header`

.column-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.column-1 div:nth-child(1) {
    width: 100rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 6rem;
    margin-top: 3.5rem;

}

.column-1 .col-1 {
    background-color: rgb(250, 147, 83);
    max-width: clamp(15rem, 22rem + 20vw, 60rem);
    width: 100%;
    height: 45rem;
    display: flex;
    border-radius: 1rem 1rem 1rem 1rem;	
    clip-path: polygon(0% 0%, 82% 0%, 100% 100%, 0% 100%);
   
   
   
    
}
 .column-1 img {
    width: clamp(10rem, 15rem + 15vw, 30rem);
    margin-left: 1rem;
}

.column-1 .col-2 {
   max-width: clamp(15rem, 20rem + 20vw, 37rem);
}
   
.col-2 h2{
    font-size: clamp(1.3rem, 1.5rem + 20vw, 3rem);
    font-family: 'Edu VIC WA NT Beginner', cursive;
    color: rgb(163, 161, 161);
    width: clamp(10rem, 15rem + 20vw, 30rem);
    font-weight: normal;
    margin-left: -5rem;
} 



.col-2 p {
 
    font-weight: 500;
    margin-top: 2rem;
    font-family: 'Edu VIC WA NT Beginner', cursive;
    font-size: clamp(1.4rem, 1.4rem + 1vw, 2.5rem);
}
.column-2 {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    }
.column-2  .col-3{
    
    margin-top: 10rem;
    width: clamp(15rem, 25rem + 10vw,55rem);
}
.col-3 h2 p{
    
    display: flex;
    flex-direction: column;
}
.col-3 h2 {
    margin-right: 20rem;
    font-weight: 100;
    width: clamp(10rem, 15rem + 20vw, 30rem);
    font-size: clamp(1.5rem, 1.5rem + 20vw, 3rem);
    font-family: 'Edu VIC WA NT Beginner', cursive;
    color: rgb(158, 155, 155);
}
.col-3 p {
    font-weight: 500;
    margin-top: 2rem;
    max-width: 30rem;
    font-family: 'Edu VIC WA NT Beginner', cursive;
    font-size: clamp(1.4rem, 1.4rem + 1vw, 3rem);
    color: black;
}

 .col-4 {
    padding-inline: 1rem;
    width: 50rem;
    margin-top: 2rem;
}
.col-4 iframe{
    width: 100%;
}

 .link{
    display: flex;
    margin-top: 5rem;
    
}


@media (max-width: 833px){
   .col-2 h2{
    margin: initial;
   }
}

@media (max-width: 611px){
   .col-3{
    margin-bottom: 5rem;
   }
}
`
