import styled from 'styled-components'


export const InfoContainer = styled.div`

color: #fff;
background: ${({ lightBg  }) => (lightBg ? '#F9A826' :'#000')}; 

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`;


export const InfoWrapper = styled.div`

display:grid;
z-index: 1;
height: 700px;
width: 100%;
max-width: 1100px;
margin-right:auto; 
margin-left:auto;
justify-content: center;


@media screen and (max-width: 768px){
    height: auto;
}


`;

export const InfoRow =styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas:  ${({ imgStart }) => 
imgStart ? `'col2 col1'` : `'col1 col2'`};


@media screen and (max-width: 768px){
    grid-template-areas:  ${({ imgStart }) => 
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
}
`;
 

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1; 
    margin-left:auto;
    margin-right:auto;
   
`;


export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    margin-left:auto;
    margin-right:auto;
`;

export const TextWrapper = styled.div`

width: 500px;
padding-top:0;
padding-bottom: 60px;


@media screen and (max-width: 1110px){
    width: 400px;

}

@media screen and (max-width: 905px){
    width: 320px;
    font-size: 25px;

}

@media screen and (max-width: 480px){
    width: 320px;

}

@media screen and (max-width: 300px){
    width: 250px;

}

`;


export const TopLine = styled.p`

color: #fff;
font-size: 16px;
line-height: auto;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;




`;

export const Heading = styled.h1`

margin-bottom: 24px;
font-size: 36px;

font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};


@media screen and (max-width: 1110px){
    font-size: 30px;

}

@media screen and (max-width: 768px){
    font-size: 25px;

}

`;


export const Subtitle = styled.p`

margin-bottom: 35px;
font-size: 18px;
line-height: auto;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

@media screen and (max-width: 768px){
    font-size: 15px;
}

@media screen and (max-width: 480px){
    font-size: 15px;
}

`;


export const BtnWrap = styled.div`

display:flex;
justify-content: flex-start;

`;


export const ImgWrap = styled.div`

height: 100%;
margin-left:auto;
margin-right:auto;
width: 100%;
`;


export const Img = styled.img`
width: 250px;
`;