import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


export const Container = styled.div`
position:fixed;
bottom:0;
left: 0;
right: 0;
top: 0;
z-index: 0;
background: #F9A826;
`;


export const FormWrap = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;


export const Icon = styled(Link)`

margin-left: 32px;
margin-top: 32px;
text-decoration:none;
color: #fff;
font-weight:700;
font-size: 32px;


@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}

`;

export const FormContent = styled.div`

height: 300px;
display:flex;
flex-direction: column;
justify-content:center;


@media screen and (max-width: 480px){
    padding: 10px;
  
}

`;


export const Form = styled.form`

background: #000;
width: 350px;
height: 550px;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 5px 32px 32px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
margin-bottom: 50px;
margin-top:30px;

@media screen and (max-width: 1024px){
    margin-bottom: 50px;
 }

@media screen and (max-width: 440px){
   margin-top: 10px;
    width: 250px;
}

@media screen and (max-width: 400px){
   margin-top: 150px;
    width: 250px;
}

@media screen and (max-width: 375px){
    margin-top: 210px;
     width: 210px;
 }

@media screen and (max-width: 280px){
    margin-top: 210px;
     width: 200px;
 }

`;

export const FormH1 =styled.h1`
margin-bottom: 20px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align:center;
display:flex;
flex-direction:column;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

export const FormInput = styled.input`

padding: 10px 10px;
margin-bottom: 25px;
border: none;
border-radius: 4px;

`;


export const FormTextarea = styled.textarea`

padding: 0 16px 16px 16px;
margin-bottom: 10px;
border: none;
border-radius: 4px;

`;

export const FormButton = styled.button`

background: #F9A826;
padding: 10px 0;
border: none;
border-radius: 4px;
color: #000;
font-size: 15px;
cursor:pointer;
`;



export const CloseIcon = styled(FaTimes)`
 color: #F9A826;

`;
