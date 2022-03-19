import React from 'react'
import Icon1 from '../../images/adopt1.jpg'
import Icon2 from '../../images/adopt2.jpg'
import Icon3 from '../../images/adopt3.jpg'
import Icon4 from '../../images/adopt4.jpg'
import Icon5 from '../../images/adopt5.jpg'
import Icon6 from '../../images/adopt6.jpg'


import {

    AdoptionContainer,
    AdoptionH1,
    AdoptionWrapper,
    AdoptionCard,
    AdoptionIcon,
    AdoptionH2,
    AdoptionP
} from './AdoptionElements'

const Adoption = () => {
  return (
    <>
   
        <AdoptionContainer id="adoption">
            <AdoptionH1>Available Dogs</AdoptionH1>
            <AdoptionWrapper>

                <AdoptionCard>
                    <AdoptionIcon src={Icon1}/>
                    <AdoptionH2>Chloe</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Me!
                    </AdoptionP>
                </AdoptionCard>

                <AdoptionCard>
                    <AdoptionIcon src={Icon2}/>
                    <AdoptionH2>Bruno</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Me!
                    </AdoptionP>
                </AdoptionCard>


                <AdoptionCard>
                    <AdoptionIcon src={Icon3}/>
                    <AdoptionH2>Chippy & Sandy</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Us!
                    </AdoptionP>
                </AdoptionCard>



                <AdoptionCard>
                    <AdoptionIcon src={Icon4}/>
                    <AdoptionH2>Leo</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Me!
                    </AdoptionP>
                </AdoptionCard>

                <AdoptionCard>
                    <AdoptionIcon src={Icon5}/>
                    <AdoptionH2>King</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Me!
                    </AdoptionP>
                </AdoptionCard>


                <AdoptionCard>
                    <AdoptionIcon src={Icon6}/>
                    <AdoptionH2>Princess</AdoptionH2>
                    <AdoptionP to="signin">
                        Adopt Me!
                    </AdoptionP>
                </AdoptionCard>

            </AdoptionWrapper>
        </AdoptionContainer>
    </>
  )
}

export default Adoption