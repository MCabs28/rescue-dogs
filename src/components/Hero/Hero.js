import React, {useState} from 'react'
import Imahe from '../../images/main1.jpg'
import {Button1} from '../ButtonElement'

import {
    HeroContainer, 
    HeroBg, 
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} 
    from './HeroElements'

const Hero = () => {

    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }


  return (
    <>
    <HeroContainer>
        <HeroBg>
            <ImgBg src={Imahe} alt="puppy at right side"/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Dogs are not our whole life,</HeroH1>
            <HeroH1>but they make our lives whole.</HeroH1>
            <HeroP>Today everyone can help animals and make their lives better. Shelter an abondoned dogs or sign a petition to ban furs.</HeroP>
            <HeroBtnWrapper>
                <Button1 to="services" onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true" dark="true">
                    I want to help {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button1>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default Hero