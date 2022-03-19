import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'



export const FormWrap = styled.div`
     height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #F9A826;
    padding: 20px 0 20px 0px; 
   width:100%;
  
    
`;


export const Icon = styled(Link)`

 margin-left: 32px;
margin-top: 32px;
text-decoration:none;
color: #fff;
font-weight:700;
font-size: 32px;



`;


export const Form = styled.form`

background: #000;
width: 350px;
height: 550px;
z-index: 1;
display: flex;
flex-direction: column;
justify-content:center;
margin-left: auto;
margin-right: auto;
padding: 5px 32px 32px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);




@media screen and (max-width: 450px){
   
    width: 250px;
}



@media screen and (max-width: 365px){
     width: 210px;

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
border-radius: 4px;
padding: 0 0 50px 5px;
margin-bottom: 10px;
overflow-y:hidden;
resize: none;

`;

export const FormButton = styled.button`

background: #F9A826;
padding: 5px 0;
border: none;
border-radius: 4px;
color: #000;
font-size: 15px;
cursor:pointer;
`;



export const CloseIcon = styled(FaTimes)`
 color: #F9A826;

`;
