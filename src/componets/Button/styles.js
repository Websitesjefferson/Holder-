import styled from "styled-components"

export const Container = styled.a`

    text-decoration: none;
    
    padding-inline: clamp(1rem, 1.5rem + 30vw, 6rem);
    padding-block: 1rem;
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
`
