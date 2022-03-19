import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AdoptionContainer = styled.div`

height: auto;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: #000;
padding-bottom: 100px;

@media screen and (max-width: 768px){
    height: auto;
}

@media screen and (max-width: 480px){
    height: auto;
}
`;


export const AdoptionWrapper = styled.div`

margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap:16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`;

export const AdoptionCard = styled.div`

background: #fff;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
width:200px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
}


@media screen and (max-width: 480px){
    width:200px;
   
}

@media screen and (max-width: 300px){
    width:150px;
   
}

`;

export const AdoptionIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;

`;

export const AdoptionH1 = styled.h1`

font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
padding-top: 25px;


@media screen and (max-width: 480px){
    font-size: 2rem;
}

`;



export const AdoptionH2 = styled.h2`

font-size: 2rem;
margin-bottom: 10px;

`;




export const AdoptionP= styled(Link)`

color: #000;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 1rem;
background: #F9A826;
padding: 20px;
border-radius: 12px;

&:hover{
    background: #000;
    color: #fff;
    transition: 0.3s ease-out;
}

`;