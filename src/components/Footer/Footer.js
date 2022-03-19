import React from 'react'


import {
     FaFacebook,
     FaInstagram,
     FaYoutube,
     FaTwitter,
     FaLinkedin
    } from 'react-icons/fa'

import {

    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,


} from './FooterElements'

const Footer = () => {



  return (
    <>
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                               

                                <FooterLink to="signin">
                                    How it works
                                </FooterLink>

                                <FooterLink to="signin">
                                    Testimonials
                                </FooterLink>

                                <FooterLink to="signin">
                                    Careers
                                </FooterLink>

                                <FooterLink to="signin">
                                    Terms of Service
                                </FooterLink>
 

                        </FooterLinkItems>

                        <FooterLinkItems>
                            
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                               

                                <FooterLink to="signin">
                                    Vlog
                                </FooterLink>

                                <FooterLink to="signin">
                                    Podcast
                                </FooterLink>

                                <FooterLink to="signin">
                                    Live
                                </FooterLink>

                                <FooterLink to="signin">
                                    Want TV
                                </FooterLink>

                        

                        </FooterLinkItems>


                    </FooterLinksWrapper>



                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                               

                                <FooterLink to="signin">
                                    Email
                                </FooterLink>

                                <FooterLink to="signin">
                                    Phone
                                </FooterLink>

                                <FooterLink to="signin">
                                    Accounts
                                </FooterLink>

                                <FooterLink to="signin">
                                    Investors
                                </FooterLink>



                        </FooterLinkItems>

                        <FooterLinkItems>
                            
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                               

                                <FooterLink to="">
                                    Instagram
                                </FooterLink>

                                <FooterLink to="">
                                    Facebook
                                </FooterLink>

                                <FooterLink to="">
                                    Youtube
                                </FooterLink>

                                <FooterLink to="">
                                    Twitter
                                </FooterLink>

      

                        </FooterLinkItems>


                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
                <SocialMedia>
                    <SocialMediaWrap>
                       
                       

                        <SocialIcons>

                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>


                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>


                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>


                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </SocialIcons>

                        <WebsiteRights>
                        Cabael &copy; {new Date().getFullYear()} All rights reserved
                        </WebsiteRights>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>

    </>
  )
}

export default Footer