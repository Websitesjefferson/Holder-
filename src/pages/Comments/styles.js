import styled from "styled-components"

export const Container = styled.section`

    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    text-align: center;
    
    margin-top: 33rem;



 .columncomments {
    background-color: #420e7f;
    height: 63rem;
    margin-top: 5rem;
    padding-inline: 2rem;
} 
>main h1 {
    font-size: clamp(1.0rem, 1.5rem + 20vw, 3.5rem);
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(138, 136, 136);
    
    padding-inline: 2rem;
}
.columncomments .containerh3{
    display: flex;
    justify-content: center;
}

.columncomments h3 {
    padding-inline: 2rem;
    color: #ffffff;
    font-size: clamp(1rem, 1.3rem + 1vw, 1.8rem);
    margin-top: 2rem;
    width: 45rem;
}

.row-left,
.row-right {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30rem;
   
    z-index: 99;
    cursor: pointer;
    opacity: 0;
    transition: 300ms;
    color: #ffffff;
    font-size: 5rem;
    margin-top: 10rem;
}

.columncomments:hover .row-left,
.columncomments:hover .row-right {
    opacity: 1;
}

.row-left {
    left: 0;

}

.row-right {
    right: 0;

}

.comments .cards {
    
    border-radius: 1rem;
    width: 23rem;
    height: 45rem;
    background-color: rgb(255 105 11);
    
  
}

.columncomments .comments {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
    overflow-x: hidden;
    transition: 400ms;
    padding-inline: 3rem;
}

.comments div p {
    text-align: start;
    margin-top: 2.5rem;
    padding-inline: 1.3rem;
}

.comments div p span {
    margin-inline: 1rem;
    color: rgb(255, 215, 0);
    font-size: 2.5rem;
}

.comments div h4 {
    font-size: 2.2rem;
    color: #420e7f;
    margin-top: 2rem;
    text-align: start;
    padding-inline: 2rem;
}

.comments div h6 {
    margin-top: 2rem;
    padding-inline: 2rem;
    font-size: 1.3rem;
    text-align: start;
    font-weight: normal;
    font-family: 'Times New Roman', Times, serif;
    color: #ffffff;
}

.link {
    margin-block: 15rem;
}

.link .a {

    padding: 2rem clamp(.5rem, 0rem + 10vw, 6rem);
    border: none;
    text-decoration: none;
    transition: 400ms;
    font-size: clamp(.7rem, .8rem + 1vw, 1.4rem);
    border-radius: .8rem;
    font-weight: 800;
    background-color: rgb(250 95 1);
    color: #ffffff;
}

.a:hover {
    background-color: rgb(245, 127, 53);
}


@media (max-width: 900px) {

   >main{
        margin-top: 45rem;
    }
}

@media (max-width: 600px) {
     >main {
        margin-top: 90rem;
    }

}
`