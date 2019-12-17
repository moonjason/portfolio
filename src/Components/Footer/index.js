import React from 'react';

import {
    FooterContainer,
    LinkToTop,
    LinkToRepo
} from './style'

const Footer = () => {
    return( 
        <FooterContainer>
            <LinkToRepo href="https://github.com/moonjason/portfolio" target="_blank">Link to Portfolio Repo on GitHub</LinkToRepo>
            <LinkToTop href="#top">Back to the top</LinkToTop> 
        </FooterContainer>
    )
}

export default Footer;