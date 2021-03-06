import React from 'react'
import { Button1 } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'


const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description,buttonLabel, img, alt}) => {
  return (
    <>
 
     <InfoContainer lightBg={lightBg} id={id}>
         <InfoWrapper>
             <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                                <TopLine >
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                     {headline}                     
                                </Heading>
                                    
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>

                                <BtnWrap>
                                    <Button1 to="adoption" 
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact="true"
                                     offset={80}
                                    >{buttonLabel}
                                    </Button1>
                                </BtnWrap>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
             </InfoRow>
         </InfoWrapper>
     </InfoContainer>


    </>
  )
}

export default Info